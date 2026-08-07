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

### Idée A — Audit accessibilité RGAA/EAA productisé — **5,5/10**

**Réglementaire (conditionne tout).** EAA applicable depuis le 28 juin 2025 (loi 9 mars 2023, décret 2023-931, RGAA 4.1.2). **Micro-entreprises exemptées (<10 salariés ET CA <2 M€)** → tue le segment TPE, cœur naturel d'une offre à 290-590 €. Sanctions jusqu'à 50 K€, mais application molle : premiers contrôles DGCCRF « pédagogiques » janv. 2026, aucune grosse amende. Le vrai moteur est associatif : **Carrefour condamné le 4 juin 2026** (TJ Caen, astreinte 500 €/j), mais **Auchan débouté à Lille en mai 2026** → insécurité juridique = argument d'attentisme pour les PME. Sources : Temesis, Accessiway, ecommercemag.fr, LSA, Village Justice.

**Concurrence.** Agences expertes : Access42 (1 800-5 600 € HT/audit publié), Temesis, Ideance ; Sisméo à 1 490 € HT (le plus proche de l'idée). **Vague 2025-26 de nouveaux entrants productisés SEO** (rgaa-checker.com, webconforme.fr, accessio.pro, declareaccess.com…) : le créneau « petit audit à prix fixe + SEO » est déjà activement attaqué. Overlays discrédités (accessiBe : 1 M$ d'amende FTC avril 2025) = faiblesse exploitable pour l'audit humain.

**Preuves de demande.** Signaux indirects (prolifération de sites SEO pariant sur la requête, presse abondante), mais demande spontanée PME faible : « les PME ont continué comme avant » (accessio.pro), pas de panique sur les forums e-commerce. **Marché à évangéliser.**

**Acquisition.** SEO squatté par ~10 entrants (6-12 mois pour ranker). Voie réaliste : outreach LinkedIn PME 10-250 salariés + partenariats agences web. Time-to-first-euro 4-8 semaines via outreach.

**3 risques majeurs.** (1) Exemption micro-entreprises + PME pas menacées tant que seuls les géants sont visés ; (2) insécurité juridique (Caen vs Lille) ; (3) à 290-590 €, un audit RGAA sérieux (106 critères) est structurellement déficitaire ou superficiel — risque réputationnel.

**Angle recommandé si retenue.** Pack « livrable légal minimal » (déclaration d'accessibilité + schéma pluriannuel + pré-audit flash) ~590 €, distribué en **marque blanche aux agences web** (B2B2B), upsell audit complet 1 500 €+.

### Idée C — Maintenance de sites web productisée par abonnement — **7,5/10**

**Concurrence.** Marché FR dense mais fragmenté (WordPress) : WP Assistance (Trustpilot 5/5, 84 avis — preuve qu'on en vit), WPHelp, Maintenance WP ; prix publics de 12 €/mois (Wasi) à 79 € HT (Kameo) ; fourchettes 2026 consolidées : basique 29-50 €, intermédiaire 70-170 €, complet 170-300 € (clickdev.fr, smart-agency.fr). International : WP Buffs 79-247 $/mois « unlimited edits », GoDaddy 6-25 $/mois. **Faiblesses exploitables : les low-cost n'incluent aucune retouche humaine ; les agences sont hors budget TPE ; quasi personne ne couvre les sites custom (Next.js/Webflow) en France — segment vide.**

**Preuves de demande.** 61-64,6 % des TPE-PME FR ont un site (AFNIC 2025/France Num) ; ~1 M de sites WordPress en France ; projets de maintenance déposés en continu sur Codeur.com (200-500 €/an) ; SERP « tarif maintenance wordpress » saturée de 10+ pages d'agences optimisées = marché qui paie.

**Acquisition.** SEO national saturé (6-12 mois), MAIS canal n°1 documenté = **conversion des clients existants du studio à la livraison du site** (taux max à ce moment) + audit gratuit pour les anciens clients. **Time-to-first-euro : 2-4 semaines** (un email à la base clients). SEO local et partenariats graphistes en complément.

**Économie unitaire.** 1,5-2,5 h/client/mois, réductible à 10-15 min avec automatisation (MainWP, scripts) ; cap de support 1 h/mois contre le scope creep ; churn <10 %/an sur des care plans bien tenus. À 5-10 h/sem : 15-25 clients gérables → **900-2 500 € MRR** à 59-99 €/mois (60-150 €/h effectif une fois outillé). Coût d'outillage quasi nul (UptimeRobot, scripts).

**3 risques majeurs.** (1) Commoditisation par le bas (offres 12-29 €, hébergement infogéré) → vendre les retouches humaines et la réactivité, pas la technique ; (2) scope creep des « retouches illimitées » → quota strict obligatoire ; (3) dépendance WordPress (en déclin : 65,2 % → 59,8 % de part CMS) vs stack Next.js du porteur.

**Angle recommandé si retenue.** Offre **hybride** : WordPress pour le volume + **forfait « sites custom/Next.js/Webflow » (segment quasi vide en France, zéro concurrence low-cost, aligné stack)**, vendu d'abord à la base clients du studio, « tranquillité tout compris » 59-99 €/mois.

### Idée D — Gestion fiche Google Business Profile pour TPE — **6/10**

**Concurrence.** Marché déjà structuré et cher : gestion pro typique **100-500 € HT/mois** (Extern-Market) ; Komunike 149,90 €/mois, La Web Factory 95 €/mois, KaoriWeb ≤150 €/mois, Simplébo dès ~50 €/mois. Un positionnement 49-99 €/mois est sous le marché mais pas inédit. Partoo cible les réseaux, pas la TPE isolée. Localranker (outil FR grid-tracking) 7,90-49,90 €/mois. **Solocal/PagesJaunes : réputation dégradée documentée** (contrats piégeux, ~1 000 €/mois, articles « arnaque ») → boulevard de positionnement « anti-Solocal, sans engagement ». International : 125-400 $/mois/établissement (Merchynt), BrightLocal 1 299 $/mois.

**Preuves de demande.** Fortes : tout un écosystème d'agences vit de cette prestation ; 46 % des recherches Google ont une intention locale ; l'État pousse les TPE vers GBP (francenum.gouv.fr) ; forums officiels débordent de fils « fiche suspendue » (point d'entrée monétisable) ; ~4 M de TPE, vaste stock de fiches mal gérées (AFNIC 2025).

**Réalité opérationnelle.** API GBP à accès restreint (quota zéro par défaut, validation Google, automatisation des avis/posts encadrée) ; en attendant, gestion manuelle via délégation « manager ». **Charge réelle 4-8 h/mois/client** pour une gestion sérieuse → à 79 €/mois c'est 10-20 €/h ; il faut templatiser + IA pour descendre à 1-2 h/client/mois.

**Acquisition (point faible n°1).** Cold-call TPE quasi inopérant, démarchage de plus en plus encadré (loi 2025-594 ; email B2B opt-out reste légal). Alternatives scriptables : audit automatisé de fiche envoyé par email, SEO « fiche google suspendue », partenariats comptables/CCI. Time-to-first-euro 4-8 semaines via one-shot « optimisation 150-300 € ».

**3 risques majeurs.** (1) Acquisition/churn sur TPE sur-sollicitées ; (2) dépendance Google (API refusable, suspensions arbitraires, IA native qui cannibalise) ; (3) plancher de prix : à 49 €/mois × 20 clients = un job de 40 h, pas un levier, sans automatisation.

**Angle recommandé si retenue.** « Anti-Solocal » sans engagement, audit automatisé gratuit en porte d'entrée, forfait « sauvetage de fiche suspendue », verticale unique (ex. restaurateurs d'une métropole) pour industrialiser.

### Idée B — Boilerplate Next.js « SaaS à la française » — **4,5/10**

**Concurrence.** ShipFast (Marc Lou) domine : ~129-199 $, 8 382 clients revendiqués (shipfa.st), 250 K$ en 5 mois au lancement 2023 — mais en fort déclin (~8,8 K$/mois en fév. 2026 vs 17,2 K$ en janv., source indieai.directory) : marché générique en fin de cycle. Autres : Makerkit 299-599 $, supastarter 349-1 499 $, + gratuits sérieux (ixartz/SaaS-Boilerplate, ShipFree — clone open source de ShipFast avec locale FR). **Aucun boilerplate spécifiquement français n'existe** (seul saasboilerplate.fr, simple annuaire) — créneau vide, mais vide possiblement parce que trop petit.

**Preuves de demande.** Le pain point légal/facturation FR est réel et documenté : Stripe n'émet pas de factures conformes au droit FR ni la mention « TVA non applicable, art. 293 B » (striptu.com, stripe.com, forum Pragmatic Entrepreneurs) ; l'existence de Striptu prouve la douleur. Le marché paie pour les boilerplates (>1 M$ cumulé ShipFast). MAIS la communauté indie FR structurée est minuscule (Discord Indie Makers FR ~203 membres) ; les indie FR qui réussissent opèrent en anglais et n'ont pas besoin du spécifique France.

**Acquisition.** Talon d'Achille : business de distribution, pas de produit. Succès ShipFast = ~100 K followers X construits sur des années. Sans audience : SEO FR longue traîne peu concurrentiel mais volume faible et délai 6-12 mois ; communautés FR minuscules. Scène boilerplate « sursaturée de copycats » (jasonleow.substack.com).

**3 risques majeurs.** (1) Marché adressable minuscule (centaines d'acheteurs potentiels) ; (2) dépendance à une audience inexistante ; (3) obsolescence + concurrence gratuite (ShipFree, IA générative) pour un one-shot.

**Angle recommandé si retenue.** Ne pas vendre un boilerplate de plus mais un **module « conformité France clé en main »** (pages légales, factures 293 B, RGPD, facturation électronique 2026-2027) à 49-79 €, compatible ShipFast/Makerkit — le boilerplate complet en upsell.
