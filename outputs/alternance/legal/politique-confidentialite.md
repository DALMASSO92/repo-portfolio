# Politique de confidentialité — Premier Commit

**Protection des données personnelles — RGPD et loi Informatique et Libertés**

**Version [VERSION] — en vigueur au [DATE]**

---

## ⚠️ À vérifier avant publication

| # | À faire | Pourquoi |
|---|---|---|
| 1 | Remplacer tous les placeholders : `[PRÉNOM NOM]`, `[SIRET]`, `[ADRESSE]`, `[EMAIL_CONTACT]`, `[TELEPHONE]`, `[VERSION]`, `[DATE]` | Aucune identité n'a été inventée. |
| 2 | **Identifier nominativement les sous-traitants réellement utilisés** et remplacer `[PRESTATAIRE_PAIEMENT]`, `[OUTIL_VISIO]`, `[FOURNISSEUR_MESSAGERIE]`, `[OUTIL_HEBERGEMENT_VIDEO]` par leur **dénomination sociale, pays d'établissement et lien vers leur politique de confidentialité** | Art. 13.1 e) du RGPD : les destinataires ou catégories de destinataires doivent être indiqués. Le branding évoque « lien Stripe ou virement » mais **aucun compte n'était créé** au moment de la rédaction : ne rien affirmer avant d'avoir souscrit. |
| 3 | Pour chaque sous-traitant : **signer / accepter l'accord de sous-traitance (DPA)** au sens de l'article 28 du RGPD et le conserver | Obligation du responsable de traitement. |
| 4 | Vérifier pour chaque outil s'il existe un **transfert hors Union européenne** et sur quelle garantie il repose (décision d'adéquation, clauses contractuelles types) ; compléter la section 8 | Art. 44 à 49 du RGPD. Point sensible pour les outils de visioconférence américains. |
| 5 | Vérifier que le site n'appelle **aucune ressource externe** (police distante, script, pixel, iframe, CDN) et que les typographies sont bien auto-hébergées | Une simple police chargée depuis un serveur tiers transmet l'adresse IP du visiteur. |
| 6 | Si une mesure d'audience est ajoutée, vérifier qu'elle est **exemptée de consentement** selon les critères CNIL, sinon déployer un bandeau conforme et compléter la section 10 | Art. 82 de la loi Informatique et Libertés. |
| 7 | Confirmer la **durée de conservation des journaux du serveur (logs)** effectivement configurée sur le VPS et l'aligner sur la section 6 | Ne pas annoncer une durée que la machine ne respecte pas. |
| 8 | Mettre en place le **registre des activités de traitement** (modèle CNIL pour petites structures) et le tenir à jour | Art. 30 du RGPD. Obligatoire même pour un auto-entrepreneur dès lors que le traitement n'est pas occasionnel — ce qui est le cas ici. |
| 9 | Mettre en place une **procédure de suppression effective** des documents clients (CV, vidéos d'audit) à l'échéance annoncée en section 7 — y compris dans les sauvegardes et la messagerie | Une durée annoncée mais non appliquée est une non-conformité en soi. |
| 10 | Décider si un **DPO** est désigné (non obligatoire ici) et, à défaut, désigner nommément le point de contact | Art. 37 du RGPD : la désignation n'est pas obligatoire pour cette activité. |
| 11 | Faire relire ce document par un professionnel avant la première collecte | Trame rédigée à partir de sources publiques. |

---

## 1. Qui est responsable de vos données

Le responsable du traitement est :

**[PRÉNOM NOM]**, entrepreneur individuel (EI), exerçant sous le nom commercial **Premier Commit**
[ADRESSE] — SIRET [SIRET]
Contact : **[EMAIL_CONTACT]** — [TELEPHONE]

Aucun délégué à la protection des données (DPO) n'est désigné : l'activité n'entre pas dans les cas de désignation obligatoire de l'article 37 du RGPD. Toute question relative aux données doit être adressée à **[EMAIL_CONTACT]**.

## 2. Principes appliqués

- **Minimisation** : seules les données nécessaires sont demandées. Il n'est jamais demandé de date de naissance, de numéro de sécurité sociale, de situation familiale, de nationalité, de photographie ni de coordonnées bancaires.
- **Aucune revente, aucune location, aucun partage commercial** de données, à quiconque, en aucune circonstance.
- **Aucune transmission à un employeur, une école ou un tiers recruteur** — ce point est un engagement contractuel (article 19 des CGV) autant qu'une règle de traitement.
- **Aucune décision automatisée**, aucun profilage, aucun score, aucune publicité ciblée.
- **Aucun traceur publicitaire** sur le site.

## 3. Données collectées, finalités et bases légales

### 3.1 — Formulaire de contact et demandes d'information

| | |
|---|---|
| **Données** | Prénom, nom (ou pseudonyme), adresse électronique, contenu du message, et toute information que vous choisissez d'y indiquer (école, niveau d'études, situation de recherche). Date et heure de l'envoi. |
| **Finalité** | Répondre à votre demande et, le cas échéant, vous adresser une proposition. |
| **Base légale** | Article 6.1 b) du RGPD — mesures précontractuelles prises à votre demande ; à défaut, article 6.1 f) — intérêt légitime à répondre aux sollicitations reçues. |
| **Caractère obligatoire** | L'adresse électronique est nécessaire pour répondre. Les autres champs sont facultatifs. |

### 3.2 — Commande et exécution de la prestation

| | |
|---|---|
| **Données** | Prénom, nom, adresse électronique, offre commandée, date et montant de la commande, identifiant de transaction, historique des échanges, créneaux de rendez-vous, quotas consommés (points de suivi, relectures), comptes rendus. Le cas échéant : identité du représentant légal pour un bénéficiaire mineur. |
| **Finalité** | Conclure et exécuter le contrat : livrer le Kit, réaliser l'audit, tenir les rendez-vous, rendre les relectures, suivre les quotas, traiter les demandes de rétractation et les réclamations. |
| **Base légale** | Article 6.1 b) du RGPD — exécution du contrat. |
| **Caractère obligatoire** | Ces données sont nécessaires ; sans elles, la commande ne peut pas être exécutée. |

### 3.3 — Documents et supports transmis pour l'audit — **traitement le plus sensible**

| | |
|---|---|
| **Données** | Votre **CV** (parcours scolaire et universitaire, expériences, stages, compétences techniques, projets, langues, centres d'intérêt, coordonnées) ; l'**adresse de votre profil GitHub** ou équivalent, et le contenu public des dépôts consultés ; l'**adresse de votre profil LinkedIn** ou équivalent, et le contenu que vous y publiez ; vos **lettres, messages de candidature et de relance** ; les informations de contexte que vous communiquez (école, spécialité, rythme d'alternance, zone géographique, mobilité, difficultés rencontrées, nombre de candidatures envoyées, retours reçus). |
| **Finalité** | Réaliser l'audit vidéo, préparer et tenir les rendez-vous, produire les relectures écrites. Ces données ne servent à **rien d'autre**. |
| **Base légale** | Article 6.1 b) du RGPD — exécution du contrat que vous avez conclu. |
| **Destinataires** | **[PRÉNOM NOM] uniquement.** Aucun tiers, hormis les sous-traitants techniques strictement nécessaires listés en section 5. |

**Pourquoi ces données méritent une vigilance particulière.** Un CV et un parcours de recherche d'alternance ne sont pas juridiquement des « données sensibles » au sens de l'article 9 du RGPD, mais ils dressent un **portrait détaillé d'une personne jeune** : son établissement, son niveau réel, ses échecs, ses candidatures refusées, son adresse, parfois sa situation personnelle. Ces informations sont traitées avec le même soin qu'une donnée confidentielle.

**Données sensibles au sens strict — à ne pas transmettre.** Un CV peut contenir, de façon incidente, des données relevant de l'article 9 du RGPD : photographie, origine, appartenance syndicale, engagement politique ou religieux, état de santé, situation de handicap ou reconnaissance RQTH. **Il vous est demandé de ne pas transmettre ces informations** : elles ne sont pas nécessaires à l'audit. Si votre CV en comporte, vous êtes invité à les retirer avant l'envoi ; à défaut, elles sont ignorées et supprimées.

Si vous souhaitez néanmoins évoquer une situation particulière (handicap, aménagement, difficulté de santé) parce qu'elle a un impact sur votre recherche, cette information n'est traitée que sur la base de votre **consentement explicite** (article 9.2 a) du RGPD), donné à l'oral ou par écrit, révocable à tout moment, et n'est **jamais consignée par écrit** sans votre accord.

### 3.4 — Facturation et obligations comptables

| | |
|---|---|
| **Données** | Identité, adresse le cas échéant, offre, montant, date, numéro de facture, mode de paiement. |
| **Finalité** | Émission des factures, tenue de la comptabilité, réponse à un contrôle. |
| **Base légale** | Article 6.1 c) du RGPD — obligation légale (art. L. 123-22 du Code de commerce, art. L. 441-9 du Code de commerce, obligations fiscales). |

### 3.5 — Paiement

| | |
|---|---|
| **Données** | **Aucune coordonnée bancaire n'est collectée ni conservée par Premier Commit.** Les données de paiement sont saisies directement auprès du prestataire de paiement. Premier Commit ne reçoit que le statut de la transaction, son montant, sa date et un identifiant. |
| **Base légale** | Article 6.1 b) du RGPD. |

### 3.6 — Visioconférences

| | |
|---|---|
| **Données** | Adresse électronique, prénom affiché, date et durée de connexion, image et voix pendant la séance. |
| **Finalité** | Tenir le rendez-vous. |
| **Base légale** | Article 6.1 b) du RGPD. |
| **Enregistrement** | **Les visioconférences ne sont pas enregistrées.** Aucun enregistrement audio ou vidéo n'est réalisé, ni par le Prestataire ni par le Client, sauf accord écrit exprès et préalable des deux parties pour un usage déterminé. |

### 3.7 — Vidéos d'audit produites par le Prestataire

| | |
|---|---|
| **Données** | Enregistrement d'écran commenté montrant vos documents et vos profils. |
| **Finalité** | Vous livrer l'audit. |
| **Base légale** | Article 6.1 b) du RGPD. |
| **Diffusion** | Lien **privé et non indexé**, communiqué à vous seul. La vidéo n'est jamais publiée, ni utilisée comme exemple, ni montrée à un autre client, ni réutilisée à des fins de démonstration ou de communication. |

### 3.8 — Information des clients par e-mail

| | |
|---|---|
| **Données** | Adresse électronique, prénom. |
| **Finalité** | Vous informer d'une mise à jour du Kit, d'une évolution de l'offre ou d'une information utile à votre recherche. |
| **Base légale** | Pour les **clients** : article 6.1 f) — intérêt légitime, dans les conditions de l'article L. 34-5 du Code des postes et des communications électroniques (produits ou services analogues, opposition possible dès la collecte et dans chaque message). Pour les **non-clients** : article 6.1 a) — **consentement préalable**, recueilli par une case distincte non pré-cochée. |
| **Opposition** | Chaque message comporte un lien de désinscription fonctionnel. Une simple réponse à [EMAIL_CONTACT] suffit également. |

### 3.9 — Témoignages et avis

| | |
|---|---|
| **Données** | Prénom, initiale du nom, formation, contenu du témoignage — selon ce que vous acceptez. |
| **Finalité** | Publication sur le site. |
| **Base légale** | Article 6.1 a) du RGPD — **consentement écrit exprès, spécifique et révocable à tout moment**. Aucun témoignage n'est publié sans cet accord ; sa révocation entraîne le retrait sous 7 jours ouvrés. |

### 3.10 — Journaux techniques et sécurité

| | |
|---|---|
| **Données** | Adresse IP, date et heure, pages demandées, code de réponse, agent utilisateur. |
| **Finalité** | Assurer le fonctionnement et la sécurité du site, détecter les abus, répondre à une réquisition légale. |
| **Base légale** | Article 6.1 f) — intérêt légitime à la sécurité ; article 6.1 c) pour les obligations de conservation issues de la LCEN. |

## 4. Cookies et traceurs

Le site est conçu pour fonctionner **sans cookie publicitaire, sans traceur tiers et sans mesure d'audience externe**. Les typographies (Space Grotesk, Inter, JetBrains Mono) sont **auto-hébergées** : aucune requête n'est adressée à un service tiers lors de votre visite.

Seuls peuvent être déposés des cookies **strictement nécessaires** au fonctionnement du site, exemptés de consentement au titre de l'article 82 de la loi Informatique et Libertés.

Si une mesure d'audience venait à être mise en place, elle le serait dans des conditions permettant l'exemption de consentement selon les critères de la CNIL, ou à défaut avec un bandeau de consentement conforme, et la présente politique serait mise à jour.

## 5. Sous-traitants et destinataires

Vos données ne sont accessibles qu'à **[PRÉNOM NOM]**. Elles sont techniquement traitées par les sous-traitants suivants, chacun lié par un contrat conforme à l'article 28 du RGPD :

| Sous-traitant | Rôle | Données concernées | Localisation | Politique |
|---|---|---|---|---|
| **OVH SAS** — 2 rue Kellermann, 59100 Roubaix, France | Hébergement du site et du serveur (VPS), stockage des fichiers du Kit et des vidéos d'audit | Journaux techniques, fichiers, documents stockés | Union européenne (France) | https://www.ovhcloud.com/fr/personal-data-protection/ |
| **[PRESTATAIRE_PAIEMENT]** | Encaissement des paiements en ligne | Données de paiement, identité, montant | [À COMPLÉTER] | [À COMPLÉTER] |
| **[OUTIL_VISIO]** | Tenue des visioconférences | Adresse électronique, prénom, flux audio/vidéo en direct, données de connexion | [À COMPLÉTER] | [À COMPLÉTER] |
| **[FOURNISSEUR_MESSAGERIE]** | Envoi et réception des e-mails, transmission des documents | Adresse électronique, contenu des échanges, pièces jointes | [À COMPLÉTER] | [À COMPLÉTER] |
| **[OUTIL_HEBERGEMENT_VIDEO]** *(si distinct du VPS)* | Mise à disposition des vidéos d'audit par lien privé | Vidéo d'audit, données de consultation | [À COMPLÉTER] | [À COMPLÉTER] |

**Autres destinataires possibles** : l'administration fiscale, un expert-comptable, un médiateur de la consommation en cas de litige, un avocat ou une juridiction — uniquement dans le cadre d'une obligation légale ou de la défense d'un droit, et strictement limités aux données nécessaires.

**Aucun autre destinataire.** En particulier : aucun employeur, aucune école, aucun cabinet de recrutement, aucun jobboard, aucun réseau social, aucun régisseur publicitaire, aucun courtier en données.

> ⚠️ Ce tableau doit être complété avec les prestataires réellement souscrits **avant** la première collecte, et mis à jour à chaque changement d'outil.

## 6. Transferts hors Union européenne

L'hébergement du site et le stockage des fichiers sont assurés en **France**, au sein de l'Union européenne.

Certains outils (paiement, visioconférence, messagerie) peuvent impliquer un transfert de données vers un pays tiers. Le cas échéant, ces transferts reposent sur une **décision d'adéquation** de la Commission européenne ou sur des **clauses contractuelles types**, conformément aux articles 44 à 49 du RGPD. Le détail est indiqué dans le tableau de la section 5 et peut être obtenu sur simple demande à [EMAIL_CONTACT].

> ⚠️ À compléter précisément après le choix des outils. Ne pas laisser cette section en formulation générale une fois les prestataires connus.

## 7. Durées de conservation

| Donnée | Durée | Fondement |
|---|---|---|
| Message reçu via le formulaire de contact, sans commande | **3 ans** à compter du dernier contact de votre part | Référentiel CNIL « gestion des activités commerciales » (prospects) |
| Données de compte client et historique de la relation | **Durée de la relation contractuelle, puis 3 ans** à compter du dernier contact | Référentiel CNIL — gestion de la relation client |
| **CV, lettres, candidatures et documents transmis pour l'audit** | **Pendant l'exécution de la prestation, puis 3 mois** après sa fin — puis **suppression définitive** | Voir section 7.1 |
| **Vidéo d'audit produite** | **6 mois** à compter de sa mise à disposition, puis suppression du lien et du fichier | Voir section 7.1 |
| Comptes rendus, notes de séance, retours de relecture | **3 mois** après la fin de la prestation, puis suppression | Minimisation |
| Enregistrements de visioconférence | **Aucun** — les séances ne sont pas enregistrées | — |
| Factures et pièces comptables | **10 ans** à compter de la clôture de l'exercice | Art. L. 123-22 du Code de commerce |
| Preuve de l'acceptation des CGV et des accords exprès de rétractation | **5 ans** à compter de la commande | Prescription de droit commun (art. 2224 du Code civil) |
| Réclamations et échanges liés à un litige | **5 ans** à compter du dernier échange, ou jusqu'au terme de la procédure | Défense d'un droit en justice |
| Consentement à recevoir des e-mails d'information | **3 ans** à compter du dernier contact de votre part | Recommandations CNIL |
| Consentement à la publication d'un témoignage | Jusqu'au retrait du témoignage | Consentement |
| Journaux techniques du serveur | **6 mois** au plus | Sécurité |
| Données d'identification conservées au titre de la LCEN | **1 an** | Art. 6 II de la LCEN et décret n° 2021-1362 |

### 7.1 — Le sort de vos documents après la prestation

C'est un point sur lequel Premier Commit s'engage explicitement.

**À la fin de la prestation** — dernier rendez-vous consommé, dernière relecture rendue, ou expiration du délai de l'article 14 des CGV :

1. **Pendant 3 mois**, vos documents (CV, lettres, candidatures, notes de travail) sont conservés afin de pouvoir répondre à une question de votre part, rouvrir un point ou traiter une réclamation.
2. **Votre vidéo d'audit reste accessible 6 mois** à compter de sa mise à disposition, pour vous laisser le temps de la revoir. **Vous êtes invité à la télécharger** : passé ce délai, le lien est désactivé et le fichier supprimé, sans possibilité de restauration.
3. **À l'issue de ces délais**, tous les documents que vous avez transmis et tous les livrables personnalisés vous concernant sont **supprimés définitivement** : du serveur, de la messagerie et des sauvegardes, dans un délai maximal de 30 jours supplémentaires correspondant au cycle de rotation des sauvegardes.
4. **Ne subsistent alors** que les données strictement nécessaires aux obligations légales (facture, preuve d'acceptation des CGV) et à la gestion d'un éventuel litige, aux durées indiquées ci-dessus.

**Vous pouvez demander la suppression anticipée** de vos documents à tout moment, y compris pendant la prestation, en écrivant à [EMAIL_CONTACT]. La suppression est effectuée sous **30 jours**. Vous êtes informé que la suppression des documents en cours de prestation peut rendre impossible la poursuite de l'accompagnement ; les prestations déjà exécutées restent dues.

**Vous pouvez à l'inverse demander une conservation prolongée** (par exemple pour reprendre l'accompagnement à la rentrée suivante) : cette prolongation repose sur votre consentement écrit, est limitée à 12 mois et reste révocable.

## 8. Sécurité

Les mesures suivantes sont appliquées :

- accès aux données limité au seul responsable de traitement, sur des postes protégés par mot de passe et chiffrement du disque ;
- authentification à deux facteurs sur les comptes d'administration (hébergeur, messagerie, paiement) ;
- transmission des documents par des canaux chiffrés (HTTPS, messagerie chiffrée en transit) ;
- liens de téléchargement et liens vidéo **non indexés, non devinables et à durée limitée** ;
- sauvegardes chiffrées, à rotation limitée ;
- cloisonnement : aucun document client n'est stocké sur un service de partage grand public ni sur un appareil non maîtrisé.

**En cas de violation de données** susceptible d'engendrer un risque pour vos droits et libertés, la CNIL est notifiée dans les **72 heures** (article 33 du RGPD) et vous êtes informé dans les meilleurs délais lorsque le risque est élevé (article 34).

## 9. Vos droits

Conformément au RGPD et à la loi n° 78-17 du 6 janvier 1978 modifiée, vous disposez des droits suivants :

- **Droit d'accès** (art. 15) : obtenir la confirmation que vos données sont traitées et en recevoir une copie.
- **Droit de rectification** (art. 16) : faire corriger une donnée inexacte ou incomplète.
- **Droit à l'effacement** (art. 17) : obtenir la suppression de vos données, sous réserve des données que la loi impose de conserver (factures notamment).
- **Droit à la limitation** (art. 18) : geler l'utilisation de vos données pendant l'examen d'une contestation.
- **Droit à la portabilité** (art. 20) : recevoir dans un format structuré et lisible par machine les données que vous avez fournies et qui sont traitées sur la base du contrat ou du consentement.
- **Droit d'opposition** (art. 21) : vous opposer à un traitement fondé sur l'intérêt légitime, et **à tout moment et sans motif** à la prospection.
- **Retrait du consentement** (art. 7.3) : lorsque le traitement repose sur votre consentement, le retirer à tout moment, sans effet rétroactif.
- **Directives post mortem** (art. 85 de la loi Informatique et Libertés) : définir des directives relatives au sort de vos données après votre décès.
- **Absence de décision automatisée** (art. 22) : aucune décision produisant des effets juridiques n'est prise de manière automatisée.

**Comment les exercer.** Écrivez à **[EMAIL_CONTACT]**, ou par courrier à [PRÉNOM NOM] — Premier Commit — [ADRESSE], en précisant votre demande. Une réponse vous est apportée dans un délai d'**un mois**, prolongeable de deux mois en cas de complexité, avec information motivée. Aucun justificatif d'identité n'est demandé si vous écrivez depuis l'adresse électronique utilisée lors de votre commande ; en cas de doute raisonnable sur votre identité, un justificatif pourra être demandé, puis détruit après vérification.

**Bénéficiaire mineur** : les droits sont exercés par le représentant légal, ou par le mineur lui-même s'il dispose du discernement suffisant. En France, l'âge du consentement pour les services de la société de l'information est fixé à **15 ans** (article 45 de la loi Informatique et Libertés) ; la relation contractuelle demeure toutefois conclue avec le représentant légal (article 9 des CGV).

## 10. Réclamation auprès de la CNIL

Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la **Commission Nationale de l'Informatique et des Libertés** :

**CNIL** — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
Téléphone : 01 53 73 22 22
Plainte en ligne : https://www.cnil.fr/fr/plaintes

## 11. Modification de la présente politique

La présente politique peut être modifiée, notamment en cas d'évolution des outils utilisés ou de la réglementation. La version applicable est celle publiée sur le site. En cas de modification substantielle affectant un traitement en cours, les clients concernés sont informés par e-mail.

**Version [VERSION] — [DATE]**

---

## Sources juridiques et références

- Règlement (UE) 2016/679 (RGPD) — texte consolidé — https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés — https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460
- CNIL — Informer les personnes et assurer la transparence — https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence
- CNIL — Les durées de conservation des données — https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees
- CNIL — Guide pratique « Les durées de conservation » — https://www.cnil.fr/sites/cnil/files/atoms/files/guide_durees_de_conservation.pdf
- CNIL — Référentiel relatif aux traitements de gestion des activités commerciales — https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf
- CNIL — Questions-réponses sur les référentiels gestion commerciale et impayés — https://www.cnil.fr/fr/questions-reponses-sur-les-referentiels-relatifs-la-gestion-des-activites-commerciales-et-des
- CNIL — Registre des activités de traitement — https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement
- CNIL — Cookies et autres traceurs — https://www.cnil.fr/fr/cookies-et-autres-traceurs
- CNIL — Droits des personnes — https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles
- Code de commerce, art. L. 123-22 (conservation 10 ans des pièces comptables) — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006219300
- Code des postes et des communications électroniques, art. L. 34-5 (prospection par voie électronique) — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037813912
- Loi n° 2004-575 du 21 juin 2004 (LCEN), art. 6 — https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164
- Décret n° 2021-1362 du 20 octobre 2021 (conservation des données de connexion) — https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044223625
- Code civil, art. 2224 (prescription quinquennale) — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006448122
