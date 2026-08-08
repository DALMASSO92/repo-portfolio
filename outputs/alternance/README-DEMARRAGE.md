# README-DÉMARRAGE — Premier Commit

## Résumé exécutif (10 lignes)

1. **Idée : Premier Commit** — accompagnement méthodologique pour étudiants en **informatique** cherchant une alternance. Trois offres : Le Kit 49 € (numérique pur), La Méthode 149 €, Le Suivi 290 €.
2. **Pourquoi elle** : meilleure des 5 idées « alternance » étudiées (6,5/10), et la seule dont le premier euro se joue en **jours** — ton réseau de promo est un canal chaud immédiat.
3. **Le marché est prouvé par un concurrent** : `decrochetonalternance.fr` vend ~247 € avec ~45 K abonnés. Mais il promet « 15 jours », et franceverif comme scamdoc le signalent en fiabilité douteuse. **La place du sérieux vérifiable est vacante.**
4. **Ton avantage n'est pas copiable** : tu es alternant en informatique. Aucun coach généraliste ne peut parler de CV pour ATS, de portfolio GitHub et d'entretien technique avec ta légitimité.
5. **Potentiel réaliste** : ~9 200 € sur l'année 1, concentrés sur deux pics. C'est un **revenu de campagne**, pas un abonnement — je préfère l'écrire que le maquiller.
6. **Prêt** : site (9 pages publiques, buildé et testé), produit complet (7 fichiers, ~25 000 mots), CGV en 28 articles, 3 articles SEO, plan d'acquisition, 6 messages de lancement.
7. **Tes 3 prochaines actions** : ① adhérer à un médiateur de la consommation (obligatoire **avant** la 1re vente) ; ② remplacer les placeholders et déployer ; ③ envoyer le message à ta promo.
8. **Budget mois 1 : 35-122 €** — ⚠️ **peut dépasser 100 €** à cause du médiateur, qui n'est pas reportable en B2C. Voir `previsions-premier-commit.md` §5.
9. **Deux lignes rouges juridiques** à ne jamais franchir : aucune mise en relation avec des entreprises, aucun vocabulaire de « formation ». Détail ci-dessous.
10. Zéro compte créé, zéro paiement, zéro publication. Tout est dans `premier-commit/` et `outputs/alternance/`.

---

## ⚖️ Les deux lignes rouges — à lire avant tout le reste

Ce business est parfaitement légal, mais deux erreurs de langage suffiraient à le faire basculer. Elles ne coûtent rien à éviter, à condition de les connaître.

### 1. Ne jamais proposer de mise en relation
L'article **L5321-3 du Code du travail** interdit de percevoir une rémunération d'une personne en recherche d'emploi en contrepartie d'un service de **placement** — 6 mois d'emprisonnement et 3 750 € d'amende. Ce que la loi autorise (L5321-2), et qui est ton périmètre, c'est le **conseil en insertion professionnelle**.

**Interdit, même par gentillesse, même gratuitement, même en story Instagram** : « je te mets en contact avec… », « j'ai une boîte pour toi », « je transmets ton CV à… », vendre ou offrir une liste d'entreprises.
**Autorisé** : enseigner une méthode de ciblage que l'étudiant exécute lui-même. C'est exactement ce que fait le fichier produit `03-ciblage-entreprises.md`.

### 2. Ne jamais employer le vocabulaire de la formation
Ton activité n'est **pas** de la formation professionnelle — vérifié — mais à quatre conditions :
- refuser **tout** financement CPF, OPCO ou France Travail ;
- ne délivrer **aucune** attestation, évaluation des acquis ou certification ;
- ne pas présenter le Kit comme un programme à objectifs pédagogiques ;
- bannir « formation », « formateur », « stagiaire », « organisme de formation », « certifiant » **pour désigner ton service** (le mot reste correct pour parler du cursus de l'étudiant).

**Pourquoi c'est vital** : dans le régime de la formation, tu ne pourrais **pas encaisser avant 10 jours**, ce qui tuerait le modèle « paiement + accès immédiat ». Cette discipline est déjà inscrite comme obligation dans tes propres CGV.

---

## Checklist de lancement

### Avant la première vente — obligatoire (~1 h + 25-100 €)
- [ ] **1. Adhérer à un médiateur de la consommation** (~30 min, 25-100 €/an) — obligation **préalable** (art. L612-1), pas corrective. Exemples à comparer : CM2C, AME Conso, SAS Médiation Solution. Reporter cette étape, c'est vendre en infraction dès le premier client.
- [ ] **2. Compléter les placeholders** (~30 min) — détection exhaustive : `grep -rn "\[" premier-commit/app premier-commit/components premier-commit/lib outputs/alternance/legal --include="*.tsx" --include="*.ts" --include="*.md"`.

  **Les trois jetons qui cassent le site s'ils sont oubliés :**
  | Jeton | Où | Conséquence si oublié |
  |---|---|---|
  | `[LIEN_PAIEMENT]` | `components/OffreCard.tsx` | Les 6 boutons d'achat renvoient une 404. **Aucune vente possible.** |
  | `https://premiercommit.example` | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` | Canonicals, Open Graph et sitemap pointent vers un domaine inexistant → site indexé sur une URL morte |
  | `[PRESTATAIRE_PAIEMENT]`, `[OUTIL_VISIO]`, `[FOURNISSEUR_MESSAGERIE]`, `[OUTIL_HEBERGEMENT_VIDEO]` + 8 cellules `[À COMPLÉTER]` | `app/confidentialite/page.tsx` (tableau des sous-traitants) | **Politique de confidentialité non conforme** (art. 13 RGPD) : ni liste de sous-traitants, ni pays d'hébergement |

  **Les autres jetons** (cosmétiques mais visibles) : `[PRÉNOM NOM]`, `[SIRET]`, `[ADRESSE]`, `[EMAIL_CONTACT]`, `[TELEPHONE]`, `[ÉCOLE]`, `[MÉDIATEUR — NOM/ADRESSE/SITE]`, `[DATE]`, `[VERSION]`.
- [ ] **3. Relire les blocs « ⚠️ À vérifier avant publication »** des 4 fichiers de `outputs/alternance/legal/` (~30 min).

### Mise en ligne (~1 h)
- [ ] **4. Domaine** (~10 min, ~10 €) — `premiercommit.fr`, aucun conflit de marque trouvé au 08/08/2026 (WHOIS à confirmer). Alternative 0 € pour tester : sous-domaine existant.
- [ ] **5. Déployer** (~30 min) — `cd premier-commit && npm install && npm run build` → copier `out/` sur le VPS + vhost Nginx. Remplacer `https://premiercommit.example` dans `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.
- [ ] **6. Encaissement** (~20 min) — lien de paiement Stripe ou PayPal (pas d'abonnement, ~1,5-3 % par transaction). Le tunnel doit comporter : **cases distinctes non pré-cochées** pour la renonciation à rétractation, bouton « Commande avec obligation de paiement », confirmation par e-mail. Sans ça, le délai de rétractation passe à 12 mois et aucune somme n'est due.
- [ ] **7. Livraison du Kit** (~15 min) — convertir les 7 fichiers de `outputs/alternance/produit/` en PDF ou page protégée, héberger sur le VPS, préparer l'e-mail de livraison.

### Premiers revenus (~1 h)
- [ ] **8. Message à ta promo** — texte prêt dans `outputs/alternance/marketing/messages-lancement.md`. C'est le geste qui déclenche le premier euro.
- [ ] **9. Post LinkedIn de lancement** — prêt, 1 281 caractères.
- [ ] **10. Publier les 3 articles** — déjà intégrés au site (`/blog/`), à partager.

### Puis
- [ ] **11. Suivre `plan-acquisition.md`** — 6 semaines détaillées, 2-3 h/semaine, avec 11 règles anti-bannissement pour les communautés Discord.
- [ ] **12. Collecter des témoignages vérifiables** dès le premier client — c'est le vrai KPI de la phase 1 (4-6 témoignages), et l'actif que le concurrent ne peut pas fabriquer.

---

## Ce que je n'ai pas pu faire
- Créer des comptes (domaine, Stripe, médiateur) — interdit sans tes identifiants.
- Vérifier le WHOIS de `premiercommit.fr` (absence de marque vérifiée, pas la disponibilité au registre).
- Connaître la taille réelle de ton réseau mobilisable → **c'est la variable qui décide de tout**, ajuste les scénarios de `previsions-premier-commit.md` dès la première semaine.
- Test navigateur (Playwright exclu à ta demande) : build, HTML de chaque route et parcours HTTP testés par serveur local + curl. Un coup d'œil visuel avant mise en ligne reste recommandé.

## Arborescence

```
premier-commit/                     ← le site (Next.js statique, 14 pages)
outputs/alternance/
├── README-DEMARRAGE.md             ← ce fichier
├── recherche-alternance.md         ← 16 pistes, 5 étudiées, décision
├── branding-premier-commit.md      ← nom, offre, palette, garde-fous
├── previsions-premier-commit.md    ← scénarios, charge, budget
├── legal/                          ← mentions, CGV (28 art.), RGPD, conditions audit
├── marketing/                      ← copy, campagne, messages, plan, 3 articles
└── produit/                        ← LE PRODUIT : 7 fichiers, ~25 000 mots
```
