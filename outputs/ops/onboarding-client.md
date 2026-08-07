# Garde-Site — Checklist d'onboarding client (48 h)

Objectif : un nouveau client est **sous surveillance, sauvegardé et informé en 48 h**.
Cocher chaque case ; dater les jalons dans le journal client.

---

## J0 — Signature (dans l'heure qui suit)

- [ ] Créer le dossier client : `clients/[nom]/` avec `journal.md` et `retouches.md` (si Capitaine/Phare).
- [ ] Envoyer l'e-mail de bienvenue (modèle ci-dessous) avec la demande d'accès sécurisée.
- [ ] Créer la fiche client : nom, contact, site, forfait, type (WordPress / Next.js / React / Webflow), hébergeur, registrar, **parcours clé** à tester chaque mois (ex. formulaire de contact, commande, prise de RDV).

## J0-J1 — Collecte sécurisée des accès

**Règle absolue : jamais de mot de passe par e-mail, SMS ou messagerie.**

- [ ] Demander au client d'utiliser un gestionnaire de mots de passe — recommander
      **Bitwarden (gratuit)** : soit une **collection partagée** Bitwarden, soit un
      **Bitwarden Send** (lien chiffré à expiration) s'il ne veut pas créer de compte.
      Alternative acceptable : tout autre gestionnaire (1Password, Dashlane…) ou remise par téléphone.
- [ ] Si le client envoie quand même un mot de passe en clair : le remercier, **faire changer
      le mot de passe immédiatement**, stocker le nouveau dans Bitwarden, expliquer pourquoi (pédagogie, pas de reproche).
- [ ] Accès à collecter selon le cas :
  - [ ] Admin du site (WordPress : créer un **compte administrateur dédié Garde-Site**, pas de compte partagé)
  - [ ] Hébergement (OVH/o2switch… : demander un **accès délégué/technique**, pas le compte principal) + FTP/SSH
  - [ ] Registrar du domaine (ou a minima la date d'expiration et qui le gère)
  - [ ] Custom : dépôt Git (invitation collaborateur), plateforme de déploiement (Vercel/Netlify/VPS), variables d'environnement
  - [ ] Base de données, service d'e-mailing du site (SMTP formulaire), CDN éventuel
- [ ] Vérifier chaque accès **dès réception** et le consigner dans Bitwarden (jamais en clair sur disque).
- [ ] Activer la double authentification sur les comptes critiques quand c'est possible.

## J1 — Sauvegarde initiale + état des lieux

- [ ] **Sauvegarde complète immédiate** (fichiers + base de données), stockée hors hébergement
      — c'est le point de référence avant toute intervention.
- [ ] WordPress : installer/configurer la sauvegarde quotidienne automatique externalisée
      (ex. UpdraftPlus vers stockage distant) ; custom : vérifier dépôt Git à jour + dump BDD planifié.
- [ ] Mini-audit d'entrée (photo de départ, utile pour le 1er rapport) : versions, MAJ en retard,
      vulnérabilités connues, temps de chargement, SSL, expiration domaine.
- [ ] Si le site est en mauvais état (MAJ très en retard, malware) : proposer la
      « Remise en état » à 149 € **avant** d'activer la maintenance courante.

## J1-J2 — Mise sous surveillance

- [ ] Ajouter le site dans `sites.json` du monitoring (VPS) : `nom`, `url`, `forfait`,
      `mot_cle` (texte stable de la page, ex. nom de l'entreprise dans le pied de page).
- [ ] Lancer `python3 monitor.py` à la main et vérifier : HTTP 200, mot-clé présent,
      SSL > 21 j, domaine > 30 j. Corriger toute alerte ou l'expliquer au client.
- [ ] Forfait Phare : tester le parcours formulaire de bout en bout (envoi réel reçu).
- [ ] Noter dans le journal : date d'entrée en surveillance = début du calcul de disponibilité.

## J2 — Clôture d'onboarding

- [ ] E-mail de confirmation au client : surveillance active, sauvegarde faite,
      constats du mini-audit (2-3 points max, sans jargon), date de la première passe de maintenance.
- [ ] Planifier la passe mensuelle récurrente dans l'agenda + date d'envoi du rapport (≤ 5 du mois).
- [ ] Facturation en place (1er prélèvement/facture, mention « sans engagement, résiliation en 1 clic »).

---

## Modèle — e-mail de bienvenue (J0)

> **Objet : Bienvenue chez Garde-Site — votre site bientôt sous bonne garde**
>
> Bonjour [Prénom],
>
> Merci de votre confiance ! Voici comment se déroulent les 48 prochaines heures :
>
> 1. **Aujourd'hui** : nous récupérons ensemble les accès à votre site (détail ci-dessous).
> 2. **Demain** : nous réalisons une sauvegarde complète et un état des lieux.
> 3. **Sous 48 h** : votre site est surveillé 24h/24 et vous recevez notre confirmation.
>
> **Concernant les accès** : pour votre sécurité, merci de ne jamais envoyer de mot de
> passe par e-mail. Nous vous proposons d'utiliser **Bitwarden** (gratuit) : créez un
> « Send » sur https://vault.bitwarden.com (menu *Send* → nouveau, collez vos accès,
> le lien expire tout seul) et transmettez-nous simplement le lien. Si c'est plus simple
> pour vous, nous pouvons aussi tout faire ensemble par téléphone en 10 minutes :
> proposez-nous un créneau.
>
> Les accès dont nous avons besoin : [liste adaptée au client — ex. administration
> WordPress, hébergement OVH, gestion du nom de domaine].
>
> Ensuite, vous n'avez plus rien à faire : vous recevrez chaque mois un rapport clair
> d'une page sur la santé de votre site. Et pour toute question, répondez simplement
> à cet e-mail — réponse sous [24/48] h ouvrées.
>
> Bien cordialement,
> **[PRÉNOM NOM] — Garde-Site**
> [EMAIL_CONTACT] · [TELEPHONE]
> *Votre site sous bonne garde, 24h/24.*
