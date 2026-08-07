import type { Plan } from "@/components/PlanCard";

export const plans: Plan[] = [
  {
    name: "Vigie",
    price: "49",
    tagline: "Pour les sites WordPress. La garde de base, sérieuse.",
    features: [
      "Mises à jour du cœur et des extensions, chaque semaine",
      "Sauvegardes quotidiennes externalisées",
      "Surveillance de disponibilité (uptime) 24/7",
      "Scan de sécurité",
      "Rapport mensuel",
    ],
  },
  {
    name: "Capitaine",
    price: "89",
    tagline: "Pour les sites WordPress qui vivent. Tout Vigie, plus un humain à bord.",
    highlight: true,
    badge: "Recommandé",
    features: [
      "Tout le forfait Vigie",
      "1 h de retouches par mois (tâches ≤ 30 min)",
      "Support prioritaire, réponse < 24 h ouvrées",
      "Optimisation de vitesse trimestrielle",
    ],
  },
  {
    name: "Phare",
    price: "129",
    tagline: "Pour les sites Next.js, React, Webflow et générés par IA.",
    features: [
      "Surveillance avancée : uptime, SSL, formulaires, erreurs JavaScript",
      "Mises à jour de dépendances mensuelles",
      "Correctifs",
      "1 h de retouches par mois (tâches ≤ 30 min)",
      "Rapport technique mensuel",
    ],
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Y a-t-il un engagement ?",
    a: "Non. L'abonnement est mensuel, sans durée minimale. Vous résiliez en 1 clic, par simple e-mail, effectif à la fin du mois en cours. Pas de préavis de 3 mois, pas de formulaire caché.",
  },
  {
    q: "Que se passe-t-il si mon site tombe ?",
    a: "Notre surveillance 24/7 nous alerte, souvent avant que vous ne vous en aperceviez. Nous diagnostiquons et intervenons ; si le problème vient d'une mise à jour ou d'une panne applicative, nous restaurons la dernière sauvegarde saine (sauvegardes quotidiennes, stockées hors de votre hébergement). Vous êtes tenu informé sous 24 h ouvrées, avec un compte rendu écrit.",
  },
  {
    q: "Quelle différence avec mon hébergeur ?",
    a: "Votre hébergeur loue le terrain : le serveur. Il ne met pas à jour votre site, ne teste pas vos formulaires, ne corrige pas une extension qui casse la page. Nous gardons ce qui est construit dessus — le site lui-même. Les deux sont complémentaires.",
  },
  {
    q: "Vous gérez WordPress ET les sites custom ?",
    a: "Oui, et c'est rare. Vigie et Capitaine couvrent WordPress ; Phare couvre Next.js, React, Webflow et les sites générés par IA. Même exigence, outils adaptés à chaque technologie.",
  },
  {
    q: "Quels sont les délais ?",
    a: "Mise sous garde sous 48 h après souscription. Réponse à toute demande sous 24 h ouvrées (prioritaire sur Capitaine et Phare). Mises à jour WordPress chaque semaine, dépendances custom chaque mois, rapport chaque mois.",
  },
  {
    q: "Vos prix sont-ils HT ou TTC ? Ai-je une facture ?",
    a: "Nos prix sont nets : TVA non applicable, art. 293 B du CGI. 49 € affichés = 49 € payés. Vous recevez une facture conforme chaque mois, utilisable en comptabilité.",
  },
  {
    q: "Comment résilier ?",
    a: "Un e-mail à [EMAIL_CONTACT] suffit. La résiliation prend effet à la fin du mois en cours. Nous vous restituons vos accès et une sauvegarde complète de votre site. Aucune retenue, aucune pénalité.",
  },
  {
    q: "Que faites-vous de mes accès ?",
    a: "Ils sont stockés dans un gestionnaire de mots de passe chiffré, utilisés uniquement pour la maintenance, jamais partagés. À la résiliation, nous les supprimons et vous recommandons de les renouveler — c'est la bonne pratique, et nous vous montrons comment.",
  },
  {
    q: "Pourquoi vous plutôt qu'une agence ?",
    a: "Une agence facture au devis, souvent avec engagement et des délais de réponse variables. Nous vendons une seule chose, productisée : la tranquillité de votre site, à prix fixe (49, 89 ou 129 €/mois), sans engagement, avec un rapport mensuel qui prouve le travail. Pour une refonte complète, une agence — ou notre studio — reste le bon choix, et nous vous le dirons.",
  },
  {
    q: "Mon site a été créé par quelqu'un d'autre. C'est un problème ?",
    a: "Aucun. La majorité des sites que nous prenons sous garde ont été construits ailleurs. Le bilan de santé gratuit nous dit dans quel état il arrive ; si une remise à niveau est nécessaire, la Remise en état à 149 € le remet à flot — créditée si vous souscrivez dans les 30 jours.",
  },
];
