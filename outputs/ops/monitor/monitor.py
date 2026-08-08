#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Garde-Site — monitor.py
=======================
Surveillance des sites clients : HTTP, mot-clé, certificat SSL, expiration domaine (RDAP).

- 100 % bibliothèque standard Python 3 (aucune dépendance pip).
- Conçu pour tourner via cron sur un VPS (OVH ou autre).
- Lit sites.json (même dossier que le script, ou chemin passé en argument).
- Écrit un état JSON horodaté dans status/ + dernier état dans status/latest.json.
- Affiche un rapport texte lisible sur stdout.
- Code retour : 0 si tout va bien, 1 si au moins une alerte, 2 si erreur de configuration.
- Si les variables d'environnement SMTP_* sont définies, envoie un e-mail d'alerte
  (uniquement quand il y a des alertes). Sinon : skip silencieux.

Usage :
    python3 monitor.py [chemin/vers/sites.json]

Variables d'environnement (toutes optionnelles) :
    SMTP_HOST       ex. ssl0.ovh.net
    SMTP_PORT       défaut 465 (SSL implicite) ; 587 => STARTTLS
    SMTP_USER       identifiant SMTP
    SMTP_PASS       mot de passe SMTP
    SMTP_FROM       expéditeur (défaut : SMTP_USER)
    SMTP_TO         destinataire(s), séparés par des virgules
    MONITOR_TIMEOUT timeout réseau en secondes (défaut 10)
"""

import json
import os
import re
import smtplib
import socket
import ssl
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from email.message import EmailMessage
from email.utils import formatdate

# ---------------------------------------------------------------------------
# Réglages
# ---------------------------------------------------------------------------
TIMEOUT = int(os.environ.get("MONITOR_TIMEOUT", "10"))       # secondes
SSL_ALERT_DAYS = 21          # alerte si le certificat expire dans < 21 jours
DOMAIN_ALERT_DAYS = 30       # alerte si le domaine expire dans < 30 jours
SLOW_MS = 5000               # avertissement (non bloquant) si réponse > 5 s
USER_AGENT = "GardeSite-Monitor/1.0 (+monitoring de maintenance; contact via site client)"
RDAP_BOOTSTRAP = "https://rdap.org/domain/"

# TLD à deux niveaux courants (pour extraire le domaine enregistrable)
SECOND_LEVEL_TLDS = {
    "co.uk", "org.uk", "me.uk", "ac.uk", "gov.uk",
    "com.au", "net.au", "org.au",
    "asso.fr", "gouv.fr", "tm.fr", "nom.fr",
    "co.jp", "com.br", "com.mx", "co.nz",
}


# ---------------------------------------------------------------------------
# Utilitaires
# ---------------------------------------------------------------------------
def now_utc():
    return datetime.now(timezone.utc)


def registrable_domain(hostname):
    """client-exemple.fr <- www.client-exemple.fr ; gère quelques TLD à 2 niveaux."""
    labels = hostname.lower().strip(".").split(".")
    if len(labels) <= 2:
        return ".".join(labels)
    last_two = ".".join(labels[-2:])
    if last_two in SECOND_LEVEL_TLDS and len(labels) >= 3:
        return ".".join(labels[-3:])
    return last_two


def http_get(url, timeout=TIMEOUT, max_bytes=1_000_000):
    """GET simple via urllib (suit les redirections, respecte les proxys d'env).
    Retourne (status_code, body_text, elapsed_ms, final_url)."""
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT,
                                               "Accept": "*/*"})
    start = time.monotonic()
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        body = resp.read(max_bytes)
        elapsed_ms = int((time.monotonic() - start) * 1000)
        charset = resp.headers.get_content_charset() or "utf-8"
        try:
            text = body.decode(charset, errors="replace")
        except (LookupError, ValueError):
            text = body.decode("utf-8", errors="replace")
        return resp.status, text, elapsed_ms, resp.geturl()


def _open_tcp_maybe_via_proxy(host, port, timeout):
    """Socket TCP vers host:port, en tunnelant via HTTPS_PROXY (CONNECT) si défini.
    Sur un VPS sans proxy, connexion directe. Respecte NO_PROXY."""
    proxy = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy")
    if proxy and urllib.request.proxy_bypass(host):
        proxy = None  # host exclu par NO_PROXY : connexion directe
    if not proxy:
        return socket.create_connection((host, port), timeout=timeout)
    m = re.match(r"^(?:https?://)?(?:[^@/]+@)?([^:/]+)(?::(\d+))?", proxy)
    phost, pport = m.group(1), int(m.group(2) or 8080)
    sock = socket.create_connection((phost, pport), timeout=timeout)
    connect = ("CONNECT {0}:{1} HTTP/1.1\r\nHost: {0}:{1}\r\n\r\n"
               .format(host, port)).encode("ascii")
    sock.sendall(connect)
    reply = b""
    while b"\r\n\r\n" not in reply:
        chunk = sock.recv(4096)
        if not chunk:
            break
        reply = reply + chunk
    if b" 200" not in reply.split(b"\r\n", 1)[0]:
        sock.close()
        raise OSError("Le proxy a refusé CONNECT vers %s:%s" % (host, port))
    return sock


def check_ssl_expiry(hostname, port=443, timeout=TIMEOUT):
    """Retourne (jours_restants, date_expiration_iso) du certificat TLS."""
    ctx = ssl.create_default_context()
    raw = _open_tcp_maybe_via_proxy(hostname, port, timeout)
    try:
        with ctx.wrap_socket(raw, server_hostname=hostname) as tls:
            cert = tls.getpeercert()
    finally:
        try:
            raw.close()
        except OSError:
            pass
    not_after = cert.get("notAfter")
    if not not_after:
        raise ValueError("Certificat sans date d'expiration lisible")
    expires = datetime.strptime(not_after, "%b %d %H:%M:%S %Y %Z").replace(tzinfo=timezone.utc)
    days_left = (expires - now_utc()).days
    return days_left, expires.date().isoformat()


def check_domain_expiry(domain, timeout=TIMEOUT):
    """Interroge RDAP (bootstrap rdap.org). Retourne (jours_restants, date_iso) ou (None, None)
    si le registre ne publie pas la date. Lève une exception si domaine introuvable."""
    status, text, _ms, _url = http_get(RDAP_BOOTSTRAP + domain, timeout=timeout)
    data = json.loads(text)
    for event in data.get("events", []):
        if event.get("eventAction") == "expiration":
            date_str = event.get("eventDate", "")
            date_str = date_str.replace("Z", "+00:00")
            expires = datetime.fromisoformat(date_str)
            if expires.tzinfo is None:
                expires = expires.replace(tzinfo=timezone.utc)
            days_left = (expires - now_utc()).days
            return days_left, expires.date().isoformat()
    return None, None  # registre muet sur l'expiration (fréquent, ex. certains ccTLD)


# ---------------------------------------------------------------------------
# Vérification d'un site
# ---------------------------------------------------------------------------
def check_site(site):
    """Vérifie un site ; ne lève JAMAIS d'exception (tout est capturé par check).
    Retourne un dict résultat avec listes 'alerts' et 'warnings'."""
    url = site.get("url", "").strip()
    name = site.get("nom") or site.get("name") or url
    keyword = site.get("mot_cle") or site.get("keyword") or ""
    plan = site.get("forfait") or site.get("plan") or "?"

    result = {
        "nom": name,
        "url": url,
        "forfait": plan,
        "http_status": None,
        "response_ms": None,
        "keyword_found": None,
        "ssl_days_left": None,
        "ssl_expires": None,
        "domain_days_left": None,
        "domain_expires": None,
        "alerts": [],
        "warnings": [],
    }
    alerts = result["alerts"]
    warnings = result["warnings"]

    if not url.startswith(("http://", "https://")):
        alerts.append("Configuration invalide : url manquante ou sans http(s):// (%r)" % url)
        return result

    parsed = urllib.request.urlparse(url)
    hostname = parsed.hostname or ""
    tls_port = parsed.port or 443

    # 1) HTTP + temps de réponse + mot-clé -----------------------------------
    try:
        status, body, elapsed_ms, _final = http_get(url)
        result["http_status"] = status
        result["response_ms"] = elapsed_ms
        if status != 200:
            alerts.append("HTTP %s au lieu de 200" % status)
        if elapsed_ms > SLOW_MS:
            warnings.append("Réponse lente : %d ms (> %d ms)" % (elapsed_ms, SLOW_MS))
        if keyword:
            found = keyword.lower() in body.lower()
            result["keyword_found"] = found
            if not found:
                alerts.append("Mot-clé « %s » absent de la page (page blanche ou défacement ?)" % keyword)
    except urllib.error.HTTPError as exc:
        result["http_status"] = exc.code
        alerts.append("HTTP %s au lieu de 200 (%s)" % (exc.code, exc.reason))
    except (urllib.error.URLError, socket.timeout, TimeoutError) as exc:
        reason = getattr(exc, "reason", exc)
        alerts.append("Site injoignable : %s" % reason)
    except (OSError, ValueError) as exc:
        alerts.append("Erreur HTTP inattendue : %s" % exc)

    # 2) Certificat SSL -------------------------------------------------------
    if url.startswith("https://"):
        try:
            days_left, expires = check_ssl_expiry(hostname, port=tls_port)
            result["ssl_days_left"] = days_left
            result["ssl_expires"] = expires
            if days_left < 0:
                alerts.append("Certificat SSL EXPIRÉ depuis %d jour(s) (le %s)" % (-days_left, expires))
            elif days_left < SSL_ALERT_DAYS:
                alerts.append("Certificat SSL expire dans %d jour(s) (le %s)" % (days_left, expires))
        except ssl.SSLCertVerificationError as exc:
            alerts.append("Certificat SSL invalide : %s" % exc.reason)
        except (ssl.SSLError, socket.timeout, TimeoutError, socket.gaierror, OSError, ValueError) as exc:
            alerts.append("Vérification SSL impossible : %s" % exc)

    # 3) Expiration du domaine via RDAP --------------------------------------
    domain = registrable_domain(hostname) if hostname else ""
    if domain:
        try:
            days_left, expires = check_domain_expiry(domain)
            result["domain_days_left"] = days_left
            result["domain_expires"] = expires
            if days_left is not None:
                if days_left < 0:
                    alerts.append("Domaine %s EXPIRÉ (le %s)" % (domain, expires))
                elif days_left < DOMAIN_ALERT_DAYS:
                    alerts.append("Domaine %s expire dans %d jour(s) (le %s)" % (domain, days_left, expires))
            else:
                warnings.append("RDAP : pas de date d'expiration publiée pour %s" % domain)
        except urllib.error.HTTPError as exc:
            if exc.code == 404:
                warnings.append("RDAP : domaine %s introuvable (registre non couvert ou domaine inexistant)" % domain)
            else:
                warnings.append("RDAP indisponible pour %s (HTTP %s)" % (domain, exc.code))
        except (urllib.error.URLError, socket.timeout, TimeoutError, OSError,
                ValueError, json.JSONDecodeError) as exc:
            reason = getattr(exc, "reason", exc)
            warnings.append("RDAP : vérification impossible pour %s : %s" % (domain, reason))

    return result


# ---------------------------------------------------------------------------
# Rapport, état JSON, e-mail
# ---------------------------------------------------------------------------
def render_report(results, started_at):
    lines = []
    total_alerts = sum(len(r["alerts"]) for r in results)
    lines.append("=" * 62)
    lines.append("GARDE-SITE — Rapport de surveillance")
    lines.append("Horodatage : %s" % started_at.strftime("%Y-%m-%d %H:%M:%S UTC"))
    lines.append("Sites vérifiés : %d — Alertes : %d" % (len(results), total_alerts))
    lines.append("=" * 62)
    for r in results:
        state = "ALERTE" if r["alerts"] else "OK"
        lines.append("")
        lines.append("[%s] %s (%s) — forfait %s" % (state, r["nom"], r["url"], r["forfait"]))
        if r["http_status"] is not None:
            ms = "%s ms" % r["response_ms"] if r["response_ms"] is not None else "-"
            lines.append("  HTTP %s en %s" % (r["http_status"], ms))
        if r["keyword_found"] is True:
            lines.append("  Mot-clé : présent")
        if r["ssl_days_left"] is not None:
            lines.append("  SSL : expire le %s (%d jours restants)" % (r["ssl_expires"], r["ssl_days_left"]))
        if r["domain_days_left"] is not None:
            lines.append("  Domaine : expire le %s (%d jours restants)" % (r["domain_expires"], r["domain_days_left"]))
        for a in r["alerts"]:
            lines.append("  !! ALERTE : %s" % a)
        for w in r["warnings"]:
            lines.append("  -- note : %s" % w)
    lines.append("")
    return "\n".join(lines)


def write_status(results, started_at, status_dir):
    os.makedirs(status_dir, exist_ok=True)
    payload = {
        "generated_at": started_at.isoformat(),
        "alert_count": sum(len(r["alerts"]) for r in results),
        "sites": results,
    }
    stamp = started_at.strftime("%Y%m%d-%H%M%S")
    path = os.path.join(status_dir, "status-%s.json" % stamp)
    for target in (path, os.path.join(status_dir, "latest.json")):
        with open(target, "w", encoding="utf-8") as fh:
            json.dump(payload, fh, ensure_ascii=False, indent=2)
    return path


def send_alert_email(report_text, alert_count):
    """Envoie le rapport par e-mail si SMTP_HOST et SMTP_TO sont définis. Sinon, ne fait rien."""
    host = os.environ.get("SMTP_HOST")
    to = os.environ.get("SMTP_TO")
    if not host or not to:
        return False  # skip silencieux : pas de config SMTP
    port = int(os.environ.get("SMTP_PORT", "465"))
    user = os.environ.get("SMTP_USER", "")
    password = os.environ.get("SMTP_PASS", "")
    sender = os.environ.get("SMTP_FROM", user or "garde-site@localhost")

    msg = EmailMessage()
    msg["Subject"] = "[Garde-Site] %d alerte(s) de surveillance" % alert_count
    msg["From"] = sender
    msg["To"] = to
    msg["Date"] = formatdate(localtime=True)
    msg.set_content(report_text)

    try:
        if port == 465:
            with smtplib.SMTP_SSL(host, port, timeout=TIMEOUT) as server:
                if user:
                    server.login(user, password)
                server.send_message(msg)
        else:
            with smtplib.SMTP(host, port, timeout=TIMEOUT) as server:
                server.starttls()
                if user:
                    server.login(user, password)
                server.send_message(msg)
        return True
    except (smtplib.SMTPException, OSError) as exc:
        # L'échec d'envoi ne doit pas masquer les alertes : on le signale sur stderr.
        print("AVERTISSEMENT : envoi e-mail impossible : %s" % exc, file=sys.stderr)
        return False


# ---------------------------------------------------------------------------
# Point d'entrée
# ---------------------------------------------------------------------------
def main(argv):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    sites_path = argv[1] if len(argv) > 1 else os.path.join(script_dir, "sites.json")
    status_dir = os.path.join(script_dir, "status")

    try:
        with open(sites_path, "r", encoding="utf-8") as fh:
            sites = json.load(fh)
    except (OSError, json.JSONDecodeError) as exc:
        print("ERREUR : impossible de lire %s : %s" % (sites_path, exc), file=sys.stderr)
        return 2
    if not isinstance(sites, list) or not sites:
        print("ERREUR : %s doit contenir une liste non vide de sites." % sites_path, file=sys.stderr)
        return 2

    started_at = now_utc()
    results = [check_site(site) for site in sites]

    report = render_report(results, started_at)
    print(report)

    status_file = write_status(results, started_at, status_dir)
    print("État JSON écrit : %s" % status_file)

    alert_count = sum(len(r["alerts"]) for r in results)
    if alert_count:
        sent = send_alert_email(report, alert_count)
        if sent:
            print("E-mail d'alerte envoyé à %s" % os.environ.get("SMTP_TO"))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
