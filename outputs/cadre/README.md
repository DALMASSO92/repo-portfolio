# Cadré

Outils administratifs pour jeunes créateurs de contenu français. Deux outils gratuits
d'acquisition et un générateur de documents payant, à paiement unique.

## Démarrer

```bash
npm install
cp .env.example .env.local   # renseigne NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
npm test                     # 17 vérifications métier
npm run build
```

Node 22+. Aucune base de données, aucun service externe à l'exécution : tout est statique
ou calculé dans le navigateur.

## Architecture

```
src/
  app/
    page.tsx              Accueil
    simulateur/           GRATUIT — ce qu'il reste sur un partenariat
    conformite/           GRATUIT — diagnostic en 6 questions
    generateur/           PAYANT — contrat + facture en PDF
    guide/                Contenu de référencement
    mentions-legales/ cgv/ confidentialite/
  lib/
    bareme.ts             ⚠️ Taux sociaux et fiscaux — À VÉRIFIER
    calc.ts               Calcul du net
    diagnostic.ts         Règles de conformité
    documents.ts          Modèles de contrat et de facture
    pdf.ts                Rendu PDF (jsPDF)
    acces.ts              Contrôle d'accès — paiement NON branché
tests/verif.ts            Tests métier
```

Chaque page est autonome : pas de composants partagés, pour que l'ajout ou la suppression
d'une page ne casse rien ailleurs.

## Les trois points à traiter avant la mise en ligne

1. **`src/lib/bareme.ts`** — les taux n'ont pas pu être vérifiés sur une source officielle
   pendant la construction. Tant que `VERIFIE_LE` vaut `null`, le simulateur affiche un
   avertissement rouge visible. C'est volontaire : ne le retire pas sans avoir vérifié.
2. **`src/lib/acces.ts`** — aucun paiement n'est branché. Le générateur expose un bouton
   « mode démonstration » qui doit disparaître. La vérification du paiement doit se faire
   **côté serveur** : un déblocage local est contournable.
3. **Placeholders** — `grep -rn "À_REMPLACER" src` liste tout ce qui reste à renseigner
   (identité, SIRET, médiateur, dates).

## Choix de conception

- **Aucune police externe.** Le réseau de construction bloquait les CDN, et une police
  distante est de toute façon un point de défaillance et un sujet RGPD. La personnalité
  visuelle vient de l'échelle typographique et du motif de cadrage, pas d'un fichier.
- **Aucun traceur.** Sans traceur non essentiel, pas de bandeau cookies à afficher : c'est
  légal, gratuit, et ça supprime une friction à l'entrée.
- **Les outils gratuits ne transmettent rien.** Tout est calculé dans le navigateur. C'est
  un argument de confiance sur un sujet où l'on saisit des montants personnels.
- **Le paywall est placé au téléchargement, pas à l'aperçu.** L'utilisateur voit le
  document entier avant de payer. Sur un public méfiant et peu solvable, cacher le produit
  coûterait plus cher que de le montrer.

## Tests

`npm test` compile puis exécute 17 vérifications : simulateur (7), règles du diagnostic (5),
contenu des documents (3), génération PDF réelle (2). Le test PDF vérifie l'en-tête `%PDF`
et la pagination, pas seulement que le code s'exécute.
