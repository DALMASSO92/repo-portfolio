# Article 1 — CV d'alternance en informatique sans expérience

## Bloc SEO (à renseigner dans le CMS, ne pas publier tel quel)

- **Requête cible** : `cv alternance informatique sans expérience`
- **Requêtes secondaires** : `cv alternance développeur ATS`, `projets d'école sur un CV informatique`, `cv alternance dev débutant`
- **Slug** : `cv-alternance-informatique-sans-experience`
- **Meta title** (53 car.) : `CV alternance informatique sans expérience : le guide`
- **Meta description** (140 car.) : `Tu candidates en alternance dev ou data sans expérience pro ? Voici comment construire un CV que l'ATS et le recruteur tech lisent vraiment.`

### SERP observée le 08/08/2026 — ce qu'on constate

Requête testée : *« CV alternance informatique sans expérience ATS »*.

**Ce qui occupe la première page** : essentiellement des **fermes à modèles de CV et des SaaS de création de CV** — `cvcrea.fr`, `modeles-de-cv.com`, `model-cv.com`, `cvscore.fr` — plus deux blogs récents et de petite taille, `postulea.fr` et `networkglue.fr`, qui publient des guides « CV alternance informatique 2026 ».

**Trois enseignements exploitables :**

1. **Le verrou WTJ/Studi/Walt ne joue pas ici.** Aucun des trois n'apparaît. La requête est tenue par des sites d'outils, pas par les mastodontes de l'alternance — donc structurellement accessible.
2. **Des domaines petits et récents rankent** (`postulea.fr`, `networkglue.fr`). C'est le signal le plus important : l'autorité de domaine n'est pas la barrière ici.
3. **Mais tout le monde vend le même angle** : « télécharge un modèle gratuit ». C'est aussi le contenu le plus vulnérable aux AI Overviews, puisqu'il se résume à une liste de rubriques qu'un modèle récite sans effort.

**Décision éditoriale.** On ne produit **aucun modèle téléchargeable** dans cet article — ce serait à la fois concurrencer les meilleurs sur leur terrain et cannibaliser Le Kit. On produit ce qu'aucun d'entre eux ne peut produire : **ce qui se passe concrètement quand un fichier de dev entre dans un ATS**, et **comment un projet d'école se transforme en ligne crédible**. Des tests reproductibles, des exemples réécrits, un arbitrage.

---

## Article — prêt à publier

**Titre H1 : CV d'alternance en informatique : comment faire quand on n'a « pas d'expérience »**

Tu candidates depuis des semaines pour une alternance en développement, en data ou en cybersécurité, et il ne se passe rien. À chaque fois que tu relis ton CV, la même phrase revient : *je n'ai pas d'expérience*.

Tordons le cou à cette idée, parce qu'elle t'empêche de travailler. **Personne n'attend d'expérience professionnelle d'un candidat en alternance** — si c'était le critère, l'alternance n'existerait pas. Ce que le recruteur cherche, c'est **une preuve que tu sais faire quelque chose de concret**. Cette preuve, tu l'as déjà : elle est juste mal rangée.

## Étape 0 : le test que personne ne fait

Avant toute réécriture, fais ceci — il te faut deux minutes.

1. Ouvre ton CV en PDF.
2. Sélectionne tout le contenu (Ctrl+A), copie (Ctrl+C).
3. Colle dans un bloc-notes brut : Bloc-notes sous Windows, TextEdit en mode texte seul sur Mac, ou n'importe quel éditeur de code.

**Ce que tu vois, c'est approximativement ce que lit la machine.** Trois résultats possibles :

- **Rien ne se colle.** Ton CV a été exporté en image, ou en PDF non textuel. Pour un logiciel de tri, c'est une page blanche.
- **Le texte sort dans le désordre**, colonnes entrelacées et mots collés. Typique des modèles à deux colonnes et des zones de texte flottantes.
- **Le texte sort proprement, dans l'ordre.** C'est ce qu'on vise.

Ce test règle à lui seul une bonne partie des CV « invisibles ».

## Ce qu'un ATS fait vraiment (et ce qu'il ne fait pas)

Un ATS — *Applicant Tracking System* — fait principalement trois choses : il **extrait du texte** de ton fichier, il le **range dans des champs** (formation, expériences, compétences), et il permet au recruteur de **chercher** dans la base.

Ce qu'il ne fait pas, malgré la légende : il ne te note pas sur 100 et il ne jette pas ton CV automatiquement. Dans l'immense majorité des cas, un CV mal lu n'est pas rejeté — **il est mal rangé**, donc il ne remonte pas quand le recruteur cherche « React » ou « alternance BUT informatique », donc il n'est jamais ouvert. La conséquence est plus rassurante qu'il n'y paraît : **tu ne joues pas contre un algorithme, tu joues contre une recherche par mots-clés.** Ça, ça se prépare.

### Les mots-clés, sans tomber dans le bourrage

Le principe est simple : **les technologies que tu maîtrises doivent apparaître écrites, en toutes lettres, dans le texte de ton CV.** Si l'offre dit « Java / Spring Boot » et que ton CV dit seulement « développement backend », tu ne remontes pas.

Trois règles concrètes :

- **Écris les noms exacts** tels qu'ils figurent dans l'offre : `PostgreSQL` et pas « bases de données », `Docker` et pas « conteneurisation », `React` et pas « framework front ».
- **Donne les deux formes** quand elles coexistent : `JavaScript (JS)`, `Intégration continue (CI/CD)`.
- **N'écris jamais une techno que tu ne sais pas défendre.** Un entretien technique d'alternance démarre systématiquement par les mots de ton CV. Mentir ici, c'est acheter un entretien pour le perdre en trois questions.

Le bourrage de mots-clés en blanc sur fond blanc, ou la liste de quarante technologies : c'est visible, c'est daté, et ça se retourne contre toi dès qu'un humain ouvre le fichier.

## Transformer un projet d'école en ligne crédible

C'est ici que tout se joue, et c'est ici que la quasi-totalité des CV d'étudiants perd le recruteur.

Le réflexe habituel donne ceci :

> **Projet de groupe — Site web** — Création d'un site web en groupe dans le cadre du BTS. Technologies : HTML, CSS, PHP.

Ce n'est pas faux. C'est simplement **indistinguable des trente autres CV** reçus le même jour, et ça ne dit rien de ce que *toi* tu as fait.

La version qui fonctionne répond à quatre questions : **quoi, pour qui, avec quoi, et quel a été mon rôle exact.**

> **Application de gestion de réservations** — projet de groupe (4 personnes), 3 mois, BUT Informatique.
> Développement de l'API REST (Node.js / Express) et du schéma PostgreSQL — 7 tables, authentification par JWT.
> Mise en place de l'intégration continue avec GitHub Actions (tests automatiques à chaque *push*).
> Code : `github.com/…`

La deuxième version n'invente rien : c'est le **même** projet. La différence tient à quatre choses — le rôle personnel est explicite, les technologies sont nommées précisément, il y a des éléments chiffrés vérifiables, et le code est consultable.

### « Mais mon projet est nul »

Il ne l'est pas — il est *scolaire*, ce qui n'est pas la même chose, et le recruteur le sait. Il n'attend pas un produit en production. Il vérifie **trois choses** : que tu sais nommer ce que tu as fait, que tu sais expliquer pourquoi tu l'as fait ainsi, et que tu es capable de finir quelque chose. Un petit projet fini, propre et documenté bat un gros projet abandonné à mi-chemin. À chaque fois.

### Le lien GitHub : un pari à double tranchant

Mettre son GitHub sur son CV en informatique est presque obligatoire. Mais un dépôt ouvert est un pari : **le recruteur va cliquer**. Avant de mettre le lien, vérifie trois points sur les deux ou trois dépôts que tu mets en avant :

- Un **README** existe et explique, en cinq lignes, ce que fait le projet, comment le lancer, et ce que tu as fait toi.
- Le dépôt **n'est pas** une décharge de fichiers `test-final-v2-vrai.zip`.
- Il n'y a **aucun secret** dans l'historique : mot de passe, clé d'API, fichier `.env`. C'est fréquent, c'est éliminatoire, et c'est le premier truc qu'un profil sécurité regarde.

Si tes dépôts ne sont pas prêts, ne mets pas le lien tout de suite. Un lien absent est neutre ; un lien vers un dépôt vide est un point négatif.

## Les cinq erreurs qui reviennent le plus

- **Le CV à deux colonnes avec barre latérale colorée.** Joli à l'œil, souvent illisible pour la machine. Si tu y tiens, refais le test de l'étape 0 : s'il passe, garde-le.
- **Les barres de compétences** (« Python ★★★☆☆ »). Tes trois étoiles ne veulent rien dire pour le lecteur, et elles ne s'extraient pas en texte. Remplace-les par un contexte : « Python — 2 projets, dont un scraper avec gestion des erreurs ».
- **La photo, l'âge, l'adresse complète.** Aucune valeur ajoutée sur un CV tech. La ville et la mobilité suffisent, et sont utiles : la contrainte géographique de l'alternance est réelle.
- **Le même CV envoyé partout.** Réordonner les compétences et adapter trois lignes suffit le plus souvent.
- **L'oubli du rythme d'alternance.** Écris-le en haut : `Alternance — rythme 3 semaines entreprise / 1 semaine école, à partir de septembre 2026`. Le recruteur en a besoin pour savoir s'il peut te prendre.

## Ce que ce travail ne réglera pas

Un CV bien construit **enlève des raisons de t'écarter**. Il ne crée pas de poste et ne compense pas un ciblage à côté de la plaque : envoie un excellent CV à cent entreprises qui ne recrutent pas d'alternant sur ton profil, il ne se passera rien.

L'Apec chiffrait en mars 2025 à **67 % la part d'étudiants du supérieur ayant rencontré des difficultés à trouver une entreprise d'accueil**. Ce n'est pas une statistique sur ton CV, c'est une statistique sur un marché tendu. Ton CV est **le maillon que tu contrôles entièrement** — raison suffisante pour le traiter sérieusement, et pour ne pas t'arrêter là.

## Le récapitulatif, dans l'ordre

1. Faire le test du copier-coller ; corriger la structure si le texte sort en désordre.
2. Reprendre chaque projet et répondre aux quatre questions : quoi, pour qui, avec quoi, mon rôle exact.
3. Nommer les technologies avec les mots exacts des offres visées — sans jamais en ajouter une qu'on ne sait pas défendre.
4. Nettoyer les deux ou trois dépôts GitHub mis en avant, README compris, avant de mettre le lien.
5. Afficher en haut le rythme d'alternance et la date de disponibilité.
6. Refaire le test du copier-coller sur la version finale.

Rien là-dedans ne prend plus d'une soirée. Et à la différence du nombre de candidatures envoyées, c'est un travail qui reste valable pour toutes les suivantes.

---

*Cet article fait partie d'une série sur la recherche d'alternance en informatique, écrite par `[PRÉNOM NOM]`, alternant en informatique à `[ÉCOLE]`. Si tu veux vérifier où en est ta propre candidature, le diagnostic en 12 points est disponible gratuitement ici : `[LIEN_RESSOURCE_GRATUITE]` — il te dit ce qui est cassé, tu décides ensuite si tu veux le réparer seul ou non.*
