# Prévisions — Garde-Site

Hypothèses construites UNIQUEMENT à partir des données sourcées de `recherche-marche.md` (§4-C) et du `plan-acquisition-90j.md`. Aucun chiffre sorti du chapeau : chaque hypothèse indique sa source. Dernière mise à jour : nuit du 07-08/08/2026.

## 1. Hypothèses de base (sourcées)

| Hypothèse | Valeur retenue | Source |
|---|---|---|
| Panier moyen abonnement | 49-129 €/mois (mix ≈ 75 €) | Grille Garde-Site, dans les fourchettes marché FR 29-300 €/mois (clickdev.fr, smart-agency.fr, cf. recherche-marche.md) |
| Canal n°1 : conversion base clients studio | Le taux de conversion est maximal au moment de la livraison d'un site ; sur une base existante on retient prudemment 10-25 % | rocket.net, axiswebart.com (recherche-marche.md §4-C « canal n°1 documenté ») |
| Charge par client | 1,5-2,5 h/mois au début, 10-15 min une fois outillé | dev.to (chiffres réels d'un opérateur), modulards.com |
| Churn | < 10 %/an sur care plans bien tenus | axiswebart.com, dev.to |
| Capacité max dans 5-10 h/sem | 15-25 clients avec automatisation | Calcul recherche-marche.md §4-C |
| One-shot Remise en état | 149 € (aligné offres Codeur.com 200-500 €/an et one-shot Fiverr/KaoriWeb 30-150 €) | recherche-marche.md §4-C et §4-D |

⚠️ Inconnue clé non vérifiable cette nuit : **la taille réelle de la base clients/contacts du studio**. Les scénarios ci-dessous supposent respectivement ~5 / ~15 / ~30 contacts joignables (clients livrés + prospects dormants). Ajuster à la réalité au réveil.

## 2. Trois scénarios à 3 et 12 mois

### Pessimiste (base de contacts quasi vide, SEO seul)
- M1 : 0 abonné, 1 Remise en état (149 €). M3 : 2 abonnés (1 Vigie + 1 Capitaine = **138 € MRR**) + 1 Remise en état.
- M12 : 5-6 abonnés (**≈ 400 € MRR**), portés par le SEO custom qui commence à ranker (6-12 mois, cf. recherche).
- Revenu cumulé année 1 : ≈ 3 000-3 500 €. Verdict : lent mais coût quasi nul — le SEO custom est un actif qui continue de pousser.

### Réaliste (base ~15 contacts, exécution du plan 90 j)
- M1 : 1-2 abonnés via e-mail base clients (offre -50 % 1er mois) + 1 Remise en état → **≈ 100-190 € MRR** + 149 €.
- M3 : **4-8 abonnés = 300-700 € MRR** (objectif chiffré du plan-acquisition-90j.md) + 2-3 one-shots.
- M12 : 10-14 abonnés (**≈ 750-1 100 € MRR**, churn < 10 %/an) + ~1 one-shot/mois → **revenu cumulé année 1 ≈ 7 000-10 000 €**.
- Charge : voir §3 — reste sous 10 h/sem.

### Optimiste (base ~30 contacts + 1-2 partenariats graphistes actifs)
- M3 : 8-12 abonnés (**600-1 000 € MRR**).
- M12 : 18-25 abonnés (**1 400-2 200 € MRR**) — borne haute = plafond de capacité 5-10 h/sem documenté (15-25 clients). Au-delà : augmenter les prix ou sous-traiter, bon problème.
- Revenu cumulé année 1 : ≈ 12 000-18 000 €. Rappel plafond micro-BNC/BIC : très loin des seuils, TVA 293 B préservée (surveiller le seuil de franchise en année 2 si cumul avec le studio et l'alternance… vérifier avec l'URSSAF le cumul alternance/AE déjà en place).

## 3. Charge hebdomadaire (pour rester ≤ 10 h/sem)

| Poste | M1-M3 (≤ 8 clients) | M12 réaliste (12 clients outillés) |
|---|---|---|
| Maintenance (runbook ≤ 45 min/client/mois + retouches quota 1 h max) | 2-4 h/sem | 3-5 h/sem |
| Acquisition (plan 90 j : e-mails, 1 post LinkedIn/sem, 1 article/mois, réponses Codeur/Malt) | 2,5-3 h/sem | 1-2 h/sem (SEO prend le relais) |
| Admin (facturation, rapports mensuels 10 min/client) | 0,5 h/sem | 1 h/sem |
| **Total** | **5-7,5 h/sem** ✅ | **5-8 h/sem** ✅ |

Garde-fous qui rendent ça tenable (intégrés aux CGV et au runbook) : quota retouches 1 h/mois non reportable, tâches ≤ 30 min, monitoring automatisé (script cron sur VPS), rapports semi-automatiques.

## 4. Budget mois 1 (≤ 100 € exigé)

| Poste | Coût | Note |
|---|---|---|
| Domaine (ex. garde-site.fr chez OVH) | ~10 € TTC/an | Optionnel : 0 € si sous-domaine d'un domaine existant au début |
| Hébergement | 0 € | VPS OVH existant (site statique via Nginx + wildcard SSL déjà en place) |
| Monitoring | 0 € | `outputs/ops/monitor/monitor.py` auto-hébergé (testé) ; UptimeRobot gratuit en doublure |
| E-mail pro (contact@…) | 0-12 € | Souvent inclus/offert avec le domaine OVH (MX Plan) ; sinon ~1 €/mois |
| Gestionnaire de mots de passe | 0 € | Bitwarden gratuit |
| Facturation | 0 € | Modèle de devis fourni + outil gratuit (ex. Henrri/Abby gratuit) — pas d'abonnement nécessaire au début |
| Médiateur de la consommation | 0-60 € | Obligatoire AVANT la 1re vente à un particulier (B2C) uniquement ; ~25-100 €/an (cf. outputs/legal/cgv.md). Si les premiers clients sont des pros (B2B), peut attendre — à budgéter dès qu'un particulier signe |
| Sauvegardes externalisées | 0 € | Espace du VPS + stockage distant gratuit au début (à professionnaliser vers M3 : ~5 €/mois) |
| **Total mois 1** | **≈ 10-82 €** ✅ | Marge conservée sous les 100 € |

Aucune pub payante (contrainte respectée : le plan d'acquisition est 100 % organique).

## 5. Ce qui invaliderait ces prévisions (à surveiller)
1. **Base clients du studio plus petite que supposé** → basculer l'effort sur Codeur.com/Malt en réactif (demandes de maintenance postées en continu, cf. recherche) et sur les partenariats graphistes.
2. **Conversion < 10 %** sur la base → revoir l'offre d'appel (Bilan gratuit → Remise en état 149 € comme produit d'entrée plutôt que l'abonnement direct).
3. **Scope creep** (dépassement du quota accepté « pour être sympa ») → c'est LE tueur de marge documenté du secteur : appliquer les modèles de refus du runbook.
4. **SEO custom qui ne décolle pas à M6** → doubler la mise sur la verticale « sites générés par IA » (Lovable/v0/Bolt), vague montante avec zéro offre de maintenance identifiée.
