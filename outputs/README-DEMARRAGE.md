# README — démarrage

## Résumé exécutif

**Idée retenue : Cadré**, les outils administratifs du jeune créateur français — simulateur de revenu net et diagnostic de conformité gratuits, générateur de contrat de partenariat et de facture à 19 € en paiement unique.
**Pourquoi elle** : c'est la seule des sept idées instruites qui ait survécu à la recherche. Six ont été éliminées avec preuves, toujours par le même mécanisme — le gratuit et les plateformes absorbent tout outil créateur. Seule une obligation de droit français, qu'aucun outil anglophone ne couvre, reste défendable.
**Potentiel de revenus** : modeste et incertain. Scénario réaliste à 3 mois : **0 à 300 €**. Le segment est le moins solvable du marché et la demande n'a **pas** pu être prouvée cette nuit (voir la limite ci-dessous).
**⚠️ À lire avant tout** : trois blocages d'environnement ont dégradé la recherche — réseau bloqué, quota de recherche épuisé, limite de session. **Aucun volume de recherche ni fil de discussion n'a pu être vérifié.** L'angle juridique est solide ; la demande est une hypothèse.

**Tes 3 prochaines actions**
1. **Exécuter le test de validation à 0 € (2 semaines)** — étape 1 ci-dessous. Ne branche pas le paiement avant.
2. **Vérifier les barèmes et les références juridiques** — étape 2. Rien ne doit être publié avant.
3. **Décider** : si le test échoue, bascule sur la piste de repli n°2 documentée dans `recherche-marche.md`.

---

## Ce qui a été construit

Dans `outputs/cadre/`, une application Next.js 16 complète et testée :

| Page | Rôle | État |
|---|---|---|
| `/` | Accueil, argumentaire, prix | ✅ |
| `/simulateur` | **Gratuit** — ce qu'il reste sur un partenariat | ✅ fonctionnel |
| `/conformite` | **Gratuit** — diagnostic en 6 questions | ✅ fonctionnel |
| `/generateur` | **Payant 19 €** — contrat + facture en PDF | ✅ fonctionnel, paiement non branché |
| `/guide` | Contenu de référencement | ✅ |
| `/mentions-legales`, `/cgv`, `/confidentialite` | Obligations légales | ✅ rédigées, placeholders à remplir |

**Vérifications réellement exécutées** : build de production vert (8 pages statiques), serveur démarré et 8 routes répondant 200, **17 tests métier passants** couvrant le simulateur, les règles du diagnostic, le contenu des documents et la génération PDF réelle (PDF valide de 2 pages).

```bash
cd outputs/cadre
npm install
npm run dev     # http://localhost:3000
npm test        # 17 vérifications
npm run build
```

---

## Ce que je n'ai pas pu faire, et pourquoi

Tu m'avais demandé de contourner et de noter plutôt que de bloquer. Voici ce qui a été empêché :

| Blocage | Effet | Ce que ça t'impose |
|---|---|---|
| **Politique réseau** — accès direct aux pages bloqué en 403 (Reddit, Canva, Legifrance, urssaf.fr, impots.gouv.fr…) | Aucune page concurrente ni source officielle n'a pu être lue directement | Revérifier chaque chiffre et chaque référence légale |
| **Quota de recherche épuisé** (200/200) | La dernière idée n'a été instruite qu'à 4 recherches sur 15 | Le sous-segment « créateurs mineurs » reste **non instruit** |
| **Limite de session** | Le sous-agent des pages légales a échoué | Pages rédigées à la main, à faire relire |
| **Consigne : ne rien créer ni payer** | Aucun compte, aucun paiement, rien en ligne | Toutes les actions ci-dessous te reviennent |

**Placeholders à remplir** : ton prénom/nom, SIRET, adresse, e-mail, téléphone, domaine, médiateur, date. Ils sont marqués `[À_REMPLACER_…]` dans le code — `grep -rn "À_REMPLACER" outputs/cadre/src` les liste tous. Ton message d'origine avait ces informations masquées par des `xxx`, je n'ai donc pas pu les renseigner. Même chose pour tes deux projets existants : je n'ai pas pu vérifier l'absence de doublon.

---

## Ta checklist

### Étape 1 — Valider la demande AVANT d'investir · 0 € · 2 semaines, ~2 h/semaine

C'est l'étape la plus importante du document. La recherche n'a pas pu prouver la demande, donc tu la prouves toi-même, gratuitement, avant de brancher quoi que ce soit.

1. Publie **5 vidéos courtes** sur le thème « ton contrat de partenariat ne vaut rien sans ça » / « une marque te propose 800 €, tu touches en fait X ». Utilise le simulateur à l'écran : le chiffre qui tombe est le contenu.
2. Mets en ligne **uniquement les deux outils gratuits**, sur un sous-domaine que tu possèdes déjà. Coût : 0 €.
3. **Critère de décision, fixé à l'avance** : si en 2 semaines tu n'obtiens ni 500 vues cumulées ni 30 utilisations du simulateur, **arrête** et passe à la piste de repli n°2. Ce n'est pas un échec, c'est 15 heures économisées.

### Étape 2 — Vérifier ce qui est invérifiable pour moi · 0 € · 2 à 3 h

**Rien ne doit être publié avant cette étape.** Le produit repose sur des chiffres et des textes que je n'ai pas pu contrôler.

1. **Barèmes** dans `outputs/cadre/src/lib/bareme.ts` : taux de cotisations, abattements, versement libératoire, tranches d'impôt. Vérifie sur urssaf.fr et impots.gouv.fr. Le taux des cotisations BNC est le plus susceptible d'être faux — il a été relevé par paliers ces dernières années.
2. Renseigne ensuite `VERIFIE_LE` dans ce fichier : l'avertissement rouge du simulateur disparaîtra automatiquement.
3. **Références juridiques** : contrôle sur Légifrance le seuil de 1 000 € HT du décret n° 2025-1137 et les obligations de la loi n° 2023-451. Le seuil est l'argument central du produit — une erreur ici serait la plus coûteuse.
4. **N'utilise jamais** le chiffre de sanction « 7 ans et 300 000 € » croisé pendant la recherche : il est douteux et n'a pas été confirmé. Il n'apparaît nulle part dans le code, garde-le comme ça.
5. Cherche les commentaires `⚠️ À VÉRIFIER` dans les pages légales et tranche chacun.

### Étape 3 — Adhérer à un médiateur de la consommation · **30 à 80 €/an** · 1 h

**Obligatoire avant la première vente** (article L612-1 du code de la consommation), sans exemption liée à la taille. C'est le seul poste réellement incompressible, et le plus souvent oublié. Choisis un médiateur agréé sur la liste officielle CECMC, puis reporte ses coordonnées dans les mentions légales et les CGV.

### Étape 4 — Ouvrir le compte Paddle · 0 € · 1 à 3 h + délai de validation

Paddle agit comme **vendeur de référence** : il devient le vendeur juridique et prend en charge la TVA mondiale à ta place. C'est ce qui te permet de rester en franchise en base sans jamais toucher au guichet unique. Commission : environ 5 % + 0,50 $, soit ~1,45 € sur une vente à 19 €.

À vérifier auprès de ton service des impôts : si l'entité Paddle qui te règle est établie dans l'UE, un numéro de TVA intracommunautaire et une déclaration européenne de services peuvent devenir nécessaires.

### Étape 5 — Brancher le paiement · 0 € · 2 à 3 h

Tout est documenté dans `outputs/cadre/src/lib/acces.ts`. Trois points impératifs :

1. Les **deux cases à cocher distinctes et non pré-cochées** exigées par l'article L221-28, 13° du code de la consommation. Leur formulation exacte est déjà dans les CGV — reprends-la mot pour mot, et répète-la dans l'e-mail de confirmation.
2. La case d'**autorisation parentale** pour les mineurs.
3. La vérification du paiement doit se faire **côté serveur**, via un webhook. Un déblocage local est contournable en dix secondes.
4. **Supprime le bouton « mode démonstration »** du générateur. Il est volontairement visible et signalé dans l'interface pour que tu ne l'oublies pas.

### Étape 6 — Déployer sur ton VPS · 0 € · 1 h

Sous-domaine, `.env.local` avec `NEXT_PUBLIC_SITE_URL`, `npm run build`, service systemd, proxy Nginx, SSL wildcard déjà en place. Rien à acheter.

### Étape 7 — Se raccorder à une plateforme agréée · 0 à 10 €/mois · 1 à 2 h

Sans rapport avec Cadré, mais l'échéance tombe maintenant : depuis le **1er septembre 2026**, toute entreprise assujettie à la TVA — franchise en base comprise — doit pouvoir **recevoir** des factures électroniques via une plateforme agréée par la DGFiP. Des offres gratuites existent pour les micro-entrepreneurs, mais je n'ai pas pu vérifier lesquelles.

---

## Budget du premier mois

| Poste | Coût |
|---|---|
| Médiateur de la consommation (obligatoire, annuel) | **30 à 80 €** |
| Plateforme agréée facturation électronique | 0 à 10 € |
| Domaine et hébergement | **0 €** — tu les possèdes déjà |
| Compte Paddle | 0 € |
| CGV, mentions légales, RGPD | 0 € — rédigés |
| **Total** | **30 à 90 €** ✅ sous les 100 € |

Commissions Paddle : ~7,6 % du chiffre d'affaires, prélevées à la vente, donc nulles sans vente.

---

## Charge hebdomadaire

| Activité | Heures |
|---|---|
| Contenu court (3 vidéos) | 2 à 3 h |
| Support et corrections | 0,5 à 1 h |
| Contenu de référencement (1 article/quinzaine) | 1 à 1,5 h |
| Veille juridique et mise à jour | 0,5 h |
| **Total** | **4 à 6 h** ✅ sous les 10 h |

Le poste qui dérape est la veille juridique : un produit vendu « à vie » sur du droit t'engage à le tenir à jour. Si le droit bouge et que tu ne suis pas, tu vends un document faux.

---

## Ce dont tu dois te méfier

- **La demande n'est pas prouvée.** C'est la faiblesse principale, et l'étape 1 existe pour ça.
- **Le seuil de 1 000 € est au-dessus de ce que gagne ton cœur de cible.** L'obligation de contrat écrit ne mord pas chez un créateur qui touche 300 €. C'est pourquoi le produit s'appuie aussi sur les obligations de transparence, qui, elles, s'appliquent dès le premier euro — mais l'argument de vente est mécaniquement plus faible en bas de marché.
- **Tu vends du document juridique sans être juriste.** Les modèles doivent rester génériques, jamais adaptés à un cas particulier. Les avertissements sont déjà en place partout : ne les retire pas.
- **Le référencement est verrouillé** sur les requêtes principales par des acteurs financés. Ton canal réaliste est la vidéo courte, pas Google.

---

## Si tu veux changer d'idée au réveil

`recherche-marche.md` documente les pistes de repli avec leur concurrence et leur angle. La piste n°2 — l'outil de candidature spontanée pour l'alternance — a un atout que Cadré n'a pas : **tu vis le problème toi-même**, ce qui te donne un accès direct au terrain et aux premiers utilisateurs.

Et la piste la plus prometteuse reste **non instruite**, faute de quota : les **créateurs mineurs et leurs parents**. Solvabilité parentale, obligations légales spécifiques, contenu gratuit probablement plus rare. C'est la première chose que j'irais creuser.
