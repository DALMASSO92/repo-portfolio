import { SEUIL_CONTRAT_OBLIGATOIRE } from "./bareme";

export type Reponses = {
  montant: number;
  contratEcrit: boolean;
  mentionPublicite: boolean;
  imagesRetouchees: "non" | "oui_signale" | "oui_non_signale";
  secteurSensible: boolean;
  declare: boolean;
};

export type Gravite = "bloquant" | "important" | "vigilance" | "ok";

export type Constat = {
  gravite: Gravite;
  titre: string;
  explication: string;
};

export const REPONSES_PAR_DEFAUT: Reponses = {
  montant: 500,
  contratEcrit: false,
  mentionPublicite: false,
  imagesRetouchees: "non",
  secteurSensible: false,
  declare: false,
};

/**
 * Règles issues du cadre français de l'influence commerciale.
 *
 * ⚠️ Le contenu de ces règles doit être relu sur Légifrance avant mise en ligne :
 * il constitue l'argumentaire central du produit. Voir README-DEMARRAGE.md.
 */
export function diagnostiquer(r: Reponses): Constat[] {
  const constats: Constat[] = [];
  const contratObligatoire = r.montant >= SEUIL_CONTRAT_OBLIGATOIRE;

  // 1. Contrat écrit
  if (contratObligatoire && !r.contratEcrit) {
    constats.push({
      gravite: "bloquant",
      titre: "Il te manque un contrat écrit, et il est obligatoire",
      explication: `Au-delà de ${SEUIL_CONTRAT_OBLIGATOIRE.toLocaleString("fr-FR")} € par annonceur, avantages en nature compris, l'accord doit être écrit. Sans écrit, le contrat peut être privé d'effet : concrètement, si la marque ne te paie pas, tu n'as pratiquement rien pour te retourner.`,
    });
  } else if (contratObligatoire && r.contratEcrit) {
    constats.push({
      gravite: "ok",
      titre: "Tu as un contrat écrit, c'est le minimum requis",
      explication:
        "Vérifie maintenant qu'il contient bien les mentions attendues : identités des parties, mission précise, rémunération, valorisation des avantages en nature, et cession des droits sur tes contenus.",
    });
  } else if (!r.contratEcrit) {
    constats.push({
      gravite: "vigilance",
      titre: "Pas d'obligation d'écrit à ce montant, mais fais-le quand même",
      explication:
        "En dessous du seuil, la loi ne t'impose pas de contrat écrit. Cela ne veut pas dire que c'est prudent : sans écrit, le délai de paiement, le périmètre de la mission et la durée d'exploitation de ton contenu ne sont prouvables par rien.",
    });
  }

  // 2. Mention publicitaire — s'applique dès le premier euro
  if (!r.mentionPublicite) {
    constats.push({
      gravite: "bloquant",
      titre: "Ton contenu doit indiquer que c'est une publicité",
      explication:
        "Cette obligation ne dépend d'aucun seuil : elle s'applique dès le premier partenariat rémunéré, y compris si tu es seulement payé en produits. La mention doit être visible pendant toute la diffusion, pas seulement en fin de description.",
    });
  } else {
    constats.push({
      gravite: "ok",
      titre: "Le caractère publicitaire est signalé",
      explication:
        "Vérifie que la mention reste lisible pendant toute la durée du contenu et sur tous les formats où il est repris.",
    });
  }

  // 3. Images retouchées
  if (r.imagesRetouchees === "oui_non_signale") {
    constats.push({
      gravite: "important",
      titre: "Tes retouches doivent être signalées",
      explication:
        "Si la silhouette ou le visage a été modifié, y compris par un filtre, la mention correspondante est attendue. C'est un point de contrôle fréquent et facile à corriger.",
    });
  }

  // 4. Secteurs interdits ou encadrés
  if (r.secteurSensible) {
    constats.push({
      gravite: "bloquant",
      titre: "Ce secteur est interdit ou strictement encadré",
      explication:
        "Certains domaines — produits financiers spéculatifs, jeux d'argent, alcool, médicaments, chirurgie esthétique, nicotine — font l'objet d'interdictions ou de restrictions spécifiques pour la promotion par des créateurs. Ne signe rien sans avoir fait vérifier ce point par un professionnel.",
    });
  }

  // 5. Déclaration de l'activité
  if (!r.declare) {
    constats.push({
      gravite: "important",
      titre: "Tu dois pouvoir facturer, donc être déclaré",
      explication:
        "Une marque a besoin d'une facture. Sans structure déclarée, tu ne peux pas en émettre valablement, et les revenus non déclarés restent imposables — les plateformes transmettent désormais les montants versés à l'administration fiscale.",
    });
  }

  const ordre: Record<Gravite, number> = { bloquant: 0, important: 1, vigilance: 2, ok: 3 };
  return constats.sort((a, b) => ordre[a.gravite] - ordre[b.gravite]);
}

export const LIBELLES_GRAVITE: Record<Gravite, string> = {
  bloquant: "À régler avant de publier",
  important: "Important",
  vigilance: "Point de vigilance",
  ok: "C'est bon",
};
