# Article 3 — Site piraté ou cassé : que faire dans l'heure ?

**Meta title** : Site piraté ou cassé : que faire dans l'heure ? *(47 caractères)*
**Meta description** : Votre site est piraté, défiguré ou hors ligne ? Guide d'urgence pas à pas : les bons réflexes dans l'heure, les erreurs à éviter, et qui appeler. *(144 caractères)*
**Slug** : `site-pirate-que-faire`
**Maillage interne** : [Remise en état — 149 €](/#forfaits) · [nos offres de maintenance](/#forfaits) · [Bilan de santé gratuit](/bilan-gratuit/) · [Combien coûte la maintenance d'un site ?](/blog/tarif-maintenance-site-web) · [Maintenance des sites Next.js/React](/blog/maintenance-site-nextjs-react)

---

Votre site affiche une page inconnue, redirige vers un site douteux, montre une erreur incompréhensible, ou a simplement disparu. Respirez : dans la grande majorité des cas, un site se répare, et les bonnes décisions de la première heure font la différence. Voici quoi faire, dans l'ordre, sans paniquer — et sans aggraver les choses.

## D'abord : piraté ou juste cassé ?

Les deux situations se ressemblent, mais ne se traitent pas pareil.

**Signes d'un piratage** :
- Redirections vers des sites de pharmacie, paris, contrefaçon ;
- Contenus ou pages que vous n'avez jamais créés (souvent en langue étrangère) ;
- Avertissement rouge de Google (« Ce site peut avoir été piraté » / « Site trompeur ») ;
- E-mails de votre hébergeur signalant un envoi massif de spam depuis votre compte ;
- Antivirus des visiteurs qui bloque le site.

**Signes d'une panne « simple »** :
- Erreur 500, page blanche, « Error establishing a database connection » ;
- Site cassé juste après une mise à jour ou une manipulation ;
- Message d'expiration (certificat SSL, nom de domaine, hébergement impayé).

Dans le doute, traitez comme un piratage : les précautions ci-dessous ne coûtent rien et ne cassent rien.

## Les 60 premières minutes, pas à pas

### Minute 0-10 : documentez, ne supprimez rien

Le réflexe naturel est d'effacer ce qui est anormal. C'est une erreur : vous détruiriez les indices qui permettent de comprendre par où l'attaquant est entré — et donc d'empêcher qu'il revienne.

- **Capturez des écrans** de tout ce qui est anormal (pages, redirections, messages d'erreur, alertes reçues).
- **Notez l'heure** approximative où le problème a commencé, et ce qui a été fait sur le site dans les jours précédents (mise à jour ? nouveau plugin ? nouvel utilisateur ?).
- Ne restaurez pas encore de sauvegarde : si elle est récente, elle peut contenir la porte dérobée.

### Minute 10-25 : coupez les accès

Un piratage vit des accès qu'il a volés. Changez-les, dans cet ordre :

1. **Mot de passe de l'hébergement** (OVH, o2switch, Vercel, etc.) — c'est le plus critique.
2. **Mots de passe d'administration du site** (compte admin WordPress ou équivalent). Vérifiez au passage la liste des administrateurs : supprimez tout compte que vous ne reconnaissez pas.
3. **Mot de passe de la boîte e-mail** liée au site (elle permet de réinitialiser tout le reste).
4. Si vous les utilisez : accès FTP/SSH et base de données.

Activez la double authentification partout où c'est proposé. Utilisez des mots de passe longs et uniques — c'est le moment.

### Minute 25-40 : limitez les dégâts publics

- **Mettez le site en pause** si le contenu affiché est dangereux pour vos visiteurs (redirections, malware) : la plupart des hébergeurs permettent de suspendre l'affichage, ou d'afficher une page de maintenance. Un site « en maintenance » une journée abîme moins votre image qu'un site qui infecte ses visiteurs.
- **Prévenez votre hébergeur** via son support : signalez la compromission, demandez s'il a des journaux (logs) et des sauvegardes de son côté. Certains hébergeurs détectent l'incident avant vous et ont déjà des informations.
- Si le site encaisse des paiements ou stocke des données clients : notez-le dès maintenant, la question des obligations RGPD (notification d'une violation de données) devra être examinée — la CNIL publie la marche à suivre sur cnil.fr.

### Minute 40-60 : faites l'inventaire de vos sauvegardes

Avant toute réparation, répondez à trois questions :

- **De quand date la dernière sauvegarde saine** (antérieure au début du problème) ?
- **Où est-elle stockée ?** Une sauvegarde stockée sur le même hébergement que le site a pu être compromise ou supprimée avec lui.
- **Que perdriez-vous** en restaurant à cette date (commandes, articles, inscriptions) ?

Si vous avez une sauvegarde saine et externalisée : la remise en ligne sera simple. Si vous n'en avez aucune : tout n'est pas perdu (le nettoyage manuel existe), mais confiez la suite à un professionnel.

## Les 3 erreurs qui aggravent la situation

1. **Restaurer une sauvegarde sans nettoyer la faille.** Le site revient… et retombe une semaine plus tard, car la porte d'entrée (plugin vulnérable, mot de passe volé) est toujours là. Restaurer et corriger la cause vont toujours ensemble.
2. **Supprimer des fichiers « suspects » à la main sans savoir.** Sur WordPress comme sur un site custom, un fichier mal supprimé peut rendre le site irrécupérable — ou laisser en place une porte dérobée bien cachée.
3. **Repousser à plus tard.** Un site compromis qui reste en ligne se fait blacklister par Google et les antivirus ; plus l'infection reste, plus le nettoyage et la récupération de réputation sont longs.

## Et si c'est « juste » une panne ?

Bonne nouvelle : c'est souvent plus rapide.

- **Erreur après une mise à jour WordPress** : la cause la plus fréquente est un conflit d'extension. Un professionnel (ou vous, via FTP) peut désactiver les extensions une à une pour isoler la coupable.
- **Certificat SSL expiré** (« Votre connexion n'est pas privée ») : renouvellement côté hébergeur, généralement réglé en moins d'une heure.
- **Nom de domaine expiré** : renouvelez-le immédiatement chez votre registrar — passé un certain délai, le domaine peut être racheté par un tiers.
- **Site Next.js/React qui ne se met plus à jour ou ne compile plus** : c'est presque toujours une histoire de dépendances vieillissantes ou de déploiement cassé — [on a écrit un guide complet sur la maintenance de ces sites](/blog/maintenance-site-nextjs-react).

## Qui appeler, et pour quel budget ?

Si vous avez un contrat de maintenance : appelez votre prestataire, c'est son travail (et c'est exactement [ce que couvre un bon contrat](/blog/tarif-maintenance-site-web)). Si vous n'en avez pas, trois options :

- **Votre hébergeur** : aide sur l'infrastructure (sauvegardes, suspension, logs), mais ne nettoiera pas votre site.
- **Un développeur freelance en urgence** : efficace si vous en connaissez un de confiance, disponible aujourd'hui.
- **Un service de remise en état forfaitaire** : prix connu d'avance, intervention rapide.

C'est ce que nous proposons chez Garde-Site : la **[Remise en état à 149 €](/#forfaits)**, prix fixe annoncé avant toute intervention — diagnostic, nettoyage ou réparation, remise en ligne, et compte rendu de ce qui s'est passé. WordPress comme sites custom (Next.js, React, Webflow). Et si vous souscrivez ensuite un forfait de maintenance dans les 30 jours, ces 149 € sont déduits : l'urgence d'aujourd'hui finance la tranquillité de demain.

## Après l'incident : que ça ne se reproduise plus

Une fois le site réparé, trois mesures non négociables : mises à jour régulières (cœur, extensions ou dépendances), sauvegardes automatiques **externalisées** et testées, et surveillance qui vous alerte avant vos clients. C'est précisément le rôle d'un [forfait de maintenance](/#forfaits) — le nôtre ou un autre. Un incident est un mauvais souvenir acceptable ; deux incidents, c'est un choix.

---

### Site en panne maintenant ?

Écrivez-nous à [EMAIL_CONTACT] avec l'adresse de votre site et une capture d'écran : nous vous répondons rapidement avec un premier diagnostic. Et si votre site va bien mais que vous voulez vérifier qu'il est prêt à encaisser, le **[Bilan de santé gratuit](/bilan-gratuit/)** est fait pour ça.

*Garde-Site — Votre site sous bonne garde, 24h/24. [DOMAINE]*
