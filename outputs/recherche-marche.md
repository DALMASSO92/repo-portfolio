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

> ⚠️ **Limite de fiabilité à connaître avant de lire cette section.**
> La politique réseau de l'environnement de travail a bloqué l'accès direct aux pages
> web (erreur 403 sur la quasi-totalité des domaines : reddit.com, canva.com,
> hypeauditor.com, kitly.co, socialbluebook.com…). Les recherches ont donc été menées
> via moteur de recherche, et **les prix et chiffres concurrents proviennent des
> extraits de résultats, pas d'une lecture directe des pages**. Ils sont fiables pour
> décider d'une direction, mais **doivent être revérifiés à la main avant tout usage
> commercial** (page de tarifs publique, mention sur ton propre site, argumentaire de vente).
> Chaque élément non trouvé est signalé comme tel plutôt que comblé par une estimation.

### 3.1 Idée 10 — Simulateur de zones sûres multi-plateformes → ❌ **KILL**

| Critère | Note |
|---|---|
| Time-to-first-euro | 2/10 |
| Acquisition organique | 3/10 |
| Faisabilité technique | 9/10 |
| Marge | 8/10 (théorique — chiffre d'affaires attendu proche de zéro) |
| **Différenciation** | **1/10** |

**Pourquoi c'est mort.** Le produit est trivial à construire, et c'est précisément le problème : au moins quinze acteurs le livrent déjà gratuitement, dont plusieurs sans même demander de compte. Le créneau français est déjà occupé par [Tareno](https://tareno.co/fr/tools/tiktok-safe-zone-checker) et par [Adobe Express en français](https://www.adobe.com/fr/express/feature/design/safe-zone/tiktok).

Trois faits suffisent à trancher :

1. **CapCut a intégré la fonction nativement.** Or CapCut est l'éditeur par défaut des 16-25 ans. Un outil web externe devient un détour par rapport à une fonction déjà présente là où le montage se fait. ([confirmation](https://www.instagram.com/reel/DTLeDsNkolQ/))
2. **Le plafond de prix du marché est d'environ 5 $.** Le seul concurrent qui ose faire payer, [Kreatli](https://kreatli.com/safe-zone-checker), vend 4,99 $ à vie — et seulement pour débloquer l'export d'un outil déjà gratuit. Les gabarits équivalents sur Gumroad se vendent entre 0 € et 2,99 €. Le plancher imposé de 9 € est donc **au-dessus du plafond du marché**.
3. **Chaque idée d'amélioration est déjà prise** : le multi-plateformes par [DominateTools](https://dominatetools.com/tools/safe-zone/) (8 plateformes), l'export d'aperçu par [Playcut](https://playcut.ai/tools/safe-zone-checker/), les gabarits téléchargeables par [AdKit](https://adkit.so/tools/safe-zones), et le français par Tareno.

**Le point le plus instructif** : il existe une vraie demande *informationnelle* (pages TikTok Discover dédiées, guides SEO produits en masse) mais **aucune demande transactionnelle**. Les gens cherchent « c'est quoi la safe zone », pas « acheter un outil de safe zone ». Aucun fil Reddit de détresse n'a été trouvé malgré trois recherches ciblées — l'absence de plainte est en soi un signal : le contournement gratuit prend quatre-vingt-dix secondes (télécharger un PNG une fois, le poser en calque dans CapCut, le réutiliser à vie). Il n'y a pas de friction récurrente à monétiser.

**Risque supplémentaire s'il fallait quand même le faire** : les interfaces de TikTok, Instagram et YouTube changent régulièrement, donc un pack vendu « à vie » devient faux en quelques mois et génère du service après-vente sans revenu récurrent pour l'absorber.

**À retenir pour la suite** : ce type d'outil n'a de valeur qu'en **aimant SEO gratuit** placé en amont d'un produit payant qui, lui, répond à une douleur récurrente. Jamais comme produit principal.

### 3.2 Idée 12 — Aperçu et test A/B de miniatures YouTube → ❌ **KILL**

| Critère | Note |
|---|---|
| Time-to-first-euro | 2/10 |
| Acquisition organique | 2/10 |
| Faisabilité technique | 9/10 |
| Marge | 8/10 (théorique, inatteignable) |
| **Différenciation** | **1/10** |

**Le fait qui tranche** : depuis **décembre 2025**, YouTube propose *Test & Compare* nativement, déployé mondialement, et **l'appartenance au programme partenaire n'est plus requise** — il suffit d'avoir activé les fonctions avancées. La cible 16-25 ans non monétisée y a donc accès **gratuitement**. Le seul argument qui restait aux outils tiers, « le programme partenaire m'est fermé », est mort. Sources : [Search Engine Journal](https://www.searchenginejournal.com/youtube-title-a-b-testing-rolls-out-globally-to-creators/562571/) · [Social Media Today](https://www.socialmediatoday.com/news/youtube-expands-access-to-title-ab-testing-adds-c-span-to-youtube-tv/807236/) · [Siècle Digital, 16/12/2025](https://siecledigital.fr/2025/12/16/youtube-permet-de-tester-lefficacite-des-titres-et-miniatures/)

Pire : l'outil natif arbitre sur le **temps de visionnage par impression**, une métrique qu'aucun tiers ne peut mesurer faute d'accès aux impressions. On ne peut structurellement pas rivaliser sur la donnée.

Le reste du terrain est déjà saturé : au moins quinze previewers gratuits sans inscription couvrent exactement le cahier des charges ([1of10](https://1of10.com/tools/youtube-thumbnail-preview), [CollabPals](https://www.collabpals.com/tools/youtube-thumbnail-previewer), [Thumblytics](https://thumblytics.com/youtube-mockup), [thmbtester](https://www.thmbtester.com/)…), des extensions Chrome gratuites existent — dont une dont le premium est à **2,99 $/mois**, ce qui fixe le prix psychologique quasi à zéro — et le vote communautaire est déjà couvert gratuitement par Discord (un serveur « Thumbnails » de plus de 17 000 membres).

**Incohérence de cible relevée au passage** : les 18-24 ans ne pèsent que **15,8 %** de l'audience YouTube contre 21,7 % pour les 25-34 ans ([TranscribeTube](https://www.transcribetube.com/blog/youtube-demographics)). Le produit viserait donc surtout une tranche d'âge que le client n'a pas retenue.

### 3.3 Idée 11 — Media kit et kit de négociation → ⚠️ **GO-CONDITIONNEL**, mais pas sous la forme envisagée

| Critère | Note |
|---|---|
| Time-to-first-euro | 6/10 |
| Acquisition organique | 5/10 |
| Faisabilité technique | 9/10 |
| Marge | 9/10 |
| Différenciation — idée telle quelle | **2/10** |
| Différenciation — avec le pivot ci-dessous | 7/10 |

**Le media kit seul est mort**, pour la même raison que les deux précédentes : Canva, [Beacons](https://home.beacons.ai/plans) (media kit inclus dans l'offre gratuite), [CollabKit](https://collabkit.me/free-tools) et [CreatorsJet](https://creatorsjet.com/media-kit) le donnent gratuitement, et les calculateurs de tarifs sont une commodité offerte sans inscription par [HypeAuditor](https://hypeauditor.com/free-tools/instagram-pricing-calculator/) et [Collabstr](https://collabstr.com/influencer-price-calculator). Le prix de marché observé pour un template de media kit est de **2,70 à 10 $** sur Etsy et Gumroad — très en dessous du plancher de 9 € imposé, et sans commune mesure avec 29 €.

**Ce qui a de la valeur, en revanche, c'est le droit français.** Le **décret n° 2025-1137 du 28 novembre 2025** impose, depuis le **1er janvier 2026**, un **contrat écrit à peine de nullité** pour tout partenariat entre un annonceur et un créateur au-delà de **1 000 € HT**, avantages en nature inclus, avec des mentions obligatoires précises (identités, résidence fiscale, missions, rémunération, valorisation des avantages en nature, cession des droits de propriété intellectuelle). S'y ajoutent les obligations de mention « publicité » et « image retouchée » issues de la [loi n° 2023-451 du 9 juin 2023](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047663185). Voir aussi l'[analyse Joffe & Associés](https://www.joffeassocies.com/loi-influenceurs-le-seuil-de-contractualisation-obligatoire-est-fixe/) et la [lettre de la DAJ, Bercy](https://www.economie.gouv.fr/daj/lettre-de-la-daj-la-france-devient-le-premier-pays-europeen-se-doter-dun-cadre-juridique-de).

**Aucun des concurrents relevés ne couvre le droit français.** C'est la seule barrière défendable trouvée sur ce segment : elle est vérifiable, datée, et elle a une conséquence concrète (un contrat non écrit est nul).

**⚠️ La faille, signalée honnêtement par la recherche** : l'obligation ne mord qu'**au-delà de 1 000 € HT**, alors que la cible — un créateur de quelques milliers d'abonnés — encaisse plutôt **50 à 350 €** par partenariat selon les barèmes français relevés ([Be-Hype](https://www.be-hype.com/blog/tarif-influenceur-grille-prix-complete-2026)). L'argument légal ne s'applique donc pas au cœur de cible. C'est le point à trancher avant de construire quoi que ce soit sur cette base.

**Ce que la recherche n'a pas pu établir** (trous assumés, à ne pas combler par de l'optimisme) : aucun volume de recherche chiffré n'a pu être vérifié, et aucun fil de discussion Reddit exploitable n'a été trouvé malgré plusieurs requêtes ciblées — Reddit étant par ailleurs inaccessible depuis cet environnement. **La demande française reste donc non démontrée** sur ce créneau précis.

### 3.4 Idée 13 — Packs d'assets pour créateurs et streamers → ❌ **KILL**

| Critère | Note |
|---|---|
| Time-to-first-euro | 4/10 |
| Acquisition organique | 3/10 |
| **Faisabilité (compétence design)** | **2/10** |
| Marge | 6/10 |
| Différenciation | 2/10 |

C'est le seul segment où **le modèle one-shot est prouvé** : une boutique Etsy spécialisée affiche **5 062 ventes** cumulées ([BenArtTwitch](https://www.etsy.com/shop/BenArtTwitch)), et le marché est réel avec **7,06 millions de streamers actifs** en 2026 ([Notta](https://www.notta.ai/en/blog/twitch-statistics)). Mais l'argent va à des motion designers établis, avec des catalogues de 40 à 100 références et des années d'antériorité en référencement.

**Trois obstacles, dont un dirimant.**

*Le fondateur n'est pas designer, et les trois raccourcis sont juridiquement fermés.* Envato Elements interdit explicitement de redistribuer ses éléments « as stock assets, **in tools or templates**, or as source files » ([politique Envato](https://help.elements.envato.com/hc/en-us/articles/360000621803-Prohibited-Usage-of-Envato-Items)) — un pack construit dessus est une violation directe. Les polices sous licence OFL **ne peuvent pas être vendues seules** ([licence](https://theleagueof.github.io/licenses/ofl-1.1/)), ce qui rend un « font pack » payant invendable en l'état. Et la génération par IA se heurte à l'obligation de divulgation d'Etsy, qui retire des annonces dont les visuels sont générés ([politique Etsy 2026](https://ngini.com/en-us/blog/etsy-ai-disclosure-policy-2026-explained)) — sachant que le cœur du produit, ce sont les **animations** (alertes, transitions, contours de webcam animés), que l'IA générative ne produit toujours pas et qui relèvent d'After Effects.

*Les prix se sont effondrés.* Des packs SFX se vendent **1,49 $** et **2 $** sur Gumroad, un pack « 1000+ Cinematic SFX » est carrément gratuit, et un pack repéré affiche **3 ventes**. Au-dessus, StreamElements distribue ses overlays **gratuitement à 1,1 million de créateurs**, et plus de 125 packs gratuits sont recensés publiquement. CapCut, de son côté, met à jour quotidiennement **plus de 500 templates gratuits** dans l'application.

*L'angle « développeur » est déjà pris par du gratuit.* Le réflexe « pack + configurateur web » est mort-né : des générateurs d'overlay navigateur vers OBS existent déjà sans frais ([Vortexia](https://vortexia.live/visuals/free-stream-overlay-maker/), [Oakway](https://oakwaygraphics.com/free-stream-overlay-generator/), Canva). Le code n'apporte aucune rareté ici — c'est l'esthétique qui est rare, et c'est précisément ce qui manque au fondateur.

### 3.5 Idée 15 — Extension Chrome payante pour créateurs → ❌ **KILL**

| Critère | Note |
|---|---|
| Time-to-first-euro | 4/10 |
| Acquisition organique | 6/10 |
| **Faisabilité + maintenance** | **3/10** |
| Marge | 7/10 |
| Différenciation | 2/10 |

**Le tueur, c'est la maintenance couplée au paiement unique.** TikTok a déjà migré la structure de ses données internes, et son système anti-robot **retire purement le contenu JSON** pour le trafic jugé suspect ([issue yt-dlp #16199](https://github.com/yt-dlp/yt-dlp/issues/16199)). Une équipe entière maintient yt-dlp ; le fondateur disposerait de 5 à 10 h/semaine pour suivre trois plateformes. Or chaque panne silencieuse provoque une vague d'avis à une étoile, ce qui fait chuter le classement dans le Chrome Web Store — dont l'algorithme pondère la note et la vélocité d'installation. **Vendre un accès « à vie » engage donc à une maintenance perpétuelle sans aucun revenu récurrent pour la financer** : c'est le pire couple modèle/risque possible.

**Deux des quatre pistes envisagées sont juridiquement suicidaires.** Le téléchargement sans filigrane cumule une violation des règles du Chrome Web Store et des conditions de TikTok, qui interdisent d'« altérer les filigranes » — avec à la clé la suspension de **tout le compte éditeur**, pas seulement de l'extension. Le scraping est interdit par les conditions de TikTok et de YouTube. S'y ajoute une contrainte toute fraîche : la mise à jour des règles du Chrome Web Store **applicable depuis le 1er août 2026**, soit huit jours avant cette recherche, impose que toute donnée collectée soit strictement nécessaire à la finalité déclarée ([blog Chrome](https://developer.chrome.com/blog/cws-policy-updates-2026)) — ce qui place l'envoi de données vers un VPS en zone rouge.

**Et la valeur est déjà distribuée gratuitement** : KOLSprite compte environ 50 000 utilisateurs à 0 €, et les sons et hashtags tendance sont fournis officiellement et gratuitement par le TikTok Creative Center. Les avis négatifs relevés sur des outils concurrents montrent par ailleurs un rejet frontal du paywall par les jeunes créateurs.

**Élément réutilisable malgré le rejet** : l'analyse de l'encaissement. Google a fermé son système de paiement intégré en février 2021 ; il ne reste que les **5 $ d'inscription développeur, une seule fois**. Le reste passe soit par ExtensionPay (5 % + frais Stripe), soit — recommandé — par un **vendeur de référence** type Lemon Squeezy (5 % + 0,50 $) ou Paddle (~5 % + 0,50 €) qui devient vendeur légal et prend la TVA mondiale à sa charge. Ce point vaut pour **n'importe quel** produit numérique retenu, et est repris en §5.

### 3.6 Idée 14 — Générateur d'accroches et de scripts en français → ❌ **KILL**

| Critère | Note |
|---|---|
| Time-to-first-euro | 4/10 |
| Acquisition organique | 2/10 |
| Faisabilité technique | 8/10 |
| Marge | 4/10 |
| **Différenciation** | **1/10** |

L'hypothèse de départ — « les outils sont anglophones, le français sonne faux » — est **exacte mais indéfendable**. Le correctif est un meilleur prompt : copiable en dix minutes, ni brevetable ni protégeable. Un bon prompt n'est pas un produit, c'est un article de blog.

Le produit s'insérerait entre **trois gratuits supérieurs** : les accroches françaises sont déjà publiées gratuitement par au moins cinq blogs ([kacom.fr](https://kacom.fr/50-idees-de-hooks-pour-tiktok/), [agenceclipping.fr](https://agenceclipping.fr/blog/hooks-viraux-exemples), [takema-studio.com](https://www.takema-studio.com/createurs/hook-tiktok)…) ; le générateur est gratuit et sans inscription chez au moins six concurrents, **dont trois francophones** ([content.ma](https://content.ma/generateur-script-ugc) — qui occupe exactement l'angle visé, [WiziShop](https://www.wizishop.fr/blog/generateur-script-tiktok), [GenReels](https://genreels.fr/)) ; et l'analyse des formats qui marchent est fournie **gratuitement par TikTok lui-même** via Creator Search Insights, qui donne les vrais volumes de recherche et les sujets sous-couverts.

**Défaut économique de structure** : un paiement unique qui finance des appels à un modèle de langage illimités dans le temps est un modèle à perte. La seule variante viable — une bibliothèque statique — est précisément celle qui est déjà donnée gratuitement.

---

### 3.7 ⚠️ Le constat qui domine toute la nuit : la solvabilité du segment

Cinq idées sur six sont éliminées, et **toujours par le même mécanisme**. Il faut le nommer, parce qu'il conditionne la recommandation finale.

**1. Les 16-25 ans sont la population la plus habituée au gratuit du marché.** Une enquête Ipsos BVA menée du 9 au 26 janvier 2026 auprès de 3 800 jeunes de 11 à 25 ans montre que **77 % des 18-24 ans utilisent régulièrement une IA générative, mais seulement 23 % ont un abonnement payant** — et 16 % chez les lycéens. ([The Media Leader](https://fr.themedialeader.com/lusage-quotidien-de-lia-generative-explose-chez-les-18-25-ans-en-france/))

**2. Les créateurs français gagnent peu.** Le revenu médian déclaré est d'environ **1 600 €/mois**, **56 % sont sous 1 000 €/mois**, **85 % sous le SMIC**, et moins de 5 % dépassent 2 000 € net. On compte environ **150 000 influenceurs** et **348 000 comptes monétisant** en France. ([Creator School](https://www.creatorschool.fr/blog/createur-de-contenu-salaire-france) · [Ruche & Pollen](https://ruche-pollen.com/blog-social-media/combien-gagne-createur-contenu-france-2026)) Un créateur de 16 à 25 ans visé par ce produit est très majoritairement **pré-revenu, donc à budget zéro**.

**3. Les plateformes absorbent systématiquement les outils.** YouTube a intégré le test A/B, CapCut les zones sûres et 500+ templates gratuits, TikTok les données de recherche. Tout outil de créateur simple à construire est, par construction, simple à absorber — et il l'est gratuitement.

**4. Le prix de référence du segment est de 0 à 10 €**, observé de façon convergente sur les zones sûres (0-5 $), les media kits (2,70-10 $), les packs d'assets (1,49-15 $) et les packs d'accroches (12,99-15 $). **Le plancher de 9 € demandé est donc au niveau du plafond du marché, et 29 € est hors de portée** — sauf si le produit change de nature.

**La conclusion opérationnelle** : sur ce segment, un produit ne peut se vendre au-delà de 10 € que s'il résout un problème à **conséquence financière ou légale chiffrable** — pas un problème de confort créatif. C'est exactement le fil que suit la seule piste survivante, testée en §3.8.

### 3.8 Idée 19 — Kit administratif et fiscal du créateur → ❌ **KILL sur le volet informationnel**

Hypothèse testée en cours de nuit, née du constat §3.7 : le moment où un jeune créateur a **à la fois de l'argent et une obligation légale**, c'est son premier partenariat rémunéré. Vendre l'information qui l'entoure semblait échapper au piège du gratuit.

**C'est faux, et pour une raison qu'il faut retenir** : ce n'est plus la plateforme qui absorbe le besoin, ce sont les **SaaS financés et les cabinets comptables qui produisent cette information gratuitement, comme coût d'acquisition de prospects**. Legalstart, Qonto, Compta-Online, Streamlabs, des dizaines de cabinets et la newsletter [Tous Influenceurs](https://www.tousinfluenceurs.fr/p/comment-declarer-des-revenus-youtube) — déjà positionnée exactement sur la cible — couvrent le contenu envisagé. Ils peuvent le donner indéfiniment ; un kit à 19 € doit battre un article gratuit écrit par un expert-comptable **et** la réponse instantanée d'un modèle de langage. Sur de l'information pure, c'est perdu d'avance.

**Le référencement est le point de rupture** : les premières positions sont tenues par des SaaS financés, des cabinets et des médias, avec du contenu daté 2026. Un domaine neuf, sans budget ni liens entrants, ne prend pas ces requêtes.

**Ce qui survit malgré tout** : le basculement de l'*information* vers l'*artefact*. Un modèle de contrat conforme et une facture conforme sont des objets, pas du contenu — on ne les remplace pas par un article. C'est la brique conservée en §5.

> ⚠️ **Fiabilité dégradée de cette analyse** : le quota de recherche web de la session s'est épuisé pendant ce travail (200 appels sur 200). L'agent n'a pu mener que **4 recherches** au lieu des 15 prévues et le signale explicitement. Deux pans du brief sont donc **non instruits** : les produits payants concurrents sur ce créneau, et le sous-segment des **créateurs mineurs et de leurs parents** — seule hypothèse qui n'a pas pu être falsifiée, et où l'on peut anticiper une solvabilité parentale et un contenu gratuit plus rare. **À instruire en priorité au réveil.**

---

## 4. Décision

### Ce que la nuit a réellement établi

**Six idées sur sept sont éliminées, avec preuves et sources.** Une seule survit, et sous condition. Ce n'est pas un échec de la recherche : c'est son résultat. Le brief demandait explicitement d'éliminer toute idée déjà bien servie par un acteur établi — appliqué honnêtement, ce critère décime le segment choisi.

| Idée | Verdict | Cause de mort |
|---|---|---|
| 10 · Zones sûres vidéo verticale | ❌ KILL | 15+ gratuits, absorbé nativement par CapCut, plafond de prix ≈ 5 $ |
| 11 · Media kit et négociation | ⚠️ **GO-CONDITIONNEL** | Media kit saturé de gratuit — **mais le volet contractuel français est défendable** |
| 12 · Test de miniatures YouTube | ❌ KILL | Fonction native YouTube depuis 12/2025, gratuite et sans condition de programme partenaire |
| 13 · Packs d'assets | ❌ KILL | Compétence motion absente, licences interdisant la revente, prix effondrés à 1,49-15 $ |
| 14 · Accroches et scripts FR | ❌ KILL | Trois gratuits supérieurs dont trois francophones, et TikTok fournit la donnée |
| 15 · Extension Chrome | ❌ KILL | Maintenance perpétuelle incompatible avec un paiement unique, règles Chrome durcies le 01/08/2026 |
| 19 · Kit administratif | ❌ KILL (info) | Information sur-servie gratuitement par des acteurs financés — **l'artefact survit** |

### La seule chose qui reste debout

Un unique mécanisme a résisté à tous les tests : **une obligation de droit français, datée et vérifiable, qu'aucun outil anglophone ne couvre, et qui produit un artefact qu'un article de blog ne remplace pas.**

Concrètement, deux textes :

- La **[loi n° 2023-451 du 9 juin 2023](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047663185)** sur l'influence commerciale, qui impose la mention « Publicité » ou « Collaboration commerciale » pendant toute la diffusion, la mention des images retouchées, et interdit certains secteurs. **Ces obligations s'appliquent dès le premier partenariat, quel que soit le montant** — c'est ce qui corrige la faille du seuil relevée en §3.3.
- Le **décret n° 2025-1137 du 28 novembre 2025**, qui impose depuis le 1er janvier 2026 un **contrat écrit à peine de nullité** au-delà de **1 000 € HT** par annonceur, avec des mentions obligatoires précises.

### Ce qui n'est PAS validé, et doit être dit

Il faut être direct, parce que le brief demandait une validation par preuves de demande réelle et que celle-ci **n'a pas été obtenue** :

1. **Aucun volume de recherche chiffré n'a pu être vérifié** — aucun outil de mots-clés n'était accessible.
2. **Aucun fil de discussion Reddit n'a pu être lu** — le domaine est bloqué par la politique réseau de la session.
3. **Aucune preuve de vente d'un produit payant équivalent** n'a été trouvée sur ce créneau français précis, faute de quota de recherche.
4. Le référencement des requêtes principales est **tenu par des acteurs financés**.

Autrement dit : l'angle est **défendable juridiquement**, mais la **demande reste à prouver**. C'est une hypothèse solide, pas une certitude — et le protocole de validation à 0 € figure dans le README de démarrage, à exécuter **avant** d'investir davantage de temps.

Pour mémoire, une donnée qui remet les espérances à leur place : **54 % des produits indépendants dont le chiffre d'affaires a été vérifié via Stripe font 0 €**. Les prévisions en tiennent compte.

---

## 5. Infrastructure de paiement et cadre juridique

Ce travail vaut pour **n'importe quel** produit numérique retenu, pas seulement pour Cadré.

### Encaisser sans se noyer dans la TVA

Le point décisif pour une franchise en base qui vend à l'international est le **vendeur de référence** : un prestataire qui devient juridiquement le vendeur et porte la TVA à ta place.

| Prestataire | Vendeur de référence | Commission | Verdict |
|---|---|---|---|
| **Paddle** | Oui | ~5 % + 0,50 $ | ✅ **Recommandé** — aucun frais fixe |
| Lemon Squeezy | Oui | ~5 % + 0,50 $ | Équivalent, mais racheté par Stripe : feuille de route incertaine |
| Gumroad | Oui | ~12,9 % + 0,80 $ | Trop cher — 3,25 € prélevés sur une vente à 19 € |
| Payhip | **Non** | 5 % | ❌ Ne résout pas le problème : tu restes le vendeur |
| Stripe seul | Non | 1,5 % + 0,25 € | Le moins cher, mais toute la TVA reste à ta charge |

Sur une vente à 19 €, Paddle prélève environ 1,45 € contre 3,25 € chez Gumroad. À noter : le montant fixe de 0,50 $ pèse lourdement sur les petits prix — il représente déjà ~10,5 % d'une vente à 9 €, ce qui plaide contre les prix planchers.

### Les règles françaises à respecter

- **TVA** : franchise en base, seuil 2026 de **37 500 €** pour les prestations de services (majoré 41 250 €). La réforme du seuil unique à 25 000 € a été **abandonnée** fin 2025. Mention obligatoire : « TVA non applicable, art. 293 B du CGI ».
- **Ventes B2C dans l'UE** : sous **10 000 €** cumulés par an (art. 259 D du CGI), la taxation reste en France et la franchise s'applique — soit plusieurs centaines de ventes à ce niveau de prix. Un vendeur de référence rend le sujet théorique.
- **Droit de rétractation** : les 14 jours s'appliquent au contenu numérique. Y renoncer suppose **trois conditions cumulatives** (art. L221-28, 13° du code de la consommation) : accord exprès à l'exécution immédiate, reconnaissance explicite de la perte du droit, et confirmation sur support durable. Concrètement : **deux cases distinctes, non pré-cochées**, reprises dans l'e-mail de confirmation. À défaut, le client peut se rétracter **et ne rien devoir**, même après téléchargement.
- **Médiation de la consommation** : **obligatoire** (art. L612-1) pour tout vendeur B2C, sans exemption de taille, **avant la première vente**. Fourchette relevée : **30 à 80 €/an**. C'est le seul poste incompressible du budget, et le plus souvent oublié.
- **RGPD** : en ne déposant **aucun traceur non essentiel**, on se dispense légalement de bandeau cookies. Zéro euro, zéro friction — c'est un choix de conception, pas une négligence.
- **Mineurs** : clause d'autorisation parentale dans les CGV et case à cocher à l'achat, remboursement commercial en cas de réclamation d'un parent.

---

## 6. Pistes de repli documentées

### Repli n°2 — Outil de candidature spontanée pour l'alternance

**Pourquoi c'est la meilleure alternative** : le fondateur **vit lui-même le problème** (alternance + école). C'est le seul dossier de la nuit où l'adéquation fondateur-problème est directe, avec un accès immédiat au terrain et aux premiers utilisateurs — un avantage que Cadré n'a pas.

**Marché** : plus d'un million d'alternants en France, **846 700 nouveaux contrats** signés en 2024, dont près de 6 sur 10 pour un diplôme bac+2 ou plus. La difficulté s'est accrue : plusieurs dizaines à plusieurs centaines de candidatures par offre.

**L'angle** : environ **70 % des entreprises recruteraient sans publier d'offre**. La candidature spontanée ciblée est donc le vrai levier, et c'est exactement ce que les sites d'offres n'outillent pas. Le produit consisterait à identifier les entreprises correspondant à un profil et à une zone via les données publiques d'entreprises, à générer des candidatures personnalisées et à suivre les relances.

**Concurrence** : les sites d'offres classiques (Indeed, Welcome to the Jungle, La Bonne Alternance) couvrent les offres publiées — donc les 30 % restants. Aucun ne travaille sérieusement le gisement non publié. ⚠️ **Analyse concurrentielle non approfondie** : cette piste n'a pas eu de sous-agent dédié, le quota ayant été épuisé.

**Modèle** : paiement unique de 9 à 19 €, au pic de tension (août-septembre, à quelques semaines de la rentrée, ou janvier-mars pour la campagne suivante). Acquisition organique naturelle : TikTok, serveurs Discord d'écoles, LinkedIn étudiant, bouche-à-oreille en cours.

**Ce qu'il faut vérifier en premier** : la solvabilité. Un étudiant sans contrat est aussi un étudiant sans revenu — mais c'est un moment de tension extrême, et les parents peuvent payer.

### Repli n°3 — Créateurs mineurs et leurs parents · **piste non instruite**

**C'est la seule hypothèse que la recherche n'a pas pu falsifier**, faute de quota. Elle mérite d'être creusée en priorité, pour trois raisons :

1. **La solvabilité change de mains.** Ce sont les parents qui paient, pas l'adolescent — ce qui neutralise d'un coup le problème central du segment, documenté en §3.7.
2. **Le cadre légal est spécifique.** La France a légiféré sur les enfants influenceurs et le travail des mineurs créateurs, avec des obligations propres (autorisation administrative, consignation des revenus). ⚠️ Références et contenu **non vérifiés** — c'est précisément ce qu'il faut instruire.
3. **Le contenu gratuit y est probablement plus rare.** Les banques et legaltech produisent du contenu pour les créateurs adultes, moins pour ce cas de figure.

**Première action** : relancer une recherche approfondie sur ce sous-segment avec un quota suffisant. Un seul point à trancher — les parents cherchent-ils activement de l'information sur ce sujet, et existe-t-il déjà une offre payante ?

### Repli n°4 — L'artefact contractuel, vendu à un autre public

Si Cadré échoue par manque de solvabilité du public et non par absence de besoin, le même artefact peut viser un public qui, lui, a un budget : **les petites marques et agences** qui contractualisent avec des créateurs et sont soumises aux mêmes obligations, du côté annonceur. Ticket plus élevé, mais prospection active nécessaire — donc à évaluer contre l'enveloppe de 5 à 10 h/semaine.
