# Recherche de marché — Nuit du 7 au 8 août 2026

Objectif : trouver UNE idée maximisant **(revenu rapide × faible effort × faible besoin marketing)**, compatible avec : auto-entrepreneur FR (art. 293B), stack Next.js/TS/Prisma + FastAPI + extensions Chrome, VPS OVH dispo, 5-10h/semaine, budget mois 1 ≤ 100 €, **zéro pub payante**.

## 1. Brainstorm initial — 17 idées

| # | Idée | Catégorie | Marché visé | Statut |
|---|------|-----------|-------------|--------|
| 1 | Générateur de mentions légales/CGV pour auto-entrepreneurs | Micro-SaaS | France | ❌ Rejetée (voir §2) |
| 2 | Widget d'avis Google embarquable pour sites | Micro-SaaS | International | ❌ Rejetée |
| 3 | Outil de facturation auto-entrepreneur | SaaS | France | ❌ Rejetée |
| 4 | API entreprises françaises enrichie (SIRET+) | API payante | France | ❌ Rejetée |
| 5 | **Audit accessibilité RGAA/EAA productisé** | Service productisé | France | ✅ Top 5 → Idée A |
| 6 | Audit RGPD/cookies automatisé + rapport TPE | Service productisé | France | ❌ Rejetée (proche de A, moins d'urgence réglementaire) |
| 7 | **Maintenance de sites web par abonnement** | Service productisé | France | ✅ Top 5 → Idée C |
| 8 | **Gestion fiche Google Business Profile TPE** | Service productisé | France (local) | ✅ Top 5 → Idée D |
| 9 | Audit performance/SEO technique one-shot | Service productisé | France | ❌ Rejetée |
| 10 | **Boilerplate Next.js « SaaS à la française »** | Info-produit/template | Francophone | ✅ Top 5 → Idée B |
| 11 | Kit Notion « se lancer en auto-entrepreneur dev » | Info-produit | France | ❌ Rejetée |
| 12 | Guide « alternance → freelance dev » | Info-produit | France | ❌ Rejetée |
| 13 | Dropshipping niche | E-commerce | FR/EU | ❌ Rejetée |
| 14 | Print-on-demand niche dev/tech FR | E-commerce | France | ❌ Rejetée |
| 15 | **Extension Chrome pour freelances Malt** | Micro-outil payant | France | ✅ Top 5 → Idée E |
| 16 | Automatisation de collecte d'avis Google (QR/SMS) pour commerces | Automatisation B2B locale | France | ❌ Rejetée |
| 17 | Marketplace de niche | Marketplace | — | ❌ Rejetée |

## 2. Idées rejetées — raisons

- **#1 Générateur légal AE** : marché déjà servi gratuitement (LegalPlace, Captain Contrat, generateur-mentions-legales) ; le gratuit tue le payant sur ce créneau.
- **#2 Widget avis Google** : Elfsight/Trustindex dominent à petits prix avec des moyens marketing énormes ; acquisition internationale impossible sans budget.
- **#3 Facturation AE** : saturé par des acteurs gratuits/freemium bien financés (Abby, Freebe, Henrri, Indy). Copie sans angle.
- **#4 API SIRET** : l'État fournit déjà des API gratuites (INSEE, recherche-entreprises.api.gouv.fr) ; marché dev FR trop petit pour une surcouche payante.
- **#6 Audit RGPD** : réel besoin mais pression réglementaire moins datée/actionnable que l'accessibilité (échéance EAA juin 2025 passée = urgence concrète) ; la CNIL fournit beaucoup d'outils gratuits ; on garde l'angle « conformité » via l'idée A.
- **#9 Audit perfs/SEO one-shot** : commoditisé (outils gratuits PageSpeed, freelances low-cost) ; panier moyen faible, pas récurrent.
- **#11/#12 Info-produits** : nécessitent une audience préexistante (inexistante ici) ; time-to-first-euro long ; marché #12 minuscule.
- **#13 Dropshipping** : dépend structurellement de la pub payante (interdite par les contraintes) ; marges faibles ; logistique/SAV incompatibles 5-10h/sem ; risques conformité produits.
- **#14 Print-on-demand** : même problème d'acquisition sans pub ; marges très faibles après commissions.
- **#16 Collecte d'avis QR/SMS** : marché réel mais démarchage terrain intensif requis (incompatible profil/temps) ; coût SMS entame le budget ; acteurs établis (Partoo, Guest Suite).
- **#17 Marketplace** : problème de cold start des deux côtés ; incompatible 5-10h/sem et 100 €.

## 3. Top 5 — en cours de recherche approfondie (5 sous-agents parallèles)

- **A. Audit accessibilité RGAA/EAA productisé** — pari sur l'urgence réglementaire post-juin 2025.
- **B. Boilerplate Next.js « SaaS français »** — pari sur la communauté indie FR et la douleur légal/Stripe/AE.
- **C. Maintenance de sites productisée** — pari sur le récurrent + synergie studio web existant.
- **D. Gestion Google Business Profile TPE** — pari sur le SEO local sous-servi.
- **E. Extension Chrome freelances Malt** — pari sur la niche plateforme + compétence extensions.

*(Les synthèses concurrentielles, preuves de demande et scores arrivent ci-dessous une fois les 5 recherches terminées.)*

## 4. Synthèses de recherche approfondie (sous-agents)

### Idée B — Boilerplate Next.js « SaaS à la française » — **4,5/10**

**Concurrence.** ShipFast (Marc Lou) domine : ~129-199 $, 8 382 clients revendiqués (shipfa.st), 250 K$ en 5 mois au lancement 2023 — mais en fort déclin (~8,8 K$/mois en fév. 2026 vs 17,2 K$ en janv., source indieai.directory) : marché générique en fin de cycle. Autres : Makerkit 299-599 $, supastarter 349-1 499 $, + gratuits sérieux (ixartz/SaaS-Boilerplate, ShipFree — clone open source de ShipFast avec locale FR). **Aucun boilerplate spécifiquement français n'existe** (seul saasboilerplate.fr, simple annuaire) — créneau vide, mais vide possiblement parce que trop petit.

**Preuves de demande.** Le pain point légal/facturation FR est réel et documenté : Stripe n'émet pas de factures conformes au droit FR ni la mention « TVA non applicable, art. 293 B » (striptu.com, stripe.com, forum Pragmatic Entrepreneurs) ; l'existence de Striptu prouve la douleur. Le marché paie pour les boilerplates (>1 M$ cumulé ShipFast). MAIS la communauté indie FR structurée est minuscule (Discord Indie Makers FR ~203 membres) ; les indie FR qui réussissent opèrent en anglais et n'ont pas besoin du spécifique France.

**Acquisition.** Talon d'Achille : business de distribution, pas de produit. Succès ShipFast = ~100 K followers X construits sur des années. Sans audience : SEO FR longue traîne peu concurrentiel mais volume faible et délai 6-12 mois ; communautés FR minuscules. Scène boilerplate « sursaturée de copycats » (jasonleow.substack.com).

**3 risques majeurs.** (1) Marché adressable minuscule (centaines d'acheteurs potentiels) ; (2) dépendance à une audience inexistante ; (3) obsolescence + concurrence gratuite (ShipFree, IA générative) pour un one-shot.

**Angle recommandé si retenue.** Ne pas vendre un boilerplate de plus mais un **module « conformité France clé en main »** (pages légales, factures 293 B, RGPD, facturation électronique 2026-2027) à 49-79 €, compatible ShipFast/Makerkit — le boilerplate complet en upsell.
