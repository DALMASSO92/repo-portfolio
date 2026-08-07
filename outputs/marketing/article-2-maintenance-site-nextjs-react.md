# Article 2 — Qui maintient votre site Next.js ou React après la livraison ?

**Meta title** : Maintenance site Next.js / React : qui s'en occupe ? *(52 caractères)*
**Meta description** : Votre site Next.js, React ou généré par IA a été livré… et après ? Dépendances, sécurité, hébergement : ce qu'il faut maintenir, et qui peut le faire. *(150 caractères)*
**Slug** : `maintenance-site-nextjs-react`
**Maillage interne** : [forfait Phare — sites custom](/offres/sites-custom) · [nos offres](/offres) · [Bilan de santé gratuit](/bilan-de-sante) · [Combien coûte la maintenance d'un site web ?](/blog/tarif-maintenance-site-web) · [Site piraté : que faire ?](/blog/site-pirate-que-faire)

---

Cherchez « maintenance site WordPress » sur Google : des dizaines de prestataires français se disputent la page 1. Cherchez maintenant « maintenance site Next.js » : vous tomberez sur des tutoriels techniques en anglais expliquant aux développeurs comment afficher une page « en maintenance ». Pas une offre de service française digne de ce nom (constat vérifié sur les résultats Google France, août 2026).

C'est le paradoxe : les sites modernes — Next.js, React, Vue, Webflow, et désormais les sites générés par IA — sont de plus en plus nombreux, et quasiment personne n'est organisé pour les maintenir. Si vous possédez un site de ce type, cet article vous concerne directement.

## « Pas de plugins, pas de problème » : le malentendu

Un site Next.js ou React n'a pas d'extensions WordPress à mettre à jour, c'est vrai. Beaucoup de propriétaires en concluent qu'il n'y a « rien à maintenir ». C'est faux, et voici pourquoi.

### Les dépendances npm vieillissent en silence

Un site React ou Next.js repose sur des dizaines, souvent des centaines de briques logicielles open source (les « packages npm »). Chacune évolue, corrige des failles, ou cesse d'être maintenue. Des failles de sécurité sont régulièrement publiées sur des packages très répandus — c'est précisément pour cela que GitHub envoie des alertes automatiques (Dependabot) aux développeurs. Problème : si plus aucun développeur ne regarde le dépôt de votre site, personne ne lit ces alertes.

Et plus on attend, plus la note s'alourdit. Mettre à jour un projet dont les dépendances ont six mois de retard : une routine. Le faire après deux ans d'abandon, avec deux versions majeures de Next.js à franchir : un chantier facturable en jours. La maintenance de dépendances, c'est comme la vidange — peu coûteuse tant qu'on la fait régulièrement.

### L'hébergement n'est pas éternel non plus

Votre site tourne probablement sur Vercel, Netlify, ou un VPS. Chaque cas a ses angles morts :

- **Vercel / Netlify** : très fiables, mais les offres gratuites ont des limites (bande passante, usage commercial selon les conditions), les versions de Node.js supportées évoluent, et un site jamais redéployé peut refuser de compiler le jour où l'on doit enfin y toucher.
- **VPS** : le système d'exploitation, Node.js et le serveur web demandent des mises à jour de sécurité. Un VPS oublié est une cible.
- Dans tous les cas : **nom de domaine et certificat SSL** expirent. Un renouvellement raté et le site affiche une page d'erreur effrayante à vos visiteurs.

### Ce qui casse sans prévenir

Un site custom peut se dégrader sans qu'aucune ligne de code ne change : une API tierce qui modifie son contrat, un formulaire dont le service d'envoi d'e-mails a suspendu le compte, une erreur JavaScript qui ne touche qu'un navigateur récent. Sans surveillance (uptime, erreurs JS, tests des formulaires), vous l'apprendrez par un client — ou vous ne l'apprendrez jamais.

## Le scénario classique : le développeur a disparu

La plupart des sites custom que nous voyons ont été construits par un freelance ou une petite agence. Puis la vie a suivi son cours : le freelance a pris un CDI, l'agence a pivoté, le devis de « TMA » n'a jamais été signé. Résultat : un site dont personne n'a plus les accès complets, un dépôt de code dont on ne sait plus où il est, et un propriétaire qui croise les doigts.

Si vous vous reconnaissez, première urgence — avant même de parler maintenance : **récupérez vos accès**. Code source (GitHub/GitLab), hébergement, nom de domaine, base de données le cas échéant. C'est votre patrimoine. Un prestataire de maintenance sérieux commencera toujours par vérifier et sécuriser cette liste avec vous.

## Nouveau cas d'école : les sites générés par IA

Depuis 2024-2025, des outils comme **Lovable, v0 ou Bolt** permettent de générer un site ou une petite application en quelques prompts. C'est une vraie démocratisation — et ces outils produisent justement du code React/Next.js, avec les mêmes dépendances npm, le même hébergement, les mêmes certificats que n'importe quel site custom.

La différence : leurs propriétaires sont rarement développeurs. Le site est livré fonctionnel, mais sans personne pour lire une alerte de sécurité, corriger un déploiement qui échoue ou comprendre pourquoi le formulaire n'envoie plus rien. Ces sites naissent orphelins. Ils vieilliront comme les autres — juste sans témoin.

## Pourquoi les prestataires WordPress ne peuvent pas vous aider

Ce n'est pas une question de mauvaise volonté. Les offres de maintenance à petit prix (le marché français s'étale d'environ 12 à 300 €/mois, [détail des tarifs ici](/blog/tarif-maintenance-site-web)) reposent sur une industrialisation propre à WordPress : tableaux de bord multi-sites, mises à jour de plugins en un clic, sauvegardes standardisées. Aucun de ces outils ne s'applique à un projet Next.js : là, il faut lire du code, exécuter des tests, redéployer proprement. C'est un métier de développeur.

À noter : ce segment grandit mécaniquement. WordPress reste dominant mais recule (de 65,2 % à 59,8 % de part de marché des CMS d'après les données consolidées dans notre étude de marché) — la part des sites « hors WordPress » augmente donc, sans que l'écosystème de maintenance ait suivi.

## Ce qu'une maintenance sérieuse d'un site custom doit couvrir

Que ce soit avec nous ou un autre développeur, exigez au minimum :

1. **Surveillance continue** : disponibilité, certificat SSL, erreurs JavaScript, formulaires testés régulièrement.
2. **Mises à jour de dépendances** planifiées (mensuelles), avec vérification que le site compile et fonctionne après.
3. **Correctifs de sécurité** appliqués en priorité quand une faille touche une de vos dépendances.
4. **Sauvegardes** du code et des données, restaurables.
5. **Un humain joignable**, qui connaît votre projet et peut faire une retouche sans tout redécouvrir.

C'est exactement le périmètre de notre forfait **[Phare, à 129 €/mois sans engagement](/offres/sites-custom)** : surveillance avancée, mises à jour de dépendances mensuelles, correctifs, 1 h de retouches par mois et un rapport technique lisible. Nous sommes développeurs Next.js/React avant d'être mainteneurs — c'est notre stack quotidienne, pas une ligne de plus au catalogue.

## Par où commencer

Pas besoin de signer quoi que ce soit pour savoir où vous en êtes. Trois questions immédiates :

- Avez-vous accès au code source, à l'hébergement et au nom de domaine de votre site ?
- Quelqu'un a-t-il mis à jour ou redéployé le site dans les six derniers mois ?
- Seriez-vous prévenu si votre site tombait cette nuit ?

Deux « non » ou plus : votre site est orphelin.

---

### Faites vérifier votre site par un développeur

Notre **[Bilan de santé gratuit](/bilan-de-sante)** s'applique aussi — surtout — aux sites Next.js, React, Webflow et générés par IA : état des dépendances, certificat, disponibilité, formulaires. Rapport clair sous quelques jours, sans engagement. Vous saurez exactement où vous en êtes, même si vous ne donnez pas suite.

*Garde-Site — Votre site sous bonne garde, 24h/24. Contact : [EMAIL_CONTACT] · [DOMAINE]*
