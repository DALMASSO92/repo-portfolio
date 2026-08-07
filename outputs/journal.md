# Journal de la nuit — Business overnight

Objectif : livrer au matin UN business prêt à lancer (recherche → construction → livrables), branche `claude/overnight-business-launch-7yjskp`.

## Autorisations
- ✅ Tout accordé par l'utilisateur, SAUF Playwright/Chromium (tests = build + serveur local + curl uniquement).
- Interdits permanents : création de comptes, paiements, publication en ligne, DNS, emails.

## Progression
- ✅ [21:2x] Pré-vol autorisations validé avec l'utilisateur (exception : pas de navigateur headless).
- ✅ [21:2x] Setup : dossier `outputs/`, journal initialisé, branche confirmée.
- ✅ Phase 1a : brainstorm 17 idées, 12 rejetées (documenté), top 5 shortlisté.
- ✅ Phase 1b : 5 sous-agents de recherche lancés en parallèle (A audit RGAA, B boilerplate FR, C maintenance, D Google Business Profile, E extension Malt).
- ✅ Synthèse B reçue : boilerplate SaaS FR = 4,5/10 (marché minuscule, besoin d'audience). Intégrée à recherche-marche.md.
- ✅ Synthèses A (5,5), C (7,5), D (6), E (4,5) reçues et intégrées.
- ✅ Phase 1 TERMINÉE : tableau comparatif + décision documentés. **Gagnante : C — maintenance de sites productisée (hybride WordPress + sites custom Next.js)**. Secours : D (GBP) puis A (RGAA), plans de pivot documentés dans recherche-marche.md §7.
- ✅ Branding : « Garde-Site » (« Sitadelle » écarté — conflit avec une agence de Besançon ; « garde-site » vérifié sans conflit). Palette, ton, offres 49/89/129 € documentés (branding.md).
- ✅ Vague 1 (4 sous-agents parallèles) TERMINÉE :
  - Légal : mentions légales, CGV 18 articles, politique de confidentialité, modèle de devis (droit vérifié par recherche web).
  - Copywriting : copy complète du site + 5 e-mails outreach + post LinkedIn.
  - SEO : plan d'acquisition 90 j + 3 articles prêts. SERP « maintenance site next.js/react » vérifiées quasi vierges en France → pari custom confirmé.
  - Ops : monitor.py (stdlib pur, TESTÉ : nominal + alertes + mock SSL/RDAP, 1 bug corrigé), runbook, rapport mensuel, onboarding.
- ✅ Site : scaffold Next.js 16 (export statique), design system complet (thème phare/maritime, Fraunces+Inter auto-hébergées), landing complète, page bilan gratuit (formulaire mailto sans backend).
- ✅ previsions.md (3 scénarios sourcés, charge hebdo, budget 10-82 €) + README-DEMARRAGE.md (draft).
- ⏳ Vague 2 : agent d'intégration en cours (2 landings SEO, blog 3 articles, 3 pages légales, sitemap/robots, build + tests curl).
