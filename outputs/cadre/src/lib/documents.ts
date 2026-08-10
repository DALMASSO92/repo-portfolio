import { MENTION_TVA } from "./bareme";

export type Partenariat = {
  // Créateur
  creatorNom: string;
  creatorAdresse: string;
  creatorSiret: string;
  creatorEmail: string;
  // Annonceur
  marqueNom: string;
  marqueAdresse: string;
  marqueSiret: string;
  marqueContact: string;
  // Mission
  plateformes: string;
  livrables: string;
  dateePublication: string;
  dureeExploitation: string;
  exclusivite: string;
  // Argent
  remuneration: number;
  avantagesNature: string;
  valeurAvantages: number;
  delaiPaiement: string;
  // Facture
  numeroFacture: string;
  dateFacture: string;
};

export const PARTENARIAT_VIDE: Partenariat = {
  creatorNom: "",
  creatorAdresse: "",
  creatorSiret: "",
  creatorEmail: "",
  marqueNom: "",
  marqueAdresse: "",
  marqueSiret: "",
  marqueContact: "",
  plateformes: "TikTok, Instagram",
  livrables: "1 vidéo de 60 secondes publiée en feed, 2 stories de rappel",
  dateePublication: "",
  dureeExploitation: "12 mois à compter de la publication",
  exclusivite: "Aucune exclusivité sectorielle",
  remuneration: 800,
  avantagesNature: "",
  valeurAvantages: 0,
  delaiPaiement: "30 jours à compter de la réception de la facture",
  numeroFacture: "2026-001",
  dateFacture: "",
};

export type Bloc = { titre?: string; corps: string[] };

/**
 * Modèle de contrat de partenariat d'influence.
 *
 * ⚠️ Modèle générique, à faire relire par un professionnel avant commercialisation.
 * Les clauses reprennent les mentions attendues par le cadre français de l'influence
 * commerciale, mais leur rédaction n'a pas été validée par un juriste.
 */
export function contrat(p: Partenariat): Bloc[] {
  const total = p.remuneration + (p.valeurAvantages || 0);

  return [
    {
      corps: [
        "CONTRAT DE PARTENARIAT D'INFLUENCE COMMERCIALE",
        "",
        "Entre les soussignés :",
      ],
    },
    {
      titre: "L'annonceur",
      corps: [
        p.marqueNom || "[Nom de la marque]",
        p.marqueAdresse || "[Adresse]",
        p.marqueSiret ? `SIRET : ${p.marqueSiret}` : "[SIRET]",
        p.marqueContact ? `Contact : ${p.marqueContact}` : "",
        "",
        "ci-après « l'Annonceur »,",
      ].filter(Boolean),
    },
    {
      titre: "Le créateur",
      corps: [
        p.creatorNom || "[Ton nom]",
        p.creatorAdresse || "[Ton adresse]",
        p.creatorSiret ? `SIRET : ${p.creatorSiret}` : "[Ton SIRET]",
        p.creatorEmail ? `E-mail : ${p.creatorEmail}` : "",
        "",
        "résidant fiscalement en France, ci-après « le Créateur ».",
      ].filter(Boolean),
    },
    {
      titre: "Article 1 — Objet",
      corps: [
        "Le Créateur s'engage à concevoir, produire et publier des contenus destinés à promouvoir les produits ou services de l'Annonceur, dans les conditions définies ci-après.",
      ],
    },
    {
      titre: "Article 2 — Prestations",
      corps: [
        `Plateformes de diffusion : ${p.plateformes || "[à préciser]"}.`,
        `Livrables : ${p.livrables || "[à préciser]"}.`,
        p.dateePublication
          ? `Date de publication convenue : ${p.dateePublication}.`
          : "Date de publication : [à préciser].",
        "Le Créateur conserve la maîtrise éditoriale du ton et du format, sous réserve du respect des éléments de marque communiqués par l'Annonceur.",
      ],
    },
    {
      titre: "Article 3 — Rémunération",
      corps: [
        `Rémunération en numéraire : ${p.remuneration.toLocaleString("fr-FR")} € ${MENTION_TVA}.`,
        p.avantagesNature
          ? `Avantages en nature : ${p.avantagesNature}, valorisés à ${(p.valeurAvantages || 0).toLocaleString("fr-FR")} €.`
          : "Avantages en nature : néant.",
        `Contrepartie totale : ${total.toLocaleString("fr-FR")} €.`,
        `Paiement : ${p.delaiPaiement}.`,
        "En cas de retard de paiement, des pénalités au taux légal en vigueur seront applicables, ainsi que l'indemnité forfaitaire de recouvrement prévue par le code de commerce.",
      ],
    },
    {
      titre: "Article 4 — Transparence de la communication commerciale",
      corps: [
        "Le Créateur fera apparaître de façon claire, lisible et identifiable, pendant toute la durée de diffusion de chaque contenu, la mention « Publicité » ou « Collaboration commerciale ».",
        "Si l'image d'une personne est modifiée par un traitement affinant ou épaississant la silhouette, ou modifiant l'apparence du visage, la mention correspondante sera apposée.",
        "Le cas échéant, l'usage d'images générées par intelligence artificielle sera signalé.",
      ],
    },
    {
      titre: "Article 5 — Droits sur les contenus",
      corps: [
        `Le Créateur concède à l'Annonceur le droit de reproduire et de représenter les contenus produits, sur ses propres canaux, pour une durée de ${p.dureeExploitation || "[durée à préciser]"}, pour le territoire français.`,
        "Toute exploitation au-delà de ce périmètre — notamment en publicité payante, en affichage ou hors du territoire convenu — fera l'objet d'un accord distinct et d'une rémunération complémentaire.",
        "Le Créateur conserve la propriété de ses contenus et le droit de les maintenir en ligne sur ses propres comptes.",
      ],
    },
    {
      titre: "Article 6 — Exclusivité",
      corps: [p.exclusivite || "Aucune exclusivité n'est consentie."],
    },
    {
      titre: "Article 7 — Résiliation",
      corps: [
        "En cas de manquement grave de l'une des parties à ses obligations, l'autre partie pourra résilier le contrat après mise en demeure restée sans effet pendant quinze jours.",
        "Les contenus déjà publiés à la date de résiliation restent régis par l'article 5.",
      ],
    },
    {
      titre: "Article 8 — Droit applicable",
      corps: [
        "Le présent contrat est soumis au droit français. Les parties rechercheront une solution amiable avant toute action contentieuse.",
      ],
    },
    {
      corps: [
        "",
        "Fait en deux exemplaires originaux.",
        "",
        "Date et lieu : ______________________",
        "",
        "",
        "Pour l'Annonceur                            Pour le Créateur",
        "(signature précédée de la mention          (signature précédée de la mention",
        "« lu et approuvé »)                        « lu et approuvé »)",
      ],
    },
  ];
}

export function facture(p: Partenariat): Bloc[] {
  const total = p.remuneration;

  return [
    {
      corps: [
        "FACTURE",
        "",
        `Numéro : ${p.numeroFacture || "[numéro]"}`,
        `Date d'émission : ${p.dateFacture || "[date]"}`,
      ],
    },
    {
      titre: "Émetteur",
      corps: [
        p.creatorNom || "[Ton nom]",
        p.creatorAdresse || "[Ton adresse]",
        p.creatorSiret ? `SIRET : ${p.creatorSiret}` : "[Ton SIRET]",
        p.creatorEmail || "",
      ].filter(Boolean),
    },
    {
      titre: "Client",
      corps: [
        p.marqueNom || "[Nom de la marque]",
        p.marqueAdresse || "[Adresse]",
        p.marqueSiret ? `SIRET : ${p.marqueSiret}` : "",
      ].filter(Boolean),
    },
    {
      titre: "Prestation",
      corps: [
        p.livrables || "[Description de la prestation]",
        `Plateformes : ${p.plateformes || "[à préciser]"}.`,
        "",
        `Montant total : ${total.toLocaleString("fr-FR")} €`,
        MENTION_TVA,
      ],
    },
    {
      titre: "Règlement",
      corps: [
        `Conditions : ${p.delaiPaiement}.`,
        "Pénalités de retard au taux légal en vigueur. Indemnité forfaitaire pour frais de recouvrement : 40 €.",
        "Pas d'escompte en cas de paiement anticipé.",
      ],
    },
  ];
}
