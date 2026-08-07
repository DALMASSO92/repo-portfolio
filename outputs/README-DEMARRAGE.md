# README-DÉMARRAGE — Garde-Site

## Résumé exécutif (10 lignes)

1. **Idée choisie : Garde-Site** — maintenance de sites web par abonnement (49/89/129 €/mois, sans engagement), hybride **WordPress + sites custom Next.js/React/Webflow/IA**.
2. **Pourquoi elle** : seul top-5 avec un canal chaud immédiat (ta base clients du studio → 1er € en 2-4 semaines), marché FR prouvé (des dizaines d'acteurs en vivent), et un segment custom **quasi vide en France** (SERP vérifiées cette nuit), aligné exactement sur ta stack.
3. **Potentiel réaliste** : 300-700 € MRR à 3 mois, 750-1 100 € MRR à 12 mois, dans 5-8 h/sem (détail sourcé : `previsions.md`).
4. **Ce qui est prêt** : site complet (Next.js statique, buildé et testé), pages légales FR auto-entrepreneur, 3 articles SEO, 5 e-mails d'outreach + post LinkedIn, plan d'acquisition 90 j, monitoring auto-hébergé testé, runbook, modèle de devis, rapport mensuel type.
5. **Budget mois 1 : ~10-82 €** (domaine seul obligatoire) — très sous les 100 €.
6. **Tes 3 prochaines actions** : ① remplacer les placeholders et déployer le site sur le VPS (30-45 min) ; ② envoyer l'e-mail n°1 à ta base clients (20 min) ; ③ mettre le monitoring en cron (15 min).
7. Plans B documentés si l'idée ne te plaît pas au réveil : gestion Google Business Profile (n°2) et audit accessibilité RGAA (n°3) — `recherche-marche.md` §7.
8. Aucune action irréversible n'a été faite : zéro compte créé, zéro paiement, zéro publication.
9. Tout le travail est dans `garde-site/` (le site) et `outputs/` (docs), branche `claude/overnight-business-launch-7yjskp`.
10. Journal complet de la nuit : `journal.md`.

---

## Checklist de lancement (dans l'ordre — ~4-6 h au total, étalable sur la semaine)

### Jour 1 — mettre en ligne (~1 h 30)
- [ ] **1. Remplacer les placeholders** (~20 min) — détection exhaustive de tous les jetons : `grep -rn "\[" garde-site/app garde-site/components garde-site/lib outputs/legal --include="*.tsx" --include="*.ts" --include="*.md"`. Les placeholders incluent `[PRÉNOM NOM]`, `[SIRET]`, `[ADRESSE]`, `[EMAIL_CONTACT]`, `[TELEPHONE]`, `[DOMAINE]`, mais aussi `[DATE]`, `[X jours …]`, `[MÉDIATEUR — NOM/ADRESSE/SITE]`, `[à vérifier…]`, `[à confirmer…]` — et SURTOUT `[EMAIL_CONTACT]` dans `garde-site/components/BilanForm.tsx` (ligne ~9 : c'est le mailto du CTA principal — s'il n'est pas remplacé, le formulaire est mort). Remplacer aussi `https://garde-site.example` (layout.tsx, sitemap.ts, robots.ts) par le domaine réel.
- [ ] **2. Choisir le domaine** (~10 min, ~10 €) — `garde-site.fr` était **libre au 07/08/2026** (aucun site actif trouvé) : à vérifier et réserver chez OVH. Alternative 0 € : sous-domaine d'un de tes domaines existants.
- [ ] **3. Créer l'adresse e-mail de contact** (~10 min) — ex. `bonjour@garde-site.fr` (MX Plan OVH inclus avec le domaine).
- [ ] **4. Builder et déployer sur le VPS** (~30 min) — `cd garde-site && npm install && npm run build` → copier `out/` vers le VPS, ajouter le vhost Nginx (site statique, SSL wildcard déjà en place). Vérifier chaque page en prod.
- [ ] **5. Vérifier les pages légales en réel** (~20 min) — relire `outputs/legal/*.md` sections « ⚠️ À vérifier avant publication » (médiateur de la consommation à choisir AVANT le 1er client particulier, ~25-100 €/an — CM2C, AME Conso… ; inutile tant que tes clients sont des pros).

### Jour 2 — premiers revenus (~1 h)
- [ ] **6. Envoyer l'e-mail n°1** (base clients du studio) — modèle prêt dans `outputs/marketing/emails-outreach.md` (offre : -50 % le 1er mois). C'est LE geste qui déclenche le premier euro.
- [ ] **7. Publier le post LinkedIn de lancement** — texte prêt dans le même fichier.
- [ ] **8. Mettre le monitoring en service** (~15 min) — `outputs/ops/monitor/` sur le VPS, cron 5 min (README inclus). Ajouter tes premiers sites (même ceux du studio : ça fait des captures d'écran de rapports pour vendre).

### Semaine 1 — acquisition (~2-3 h)
- [ ] **9. Suivre le plan 90 jours** — `outputs/marketing/plan-acquisition-90j.md`. S1 : e-mail n°1 base clients + post LinkedIn ; S2 : e-mails dormants (n°2) + veille Codeur.com/Malt en réactif.
- [ ] **10. Publier l'article n°2** (maintenance Next.js/React — le différenciateur, SERP vierge) — déjà intégré au site (`/blog/`), le partager sur LinkedIn.
- [ ] **11. Facturation** — créer le compte sur un outil gratuit (Henrri ou Abby gratuit) OU utiliser `outputs/legal/modele-devis-contrat.md` + tes factures habituelles d'AE. Mention obligatoire déjà incluse : « TVA non applicable, art. 293 B du CGI ».
- [ ] **12. (Optionnel) Paiement récurrent** — au 1er abonné : soit virement/prélèvement GoCardless (1 %+0,25 €/transaction, pas d'abonnement), soit lien de paiement Stripe. Aucun compte n'a été créé cette nuit (interdit sans tes identifiants).

### Ce que je n'ai PAS pu faire cette nuit (à faire toi-même)
- Créer des comptes (domaine, Stripe/GoCardless, Henrri, UptimeRobot en doublure) — interdits par tes consignes.
- Vérifier la disponibilité EXACTE du domaine au registre (l'absence de site actif a été vérifiée, pas le WHOIS).
- Connaître la taille réelle de ta base clients → ajuste les scénarios de `previsions.md`.
- Test navigateur du site (Playwright exclu par tes exceptions) : le build, le HTML de chaque route et le parcours HTTP ont été testés via serveur local + curl ; un coup d'œil visuel sur 2-3 pages avant mise en ligne reste recommandé.

## Arborescence livrée

```
garde-site/                  ← le site Next.js (statique, prêt à déployer)
outputs/
├── README-DEMARRAGE.md      ← ce fichier
├── recherche-marche.md      ← étude complète + plans B (§7)
├── previsions.md            ← scénarios de revenus sourcés + budget
├── branding.md              ← nom, palette, ton, offres
├── journal.md               ← déroulé de la nuit
├── legal/                   ← mentions légales, CGV, confidentialité, devis (sources md)
├── marketing/               ← copy, e-mails, plan 90 j, 3 articles SEO (sources md)
└── ops/                     ← monitor.py (testé), runbook, rapport type, onboarding
```
