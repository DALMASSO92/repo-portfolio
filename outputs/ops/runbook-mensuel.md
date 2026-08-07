# Garde-Site — Runbook de maintenance mensuelle

Objectif : **≤ 45 min de maintenance manuelle par client et par mois** (le reste du budget
de 2 h/client/mois couvre le rapport, les retouches à quota et les imprévus).
Chronométrer réellement chaque passe le premier mois, puis ajuster.

## Répartition auto / manuel

| Tâche | Fréquence | Qui |
|---|---|---|
| Uptime, temps de réponse, mot-clé, SSL, domaine | toutes les 5 min | `monitor.py` (cron VPS) |
| Sauvegardes (fichiers + BDD) externalisées | quotidien | auto (UpdraftPlus / script rsync) |
| Vérif. que les sauvegardes existent ET sont restaurables (test échantillon) | mensuel | manuel (runbook) |
| MAJ WordPress cœur/extensions/thèmes | hebdo (mineure auto si activée) + passe mensuelle | mixte |
| MAJ dépendances custom (Next.js/React) | mensuel | manuel |
| Rapport client | mensuel | manuel (10 min, template dédié) |

---

## A. Site WordPress (Vigie / Capitaine) — cible 30-40 min

**Avant tout : sauvegarde fraîche.** Aucune MAJ sans point de retour.

| # | Étape | Durée cible |
|---|---|---|
| 1 | Sauvegarde complète (fichiers + BDD) et vérification qu'elle est bien arrivée sur le stockage externe (taille cohérente, date du jour) | 5 min |
| 2 | MAJ cœur WordPress, puis extensions une par une (lire le changelog des majeures), puis thème. Recharger la page d'accueil entre chaque lot | 10 min |
| 3 | Scan intégrité/sécurité : plugin type Wordfence/WPScan ou `wp core verify-checksums` via WP-CLI ; vérifier les comptes admin inconnus et les fichiers modifiés récents | 5 min |
| 4 | Test du parcours clé du client (défini à l'onboarding) : ex. formulaire de contact reçu, ajout panier + page paiement, prise de RDV. Un envoi de test réel, pas juste l'affichage | 5 min |
| 5 | Perfs rapides : page d'accueil < 3 s (onglet réseau navigateur ou PageSpeed) ; purge du cache si besoin. Optimisation approfondie = trimestrielle (Capitaine) | 3 min |
| 6 | Consigner dans le journal client (date, versions MAJ, anomalies) — alimente le rapport mensuel | 2 min |

**Si une MAJ casse le site** : restaurer la sauvegarde de l'étape 1, figer l'extension fautive,
noter l'incident, prévenir le client si visible. Ne jamais déboguer > 20 min dans la passe
mensuelle : planifier un créneau dédié.

## B. Site custom Next.js / React / Webflow (Phare) — cible 30-40 min

| # | Étape | Durée cible |
|---|---|---|
| 1 | Sauvegarde/point de retour : tag git + dump BDD éventuel ; vérifier que le dépôt distant est à jour | 3 min |
| 2 | `npm audit` : traiter les vulnérabilités high/critical ; `npm outdated` puis MAJ **mineures et patch uniquement** (`npm update`). Les majeures : branche dédiée, jamais dans la passe mensuelle | 10 min |
| 3 | Build de vérification en local ou CI : `npm run build` (+ `npm test` s'il existe). Échec = on ne déploie pas, on revient au lockfile précédent | 7 min |
| 4 | Déploiement puis test des formulaires et parcours clés en production (envoi réel, vérifier la réception e-mail/CRM) | 5 min |
| 5 | Logs serveur : erreurs Nginx/PM2/Vercel des 30 derniers jours (`nginx error.log`, 4xx/5xx anormaux, erreurs JS si Sentry/console) | 5 min |
| 6 | Vérifier `latest.json` du monitoring (temps de réponse en dérive ?) + journal client | 3 min |

Webflow : pas de dépendances — remplacer 2-3 par : vérification des intégrations
(formulaires, scripts tiers), poids des pages, publication de test.

---

## C. Quota retouches (Capitaine / Phare : 1 h/mois, tâches ≤ 30 min)

**Traçage** — un fichier `retouches.md` (ou tableur) par client :

```
| Date | Demande | Temps passé | Cumul mois | Statut |
| 2026-08-12 | Changer photo équipe page À propos | 15 min | 15/60 min | Fait |
```

Règles :
1. Toute demande est estimée **avant** d'être faite. > 30 min estimées = hors quota, même si le quota du mois est vide.
2. Quota **non reportable** : compteur remis à zéro le 1er du mois.
3. Arrondi au quart d'heure supérieur, temps de communication inclus au-delà de 10 min.
4. Hors périmètre (toujours) : refonte, nouvelle fonctionnalité, nouvelle page complexe, SEO éditorial, création graphique.

**Refus propre (modèle, vouvoiement)** :

> Bonjour [Prénom], bonne idée ! Cette demande dépasse le cadre des retouches incluses
> (tâches de moins de 30 minutes) : je l'estime à environ [X h]. Deux options :
> je vous prépare un mini-devis à [tarif horaire] € nets/h (TVA non applicable, art. 293 B du CGI), ou nous la découpons pour
> traiter la partie [sous-tâche ≤ 30 min] dès ce mois-ci dans votre forfait.
> Dites-moi ce que vous préférez.

**Quota atteint** :

> Votre heure de retouches d'[mois] est utilisée (détail dans votre rapport mensuel).
> Je peux traiter cette demande dès le 1er [mois suivant], ou tout de suite en
> intervention ponctuelle à [tarif] €. À vous de choisir.

---

## D. Garde-fous budget temps

- Monitoring + sauvegardes : automatiques, ~0 min/client hors alertes.
- Passe mensuelle : ≤ 45 min (chronométrer ; si un client dépasse 2 mois de suite, cause racine ou revalorisation du forfait).
- Rapport : ≤ 10 min avec le template.
- Retouches : ≤ 60 min, tracées.
- **Total ≤ 2 h/client/mois.** Tout dépassement récurrent est un signal pricing, pas un effort à absorber.
