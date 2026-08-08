# Copywriting du site — Premier Commit

> Document de production. Chaque bloc est prêt à intégrer tel quel.
> Placeholders à remplacer avant mise en ligne : `[PRÉNOM NOM]`, `[ÉCOLE]`, `[SIRET]`, `[ADRESSE]`, `[EMAIL_CONTACT]`, `[TELEPHONE]`, `[MÉDIATEUR — NOM/ADRESSE/SITE]`, `[LIEN_PAIEMENT]`.
>
> **Règles de rédaction appliquées ici, à ne pas casser en relecture** : aucune promesse de résultat, aucune mention de mise en relation ou de carnet d'adresses, aucun témoignage, aucun chiffre de clients, aucun compte à rebours. Tous les chiffres cités sont sourcés.

---

## 1. Hero

**Titre (H1)**

> Ce n'est pas un problème d'effort. C'est la méthode.

**Sous-titre**

> Accompagnement méthodologique pour décrocher une alternance en informatique — dev, data, cybersécurité, systèmes et réseaux. On ne cherche pas à envoyer plus de candidatures. On cherche à en envoyer moins, et beaucoup mieux construites.

**CTA principal**

> `init` — Commencer avec Le Kit · 49 €

**CTA secondaire**

> Pourquoi 900 candidatures ne marchent pas ↓

**Micro-ligne sous les boutons** (rassurance, sans promesse)

> Accès immédiat. Rétractation 14 jours dans les conditions prévues par la loi. Aucun abonnement, aucune reconduction.

---

## 2. Le constat

**Titre de section**

> Tu n'es pas en train d'échouer tout seul.

**Corps**

> Si tu envoies des candidatures depuis des semaines sans réponse, la première chose à savoir c'est que ce n'est pas une anomalie personnelle. En mars 2025, l'Apec chiffrait à **67 %** la part d'étudiants du supérieur ayant rencontré des difficultés à trouver une entreprise d'accueil. Deux étudiants sur trois.
>
> La presse a documenté des parcours qui donnent la mesure du problème : **944 candidatures pour 3 entretiens et 0 contrat**. Ailleurs, 500 envois sur neuf mois. Ces chiffres ne décrivent pas des gens paresseux — ils décrivent des gens qui travaillent énormément dans une direction qui ne paie pas.
>
> Le contexte n'aide pas : le nombre d'offres d'alternance publiées sur Indeed a reculé de **32 % en un an**, et le nombre de contrats signés en 2025 est en baisse de 5 % (−7,8 % dans le supérieur). Moins d'offres, autant de candidats : mécaniquement, la concurrence par annonce monte.
>
> Ce n'est donc pas le moment de fournir plus d'effort. C'est le moment de changer la façon dont l'effort est dépensé.

**Encadré chiffres (3 cartes, mono pour les nombres)**

| Chiffre | Libellé | Source |
|---|---|---|
| `67 %` | des étudiants du supérieur en difficulté pour trouver une entreprise | Apec, mars 2025 |
| `944` | candidatures pour 3 entretiens et 0 contrat, dans un témoignage de presse | L'Étudiant |
| `−32 %` | d'offres d'alternance publiées sur Indeed en un an | relevé de marché |

---

## 3. Pourquoi 900 candidatures ne marchent pas

**Titre de section**

> 900 candidatures, c'est 900 fois la même erreur.

**Chapô**

> C'est la partie du site qu'il faut lire même si tu n'achètes rien. Si tu comprends ça, tu as déjà récupéré des semaines.

**Corps**

> Envoyer 900 candidatures identiques, c'est relancer 900 fois le même build cassé en espérant que le 901e passe. Le volume ne corrige rien : il reproduit le défaut à l'échelle. Et comme un refus n'arrive presque jamais avec un motif, tu n'as aucun moyen de savoir ce qui casse. Tu pousses en prod sans logs.
>
> Voilà où ça casse, dans l'ordre où ça arrive.

**Les six points de rupture** (format liste numérotée, chaque item avec un titre court)

> **1. Le CV ne survit pas au filtre automatique.**
> Beaucoup de candidatures ne sont jamais lues par un humain. Un CV en deux colonnes, avec des icônes, des barres de progression et des logos de technologies à la place du texte, se fait mal découper par les outils de tri : les lignes se mélangent, les compétences disparaissent. Une compétence affichée en logo n'existe pas pour une machine qui lit du texte. Tu peux avoir le bon profil et être écarté au parsing.
>
> **2. Le CV parle de toi, pas du poste.**
> « Étudiant motivé recherchant une alternance en informatique » ne répond pas à une offre qui demande du back-end Node et du PostgreSQL. Le recruteur ne traduit pas à ta place. Un CV générique envoyé 900 fois est un CV hors sujet 900 fois.
>
> **3. Le GitHub n'est pas regardé comme tu l'imagines.**
> En informatique, le lien GitHub est cliqué — c'est l'avantage énorme de cette filière, et c'est aussi là que ça se joue. Ce qu'on y trouve trop souvent : des forks de tutoriels, aucun README, un dernier commit qui date de huit mois, des dépôts nommés `projet-final-v3-vraiment-final`. Ce n'est pas un problème de niveau technique, c'est un problème de mise en forme d'un travail qui existe déjà.
>
> **4. Tu ne candidates que là où tout le monde candidate.**
> Répondre uniquement à des annonces publiées, c'est se placer volontairement dans la file la plus longue, sur un stock d'offres en recul de 32 % en un an. La candidature ciblée vers des entreprises qui n'ont pas publié d'annonce demande un vrai travail de sélection et de rédaction — c'est précisément pour ça que peu de gens la font.
>
> **5. Le calendrier ne t'a pas attendu.**
> Environ la moitié des offres annuelles paraissent entre mai et juillet, et selon l'Apec plus de la moitié des entreprises ont choisi leur alternant à la mi-juin. En septembre, il ne paraît plus que **9 %** des offres de l'année. Une candidature parfaite envoyée au mauvais moment de l'année ne rattrape pas le retard toute seule ; elle demande une stratégie différente.
>
> **6. Il n'y a aucune boucle de retour.**
> Sans suivi, tu ne sais pas quelle version de ton CV est partie où, ce que tu as relancé, ni ce qui a produit une réponse. Tu ne peux donc rien corriger. En développement, personne n'accepterait de travailler sans historique et sans retour d'erreur — c'est pourtant comme ça que se mène 90 % des recherches d'alternance.

**Bloc de bascule (fin de section)**

> **Ce qu'on fait à la place.**
> On ne vise pas 900 candidatures. On vise une quarantaine de candidatures ciblées, construites une par une, envoyées dans un ordre choisi, tracées dans un tableau de suivi, relancées au bon moment et corrigées à mesure que les retours arrivent. C'est moins de volume, plus de travail par unité, et c'est le seul endroit où tu as encore une marge de progression.
>
> Ça ne garantit rien — personne ne peut garantir un contrat, et tu liras plus bas pourquoi je ne le ferai pas. Ça remet simplement ton effort là où il peut compter.

---

## 4. Ce que tu reçois

**Titre de section**

> Trois niveaux. Tu prends celui qui correspond à l'endroit où tu bloques.

**Chapô**

> Prix nets, en une fois. TVA non applicable, article 293 B du CGI. Aucun abonnement.

### Offre 1 — Le Kit · `init` · 49 €

> **100 % numérique, accès immédiat.**
>
> - Modèles de CV lisibles par les ATS pour profils tech
> - Guide du portfolio GitHub qui donne envie
> - Méthode de ciblage des entreprises
> - Tableau de suivi des candidatures
> - Modèles de relance
> - Préparation aux entretiens techniques
>
> **Pour qui** : tu veux la méthode complète et tu la mets en œuvre seul.
> **CTA** : `init` — Prendre Le Kit · 49 € → `[LIEN_PAIEMENT]`

### Offre 2 — La Méthode · `commit` · 149 €

> **Le Kit, plus un regard sur ton dossier réel.**
>
> - Tout Le Kit
> - Audit vidéo personnalisé de ton CV, de ton GitHub et de ton LinkedIn (~15 min de vidéo commentée)
> - 1 visio de 45 min
>
> **Pour qui** : tu as déjà candidaté et tu veux savoir ce qui, concrètement, ne va pas dans ton dossier.
> **CTA** : `commit` — Prendre La Méthode · 149 € → `[LIEN_PAIEMENT]`

### Offre 3 — Le Suivi · `merge` · 290 €

> **La Méthode, plus un accompagnement dans la durée.**
>
> - Tout La Méthode
> - 3 points de 30 min sur 6 semaines
> - Relecture écrite de tes candidatures (jusqu'à 10)
>
> **Pour qui** : tu veux quelqu'un qui relit et corrige pendant que tu candidates.
> **CTA** : `merge` — Prendre Le Suivi · 290 € → `[LIEN_PAIEMENT]`

**Note sous le tableau des offres** (transparence sur les limites, volontairement affichée)

> Les périmètres sont bornés et écrits : Le Suivi, c'est 3 points et 10 relectures, pas « illimité ». Au-delà, on repart sur un nouveau créneau. Je préfère annoncer une limite claire plutôt que promettre une disponibilité que je ne pourrais pas tenir — je suis alternant, mon temps est fini et je le dis avant que tu paies.

---

## 5. Ce que ce n'est pas

**Titre de section**

> Ce que Premier Commit ne fait pas, et pourquoi.

**Chapô**

> Cette section est volontairement placée avant le formulaire de paiement, pas après. Elle est le meilleur moyen de savoir si tu dois acheter ou non.

**Les quatre points**

> **Je ne te place pas en entreprise.**
> Aucune mise en relation, aucune recommandation auprès d'un employeur, aucun contact transmis d'un côté ou de l'autre. Tu postules toi-même, avec ton nom, à des entreprises que tu as choisies.
>
> **Je ne transmets aucun CV à des entreprises.**
> Ton CV sert à une chose et une seule : que je le lise et que je te dise ce qui ne va pas dedans. Il ne part nulle part ailleurs.
>
> **Je ne garantis aucun contrat, ni aucun délai.**
> Ni « en 15 jours », ni « avant la rentrée », ni « ou remboursé ». Je m'engage sur des livrables et sur un temps de travail précis — c'est ce qui est écrit dans les offres ci-dessus, et c'est tout ce sur quoi quelqu'un d'honnête peut s'engager.
>
> **Je ne vends pas de liste d'entreprises.**
> Ni fichier, ni base, ni « les 200 boîtes qui recrutent ». Ce que je transmets, c'est une méthode de ciblage que tu appliques toi-même, avec des sources publiques et gratuites.

**Le pourquoi — bloc explicatif, ton posé**

> **Pourquoi c'est cadré comme ça.**
>
> D'abord parce que c'est la loi. L'article L5321-3 du Code du travail interdit de faire payer une personne en recherche d'emploi en contrepartie de services de **placement** — c'est-à-dire le fait de rapprocher une offre et une demande d'emploi. La sanction prévue est de 6 mois d'emprisonnement et 3 750 € d'amende. Vendre un carnet d'adresses, une mise en relation ou une promesse d'entretien à un étudiant, c'est exactement ce que ce texte interdit. Ce que la loi autorise explicitement à l'article L5321-2, c'est le conseil en insertion professionnelle : la méthode, la préparation, la relecture, l'entraînement. C'est le périmètre de Premier Commit, entièrement.
>
> Ensuite parce que c'est ce qui sépare un accompagnement d'une promesse en l'air. Quelqu'un qui te garantit un contrat te garantit une chose qu'il ne contrôle pas : la décision d'un employeur qu'il ne connaît pas, sur un marché en recul de 32 % d'offres en un an. Ce n'est pas de la confiance en soi, c'est une clause qu'il ne pourra pas honorer. Moi je peux m'engager sur ce que je fais : une vidéo d'audit de 15 minutes, une visio de 45 minutes, dix relectures. Tu peux vérifier que je l'ai fait.
>
> Enfin parce que c'est ce que tu montres à tes parents s'ils paient. Une page qui promet un résultat daté ne passe pas cet examen-là. Une page qui écrit ses limites, oui.

---

## 6. Qui je suis

**Titre de section**

> Qui écrit tout ça.

**Bloc à compléter — il suffit de remplacer les deux champs**

> Je m'appelle **[PRÉNOM NOM]**. Je suis alternant en informatique, en formation à **[ÉCOLE]**.
>
> Je ne suis pas consultant en carrière et je n'ai pas vingt ans de recrutement derrière moi. Mon seul titre, c'est d'avoir fait ce chemin récemment, dans la même filière que toi, avec les mêmes outils et le même marché. Je sais à quoi ressemble une boîte mail qui ne répond pas, un tableur de candidatures qui s'allonge, et la question de la rentrée qui se rapproche. Je sais aussi ce qui a fini par changer quelque chose dans ma façon de candidater — et c'est très exactement ce que j'ai mis dans Le Kit.
>
> **Premier Commit démarre.** Le service vient d'ouvrir : il n'y a pas encore de clients, donc pas encore de témoignages. Je préfère te le dire ici plutôt que d'afficher des avis que tu ne pourrais pas vérifier. Quand il y aura des retours réels et vérifiables, ils seront publiés tels quels, y compris ceux qui ne sont pas flatteurs.
>
> Ce que tu peux vérifier dès maintenant : mon identité, mon numéro SIRET `[SIRET]` et mes mentions légales sont affichés en clair sur ce site. Tu peux m'écrire avant d'acheter à `[EMAIL_CONTACT]` — je réponds moi-même, il n'y a personne d'autre.

---

## 7. FAQ

**Titre de section**

> Les questions qu'on me pose, avec les vraies réponses.

### Est-ce que ça marche vraiment ?

> Je ne peux pas te le prouver aujourd'hui, et je ne vais pas faire semblant : le service démarre, il n'y a pas encore de résultats clients à te montrer. Ce que je peux te dire, c'est sur quoi la méthode repose : rendre un CV lisible par les outils de tri automatique, aligner chaque candidature sur une offre précise, présenter un GitHub qu'un développeur a envie d'ouvrir, cibler des entreprises au lieu de répondre uniquement aux annonces, et suivre ce que tu envoies pour pouvoir le corriger. Aucun de ces points n'est une opinion. Chacun corrige une raison identifiable pour laquelle une candidature ne reçoit pas de réponse. Et non, ça ne garantit rien : le résultat dépend aussi de ton profil, de ton secteur et du marché.

### Tu me trouves une entreprise ?

> Non. Et pas par prudence commerciale : parce que c'est interdit. L'article L5321-3 du Code du travail interdit de faire payer une personne en recherche d'emploi pour du placement, c'est-à-dire pour la mise en relation avec un employeur — 6 mois d'emprisonnement et 3 750 € d'amende à la clé. Je ne transmets donc aucun CV à des entreprises, je ne te recommande auprès de personne et je ne vends aucune liste. Je t'apprends à cibler et à candidater, tu candidates toi-même. Si un service payant te promet des mises en relation ou un carnet d'adresses, c'est un signal à prendre au sérieux.

### Je suis en BTS / BUT / licence / école d'ingénieurs / bootcamp — c'est pour moi ?

> Oui pour les cinq, à condition que tu cherches en informatique : développement, data, cybersécurité, systèmes et réseaux. Le niveau change ce que tu mets en avant — un BTS SIO valorise ses projets et ses stages, un profil bac+5 valorise sa spécialisation, un sortant de bootcamp doit compenser l'absence de diplôme long par un portfolio solide. La méthode est la même, les arbitrages diffèrent, et c'est justement le genre de chose qu'on regarde dans l'audit.

### Je ne suis pas en informatique, tu peux m'aider ?

> Non, et je préfère te faire économiser 49 €. Tout ce que je propose est calibré pour la tech : lecture d'un GitHub, vocabulaire des offres dev et data, entretiens techniques. Sur un autre secteur, je serais un généraliste de plus, sans valeur ajoutée.

### Je n'ai aucune expérience, ça sert à quoi de payer ?

> C'est le cas de presque tous les étudiants qui cherchent une première alternance, et ce n'est pas ce qui bloque. Ce qui bloque, c'est de présenter cette absence comme un trou. Tu as des projets d'école, des travaux personnels, des choses que tu as cassées puis réparées — c'est de la matière exploitable, à condition de la formuler comme un employeur la lit : un problème, une solution technique, un résultat. Une grande partie du Kit sert exactement à ça : transformer ce que tu as déjà en preuves lisibles.

### Combien de temps ça me prend ?

> Compte une demi-journée pour reprendre ton CV et ton GitHub avec les modèles, puis 2 à 4 heures par semaine pour la partie ciblage, candidature et relance. C'est un vrai travail réparti dans le temps, pas une journée à cocher. Le format est fait pour tenir en parallèle des cours. Si tu n'as vraiment aucun créneau, attends une période plus calme plutôt que d'acheter maintenant.

### Mes parents peuvent-ils payer ?

> Oui, c'est fréquent et c'est prévu. Le paiement peut être fait depuis n'importe quel moyen de paiement, y compris celui d'un parent ; la facture est établie au nom de la personne qui paie si elle le demande, à `[EMAIL_CONTACT]`. Cette page est écrite pour être lue par eux autant que par toi : c'est aussi pour ça que tu n'y trouveras aucune promesse de contrat ni aucun compte à rebours.

### Remboursement et rétractation, comment ça marche ?

> Tu disposes d'un droit de rétractation de 14 jours à compter de l'achat. Attention à un point précis, qui est écrit dans les conditions de vente : pour les contenus numériques accessibles immédiatement, la loi prévoit que tu renonces expressément à ce droit en demandant l'accès instantané — c'est ce que tu coches au moment du paiement pour recevoir Le Kit tout de suite. Si tu préfères conserver tes 14 jours, tu ne coches pas, et l'accès t'est ouvert à l'issue du délai. Pour les prestations avec rendez-vous (La Méthode, Le Suivi), la rétractation s'applique sur les séances non encore réalisées. En cas de litige, tu peux saisir gratuitement le médiateur de la consommation : `[MÉDIATEUR — NOM/ADRESSE/SITE]`.

### Et si je signe avant la fin de l'accompagnement ?

> Tant mieux, c'est le but. Sur Le Suivi, tu peux réutiliser les points restants pour préparer ton intégration, ou les arrêter — dans ce cas écris-moi à `[EMAIL_CONTACT]` et on regarde ce qui est juste sur la partie non réalisée, au prorata des séances restantes. Je n'ai aucun intérêt à faire durer quelque chose qui n'a plus d'objet.

### Quelle différence avec les méthodes à ~250 € qu'on voit passer sur Instagram ?

> Trois différences factuelles, à toi de juger si elles comptent.
>
> 1. **La promesse.** Certaines de ces offres affichent un résultat daté, du type « une alternance en moins de 15 jours ». Je n'affiche aucune promesse de résultat, parce que le résultat dépend de décisions d'employeurs que ni eux ni moi ne contrôlons.
> 2. **Le périmètre.** Elles sont généralistes, tous secteurs confondus. Premier Commit ne traite que l'informatique — c'est plus étroit, et c'est le seul terrain où je suis crédible.
> 3. **La vérifiabilité.** Mon identité, mon SIRET et mes mentions légales sont affichés. Je n'affiche aucun témoignage tant que je n'en ai pas de réels et vérifiables, et aucun compteur de clients.
>
> Un conseil qui ne me rapporte rien : avant d'acheter quoi que ce soit dans cette catégorie, y compris ici, cherche le nom du site sur les outils publics de vérification de confiance, regarde si une identité et un SIRET sont affichés, et lis ce que le vendeur écrit sur ce qu'il ne fait **pas**. Une page qui n'a pas de section « ce que ce n'est pas » mérite une question de plus.

### Qu'est-ce que tu fais de mon CV ?

> Je le lis, je l'annote, j'enregistre une vidéo commentée pour toi, et c'est tout. Il n'est transmis à aucune entreprise, à aucun recruteur, à aucun partenaire, et il n'est jamais revendu — la loi l'interdit et ce n'est pas le service. Tes fichiers sont conservés le temps de l'accompagnement puis supprimés sur simple demande à `[EMAIL_CONTACT]`, et au plus tard selon la durée indiquée dans la politique de confidentialité. Tu peux demander à tout moment l'accès, la rectification ou la suppression de tes données.

### Je suis mineur, je peux acheter ?

> Pas seul. Si tu as moins de 18 ans, l'achat doit être fait par un parent ou ton représentant légal, qui est alors le client au sens des conditions de vente. Pour les rendez-vous en visio, je demande son accord écrit préalable — un simple e-mail depuis son adresse suffit. C'est une contrainte, je sais, mais c'est le cadre normal quand on travaille avec des mineurs.

### Tu ne réponds pas à ma question.

> Écris-moi à `[EMAIL_CONTACT]` avant d'acheter. C'est moi qui lis et qui réponds. Si ton besoin ne correspond pas à ce que je propose, je te le dirai — c'est moins coûteux pour tout le monde qu'un remboursement.

---

## 8. Bandeau CTA final

**Titre**

> Commence par la seule chose que tu contrôles : la méthode.

**Corps**

> Tu ne peux pas décider du nombre d'offres publiées cette année, ni de la réponse d'une entreprise. Tu peux décider de ne plus envoyer la même candidature 900 fois.

**CTA principal**

> `init` — Prendre Le Kit · 49 € → `[LIEN_PAIEMENT]`

**CTA secondaire**

> `commit` — La Méthode · 149 € · avec audit de ton dossier

**Micro-ligne**

> Aucun abonnement. Aucune mise en relation avec des entreprises. Aucune promesse de contrat.

---

## 9. Micro-footer

> **Premier Commit** — accompagnement méthodologique à la recherche d'alternance en informatique. Activité de conseil en insertion professionnelle (art. L5321-2 du Code du travail). Aucune activité de placement, aucune mise en relation avec des employeurs.
>
> `[PRÉNOM NOM]` · SIRET `[SIRET]` · `[ADRESSE]` · `[EMAIL_CONTACT]` · `[TELEPHONE]`
> TVA non applicable, art. 293 B du CGI.
> Médiateur de la consommation : `[MÉDIATEUR — NOM/ADRESSE/SITE]`
>
> Mentions légales · Conditions générales de vente · Politique de confidentialité · Cookies (aucun traceur publicitaire, aucune police chargée depuis un serveur tiers)
>
> `main` · dernière mise à jour : `[DATE]`

---

## 10. Métadonnées SEO

> Longueurs contrôlées : title ≤ 60 caractères, meta description ≤ 155 caractères (espaces compris).

### Accueil — `/`

- **Title** (55) : `Premier Commit — alternance en informatique, la méthode`
- **Meta description** (143) : `Accompagnement méthodologique pour décrocher une alternance en informatique. Moins de candidatures, mieux construites. Kit 49 €, Méthode 149 €.`
- **H1** : Ce n'est pas un problème d'effort. C'est la méthode.

### Offres — `/offres`

- **Title** (46) : `Offres et tarifs — Premier Commit · 49 à 290 €`
- **Meta description** (151) : `Trois niveaux d'accompagnement à la recherche d'alternance en tech : Le Kit 49 €, La Méthode 149 €, Le Suivi 290 €. Périmètres écrits, sans abonnement.`
- **H1** : Trois niveaux. Tu prends celui qui correspond à l'endroit où tu bloques.

### Méthode / pourquoi ça bloque — `/methode`

- **Title** (58) : `Pourquoi 900 candidatures ne marchent pas — Premier Commit`
- **Meta description** (151) : `CV illisible par les ATS, GitHub mal présenté, ciblage absent, calendrier raté : les six raisons pour lesquelles le volume de candidatures ne paie pas.`
- **H1** : 900 candidatures, c'est 900 fois la même erreur.

### Ce que ce n'est pas — `/ce-que-ce-n-est-pas`

- **Title** (47) : `Ce que Premier Commit ne fait pas — et pourquoi`
- **Meta description** (150) : `Aucun placement, aucun CV transmis à des entreprises, aucune promesse de contrat, aucune liste vendue. Ce que dit la loi et ce que ça change pour toi.`
- **H1** : Ce que Premier Commit ne fait pas, et pourquoi.

### FAQ — `/faq`

- **Title** (40) : `FAQ — Premier Commit, alternance en tech`
- **Meta description** (150) : `Est-ce que ça marche ? Tu me trouves une entreprise ? Rétractation, paiement par les parents, données personnelles : les réponses sans langue de bois.`
- **H1** : Les questions qu'on me pose, avec les vraies réponses.

### Le Rattrapage — `/rattrapage`

- **Title** (45) : `Pas d'entreprise à la rentrée — Le Rattrapage`
- **Meta description** (149) : `Sans alternance à la rentrée, la fenêtre n'est pas fermée : le contrat peut souvent être signé jusqu'à environ 3 mois après le début de la formation.`
- **H1** : Tu n'as pas d'entreprise à la rentrée. Ce n'est pas fini.

### Qui je suis — `/a-propos`

- **Title** (43) : `Qui je suis — Premier Commit · [PRÉNOM NOM]`
- **Meta description** (139) : `Alternant en informatique, j'ai fait ce chemin récemment. Identité, SIRET et périmètre affichés en clair. Le service démarre, et je le dis.`
- **H1** : Qui écrit tout ça.

### Mentions légales — `/mentions-legales`

- **Title** (33) : `Mentions légales — Premier Commit`
- **Meta description** (122) : `Éditeur, SIRET, hébergeur, médiateur de la consommation et conditions générales de vente de Premier Commit. Tout en clair.`
- **H1** : Mentions légales et conditions de vente
- **Indexation** : `noindex` non recommandé — page volontairement indexable, elle fait partie de la preuve de sérieux.
