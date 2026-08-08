export type Offre = {
  nom: string;
  cmd: string;
  prix: string;
  pitch: string;
  temps: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export const offres: Offre[] = [
  {
    nom: "Le Kit",
    cmd: "init",
    prix: "49",
    pitch: "Tout ce qu'il te faut pour reprendre ta recherche par le bon bout.",
    // Aligné sur les CGV art. 13.1 : mise à disposition sous 24 h ouvrées.
    temps: "Accès sous 24 h ouvrées",
    features: [
      "Modèles de CV lisibles par les ATS, pour profils tech",
      "Guide du portfolio GitHub qui donne envie",
      "Méthode de ciblage des entreprises, à appliquer toi-même",
      "Tableau de suivi de tes candidatures",
      "Modèles de messages et de relance",
      "Préparation aux entretiens techniques",
    ],
  },
  {
    nom: "La Méthode",
    cmd: "commit",
    prix: "149",
    pitch: "Le Kit, plus un regard extérieur sur ton dossier réel.",
    // Aligné sur les CGV art. 13.2 : audit livré sous 7 jours ouvrés.
    temps: "Sous 7 jours ouvrés",
    highlight: true,
    badge: "Le plus choisi",
    features: [
      "Tout Le Kit",
      "Audit vidéo personnalisé (~15 min) de ton CV, ton GitHub et ton LinkedIn",
      "Une visio de 45 min pour construire ton plan d'attaque",
    ],
  },
  {
    nom: "Le Suivi",
    cmd: "merge",
    prix: "290",
    pitch: "Pour ne pas rester seul pendant les six semaines qui comptent.",
    temps: "6 semaines",
    features: [
      "Tout La Méthode",
      "3 points de 30 min répartis sur 6 semaines",
      "Relecture écrite de tes candidatures (jusqu'à 10)",
      "Ajustement de la stratégie selon tes retours réels",
    ],
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Tu me trouves une entreprise ?",
    a: "Non, et c'est important que ce soit clair. La loi française interdit de facturer une personne en recherche d'emploi pour des services de placement (article L5321-3 du Code du travail). Je ne transmets aucun CV à des entreprises, je ne fais aucune mise en relation et je ne vends aucune liste d'entreprises. Ce que je fais : t'apprendre à construire ta propre liste de cibles, et rendre ton dossier assez solide pour qu'on te réponde. Le travail de candidature reste le tien.",
  },
  {
    q: "Est-ce que ça marche vraiment ?",
    a: "Je ne te promettrai pas de contrat, et méfie-toi de ceux qui le font. Ce que je peux te garantir, c'est un travail précis sur les trois points où la majorité des dossiers d'étudiants en informatique se font éliminer : un CV que les ATS n'arrivent pas à lire, un GitHub qui ne raconte rien, et des candidatures envoyées sans ciblage. Le reste dépend de ton marché, de ton profil et de ta régularité.",
  },
  {
    q: "Je suis en BTS, en BUT, en école d'ingé ou en bootcamp. C'est pour moi ?",
    a: "Oui, tant que tu cherches une alternance dans l'informatique : développement, data, cybersécurité, systèmes et réseaux. La méthode est la même, seuls les exemples changent. En revanche, si tu cherches dans un autre domaine, ce n'est pas le bon service — je préfère te le dire que prendre ton argent.",
  },
  {
    q: "Je n'ai aucune expérience professionnelle. C'est bloquant ?",
    a: "Non, c'est la situation normale en alternance, et c'est précisément ce que le Kit traite. Tes projets d'école, tes projets personnels et ta façon de les présenter valent une expérience — à condition de savoir les raconter. C'est une compétence qui s'apprend en quelques heures.",
  },
  {
    q: "Combien de temps ça va me prendre ?",
    a: "Compte environ 6 à 8 heures pour appliquer le Kit correctement : refaire ton CV, nettoyer ton GitHub, construire ta liste de cibles. Ensuite, le plan de bataille s'étale sur 4 semaines, à raison de quelques heures par semaine. C'est du travail — il n'y a pas de version où tu n'en fais pas.",
  },
  {
    q: "Mes parents peuvent-ils payer à ma place ?",
    a: "Oui, sans difficulté. La facture peut être établie au nom de la personne qui paie. Si tu as moins de 18 ans, la commande doit d'ailleurs être passée par ton représentant légal.",
  },
  {
    q: "Et si je change d'avis ?",
    a: "Tu disposes d'un droit de rétractation de 14 jours, et tu n'es jamais obligé d'y renoncer. Pour Le Kit, tu as le choix au moment de la commande : soit tu demandes l'accès rapide et tu renonces alors expressément à la rétractation (case à cocher, jamais pré-cochée), soit tu ne coches rien et tu reçois le Kit à l'expiration des 14 jours en conservant ton droit intact. Pour les offres avec accompagnement, le détail figure dans les CGV.",
  },
  {
    q: "Et si je décroche mon alternance avant la fin du suivi ?",
    a: "Tant mieux, c'est le but. Deux possibilités, au choix : tu utilises les séances restantes autrement — préparer ton arrivée, négocier ton rythme, poser tes questions sur le tutorat — ou tu demandes l'arrêt, et les prestations non encore réalisées te sont remboursées au prorata, comme prévu à l'article 15.5 des CGV.",
  },
  {
    q: "Quelle différence avec les méthodes à 250 € qu'on voit passer sur Instagram ?",
    a: "Trois différences concrètes. Je ne promets aucun délai ni aucun résultat. Je travaille uniquement sur l'informatique, parce que c'est le seul domaine où je suis légitime. Et mon identité, mon SIRET et mes mentions légales sont affichés en clair sur ce site. À toi de comparer.",
  },
  {
    q: "Qu'est-ce que tu fais de mon CV et de mes documents ?",
    a: "Ils servent uniquement à réaliser ton audit, ne sont transmis à personne, et sont supprimés à ta demande ou à l'issue de la durée indiquée dans la politique de confidentialité. Ils ne sont jamais envoyés à une entreprise — ce serait du placement, ce qui est interdit.",
  },
  {
    q: "Je suis mineur, je peux commander ?",
    a: "La commande doit être passée par ton représentant légal, qui accepte les conditions générales. C'est une obligation légale, pas une préférence de ma part.",
  },
  {
    q: "Tu débutes. Pourquoi te faire confiance ?",
    a: "Parce que je ne te demande pas de me croire sur parole. Le service démarre, je n'affiche donc aucun témoignage — je préfère ça à des avis invérifiables. Ce que tu peux vérifier avant d'acheter : les ressources gratuites publiées ici, qui te donnent déjà une bonne partie de la méthode.",
  },
];
