/**
 * BARÈMES SOCIAUX ET FISCAUX — MICRO-ENTREPRISE
 *
 * ⚠️⚠️  LIS CECI AVANT DE METTRE LE SITE EN LIGNE  ⚠️⚠️
 *
 * Les taux ci-dessous n'ont PAS pu être vérifiés en ligne pendant la construction
 * du projet : le quota de recherche web de la session était épuisé et les domaines
 * officiels (urssaf.fr, impots.gouv.fr, bofip.impots.gouv.fr) étaient bloqués par la
 * politique réseau. Ils proviennent de la connaissance générale du modèle, pas d'une
 * lecture de source officielle.
 *
 * Un simulateur qui affiche de mauvais taux est pire que pas de simulateur : il
 * engage ta responsabilité et détruit la confiance dès le premier utilisateur qui
 * vérifie. Le taux des cotisations BNC en particulier a été relevé par paliers
 * successifs ces dernières années — c'est celui à contrôler en priorité.
 *
 * AVANT LA MISE EN LIGNE, vérifie chaque valeur sur :
 *   - https://www.urssaf.fr/accueil/independant/creer-entreprise/micro-entrepreneur.html
 *   - https://entreprendre.service-public.fr/vosdroits/F23267
 *   - https://www.impots.gouv.fr/professionnel/regime-micro-entreprise
 *
 * Puis mets à jour VERIFIE_LE ci-dessous. Tant que VERIFIE_LE vaut null, l'interface
 * affiche un avertissement visible à l'utilisateur — c'est volontaire, ne le retire
 * pas avant d'avoir fait la vérification.
 */

/** Date de la dernière vérification des taux sur une source officielle. */
export const VERIFIE_LE: string | null = null;

export type RegimeId = "bnc" | "bic_service";

export type Regime = {
  id: RegimeId;
  nom: string;
  description: string;
  /** Cotisations sociales, en % du chiffre d'affaires encaissé. */
  cotisations: number;
  /** Contribution à la formation professionnelle, en % du CA. */
  formation: number;
  /** Abattement forfaitaire pour frais, appliqué au CA pour obtenir le revenu imposable. */
  abattement: number;
  /** Abattement minimum en euros. */
  abattementMinimum: number;
  /** Taux du versement libératoire de l'impôt sur le revenu, si l'option a été prise. */
  versementLiberatoire: number;
  /** Plafond de chiffre d'affaires du régime micro. */
  plafondCA: number;
  /** Seuil de franchise en base de TVA. */
  seuilTVA: number;
  /** Seuil majoré de franchise en base de TVA. */
  seuilTVAMajore: number;
};

export const REGIMES: Record<RegimeId, Regime> = {
  bnc: {
    id: "bnc",
    nom: "Activité libérale (BNC)",
    description:
      "Le cas le plus courant pour un créateur : placements de produit, contenus sponsorisés, prestations pour une marque.",
    cotisations: 0.261,
    formation: 0.002,
    abattement: 0.34,
    abattementMinimum: 305,
    versementLiberatoire: 0.022,
    plafondCA: 77700,
    seuilTVA: 37500,
    seuilTVAMajore: 41250,
  },
  bic_service: {
    id: "bic_service",
    nom: "Prestation de services commerciale (BIC)",
    description:
      "Si ton activité est qualifiée de commerciale plutôt que libérale. La distinction dépend de ta situation : en cas de doute, demande à ton service des impôts.",
    cotisations: 0.212,
    formation: 0.003,
    abattement: 0.5,
    abattementMinimum: 305,
    versementLiberatoire: 0.017,
    plafondCA: 77700,
    seuilTVA: 37500,
    seuilTVAMajore: 41250,
  },
};

/** Barème de l'impôt sur le revenu — à vérifier au même titre que le reste. */
export const TRANCHES_IR = [
  { plafond: 11497, taux: 0 },
  { plafond: 29315, taux: 0.11 },
  { plafond: 83823, taux: 0.3 },
  { plafond: 180294, taux: 0.41 },
  { plafond: Infinity, taux: 0.45 },
];

export const MENTION_TVA = "TVA non applicable, art. 293 B du CGI";

/**
 * Seuil au-delà duquel un contrat écrit est obligatoire entre un annonceur et un
 * créateur, à peine de nullité. Décret n° 2025-1137 du 28 novembre 2025, applicable
 * depuis le 1er janvier 2026. Montant en euros hors taxes, par annonceur, avantages
 * en nature inclus.
 *
 * ⚠️ Vérifie ce seuil sur Légifrance avant la mise en ligne : il est au cœur de
 * l'argumentaire du produit, et une erreur ici serait la plus coûteuse de toutes.
 */
export const SEUIL_CONTRAT_OBLIGATOIRE = 1000;
