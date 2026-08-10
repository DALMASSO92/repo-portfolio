import { REGIMES, TRANCHES_IR, type RegimeId } from "./bareme";

export type EntreeSimulation = {
  /** Montant encaissé pour le partenariat, en euros. */
  montant: number;
  regime: RegimeId;
  /** Option pour le versement libératoire de l'impôt sur le revenu. */
  versementLiberatoire: boolean;
  /** Autres revenus imposables du foyer sur l'année, hors ce partenariat. */
  autresRevenus: number;
  /** Nombre de parts fiscales du foyer. */
  parts: number;
};

export type ResultatSimulation = {
  montant: number;
  cotisations: number;
  formation: number;
  impot: number;
  net: number;
  /** Part du montant qui reste réellement dans la poche, en %. */
  tauxNet: number;
  revenuImposable: number;
  /** Méthode utilisée pour l'impôt, à afficher pour que le calcul soit lisible. */
  methodeImpot: "versement_liberatoire" | "bareme";
};

/** Impôt sur le revenu calculé au barème progressif, avec quotient familial. */
export function impotBareme(revenuImposable: number, parts: number): number {
  if (revenuImposable <= 0) return 0;
  const parPart = revenuImposable / parts;
  let impot = 0;
  let precedent = 0;

  for (const tranche of TRANCHES_IR) {
    if (parPart > precedent) {
      const base = Math.min(parPart, tranche.plafond) - precedent;
      impot += base * tranche.taux;
      precedent = tranche.plafond;
    } else {
      break;
    }
  }

  return impot * parts;
}

export function simuler(entree: EntreeSimulation): ResultatSimulation {
  const regime = REGIMES[entree.regime];
  const montant = Math.max(0, entree.montant);

  const cotisations = montant * regime.cotisations;
  const formation = montant * regime.formation;

  // L'abattement forfaitaire ne peut pas descendre en dessous d'un plancher.
  const abattement = Math.max(montant * regime.abattement, Math.min(montant, regime.abattementMinimum));
  const revenuImposable = Math.max(0, montant - abattement);

  let impot: number;
  let methodeImpot: ResultatSimulation["methodeImpot"];

  if (entree.versementLiberatoire) {
    impot = montant * regime.versementLiberatoire;
    methodeImpot = "versement_liberatoire";
  } else {
    // On isole ce que ce partenariat ajoute réellement à l'impôt du foyer, plutôt
    // que d'appliquer un taux moyen qui n'aurait aucun sens à ce niveau de revenu.
    const parts = Math.max(1, entree.parts);
    const autres = Math.max(0, entree.autresRevenus);
    impot = impotBareme(autres + revenuImposable, parts) - impotBareme(autres, parts);
    methodeImpot = "bareme";
  }

  const net = montant - cotisations - formation - impot;

  return {
    montant,
    cotisations,
    formation,
    impot,
    net,
    tauxNet: montant > 0 ? net / montant : 0,
    revenuImposable,
    methodeImpot,
  };
}

export function euros(valeur: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(valeur);
}

export function pourcent(valeur: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(valeur);
}
