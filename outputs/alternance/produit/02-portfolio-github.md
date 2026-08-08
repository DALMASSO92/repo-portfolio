# 02 — Transformer ton GitHub en argument de recrutement

**À quoi sert ce fichier :** faire en sorte qu'un développeur qui ouvre ton profil GitHub pendant 90 secondes ait envie de te rencontrer. Il contient un modèle complet de README de projet et un modèle de README de profil. **Temps de travail : 4 à 6 h**, à étaler sur deux ou trois sessions — c'est la pièce la plus longue du Kit, et la plus rentable pour un profil junior.

---

## 1. Pourquoi c'est la pièce qui te différencie

Sur un CV d'alternance en informatique, tout le monde écrit les mêmes lignes : React, Python, projet de fin de semestre, méthode agile. Le CV te met dans la pile. **Le GitHub t'en sort.**

Raison simple : c'est la seule chose que ton futur tuteur peut **vérifier lui-même, sans te croire sur parole**. Un lead dev qui hésite entre trois candidatures ouvre les trois dépôts. Celui qui a un dépôt lisible gagne, même si son projet est plus modeste, parce que le recruteur peut enfin arrêter de deviner.

Et il y a un effet secondaire décisif : **un dépôt bien écrit fournit le sujet de l'entretien technique.** Si ton README explique un choix d'architecture, on te posera des questions dessus — c'est-à-dire sur un terrain que tu as préparé. Un GitHub soigné, c'est un entretien que tu as partiellement écrit à l'avance.

---

## 2. Ce qu'un recruteur technique regarde vraiment en 90 secondes

Voici l'ordre réel, observé, du parcours d'un dev qui ouvre ton profil. Il ne lit pas ton code ligne par ligne — il n'en a ni le temps ni l'envie.

| Temps | Ce qu'il fait | Ce qu'il en conclut |
|---|---|---|
| **0-10 s** | Regarde la page de profil : bio, dépôts épinglés, activité | « Est-ce que c'est vivant ou est-ce que c'est un profil créé pour le CV ? » |
| **10-20 s** | Choisit **un** dépôt épinglé, souvent le premier | — |
| **20-50 s** | Lit le début du README : à quoi ça sert, la stack, une capture d'écran | « Est-ce que je comprends ce que c'est en 15 secondes ? » Si non, il ferme. |
| **50-70 s** | Regarde l'arborescence des fichiers | « Est-ce que c'est rangé ? Est-ce qu'il y a des tests ? Un `.gitignore` ? Un `node_modules` commité ? » |
| **70-85 s** | Ouvre l'historique des commits | « Est-ce qu'il a travaillé régulièrement, ou est-ce que tout a été poussé en un seul commit la veille du rendu ? » |
| **85-90 s** | Ouvre **un** fichier de code au hasard | « Est-ce que ça se lit ? Nommage, indentation, fonctions de 300 lignes ? » |

**Ce qu'il ne regarde pas** : le nombre d'étoiles (aucun junior n'en a), le nombre de dépôts, les badges décoratifs, les statistiques animées, le nombre de langages détectés.

**Les cinq signaux qui font fermer l'onglet immédiatement :**
1. Un README qui est encore celui généré par `create-react-app` ou `npx`.
2. Des dossiers `node_modules/`, `venv/`, `.env` ou `dist/` commités — signal direct « ne sait pas ce qu'est un `.gitignore` », et le `.env` pose en plus un problème de sécurité.
3. Un unique commit intitulé « projet » ou « final ».
4. Zéro README sur le dépôt épinglé.
5. Des identifiants, clés d'API ou mots de passe en clair dans le code.

---

## 3. Le tri : quoi épingler, quoi archiver

**Le réflexe à combattre :** vouloir montrer beaucoup. Un profil avec 30 dépôts dont 27 sont des exercices de TP est **moins** convaincant qu'un profil avec 4 dépôts soignés. Le recruteur ne lit pas 30 dépôts ; il en ouvre un, tombe sur un TP vide, et généralise.

### La règle : 3 à 6 dépôts épinglés, pas plus

GitHub permet d'épingler jusqu'à 6 dépôts sur ton profil. Vise **4**.

**La sélection idéale pour un profil junior :**

| Emplacement | Type de projet | Ce que ça prouve |
|---|---|---|
| **1** | Ton meilleur projet, idéalement **en ligne et utilisable** | Tu sais finir et déployer, pas seulement démarrer |
| **2** | Un projet **d'école significatif**, avec ton rôle explicité | Tu sais travailler en équipe et avec des contraintes imposées |
| **3** | Un projet **dans la techno du poste visé**, même petit | Tu es pertinent pour cette annonce précise |
| **4** | Un projet qui montre une **autre facette** : script utilitaire, automatisation, configuration d'infrastructure, analyse de données | Tu es curieux au-delà du programme scolaire |

Un projet **petit mais fini** bat systématiquement un projet ambitieux abandonné. Une application de gestion de bibliothèque qui marche vraiment, avec des tests et un README propre, est un meilleur argument qu'un « réseau social » à 4 pages inachevées.

### Que faire des autres dépôts

- **Les TP et exercices** : regroupe-les dans **un seul dépôt** `exercices-[matière]` avec un README d'une ligne qui dit ce que c'est, ou passe-les en privé. Ne les supprime pas — ils font partie de ton historique de contributions.
- **Les forks non modifiés** : ils polluent ton profil. Supprime-les, ou vérifie qu'ils n'apparaissent pas en premier (GitHub permet de masquer les forks dans l'affichage des dépôts).
- **Les projets abandonnés qui contiennent quand même du bon travail** : garde-les publics, mais **ajoute une ligne d'honnêteté en haut du README** : « ⚠️ Projet arrêté à [étape], je le laisse en ligne parce que [ce qu'il contient d'intéressant]. » C'est un signal de maturité, pas de faiblesse. Ce qui décrédibilise, c'est un projet mort présenté comme vivant.
- **Les projets contenant des données personnelles, des sujets d'examen, ou du code d'entreprise** : privé, immédiatement.

### Avant d'épingler quoi que ce soit : le nettoyage de sécurité

Fais ça maintenant, ça prend dix minutes et ça évite un problème réel :

1. Cherche dans chaque dépôt les mots `password`, `api_key`, `secret`, `token`, `mdp`.
2. Vérifie qu'aucun `.env` n'est versionné. S'il l'est, **supprimer le fichier ne suffit pas** : il reste dans l'historique Git. La bonne pratique est de considérer la clé comme compromise et de **la révoquer/régénérer** côté service, puis d'ajouter `.env` au `.gitignore` et de commiter un `.env.example` sans valeurs.
3. Vérifie qu'aucun jeu de données contenant des informations personnelles réelles (listes d'étudiants, exports de base) n'est public — c'est un sujet RGPD, pas seulement d'hygiène.

---

## 4. Les commits : ce qu'ils racontent de toi

Un recruteur ouvre l'onglet « Commits ». Il y voit trois choses.

**① La régularité.** 47 commits étalés sur six semaines racontent quelqu'un qui travaille. 1 commit géant intitulé « projet fini » raconte quelqu'un qui découvre Git à la fin. Ce n'est pas moral, c'est informatif : la première personne saura travailler dans une équipe qui livre en continu.

**② La lisibilité des messages.** Compare :

```
❌  update
❌  fix
❌  ça marche
❌  aaaa
❌  correction bug
```
```
✅  feat(panier): calcul du total avec remises cumulées
✅  fix(auth): expiration du token non vérifiée côté serveur
✅  refactor(api): extraction du client HTTP dans un module dédié
✅  docs: instructions d'installation sous Windows
✅  test(panier): cas limite du panier vide
```

Tu n'es pas obligé d'utiliser la convention `type(portée): description` — mais **elle est très répandue en entreprise**, elle s'apprend en dix minutes, et l'utiliser montre que tu as regardé comment les équipes travaillent réellement. Les types courants : `feat`, `fix`, `refactor`, `docs`, `test`, `chore`.

Règle minimale si tu ne veux pas de convention : **un message de commit décrit ce que le commit change, à l'impératif, en une ligne compréhensible six mois plus tard.**

**③ La taille des commits.** Un commit = une intention. Un commit qui touche 40 fichiers et mélange une nouvelle fonctionnalité, un renommage et une correction est impossible à relire — et la relecture est exactement ce qu'on te demandera de faire en entreprise.

### Faut-il réécrire l'historique de ses vieux projets ?

**Non.** Réécrire l'historique pour faire joli est une perte de temps, et ça se voit (12 commits parfaits tous datés du même après-midi). **Applique la nouvelle discipline à partir de maintenant**, sur tes projets actifs. En trois semaines, ton dépôt le plus récent — celui qui sera épinglé en premier — aura un historique propre.

**Deux gestes légitimes, en revanche** : utiliser des branches (`feat/panier`) et fusionner via des Pull Requests, même seul. Ça produit un historique lisible et ça t'entraîne au geste central de la vie en équipe. Une PR sur ton propre dépôt, avec une description de trois lignes, est un excellent objet à montrer en entretien.

---

## 5. Le README de projet : ce qui donne envie

**Un README n'est pas une documentation exhaustive. C'est une page de vente honnête.** Il répond à quatre questions, dans cet ordre, et les 15 premières secondes se jouent sur les deux premières.

1. **Qu'est-ce que c'est ?** (une phrase, compréhensible par quelqu'un qui ne connaît pas le domaine)
2. **À quoi ça ressemble ?** (capture d'écran, GIF, ou lien vers la démo — **c'est ce qui manque le plus souvent**)
3. **Comment je l'installe et le lance ?** (des commandes qui marchent vraiment)
4. **Qu'est-ce qui est intéressant dedans ?** (le choix technique, le problème rencontré — la partie que les juniors omettent et que les recruteurs cherchent)

Une capture d'écran vaut deux paragraphes. Si ton projet a une interface, mets une image dans les 10 premières lignes. Si c'est une API ou un script, mets un extrait de sortie de terminal dans un bloc de code.

### MODÈLE — README de projet

> ⚠️ **Contenu d'exemple, entièrement fictif.** Recopie la structure, remplace tout. Les sections marquées *(optionnel)* peuvent sauter si elles ne s'appliquent pas — un README court et vrai vaut mieux qu'un README long et rempli de vide.

```markdown
# Colocompta — répartition des dépenses en colocation

Application web qui permet à des colocataires d'enregistrer leurs dépenses
communes et de savoir qui doit combien à qui, en minimisant le nombre de
virements à effectuer.

🔗 **Démo** : https://exemple.tld · 👤 Compte de test : `demo@exemple.tld` / `demo1234`

![Capture de l'écran principal](docs/capture-accueil.png)

---

## Pourquoi ce projet

Je partageais un appartement à trois et nous tenions les comptes dans un
tableur qui finissait toujours par être faux. J'ai voulu voir si je savais
livrer une application complète, du modèle de données à la mise en ligne.

## Fonctionnalités

- Création d'un groupe et invitation par lien
- Saisie d'une dépense avec répartition égale ou personnalisée
- Calcul des remboursements en minimisant le nombre de transactions
- Historique filtrable par personne et par période
- Export CSV

## Stack technique

| Couche      | Choix                        |
|-------------|------------------------------|
| Front-end   | React 18, Vite, Tailwind     |
| Back-end    | Node.js 20, Express          |
| Base        | PostgreSQL 16                |
| Tests       | Vitest (front), Jest (API)   |
| CI          | GitHub Actions (lint + tests)|
| Déploiement | VPS Debian, Nginx, Docker    |

## Installation

Prérequis : Node 20+, Docker.

```bash
git clone https://github.com/pseudo/colocompta.git
cd colocompta
cp .env.example .env          # renseigne DATABASE_URL et JWT_SECRET
docker compose up -d          # démarre PostgreSQL
npm install
npm run db:migrate
npm run dev                   # http://localhost:5173
```

Lancer les tests :

```bash
npm test
```

## Le point technique intéressant

Le calcul des remboursements est le cœur du projet. Naïvement, si A doit 30 €
à B et B doit 30 € à C, on génère deux virements. L'algorithme retenu calcule
d'abord le solde net de chaque personne, puis apparie itérativement le plus
gros créditeur au plus gros débiteur — ce qui produit au maximum n-1 virements
pour n personnes, contre n(n-1)/2 dans l'approche naïve.

Ce n'est pas la solution optimale au sens strict (le problème général est
NP-difficile), mais elle est simple à expliquer aux utilisateurs, ce qui
comptait plus ici que l'optimalité.

Le module correspondant est dans `api/src/settlement/` et couvert par 22 tests,
dont les cas limites : groupe à une personne, soldes à zéro, arrondis au centime.

## Ce que je ferais autrement

- Les montants sont stockés en `NUMERIC` mais manipulés en flottants côté
  front : je passerais en entiers de centimes de bout en bout.
- Pas de gestion multi-devises, alors que la structure de données le permettrait.
- L'authentification est faite à la main ; sur un projet réel je partirais
  d'une brique éprouvée.

## Structure du dépôt

```
api/          API Express (routes, services, accès base)
web/          Application React
docs/         Captures et schéma de la base
docker/       docker-compose et Dockerfiles
```

## Statut

Projet personnel, en fonctionnement, utilisé par 6 personnes.
Maintenu ponctuellement — les issues ouvertes correspondent aux évolutions prévues.

## Licence

MIT
```

**Quatre remarques sur ce modèle :**

- La section **« Le point technique intéressant »** est la plus importante pour toi. C'est elle qui transforme un dépôt en sujet de conversation. Écris-la même si le point te semble banal : la capacité à expliquer un choix est exactement ce qu'on évalue chez un junior.
- La section **« Ce que je ferais autrement »** semble contre-intuitive — elle affiche tes limites. En réalité elle est très favorable : elle prouve que tu sais relire ton propre travail. Un recruteur préfère un candidat qui connaît les faiblesses de son code à un candidat qui les ignore.
- **Les commandes d'installation doivent vraiment marcher.** Teste-les sur une machine vierge ou en clonant dans un dossier neuf. Un README dont le `npm install` échoue est pire que pas de README.
- **Pas de badges décoratifs.** Un badge de build CI qui pointe vers un vrai pipeline, oui. Dix badges colorés listant tes technos, non : ils repoussent le contenu utile sous la ligne de flottaison.

---

## 6. Présenter un projet d'école sans le survendre

C'est un exercice d'équilibre, et les deux erreurs sont symétriques.

**Erreur 1 — le survendre.** Présenter un projet noté sur un semestre comme un produit. Le recruteur le repère en dix secondes (aucun utilisateur, aucune trace de mise en production, dernier commit le jour du rendu) et il en tire une conclusion sur ton honnêteté générale, ce qui contamine tout le reste du dossier.

**Erreur 2 — le dévaloriser.** Écrire « simple projet d'école » en tête de README. Un projet d'école est un projet en équipe, avec un cahier des charges imposé, une contrainte de temps et une soutenance. Dit correctement, c'est une expérience de travail.

**La bonne formulation tient en trois éléments explicites :**

```markdown
> **Contexte** : projet universitaire, équipe de 4, 8 semaines (BUT Informatique, 2e année).
> Stack imposée par le sujet. Le dépôt est laissé en l'état à la fin du module.
>
> **Mon périmètre** : moteur de détection de conflits de créneaux, interface
> d'administration, mise en place du dépôt et des règles de branches.
> Les autres modules (authentification, notifications) ont été développés par
> mes coéquipiers.
```

Trois choses y sont dites : **le cadre** (donc pas de malentendu), **ton périmètre réel** (donc tu ne t'attribues rien), **le statut** (donc on ne s'attend pas à un projet vivant). À partir de là, tu peux détailler ta partie avec autant de fierté que tu veux : elle est crédible parce que tu as posé le cadre d'abord.

**Cas particulier — le projet d'école en groupe où tu as peu codé.** Ça arrive. Ne le mets pas en avant. Ou alors assume le rôle réel : « J'ai principalement tenu le rôle de coordination et de test ; c'est ce qui m'a fait comprendre que je voulais un poste plus technique. » Une phrase honnête sur un rôle modeste vaut mieux qu'une phrase floue qui s'effondrera en entretien.

---

## 7. La page de profil GitHub

C'est la vitrine, vue avant tous les dépôts. Quatre choses à régler.

**① Les éléments de base.** Nom réel (le recruteur doit faire le lien avec ton CV), photo neutre ou avatar sobre, ville, lien vers ton CV en ligne ou ton LinkedIn. La bio en une ligne : `Étudiant BUT Informatique · alternance dev web recherchée sept. 2026 · Python, React, PostgreSQL`. Une bio qui annonce ta recherche fait le travail toute seule.

**② Les dépôts épinglés**, dans l'ordre décidé en partie 3. L'ordre compte : le premier sera ouvert, les autres souvent pas.

**③ Le graphe de contributions.** Il n'a pas besoin d'être vert tous les jours — personne ne demande ça, et une régularité artificielle (commits automatiques, commits vides) se repère et fait très mauvais effet. Ce qui compte : **qu'il ne soit pas vide sur les trois derniers mois.** Si tu candidates, tu codes ; un ou deux commits par semaine sur un vrai projet suffisent à raconter quelqu'un d'actif.

**④ Le README de profil.** Fonctionnalité officielle : crée un dépôt **public** portant **exactement ton nom d'utilisateur**, avec un fichier `README.md` à la racine. Son contenu s'affiche en haut de ton profil.
Source : [GitHub Docs — Managing your profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)

### MODÈLE — README de profil

> ⚠️ **Contenu d'exemple, entièrement fictif.** Court, factuel, orienté recherche d'alternance. Pas d'animations, pas de compteurs de statistiques, pas de GIF de chat qui code.

```markdown
## Bonjour, je suis [Prénom]

Étudiant en 2e année de BUT Informatique à [ÉCOLE], je cherche une **alternance
de développeur web** de septembre [AAAA] à août [AAAA], en rythme
3 semaines entreprise / 1 semaine école, sur [Ville] et sa région.

Ce que je sais faire aujourd'hui, honnêtement :

- **À l'aise** : JavaScript/React, Python, SQL et PostgreSQL, Git au quotidien
- **En cours d'apprentissage** : TypeScript, Docker, tests automatisés
- **Ce qui m'intéresse** : le back-end, les bases de données, tout ce qui touche
  à la donnée plutôt qu'à l'interface

### Ce que je recommande de regarder

- **[colocompta](https://github.com/pseudo/colocompta)** — mon projet le plus abouti,
  en ligne et réellement utilisé. Le README explique le calcul de remboursement.
- **[reservations-campus](https://github.com/pseudo/reservations-campus)** — projet
  universitaire en équipe de 4 ; ma partie est le moteur de détection de conflits.
- **[veille-cli](https://github.com/pseudo/veille-cli)** — petit outil en ligne de
  commande que j'utilise tous les jours pour ma veille technique.

### En ce moment

J'apprends les tests automatisés en travaillant : j'ajoute progressivement une
couverture sur `colocompta` et je note ce que j'apprends dans le dossier `docs/`.

📫 [prenom.nom@email.fr] · [LinkedIn](https://linkedin.com/in/pseudo) · [CV (PDF)](lien)
```

**Pourquoi ce modèle marche :** il annonce la recherche dès la première ligne (dates, rythme, zone géographique — les trois informations opérationnelles), il **distingue explicitement ce qui est maîtrisé de ce qui est en cours** (crédibilité immédiate), il guide la lecture vers les bons dépôts au lieu de laisser le visiteur se débrouiller, et il montre un apprentissage en cours. Il est aussi entièrement lisible en 20 secondes.

**Ce qu'il faut éviter dans un profil README :** les tableaux d'icônes de 30 technologies, les widgets de statistiques (`stats card`, `streak`), les citations inspirantes, les « je suis passionné depuis mon plus jeune âge ». Sur un profil junior, la sobriété est lue comme du sérieux.

---

## 8. Plan d'action — 3 sessions

**Session 1 (1 h 30) — Le ménage.** Inventaire de tes dépôts, nettoyage de sécurité (partie 3), mise en privé ou regroupement des TP, suppression des forks inutiles, choix des 4 dépôts à épingler.

**Session 2 (2 h) — Le dépôt vitrine.** Un seul dépôt, le meilleur : README complet avec le modèle, capture d'écran, `.gitignore` correct, `.env.example`, commandes d'installation testées dans un clone neuf.

**Session 3 (1 h 30 à 2 h) — Le reste.** README des 2-3 autres dépôts (version courte : description, stack, ton périmètre, installation), README de profil, épinglage dans le bon ordre, bio.

**Puis, en continu :** un ou deux commits utiles par semaine sur un projet vivant, avec des messages lisibles. Trente minutes hebdomadaires suffisent à garder un profil qui respire pendant toute la campagne.

**Étape suivante :** fichier `03` — construire ta liste de cibles.

---

### Sources citées dans ce fichier
- [GitHub Docs — Managing your profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)
