# Garde-Site — Monitoring auto-hébergé

Surveillance des sites clients depuis le VPS OVH : disponibilité HTTP, temps de réponse,
mot-clé (détection page blanche / défacement), expiration SSL (< 21 jours) et expiration
du domaine via RDAP (< 30 jours).

**Zéro dépendance** : Python 3 standard uniquement (préinstallé sur Debian/Ubuntu OVH).

## Fichiers

| Fichier | Rôle |
|---|---|
| `monitor.py` | Le script de surveillance |
| `sites.json` | Liste des sites clients (à créer, voir `sites.example.json`) |
| `sites.example.json` | Exemple à copier |
| `status/` | États JSON horodatés + `latest.json` (créé automatiquement) |

## Installation sur le VPS (OVH, Debian/Ubuntu)

```bash
# 1. Créer le dossier et copier les fichiers
sudo mkdir -p /opt/garde-site/monitor
sudo cp monitor.py sites.example.json /opt/garde-site/monitor/
cd /opt/garde-site/monitor
cp sites.example.json sites.json   # puis éditer avec les vrais sites clients

# 2. Test manuel
python3 monitor.py            # code retour 0 = tout OK, 1 = alerte(s), 2 = config invalide
```

### Format de `sites.json`

```json
[
  { "nom": "Nom du client", "url": "https://exemple.fr", "forfait": "Vigie", "mot_cle": "texte attendu dans la page" }
]
```

Choisir un `mot_cle` stable et propre au site (nom de l'entreprise dans le footer, par exemple).
S'il disparaît, c'est le signe d'une page blanche, d'une erreur PHP ou d'un défacement.

## Cron toutes les 5 minutes

```bash
crontab -e
```

```cron
*/5 * * * * cd /opt/garde-site/monitor && /usr/bin/python3 monitor.py >> /var/log/garde-site-monitor.log 2>&1
```

Le cron n'envoie un e-mail (via SMTP ci-dessous) **que** s'il y a des alertes : pas de bruit.

## Alertes e-mail (optionnel)

Si `SMTP_HOST` et `SMTP_TO` ne sont pas définis, le script n'envoie rien (skip silencieux).
Pour activer, définir les variables dans le crontab (ou un fichier sourcé, `chmod 600`) :

```cron
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=465
SMTP_USER=alerte@votre-domaine.fr
SMTP_PASS=motdepasse
SMTP_FROM=alerte@votre-domaine.fr
SMTP_TO=vous@votre-domaine.fr
*/5 * * * * cd /opt/garde-site/monitor && /usr/bin/python3 monitor.py >> /var/log/garde-site-monitor.log 2>&1
```

- Port `465` = SSL implicite (défaut) ; port `587` = STARTTLS.
- `ssl0.ovh.net` : serveur SMTP des e-mails MX Plan OVH. Adapter selon votre offre.
- Astuce anti-spam personnel : créer un filtre qui met en avant l'objet `[Garde-Site]`.

## Rotation des logs (logrotate)

Créer `/etc/logrotate.d/garde-site` :

```
/var/log/garde-site-monitor.log {
    weekly
    rotate 8
    compress
    missingok
    notifempty
    copytruncate
}
```

## Nettoyage des états JSON

`status/` accumule un fichier par exécution (288/jour à 5 min). Purge des états de plus de 14 jours,
une fois par jour :

```cron
30 3 * * * find /opt/garde-site/monitor/status -name 'status-*.json' -mtime +14 -delete
```

`latest.json` reste toujours disponible pour les rapports mensuels (calcul de dispo, incidents).

## Interprétation des sorties

- `[OK]` : HTTP 200, mot-clé présent, SSL et domaine loin de l'expiration.
- `!! ALERTE` : à traiter (site down, mot-clé absent, SSL < 21 j, domaine < 30 j). Code retour 1.
- `-- note` : information non bloquante (réponse lente > 5 s, RDAP muet). Pas d'e-mail pour ça.
