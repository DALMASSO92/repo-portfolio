# 01 — Le CV tech junior, lisible par un ATS et par un humain

**À quoi sert ce fichier :** te faire produire un CV d'une page qui survit au parsing automatique **et** donne envie à un développeur de te rencontrer. Il contient deux modèles complets prêts à recopier et une checklist de contrôle en 20 points. **Temps de travail : 3 à 4 h** — 2 h pour la première version, une nuit de repos, 1 h de relecture à froid avec la checklist.

---

## 1. Comment fonctionne réellement un ATS

**ATS = Applicant Tracking System.** C'est le logiciel qui reçoit, stocke et classe les candidatures. Trois choses à comprendre, parce qu'elles sont contre-intuitives.

**① Un ATS ne « note » pas ton CV, il le range.** L'image du robot qui attribue un score et rejette automatiquement est en grande partie fausse. Ce qui se passe réellement dans la majorité des cas : le fichier est **parsé** (converti en champs structurés : nom, e-mail, expériences, compétences), puis un humain **filtre et cherche** dans la base. Le danger n'est donc pas d'être « recalé par l'IA ». Le danger est d'être **mal converti**, donc introuvable, donc invisible quand quelqu'un cherche « React alternance » dans son vivier.

**② Le parsing est un problème de mise en page, pas de contenu.** Le moteur lit le flux de texte du fichier. Si la mise en page perturbe l'ordre de ce flux, les données atterrissent dans les mauvais champs — ou nulle part.

**③ Le vrai lecteur reste humain, et il est pressé.** Ton CV doit être optimisé pour deux lecteurs à la fois. La bonne nouvelle : ce qui est lisible par une machine (structure claire, une colonne, titres standards) est presque toujours lisible par un humain fatigué.

### Ce qui casse le parsing — la liste

| Élément | Ce qui se passe | À faire à la place |
|---|---|---|
| **Deux colonnes** | Le parser lit en général de gauche à droite, ligne par ligne : les deux colonnes s'entrelacent et le texte devient incohérent | **Une seule colonne**, de haut en bas |
| **Tableaux** | Selon le moteur, les cellules sont ignorées, fusionnées ou remises dans le désordre | Listes à puces simples |
| **En-tête / pied de page (header/footer)** | Souvent **non lus du tout** — et c'est là que les gens mettent leur e-mail et leur téléphone | Coordonnées dans le **corps** du document, tout en haut |
| **Zones de texte, formes, encadrés** | Flottent hors du flux principal, peuvent être ignorés | Texte normal |
| **Icônes à la place des mots** | Une enveloppe n'est pas le mot « e-mail » ; une jauge de niveau n'est pas une information textuelle | Écris les mots |
| **Logos et images de compétences** | Aucune information n'est extraite d'une image | Écris « Docker », « PostgreSQL » |
| **PDF exporté en image** (scan, export Canva/Figma aplati) | **Zéro texte extractible.** Le CV est vide pour la machine | Vérifie que tu peux sélectionner ton texte |
| **Polices exotiques ou icônes de police** | Caractères convertis en symboles illisibles | Polices système classiques |
| **Titres de section inventés** (« Mon parcours », « Ce qui me fait vibrer ») | Le parser ne les rattache à aucun champ connu | **Expérience**, **Formation**, **Compétences**, **Projets** |
| **Graphiques de niveau** (barres, étoiles, %) | Non lus, et détestés des recruteurs techniques — « React 80 % » ne veut rien dire | Contexte d'usage réel |

Sources : [Santa Clara University Career Center](https://www.scu.edu/careercenter/toolkit/job-scan-common-ats-resume-formatting-mistakes/) · [UVA Career Center — Navigating ATS](https://career.virginia.edu/Students/Prepare/Resumes/NavigatingATS) · [University of Minnesota Duluth Career Center](https://career.d.umn.edu/students/resume-cover-letter/applicant-tracking-system-ats-tips)

### Le test des 15 secondes, à faire maintenant

1. Ouvre ton PDF actuel. **Sélectionne tout (Ctrl+A), copie, colle dans un éditeur de texte brut.**
2. Lis ce que tu obtiens.

Trois verdicts possibles : rien ne se colle → ton CV est une image, **il est invisible** ; le texte est mélangé, ton téléphone au milieu d'une expérience → colonnes ou tableaux à supprimer ; le texte sort dans l'ordre et se lit → ta structure tient. **C'est le seul test qui compte**, et il est gratuit. Refais-le après chaque modification de mise en page.

**Format de fichier.** PDF **texte** (pas image), sauf si l'annonce demande explicitement du .docx — auquel cas obéis, c'est souvent le signe d'un vieil ATS. Nomme le fichier de façon exploitable : `CV_NOM_Prenom_Alternance_Developpeur.pdf`. Jamais `cv_final_v3_vraiment_final.pdf`.

---

## 2. La structure, section par section

Une page. Une seule. Un profil junior sur deux pages, c'est un profil qui n'a pas su choisir — et le recruteur le lit comme ça.

### Ordre recommandé pour un profil tech junior

```
1. Identité + coordonnées + le titre du poste visé
2. Accroche (3 lignes maximum) — optionnelle mais recommandée
3. Compétences techniques
4. Projets              ← la section la plus importante quand tu n'as pas d'expérience
5. Expérience           ← stages, jobs, associatif
6. Formation
7. Divers (langues, certifications, permis, centres d'intérêt utiles)
```

**Pourquoi Projets avant Expérience** : parce que c'est ta preuve de compétence. Un recruteur technique qui cherche un alternant sait que tu n'as pas d'expérience — il cherche à savoir si tu **sais coder**. Ne l'oblige pas à faire défiler jusqu'en bas pour le découvrir. Si tu as déjà fait un stage vraiment pertinent (dev en entreprise), inverse les deux.

### 1. Identité et coordonnées

Dans le corps du document, pas dans un en-tête Word.

```
PRÉNOM NOM
Développeur web en recherche d'alternance — BUT Informatique 2e année
Ville (mobilité : Ville + 30 km / Île-de-France) · 06 XX XX XX XX · prenom.nom@email.fr
github.com/pseudo · linkedin.com/in/pseudo
```

- **Le titre est la ligne la plus importante du CV.** Il doit reprendre l'intitulé du poste visé. « Étudiant en informatique » ne dit rien ; « Alternant développeur back-end Java — rythme 3 semaines / 1 semaine » dit tout. Adapte-le à chaque famille de postes.
- **Adresse** : la ville et la mobilité suffisent. L'adresse postale complète est inutile et, sur un profil junior, la distance domicile-entreprise est un facteur réel de sélection — autant montrer que tu l'as anticipée.
- **E-mail** : `prenom.nom@`. Pas de pseudo de gaming, pas d'adresse d'école qui expirera.
- **Pas de photo**, sauf usage local très marqué. Elle prend de la place, n'apporte rien techniquement et introduit un biais dont tu n'as pas besoin.
- **Date de naissance : non.** Sauf si tu as moins de 18 ans (impact sur la grille de rémunération) ou plus de 26 ans (impact sur l'éligibilité et le coût employeur) — dans ces deux cas, l'information joue en ta faveur ou évite un malentendu, mets-la.

### 2. L'accroche

Trois lignes maximum, factuelles, sans adjectif d'auto-évaluation. Elle répond à : **qui tu es, ce que tu cherches, ce que tu sais faire.**

> ❌ « Étudiant passionné, dynamique et rigoureux, je souhaite mettre à profit mes compétences au sein d'une entreprise innovante afin de parfaire ma formation. »
> Rien dans cette phrase n'est vérifiable, et elle pourrait être écrite par n'importe qui.

> ✅ « Étudiant en 2e année de BUT Informatique, je cherche une alternance de développeur back-end de septembre 2026 à août 2028, en rythme 3 semaines entreprise / 1 semaine école. J'ai développé et mis en ligne deux API REST en Python/FastAPI, dont une utilisée par une association de mon campus. Je cherche une équipe où le code est relu. »

La dernière phrase fait un travail énorme : elle montre que tu sais qu'il existe une revue de code, et donc que tu as une idée de ce qu'est un vrai environnement de développement.

### 3. Compétences techniques

Un bloc dense, **groupé par catégorie**, sans notation.

```
Langages          Python, JavaScript, SQL, Java (notions)
Back-end          FastAPI, Node.js/Express, API REST, authentification JWT
Front-end         React, HTML/CSS, Tailwind
Bases de données  PostgreSQL, SQLite, modélisation relationnelle
Outils            Git, GitHub Actions, Docker (notions), Linux, Postman
Méthodes          Scrum (projets d'école), tests unitaires (pytest)
```

Trois règles :
- **Le mot « notions » est ton meilleur ami.** Il te permet de citer une techno sans t'exposer. Un recruteur qui voit « Docker (notions) » ne te piégera pas dessus. Celui qui voit « Docker » tout court te demandera la différence entre une image et un conteneur — et tu dois savoir répondre.
- **Reprends les mots exacts de l'annonce**, quand ils correspondent à la réalité. Si l'annonce dit « JavaScript » et que tu as écrit « JS », écris « JavaScript (JS) ». C'est la seule optimisation « mot-clé » légitime : elle sert la recherche en base, et elle ne ment pas.
- **Ne liste pas Word, Excel et PowerPoint** sur un CV de développeur. Ça envoie le signal inverse de celui recherché.

### 4. Projets — la section qui décide

Voir le détail en partie 3 ci-dessous. Format : 2 à 4 projets, 3 à 4 lignes chacun, avec un lien cliquable.

### 5. Expérience

Tout compte, si c'est présenté pour ce que ça vaut : stage, job d'été, caisse, service, manutention, bénévolat, tutorat, service civique. Un job d'été n'est pas honteux — il prouve la ponctualité, la tenue face au public et le fait que tu as déjà travaillé dans un cadre contraint. Ce sont des choses qu'un tuteur regarde.

Format : `Intitulé — Structure (type) · Ville · Mois AAAA – Mois AAAA` puis 2 à 3 puces d'action.

Écris ce que **tu** as fait, jamais ce que l'équipe a fait. « Participation à la refonte du site » ne dit pas ce que tu as touché. « Développement de 4 composants React du formulaire de commande, intégrés en production » le dit.

### 6. Formation

Deux à trois lignes suffisent. Diplôme visé, établissement, ville, dates. Ajoute **le rythme de l'alternance et les dates du contrat** — c'est une information opérationnelle que le recruteur cherche activement, et ne pas la donner crée un aller-retour d'e-mails qui coûte souvent la candidature.

```
BUT Informatique, parcours Réalisation d'applications — [ÉCOLE], Ville — 2025-2028
  Alternance recherchée : sept. 2026 → août 2028 · rythme 3 sem. entreprise / 1 sem. école
Baccalauréat général, spécialités NSI et Mathématiques — mention bien — 2025
```

Le bac disparaît du CV dès que tu es en 3e année. Le collège et le brevet n'y figurent jamais.

### 7. Divers

Langues avec un niveau honnête (**CECRL** : B2, C1 — pas « anglais courant » qui ne veut rien dire ; « anglais technique : lecture de documentation sans difficulté, oral B1 » est plus crédible et plus utile). Permis B si tu l'as et si la mobilité compte. Certifications réelles seulement.

**Centres d'intérêt** : garde-les si, et seulement si, ils sont spécifiques et racontent quelque chose. « Cinéma, musique, voyages » n'apporte rien. « Auto-hébergement d'un serveur domestique (Proxmox, 3 services)  · Escalade en club depuis 6 ans » apporte deux choses : une compétence technique de plus et une preuve de constance.

---

## 3. Décrire des projets quand tu n'as pas d'expérience pro

C'est le cœur du problème d'un CV d'alternance en informatique, et c'est là que l'écrasante majorité des CV juniors se ressemblent.

### La formule en 4 temps

Pour chaque projet : **Quoi → Comment → Volume/preuve → Rôle.**

```
Nom du projet — contexte (projet d'école / personnel / associatif) · lien
  Quoi     : ce que fait le logiciel, en une phrase compréhensible par un non-technicien
  Comment  : la stack, et un choix technique que tu peux défendre
  Preuve   : un élément vérifiable — mise en ligne, utilisateurs, tests, volume de données
  Rôle     : ce que TU as fait si c'était un projet de groupe
```

### Exemple, la même ligne écrite trois fois

> ❌ **Version creuse.** « Projet web — Site e-commerce réalisé en React. Technologies : React, Node.js, MongoDB. »
> Impossible de distinguer ce projet des 300 autres CV. Aucun choix, aucune preuve, aucun rôle.

> 🟠 **Version moyenne.** « Site e-commerce (projet d'école, 4 personnes) — développement du panier et du tunnel de paiement en React, back Node.js/MongoDB. »
> Mieux : le rôle est là. Mais toujours aucune preuve et aucun choix technique.

> ✅ **Version qui déclenche une question en entretien.**
> ```
> Boutique en ligne — projet d'école, équipe de 4, 6 semaines · github.com/pseudo/projet
>   Application de vente en ligne (catalogue, panier, commande) en React + Node.js/Express.
>   Mon périmètre : le panier et le tunnel de commande, dont la gestion des stocks
>   concurrents — j'ai choisi de verrouiller la ligne en base plutôt qu'en mémoire
>   applicative, après avoir reproduit le bug de survente à 2 utilisateurs simultanés.
>   14 tests unitaires sur le calcul du panier (Jest), CI GitHub Actions.
> ```
> Cette version dit : je sais nommer un problème réel (concurrence d'accès), j'ai fait un choix, je peux l'expliquer, et je teste.

**Le principe général : un CV junior ne se vend pas sur l'ampleur du projet, il se vend sur la profondeur d'un détail.** Personne n'attend d'un alternant qu'il ait écrit un système distribué. On attend qu'il ait rencontré un vrai problème et qu'il sache en parler.

### Trouver ce « détail » dans un projet banal

Ouvre ton dépôt et cherche l'une de ces cinq choses :
1. **Un bug qui t'a coûté plus de deux heures.** Qu'est-ce que c'était, comment tu l'as trouvé ? C'est ta meilleure anecdote.
2. **Un choix entre deux options.** Pourquoi PostgreSQL et pas MongoDB ? Même une réponse simple (« relations fortes entre les entités ») vaut mieux que pas de réponse.
3. **Une contrainte subie.** Un délai, une consigne imposée, une API tierce mal documentée, un coéquipier absent. Comment tu as fait avec.
4. **Une mesure.** Un temps de réponse, un nombre de lignes traitées, un nombre d'utilisateurs, une taille de jeu de données, un nombre de tests. Une seule suffit.
5. **Ce que tu referais autrement.** C'est la ligne la plus mature d'un CV junior, et elle peut être dite en entretien plutôt qu'écrite.

### Formuler des résultats sans mentir

Tu n'as pas de chiffre d'affaires généré, pas de « −30 % de temps de traitement », et un recruteur technique repère immédiatement les chiffres inventés — il te demandera comment tu les as mesurés.

**Ce qui est honnête et vérifiable, et que tu as vraiment :**

| Au lieu de… | Écris… |
|---|---|
| « Application performante » | « Temps de réponse mesuré à ~120 ms sur l'endpoint principal (jeu de test de 10 000 lignes) » |
| « Projet très utilisé » | « Déployée et utilisée par les 25 membres de l'association [X] sur le semestre » |
| « Code de qualité » | « 14 tests unitaires, couverture 60 % sur le module de calcul, linter en CI » |
| « Amélioration des performances » | « Requête de listing passée de 2,1 s à 180 ms après ajout d'un index sur la colonne date » |
| « Maîtrise de Docker » | « Environnement de dev conteneurisé (docker-compose : API + PostgreSQL) » |

**Trois interdits absolus :** inventer un chiffre ; transformer un projet d'école en mission d'entreprise ; lister une techno que tu ne saurais pas défendre trois minutes. Le troisième est le plus fréquent et le plus coûteux : sur un CV d'alternance, **tout ce qui est écrit est une invitation à être interrogé dessus.**

**La bonne nouvelle :** l'absence de résultats chiffrés n'est pas un handicap pour un alternant. Le recruteur ne cherche pas un opérationnel, il cherche quelqu'un de formable. Ce qu'il veut voir : que tu sais nommer ce que tu as fait, distinguer ce que tu maîtrises de ce que tu effleures, et parler de ton code avec précision.

---

## 4. Les erreurs fréquentes des CV de dev junior

1. **La double colonne « esthétique ».** Le classement n° 1 des CV illisibles par un ATS, et le plus fréquent parce que c'est le défaut des jolis modèles.
2. **Les barres de compétences.** Elles ne sont pas lues par la machine et agacent les développeurs : personne ne sait ce qu'est « Python à 75 % ».
3. **Lister 25 technos.** Un junior qui déclare Java, Python, C++, PHP, Rust, Go, React, Angular, Vue et Kubernetes se disqualifie : soit il ment, soit il a fait trois tutoriels de chaque. **Quatre technos assumées valent mieux que vingt survolées.**
4. **Le CV identique pour toutes les offres.** Le titre, l'accroche et l'ordre des projets doivent bouger. Le reste peut rester stable. Prévois **un CV maître** et 2-3 variantes (ex. dev web / data / support-infra).
5. **Aucun lien vers du code.** Sur un CV de développeur, c'est un signal très négatif. Même un seul dépôt propre change tout (voir fichier `02`).
6. **Le lien GitHub mort ou vers un profil vide.** Pire que pas de lien du tout : ça donne au recruteur une raison concrète d'arrêter.
7. **La mise en avant du diplôme au détriment du code.** Le nom de l'école intéresse le service RH ; le code intéresse celui qui décidera vraiment.
8. **Ne pas indiquer le rythme d'alternance ni les dates.** Information n° 1 recherchée par un employeur, et absente d'un CV sur deux. Son absence coûte des candidatures pour une raison purement logistique.
9. **Les fautes d'orthographe.** Injuste mais réel : sur un poste où l'on écrit de la documentation et des messages de commit, elles sont lues comme un manque de soin. Fais relire par quelqu'un d'autre — un correcteur automatique ne voit pas « je maîtrise / je maitrisent ».
10. **La photo + les icônes + les couleurs + le QR code.** Chaque élément décoratif ajoute du risque de parsing sans ajouter d'information. Sobre gagne.

---

## 5. MODÈLE A — Profil développement web

> ⚠️ **TOUTES LES DONNÉES CI-DESSOUS SONT FICTIVES.** Ce modèle est un squelette : identité, école, entreprises et projets sont des placeholders `[ENTRE CROCHETS]` ou des exemples inventés à des fins pédagogiques. **Ne l'envoie jamais tel quel** — remplace chaque ligne par ta réalité. Recopie-le dans un traitement de texte, une seule colonne, sans en-tête ni tableau.

```
=============================================================================
[PRÉNOM] [NOM]
Alternant développeur web full-stack — BUT Informatique 2e année
[Ville] (mobilité [Ville] + 40 km) · [06 XX XX XX XX] · [prenom.nom@email.fr]
github.com/[pseudo] · linkedin.com/in/[pseudo]
=============================================================================

PROFIL
Étudiant en 2e année de BUT Informatique, je cherche une alternance de développeur
web de septembre [AAAA] à août [AAAA], en rythme 3 semaines entreprise / 1 semaine
école. J'ai développé et mis en ligne deux applications web complètes (React +
API REST), dont une utilisée par une association étudiante. Je cherche une équipe
où le code est relu.

COMPÉTENCES TECHNIQUES
Langages          JavaScript/TypeScript, Python, SQL, PHP (notions)
Front-end         React, HTML/CSS, Tailwind, formulaires accessibles
Back-end          Node.js/Express, FastAPI, API REST, authentification JWT
Bases de données  PostgreSQL, SQLite, modélisation relationnelle (MCD/MLD)
Outils            Git/GitHub, GitHub Actions, Docker (notions), Linux, Postman, Figma
Tests & qualité   Jest, pytest, ESLint/Prettier
Langues           Français (natif), anglais B2 — documentation technique sans difficulté

PROJETS
[NomProjet1] — projet personnel, en ligne · github.com/[pseudo]/[projet1]
  Application de suivi de dépenses partagées entre colocataires (comptes,
  répartition, historique). React + Node.js/Express + PostgreSQL, déployée sur
  un VPS avec HTTPS et sauvegarde quotidienne de la base.
  Point technique : calcul de remboursement minimisant le nombre de transactions
  (algorithme glouton sur les soldes) — 22 tests unitaires sur ce module.
  Utilisée par 6 personnes depuis [mois AAAA].

[NomProjet2] — projet d'école, équipe de 4, 8 semaines · github.com/[pseudo]/[projet2]
  Plateforme de réservation de salles pour un campus (planning, conflits,
  rôles étudiant/enseignant/admin). Stack imposée : PHP + MySQL.
  Mon périmètre : le moteur de détection de conflits de créneaux et l'interface
  d'administration. J'ai repris la vérification de chevauchement en SQL plutôt
  qu'en PHP après avoir mesuré un temps de réponse de 1,8 s sur 5 000 réservations
  de test — ramené à ~90 ms avec un index composite (salle, date_debut).
  Rôle transverse : mise en place du dépôt Git et des règles de branches.

[NomProjet3] — projet associatif · github.com/[pseudo]/[projet3]
  Refonte du site de l'association [X] (~25 membres) : passage d'un site statique
  bricolé à une base de contenus éditable. Astro + Markdown, hébergement gratuit,
  formation de 2 membres à la mise à jour (documentation de 3 pages rédigée).

EXPÉRIENCE
Équipier polyvalent — [Enseigne], [Ville] · juillet-août [AAAA] (2 étés)
  Service en horaires décalés, gestion de caisse, formation de 2 saisonniers
  nouvellement arrivés.
Tuteur en programmation (bénévole) — [ÉCOLE] · [AAAA] – aujourd'hui
  Accompagnement hebdomadaire de 5 étudiants de 1re année en algorithmique et
  en Git. C'est ce qui m'a appris à expliquer un raisonnement à voix haute.

FORMATION
BUT Informatique, parcours Réalisation d'applications — [ÉCOLE], [Ville] · [AAAA]-[AAAA]
  Alternance recherchée : sept. [AAAA] → août [AAAA] · rythme 3 sem. entreprise /
  1 sem. école · démarrage possible dès [date]
  Modules principaux : développement web, bases de données, génie logiciel,
  qualité de développement, gestion de projet
Baccalauréat général — spécialités NSI et Mathématiques · mention [X] · [AAAA]

DIVERS
Auto-hébergement d'un serveur domestique (Debian, 3 services conteneurisés) —
c'est là que j'ai appris Linux et les reverse proxies.
Permis B — véhiculé.
```

---

## 6. MODÈLE B — Profil data / cybersécurité

> ⚠️ **TOUTES LES DONNÉES CI-DESSOUS SONT FICTIVES.** Même avertissement que ci-dessus. Ce modèle sert deux familles proches par la posture (rigueur, méthode, preuve) : adapte le bloc Compétences selon que tu vises data ou cyber, et supprime ce qui ne te concerne pas.

```
=============================================================================
[PRÉNOM] [NOM]
Alternant analyste cybersécurité (SOC / GRC) — Licence pro Cybersécurité
[Ville] (mobilité nationale, télétravail partiel possible) · [06 XX XX XX XX]
[prenom.nom@email.fr] · github.com/[pseudo] · linkedin.com/in/[pseudo]
=============================================================================

PROFIL
Étudiant en licence professionnelle Cybersécurité, je cherche une alternance
d'analyste sécurité de septembre [AAAA] à septembre [AAAA], rythme 1 semaine école /
3 semaines entreprise. Je viens du développement (Python, réseaux) et je m'oriente
vers la défense : j'ai monté un laboratoire de détection à la maison (Suricata +
collecte de logs) et je documente chaque incident simulé. Je cherche une équipe
qui accepte de faire relire ses analyses par un débutant qui pose des questions.

COMPÉTENCES TECHNIQUES
Systèmes & réseaux   Linux (Debian, Rocky), Windows Server, TCP/IP, DNS, VLAN,
                     pare-feu (pfSense), VPN (WireGuard)
Sécurité             Analyse de logs, SIEM (Wazuh), IDS (Suricata), durcissement
                     système, gestion des vulnérabilités (OpenVAS), OWASP Top 10
Data & scripting     Python (pandas, requests), SQL, Bash, PowerShell (notions),
                     expressions régulières
Outils               Git, Docker, Proxmox, Wireshark, Nmap, Burp Suite (notions),
                     Grafana
Référentiels         ISO/IEC 27001 (sensibilisation), RGPD (module suivi en
                     formation), guides d'hygiène ANSSI
Langues              Français (natif), anglais B2 — veille et documentation
                     technique quotidiennes

PROJETS ET TRAVAUX PRATIQUES
[NomLab] — laboratoire personnel, en fonctionnement depuis [mois AAAA]
  · github.com/[pseudo]/[lab]
  Infrastructure de test sur un serveur unique (Proxmox, 5 machines virtuelles) :
  un domaine Windows, deux postes clients, un pare-feu pfSense, un collecteur
  Wazuh. Objectif : simuler des attaques élémentaires et vérifier ce que la
  détection voit réellement.
  Résultat documenté : sur 6 scénarios rejoués (balayage réseau, force brute SSH,
  exfiltration en clair), 4 remontaient une alerte exploitable en configuration
  par défaut ; j'ai écrit 3 règles de détection pour les deux autres et documenté
  les faux positifs constatés.
  Le dépôt contient la configuration, les règles et un compte rendu par scénario.

[NomProjet2] — projet d'école, équipe de 3, 10 semaines
  Audit de sécurité d'une application web volontairement vulnérable fournie par
  l'établissement. Mon périmètre : l'authentification et la gestion de session.
  4 vulnérabilités identifiées et rejouées (dont une injection SQL et un défaut
  de contrôle d'accès horizontal), chacune décrite avec impact, preuve de concept
  et remédiation proposée. Rapport de 18 pages, restitution orale de 20 minutes.

[NomProjet3] — analyse de données, projet personnel · github.com/[pseudo]/[projet3]
  Traitement d'un jeu de données ouvert de [thème] (data.gouv.fr, ~800 000 lignes) :
  nettoyage en Python/pandas, chargement PostgreSQL, tableau de bord Grafana.
  Point technique : la déduplication sur des identifiants incohérents entre deux
  millésimes — traitée par normalisation puis rapprochement flou, avec un taux
  de correspondance mesuré et un échantillon de 100 lignes vérifié à la main.

EXPÉRIENCE
Stage — support informatique · [Structure], [Ville] · [mois AAAA] (6 semaines)
  Traitement de tickets de niveau 1 (postes, comptes, imprimantes), rédaction de
  4 fiches de procédure reprises par l'équipe. Premier contact avec un parc réel
  et avec le fait qu'un utilisateur ne décrit jamais le problème qu'il a.
Employé de rayon — [Enseigne], [Ville] · étés [AAAA] et [AAAA]

FORMATION
Licence professionnelle Cybersécurité — [ÉCOLE], [Ville] · [AAAA]-[AAAA]
  Alternance recherchée : sept. [AAAA] → sept. [AAAA] · rythme 1 sem. école /
  3 sem. entreprise
BTS SIO option SISR — [ÉCOLE], [Ville] · [AAAA]-[AAAA]

DIVERS
Participation régulière à des CTF en ligne (catégories web et forensic) —
j'y ai appris à lire un énoncé avant de lancer un outil.
Veille : suivi hebdomadaire des bulletins d'alerte du CERT-FR.
Permis B.
```

---

## 7. Checklist de contrôle en 20 points

À passer **après une nuit de repos**, jamais juste après la rédaction. Coche honnêtement. Tant qu'une case n'est pas cochée, ne candidate pas.

### Lisibilité machine (1-6)
- [ ] **1.** Le test copier-coller renvoie tout mon texte, dans l'ordre, sans mélange.
- [ ] **2.** Le document n'a **aucune** colonne multiple, **aucun** tableau, **aucune** zone de texte flottante.
- [ ] **3.** Mes coordonnées sont dans le corps du document, pas dans un en-tête ou un pied de page.
- [ ] **4.** Aucune information n'existe uniquement sous forme d'icône, de logo ou de graphique.
- [ ] **5.** Mes titres de sections sont standards : Compétences, Projets, Expérience, Formation.
- [ ] **6.** Le fichier est un PDF **texte**, nommé `CV_NOM_Prenom_Alternance_[Poste].pdf`.

### Contenu et ciblage (7-13)
- [ ] **7.** Le titre sous mon nom reprend l'intitulé du poste visé, pas « étudiant en informatique ».
- [ ] **8.** Les **dates du contrat et le rythme d'alternance** figurent noir sur blanc.
- [ ] **9.** Ma ville et ma mobilité sont indiquées.
- [ ] **10.** Un lien GitHub est présent, il fonctionne, et il pointe vers un profil qui n'est pas vide.
- [ ] **11.** Chaque projet dit **ce que j'ai fait moi**, pas ce que l'équipe a fait.
- [ ] **12.** Au moins un projet contient **un choix technique que je peux défendre 3 minutes**.
- [ ] **13.** Au moins un élément mesurable et vrai apparaît (tests, volume, temps, utilisateurs).

### Honnêteté et sobriété (14-17)
- [ ] **14.** Je peux répondre à une question sur **chaque ligne** de ma section Compétences. Sinon je la retire ou j'ajoute « (notions) ».
- [ ] **15.** Aucun chiffre n'est inventé ou arrondi à la hausse.
- [ ] **16.** Aucun projet d'école n'est présenté comme une mission professionnelle.
- [ ] **17.** Aucune barre de niveau, aucune étoile, aucun pourcentage de compétence.

### Forme finale (18-20)
- [ ] **18.** Le CV tient sur **une page**, avec des marges respirables (≥ 1,5 cm) et une police 10-11 pt.
- [ ] **19.** **Une autre personne** l'a relu et n'a trouvé aucune faute. Pas seulement le correcteur.
- [ ] **20.** Je l'ai ouvert sur un téléphone : il reste lisible sans zoomer sur chaque ligne.

---

## 8. Ce que tu fais maintenant

1. Écris ton CV maître à partir du modèle qui te ressemble le plus. **2 h.**
2. Dors dessus.
3. Passe la checklist. **30 min.**
4. Fais-le relire par une personne technique et une personne non technique. Les deux voient des choses différentes.
5. Crée tes 2-3 variantes en ne changeant que le titre, l'accroche et l'ordre des projets. **20 min.**
6. Va au fichier `02` : ton CV renvoie vers ton GitHub, il faut maintenant que ce GitHub tienne la promesse.

---

### Sources citées dans ce fichier
- [Santa Clara University — Common ATS Resume Formatting Mistakes](https://www.scu.edu/careercenter/toolkit/job-scan-common-ats-resume-formatting-mistakes/)
- [University of Virginia Career Center — Navigating ATS](https://career.virginia.edu/Students/Prepare/Resumes/NavigatingATS)
- [University of Minnesota Duluth Career Center — ATS Tips](https://career.d.umn.edu/students/resume-cover-letter/applicant-tracking-system-ats-tips)
