import { jsPDF } from "jspdf";
import type { Bloc } from "./documents";

const MARGE = 20;
const LARGEUR_UTILE = 210 - MARGE * 2;
const BAS_DE_PAGE = 277;

/**
 * Construit le document PDF en mémoire. Séparé de l'enregistrement pour être
 * testable hors navigateur.
 */
export function construirePdf(blocs: Bloc[]): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = MARGE;

  const sautSiNecessaire = (hauteur: number) => {
    if (y + hauteur > BAS_DE_PAGE) {
      doc.addPage();
      y = MARGE;
    }
  };

  blocs.forEach((bloc, index) => {
    if (index > 0) y += 4;

    if (bloc.titre) {
      sautSiNecessaire(10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(bloc.titre, MARGE, y);
      y += 6;
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    bloc.corps.forEach((paragraphe) => {
      if (paragraphe === "") {
        y += 4;
        return;
      }

      // Le premier bloc sans titre sert d'en-tête : on le met en avant.
      const estTitrePrincipal = index === 0 && !bloc.titre && paragraphe === paragraphe.toUpperCase() && paragraphe.length > 5;

      if (estTitrePrincipal) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
      }

      const lignes = doc.splitTextToSize(paragraphe, LARGEUR_UTILE) as string[];
      lignes.forEach((ligne) => {
        sautSiNecessaire(6);
        doc.text(ligne, MARGE, y);
        y += estTitrePrincipal ? 8 : 5.2;
      });

      if (estTitrePrincipal) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        y += 2;
      }
    });
  });

  // Pied de page discret sur chaque page.
  const total = doc.getNumberOfPages();
  for (let page = 1; page <= total; page++) {
    doc.setPage(page);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(130);
    doc.text(
      `Document généré avec Cadré — modèle générique, ne constitue pas un conseil juridique.  ${page}/${total}`,
      MARGE,
      287,
    );
    doc.setTextColor(0);
  }

  return doc;
}

/** Rend une liste de blocs en PDF A4 et déclenche le téléchargement. */
export function genererPdf(blocs: Bloc[], nomFichier: string) {
  construirePdf(blocs).save(nomFichier);
}
