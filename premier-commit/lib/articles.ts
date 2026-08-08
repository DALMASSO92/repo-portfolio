export type Article = {
  /** Segment d'URL sous /blog/ */
  slug: string;
  /** Titre affiché dans l'index (H1 de l'article) */
  titre: string;
  /** Titre court pour les listes de navigation entre articles */
  titreCourt: string;
  /** Extrait affiché sur la carte de l'index */
  extrait: string;
  /** Temps de lecture estimé, en minutes (~200 mots/minute) */
  minutes: number;
  /** Date de publication affichée */
  date: string;
  /** Étiquette mono affichée sur la carte */
  tag: string;
};

export const articles: Article[] = [
  {
    slug: "candidatures-alternance-informatique-sans-reponse",
    titre:
      "J'envoie des candidatures d'alternance en informatique et je n'ai aucune réponse : le diagnostic en 5 maillons",
    titreCourt: "Aucune réponse à tes candidatures",
    extrait:
      "Le silence ne dit pas où ça casse. Cinq maillons, cinq tests concrets à faire sur tes vingt dernières candidatures, dans l'ordre — parce qu'améliorer son CV quand le ciblage est faux ne produit rien.",
    minutes: 8,
    date: "Août 2026",
    tag: "diagnostic",
  },
  {
    slug: "cv-alternance-informatique-sans-experience",
    titre:
      "CV d'alternance en informatique : comment faire quand on n'a « pas d'expérience »",
    titreCourt: "Le CV sans expérience",
    extrait:
      "Ce qui se passe vraiment quand ton PDF entre dans un logiciel de tri, le test du copier-coller en deux minutes, et comment un projet d'école devient une ligne qu'un recruteur technique peut vérifier.",
    minutes: 7,
    date: "Août 2026",
    tag: "cv",
  },
  {
    slug: "alternance-informatique-sans-entreprise-rentree",
    titre:
      "Alternance en informatique sans entreprise à la rentrée : ce qui est encore possible",
    titreCourt: "Pas d'entreprise à la rentrée",
    extrait:
      "Les délais réels, le statut pendant la recherche, la différence entre apprentissage et contrat de professionnalisation, et les trois questions à envoyer par écrit à ton école cette semaine.",
    minutes: 8,
    date: "Août 2026",
    tag: "rentrée",
  },
];

export function autresArticles(slug: string): Article[] {
  return articles.filter((a) => a.slug !== slug);
}
