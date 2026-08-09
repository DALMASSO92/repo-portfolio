# Recherche marché — nuit du 9 au 10 août 2026

> **État du document** : section 1 et 2 finalisées. Section 3 (recherche approfondie du top 6)
> en cours de consolidation à partir des rapports des sous-agents.

---

## 0. Cadre de décision

### Contraintes dures du fondateur

| Contrainte | Valeur | Conséquence sur le choix |
|---|---|---|
| Statut | Auto-entrepreneur FR actif, APE 62.01Z, TVA non applicable art. 293 B | Peut facturer dès demain. Prestations de services informatiques couvertes par l'APE. |
| Compétences | Next.js/TypeScript/Prisma/PostgreSQL, FastAPI/Python, extensions Chrome | Favorise le logiciel. Défavorise tout ce qui exige motion design, illustration ou logistique physique. |
| Infra | VPS OVH (Nginx, SSL wildcard, sous-domaines), domaines possédés | Hébergement à coût marginal nul. Un sous-domaine peut être mis en ligne sans acheter de domaine. |
| Temps | 5 à 10 h/semaine MAX | Élimine tout ce qui demande du support client intensif, de la production de contenu quotidienne ou de la prospection active soutenue. |
| Budget mois 1 | 100 € TOUT COMPRIS | Élimine le stock, la publicité payante, les abonnements SaaS coûteux, et contraint fortement le choix du prestataire de paiement. |
| Acquisition | 100 % organique, aucune publicité payante | Élimine tout modèle dont l'acquisition repose structurellement sur l'achat de trafic (drop classique en tête). |

### Cadre imposé par le client (arbitrage du 9 août)

- **Cible** : jeunes créateurs de contenu, 16-25 ans (TikTok, Instagram Reels, YouTube Shorts, Twitch).
- **Monétisation** : paiement **unique** de 9 à 29 €, au moment où la douleur est maximale. **Pas d'abonnement.**
- **Objectif** : premier euro en quelques jours à quelques semaines.

### Pondération des critères de sélection

Reprise de la pondération demandée, du plus au moins déterminant :

1. **Time-to-first-euro court** (poids fort)
2. **Acquisition organique possible** sans budget publicitaire
3. **Faisabilité** avec le stack, le statut, 5-10 h/semaine et 100 €
4. **Marge**
5. **Différenciation défendable** — critère éliminatoire : une idée déjà bien servie par un acteur établi est écartée, sauf angle réellement distinct et démontré.

**Règle éliminatoire supplémentaire** : toute idée sans **preuve de demande réelle** (volumes de recherche, discussions où des gens expriment le problème, concurrents qui gagnent visiblement de l'argent) est éliminée, quelle que soit son élégance.

---

## 1. Génération d'idées — 18 pistes, toutes catégories

Généré avant tout arbitrage de cible, pour ne pas raisonner en tunnel. La colonne « statut » reflète le **premier filtre**, appliqué avant la recherche approfondie.

### A. Conformité et réglementaire B2B

| # | Idée | Cible | Statut premier filtre |
|---|---|---|---|
| 1 | Comparateur de plateformes agréées (facturation électronique) monétisé à l'affiliation | Dirigeants TPE/PME FR | ❌ **Éliminé — marché saturé** (voir §2.1) |
| 2 | Validateur / générateur Factur-X gratuit freemium | TPE, comptables | ❌ **Éliminé — marché saturé** (voir §2.1) |
| 3 | API / SDK Factur-X pour développeurs et éditeurs de logiciels | Devs, éditeurs SaaS FR | ⏸️ **Écarté par changement de cible** — recherche approfondie menée, conservée en annexe |
| 4 | Service productisé « mise en conformité e-facturation TPE en 48 h » | TPE FR | ⏸️ Écarté par changement de cible (public non jeune) |
| 5 | Mise en conformité accessibilité web (RGAA / European Accessibility Act) | PME avec site e-commerce | ⏸️ Écarté par changement de cible (public non jeune) |
| 6 | Micro-SaaS mentions légales / CGV auto-mises à jour | Freelances, e-commerçants FR | ⏸️ Écarté par changement de cible |

### B. Emploi et études (public jeune)

| # | Idée | Cible | Statut premier filtre |
|---|---|---|---|
| 7 | Outil de candidature spontanée ciblée pour l'alternance (données SIRENE + suivi) | Étudiants FR en recherche d'alternance | 🥈 **Conservé comme piste de repli forte** (voir §4) |
| 8 | Générateur de CV / lettre de motivation optimisé ATS | Étudiants, jeunes diplômés | ❌ Éliminé — marché massivement servi (CVDesignR, Canva, Zety, ChatGPT gratuit) |
| 9 | Révisions et fiches assistées par IA | Lycéens, étudiants | ❌ Éliminé — très bien servi (Knowunity, Quizlet, StudySmarter) et cible peu solvable |

### C. Jeunes créateurs de contenu — **segment retenu par le client**

| # | Idée | Angle | Statut premier filtre |
|---|---|---|---|
| 10 | Simulateur de zones sûres multi-plateformes pour vidéo verticale | Ne plus publier une vidéo dont le texte est masqué par l'interface | 🔬 Recherche approfondie |
| 11 | Générateur de media kit + kit de négociation de partenariats | Décrocher ses premiers partenariats de marque | 🔬 Recherche approfondie |
| 12 | Outil d'aperçu et de test A/B de miniatures YouTube | Optimiser le taux de clic | 🔬 Recherche approfondie |
| 13 | Packs d'assets (overlays Twitch, templates CapCut, presets, sons) | Modèle one-shot le plus éprouvé de cette audience | 🔬 Recherche approfondie |
| 14 | Générateur d'accroches et de scripts viraux **en français** | Combler le vide francophone des outils anglophones | 🔬 Recherche approfondie |
| 15 | Extension Chrome payante d'analyse et de veille concurrentielle | Exploiter la compétence extensions du fondateur + canal Chrome Web Store | 🔬 Recherche approfondie |

### D. Autres modèles envisagés puis écartés au premier filtre

| # | Idée | Motif d'élimination |
|---|---|---|
| 16 | Dropshipping / e-commerce de niche | Repose structurellement sur la publicité payante. Incompatible avec 100 € et « aucune pub ». Marges laminées, délais de livraison, SAV chronophage incompatible avec 5-10 h/semaine. |
| 17 | Print-on-demand streetwear pour jeunes | Même problème d'acquisition payante. Différenciation quasi nulle, saturation extrême, aucun avantage tiré du profil développeur. |
| 18 | API freemium sur données publiques françaises (SIRENE, DVF, BODACC) | Cible développeurs, pas jeunes. Time-to-first-euro long, monétisation lente. Conservé comme piste passive de long terme, hors cadre. |

---

## 2. Éliminations documentées par la recherche

### 2.1 La vague « facturation électronique » — demande forcée, mais angles évidents déjà pris

Le signal de départ était objectivement le plus fort trouvé cette nuit : au **1er septembre 2026**, toutes les entreprises assujetties à la TVA établies en France doivent être en capacité de **recevoir** des factures électroniques via une plateforme agréée, quelle que soit leur taille. L'émission suit pour les grandes entreprises et ETI à la même date, puis pour les TPE/PME. C'est une demande imposée par la loi, à trois semaines de l'échéance, donc à son pic.

Sources : [Urssaf](https://www.urssaf.fr/accueil/actualites/facturation-electronique.html) · [economie.gouv.fr](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises) · [calendrier Cegid](https://www.cegid.com/fr/facture-electronique-obligatoire/calendrier-facture-electronique/)

**Pourquoi les deux exploitations évidentes ont été éliminées :**

- **Comparateurs de plateformes agréées** : au moins **sept** comparateurs indépendants sont déjà en ligne et bien référencés, dont [comparateur-efacturation.fr](https://comparateur-efacturation.fr/) (annonce 137 plateformes), [comparatif-facture-electronique.fr](https://www.comparatif-facture-electronique.fr/) (annonce 156 plateformes), [facture-obligatoire.fr](https://facture-obligatoire.fr/plateformes/comparatif/), [comparepdp.com](https://comparepdp.com/articles/comparatif-plateforme-agreee) et [compafacturation.com](https://compafacturation.com/). Arriver maintenant sur ce créneau SEO, à trois semaines de l'échéance, contre des sites déjà indexés, est perdu d'avance.
- **Validateurs / générateurs Factur-X gratuits** : au moins **neuf** outils gratuits sont déjà en ligne, dont [facturx-validator.fr](https://facturx-validator.fr/), [verif-facturx.fr](https://verif-facturx.fr/generer), [facturxapp.com](https://facturxapp.com/), [easyfacturx.com](https://www.easyfacturx.com/factur-x-validation), [b2brouter](https://www.b2brouter.net/fr/factur-x-validator/), [synapx](https://synapx.fr/sdk/FactureX/) et [factpulse](https://factpulse.fr/test-public/). Le prix de marché de cette fonctionnalité est déjà tombé à zéro.

**Enseignement transposable** : une échéance réglementaire très médiatisée attire les opportunistes avant l'échéance, pas pendant. Quand la demande devient évidente pour tout le monde, l'offre gratuite est déjà là. Ce raisonnement a été réappliqué à chaque idée suivante.

### 2.2 Le marché de l'alternance — écarté du premier rang, conservé en repli

Recherche menée avant l'arbitrage de cible, et le marché est réel : la France a dépassé **le million d'alternants**, avec **846 700 nouveaux contrats d'apprentissage** signés en 2024, dont près de 6 sur 10 pour un diplôme de niveau bac+2 ou plus. Décrocher un contrat s'est nettement durci : plusieurs dizaines à plusieurs centaines de candidatures peuvent arriver sur une seule offre.

Le point le plus intéressant pour un produit : **environ 70 % des entreprises recruteraient des alternants sans publier d'offre**, ce qui fait de la candidature spontanée ciblée le vrai levier — et c'est précisément la partie que les job boards n'outillent pas.

Sources : [Meteojob](https://www.meteojob.com/blog-emploi/alternance/comment-trouver-une-alternance-en-2026-le-guide-complet-en-5-etapes) · [IGENSIA — calendrier](https://www.igensia-alternance.fr/articles/questions-d-etudiants/quand-postuler-alternance-2026) · [NetworkGlue](https://networkglue.fr/blog/comment-trouver-alternance-2026)

Cette piste a un atout rare : le fondateur est lui-même en alternance, donc en adéquation directe avec le problème et avec le réseau qui le vit. Elle est **conservée comme piste de repli n°2** et détaillée en §4, mais n'est pas le premier choix puisque le client a arbitré en faveur des créateurs de contenu.

---

## 3. Recherche approfondie — segment « jeunes créateurs de contenu »

> ⏳ Consolidation en cours à partir des rapports des sous-agents de recherche.
> Six sous-idées analysées en parallèle (§ idées 10 à 15), plus une analyse
> juridique et paiement transverse.

---

## 4. Pistes de repli documentées

> ⏳ À compléter une fois le classement final établi.
