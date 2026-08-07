# Branding — Garde-Site

## Nom
**Garde-Site** — sur le modèle de « garde-côte ». Vérifié le 07/08/2026 : aucun acteur web existant sous ce nom (recherche « garde-site »/« gardesite » sans conflit ; « Sitadelle » écarté à cause de Sitadelle Solutions, agence web à Besançon).

## Positionnement
Service productisé de maintenance de sites web par abonnement, **sans engagement**, pour TPE/indépendants français. Deux territoires :
1. **WordPress** (le volume du marché) — mises à jour, sauvegardes, sécurité, retouches à quota.
2. **Sites custom : Next.js, React, Webflow, sites générés par IA** (segment quasi vide en France — différenciateur clé, aligné stack).

**Promesse** : « Votre site sous bonne garde, 24h/24. » Vous dormez, on veille.
**Anti-positionnement** : ni agence à devis opaque, ni robot low-cost sans humain. Réactivité humaine + process outillé.

## Ton de voix
Calme, rassurant, précis. Vocabulaire maritime léger (vigie, phare, cap, escale) sans jamais tomber dans le gadget. Tutoiement : NON — vouvoiement professionnel chaleureux. Phrases courtes. Zéro jargon technique non expliqué. On chiffre tout (délais, quotas, prix).

## Identité visuelle
- **Logo** : phare stylisé minimaliste dans un écusson arrondi (SVG monochrome déclinable).
- **Palette** :
  - Encre marine `#0B1F33` — fond sombre, sérieux, nuit calme
  - Écume `#F7F5F0` — fond clair, papier
  - Orange signal `#FF6B35` — CTA, bouée de sauvetage (accent unique)
  - Vert balise `#2FBF71` — statuts OK, uptime
  - Gris ardoise `#5B6B7B` — texte secondaire
- **Typo** : display serif à caractère (type Fraunces) pour les titres, sans-serif lisible (type Inter) pour le corps. Auto-hébergées (pas de Google Fonts CDN, RGPD).
- **Style** : premium sobre, beaucoup d'air, illustrations SVG maison (phare, vagues, radar) — PAS de photos stock, PAS de template générique.

## Offres & pricing (justifié par recherche-marche.md §4-C)
Sans engagement, résiliation en 1 clic (e-mail). Prix nets — TVA non applicable, art. 293 B du CGI.

| Forfait | Cible | Prix | Contenu |
|---|---|---|---|
| **Vigie** | WordPress | **49 €/mois** | MAJ cœur/extensions hebdo, sauvegardes quotidiennes externalisées, surveillance uptime 24/7, scan sécurité, rapport mensuel |
| **Capitaine** | WordPress | **89 €/mois** | Vigie + 1 h de retouches/mois (tâches ≤ 30 min), support prioritaire < 24 h ouvrées, optimisation vitesse trimestrielle |
| **Phare** | Next.js / React / Webflow / sites IA | **129 €/mois** | Surveillance avancée (uptime, SSL, formulaires, erreurs JS), mises à jour de dépendances mensuelles, correctifs, 1 h de retouches/mois, rapport technique |

- **Porte d'entrée** : « Bilan de santé » gratuit (audit automatisé, sans engagement).
- **One-shot** : « Remise en état » 149 € (site cassé, MAJ en retard, malware léger) — créditée si souscription dans les 30 jours.
- Garde-fous : quota retouches strict (1 h/mois, tâches ≤ 30 min, non reportable), périmètre exclu (refonte, nouvelles fonctionnalités → devis studio).

Positionnement prix : Vigie sous la médiane basique FR (29-50 €), Capitaine dans la fourchette intermédiaire (70-170 €), Phare premium justifié par l'absence de concurrence sur le custom.

## Infrastructure prévue
Site vitrine statique (Next.js export) déployé sur le VPS OVH (sous-domaine existant ou domaine dédié ~10 €/an). Monitoring auto-hébergé (script Python + cron sur le VPS). Coût d'exploitation mois 1 : ~0-15 €.

## Placeholders (à remplacer par l'utilisateur, jamais inventer)
`[PRÉNOM NOM]`, `[SIRET]`, `[ADRESSE]`, `[EMAIL_CONTACT]`, `[TELEPHONE]`, `[DOMAINE]` (ex. garde-site.fr ou sous-domaine), `[HEBERGEUR_VPS]` (OVH).
