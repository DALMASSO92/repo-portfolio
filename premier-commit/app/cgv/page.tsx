import type { Metadata } from "next";
import Link from "next/link";
import {
  Prose,
  ProseHeader,
  ProseNote,
  ProseTable,
  ProseToc,
} from "@/components/Prose";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Conditions Générales de Vente — Premier Commit" },
  description:
    "Périmètre de la prestation, exclusions expresses, quotas, prix nets, droit de rétractation, médiation : les CGV complètes de Premier Commit.",
};

const sommaire = [
  { id: "art-1", label: "1. Identification du prestataire" },
  { id: "art-2", label: "2. Définitions" },
  { id: "art-3", label: "3. Champ d'application et acceptation" },
  { id: "art-4", label: "4. Objet et périmètre de la prestation" },
  { id: "art-5", label: "5. Exclusions expresses" },
  { id: "art-6", label: "6. Absence de garantie de résultat" },
  { id: "art-7", label: "7. Nature de la prestation" },
  { id: "art-8", label: "8. Description des offres et quotas" },
  { id: "art-9", label: "9. Capacité juridique — Clients mineurs" },
  { id: "art-10", label: "10. Commande" },
  { id: "art-11", label: "11. Prix" },
  { id: "art-12", label: "12. Paiement" },
  { id: "art-13", label: "13. Livraison et exécution" },
  { id: "art-14", label: "14. Durée de validité des créneaux et des quotas" },
  { id: "art-15", label: "15. Annulation et report des rendez-vous" },
  { id: "art-16", label: "16. Obligations du Client" },
  { id: "art-17", label: "17. Droit de rétractation" },
  { id: "art-18", label: "18. Propriété intellectuelle et licence d'usage" },
  { id: "art-19", label: "19. Confidentialité" },
  { id: "art-20", label: "20. Données personnelles" },
  { id: "art-21", label: "21. Garantie légale de conformité" },
  { id: "art-22", label: "22. Responsabilité" },
  { id: "art-23", label: "23. Réclamations" },
  { id: "art-24", label: "24. Médiation de la consommation" },
  { id: "art-25", label: "25. Preuve" },
  { id: "art-26", label: "26. Modification des CGV" },
  { id: "art-27", label: "27. Nullité partielle et tolérance" },
  { id: "art-28", label: "28. Droit applicable et juridiction" },
  { id: "annexe-1", label: "Annexe 1 — Formulaire de rétractation" },
  { id: "annexe-2", label: "Annexe 2 — Recueil des accords exprès" },
];

/** Ligne à compléter du formulaire type de rétractation. */
function Ligne({ label, apres }: { label: string; apres?: string }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span className="text-nuit">{label}</span>
      <span aria-hidden="true" className="flex-1 border-b border-dotted border-gris/60" />
      {apres && <span className="font-mono text-xs text-gris">{apres}</span>}
    </p>
  );
}

/** Case à cocher reproduite depuis le tunnel de commande. */
function Case({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex gap-3">
      <span
        aria-hidden="true"
        className="mt-1 h-4 w-4 shrink-0 rounded border border-gris/70 bg-white"
      />
      <span>{children}</span>
    </p>
  );
}

export default function Cgv() {
  return (
    <>
      <ProseHeader
        kicker="legal · cgv"
        title="Conditions Générales de Vente"
        intro="Ce que tu achètes, ce que tu n'achètes pas, les quotas exacts, les délais, et comment te rétracter. Écrit pour être lu, y compris par un parent qui paie."
        meta="Version [VERSION] — en vigueur au [DATE]"
      />

      <Section>
        <Prose>
          <ProseToc items={sommaire} />

          {/* ─── Article 1 ─── */}
          <h2 id="art-1">Article 1 — Identification du prestataire</h2>
          <p>
            Les présentes Conditions Générales de Vente (ci-après « CGV ») sont
            conclues entre :
          </p>
          <p>
            <strong>[PRÉNOM NOM]</strong>, entrepreneur individuel (EI), exerçant
            sous le nom commercial <strong>Premier Commit</strong>, dont le siège
            est situé [ADRESSE], immatriculé sous le numéro SIRET [SIRET],
            joignable à l&apos;adresse [EMAIL_CONTACT] et au [TELEPHONE]
            (ci-après « le Prestataire »),
          </p>
          <p>
            et toute personne physique n&apos;agissant pas à des fins
            professionnelles qui commande une offre proposée par le Prestataire
            (ci-après « le Client »).
          </p>
          <p>
            <strong>
              TVA non applicable, article 293 B du Code général des impôts.
            </strong>
          </p>

          {/* ─── Article 2 ─── */}
          <h2 id="art-2">Article 2 — Définitions</h2>
          <ul>
            <li>
              <strong>Site</strong> : le site internet{" "}
              <code>premiercommit.fr</code> et ses sous-domaines.
            </li>
            <li>
              <strong>Offre</strong> : l&apos;une des trois prestations décrites
              à l&apos;article 8 — Le Kit, La Méthode, Le Suivi.
            </li>
            <li>
              <strong>Kit</strong> : l&apos;ensemble des contenus numériques
              téléchargeables décrits à l&apos;article 8.1.
            </li>
            <li>
              <strong>Contenu numérique</strong> : données produites et fournies
              sous forme numérique, non fournies sur un support matériel, au sens
              de l&apos;article liminaire du Code de la consommation.
            </li>
            <li>
              <strong>Audit</strong> : la vidéo commentée d&apos;analyse du CV, du
              dépôt GitHub et du profil LinkedIn du Client, décrite à
              l&apos;article 8.2.
            </li>
            <li>
              <strong>Point de suivi</strong> : un rendez-vous en visioconférence
              de 30 minutes prévu dans l&apos;offre Le Suivi.
            </li>
            <li>
              <strong>Relecture</strong> : l&apos;analyse écrite d&apos;une
              candidature transmise par le Client, dans la limite du quota de
              l&apos;article 8.3.
            </li>
            <li>
              <strong>Jour ouvré</strong> : du lundi au vendredi, hors jours
              fériés en France métropolitaine.
            </li>
          </ul>

          {/* ─── Article 3 ─── */}
          <h2 id="art-3">Article 3 — Champ d&apos;application et acceptation</h2>
          <p>
            3.1. Les présentes CGV s&apos;appliquent à toute commande passée sur
            le Site ou à distance par tout autre moyen. Elles sont mises à
            disposition avant la commande, peuvent être téléchargées et sont
            reproduites dans la confirmation de commande adressée au Client sur
            support durable.
          </p>
          <p>
            3.2. La validation de la commande emporte{" "}
            <strong>acceptation pleine et sans réserve</strong> des présentes CGV.
            Cette acceptation résulte d&apos;une case à cocher distincte, non
            pré-cochée.
          </p>
          <p>
            3.3. Les CGV applicables sont celles en vigueur à la date de la
            commande. Une modification ultérieure est sans effet sur les commandes
            déjà passées.
          </p>
          <p>
            3.4. Le Prestataire vend exclusivement à des{" "}
            <strong>consommateurs</strong> au sens du Code de la consommation.
            Toute commande passée à des fins professionnelles ou par une personne
            morale relève de conditions distinctes, à convenir séparément.
          </p>

          {/* ─── Article 4 ─── */}
          <h2 id="art-4">Article 4 — Objet et périmètre de la prestation</h2>
          <p>
            4.1. <strong>Objet.</strong> Le Prestataire fournit une prestation de{" "}
            <strong>conseil et d&apos;accompagnement méthodologique</strong> ayant
            pour objet d&apos;aider le Client à concevoir, structurer et conduire{" "}
            <strong>par lui-même</strong> sa démarche de recherche d&apos;un
            contrat en alternance (apprentissage ou professionnalisation) dans les
            métiers de l&apos;informatique — développement logiciel, données,
            cybersécurité, systèmes et réseaux.
          </p>
          <p>
            4.2. <strong>Contenu de la prestation.</strong> La prestation consiste
            exclusivement à fournir au Client :
          </p>
          <ol type="a" className="alpha">
            <li>
              des <strong>documents méthodologiques et des modèles</strong> que le
              Client adapte et utilise lui-même ;
            </li>
            <li>
              une <strong>analyse critique et personnalisée</strong> des documents
              et supports que le Client a produits (CV, dépôt GitHub, profil
              LinkedIn, lettres, messages de candidature et de relance) ;
            </li>
            <li>
              des{" "}
              <strong>
                recommandations, conseils et pistes d&apos;amélioration
              </strong>{" "}
              relatifs à la présentation de son parcours, à la lisibilité de ses
              réalisations techniques, à sa méthode de ciblage d&apos;entreprises,
              à son organisation de suivi et à sa préparation aux entretiens ;
            </li>
            <li>
              du <strong>temps d&apos;échange en visioconférence</strong> dans les
              limites de quota prévues à l&apos;article 8.
            </li>
          </ol>
          <p>
            4.3.{" "}
            <strong>Le Client reste seul acteur de sa recherche.</strong> C&apos;est
            le Client — et lui seul — qui identifie les entreprises qu&apos;il
            souhaite viser, qui rédige ses candidatures, qui les envoie, qui les
            relance, qui se présente aux entretiens et qui négocie et signe, le cas
            échéant, son contrat. Le Prestataire n&apos;intervient à aucun moment
            auprès d&apos;un employeur, d&apos;une école ou d&apos;un organisme
            tiers, pour le compte du Client ou en son nom.
          </p>
          <p>
            4.4. <strong>Qualification juridique.</strong> La prestation relève du{" "}
            <strong>conseil en insertion professionnelle</strong>, expressément
            distingué de l&apos;activité de placement par l&apos;article L. 5321-1
            du Code du travail. Elle ne constitue ni une activité de placement au
            sens des articles L. 5321-1 et suivants du Code du travail, ni une
            action de formation au sens des articles L. 6313-1 et L. 6313-2 du
            même code (voir article 7).
          </p>

          {/* ─── Article 5 ─── */}
          <h2 id="art-5">Article 5 — Exclusions expresses</h2>
          <p>
            5.1.{" "}
            <strong>
              Le Prestataire n&apos;exerce aucune activité de placement.
            </strong>{" "}
            L&apos;article L. 5321-1 du Code du travail définit l&apos;activité de
            placement comme le fait de fournir, à titre habituel, des services
            visant à rapprocher les offres et les demandes d&apos;emploi.
            L&apos;article L. 5321-3 interdit d&apos;exiger une rétribution,
            directe ou indirecte, d&apos;une personne à la recherche d&apos;un
            emploi en contrepartie de la fourniture de services de placement, sous
            peine des sanctions prévues à l&apos;article L. 5324-1 (six mois
            d&apos;emprisonnement et 3 750 euros d&apos;amende).
          </p>
          <p>
            Le Prestataire structure son offre pour rester intégralement hors de
            ce champ.
          </p>
          <p>
            5.2.{" "}
            <strong>
              Sont expressément exclus du périmètre contractuel, en toute
              hypothèse et quelle que soit l&apos;offre souscrite :
            </strong>
          </p>
          <ol type="a" className="alpha">
            <li>
              <strong>toute mise en relation</strong> du Client avec un employeur,
              un recruteur, un responsable de service, un dirigeant ou un
              intermédiaire du recrutement, qu&apos;elle soit directe, indirecte,
              nominative, par recommandation, par introduction, par cooptation ou
              par tout autre canal ;
            </li>
            <li>
              <strong>
                toute transmission, tout dépôt, toute diffusion ou tout envoi
              </strong>{" "}
              du CV, de la candidature, du profil ou des coordonnées du Client à
              une entreprise, un cabinet de recrutement, un jobboard, une école ou
              un tiers quelconque ;
            </li>
            <li>
              <strong>
                toute fourniture d&apos;un fichier, d&apos;une base de données,
                d&apos;une liste nominative de contacts, d&apos;un carnet
                d&apos;adresses ou de coordonnées de personnes à contacter
              </strong>{" "}
              au sein d&apos;entreprises identifiées ; la méthode de ciblage
              enseignée est une{" "}
              <strong>
                méthode de recherche que le Client applique lui-même
              </strong>{" "}
              à partir de sources publiques et gratuites ;
            </li>
            <li>
              <strong>
                toute garantie, promesse, réservation, obtention ou facilitation
                d&apos;un entretien
              </strong>
              , d&apos;un test technique, d&apos;un processus de recrutement ou
              d&apos;un contrat ;
            </li>
            <li>
              <strong>
                toute intervention, recommandation, prise de contact, relance ou
                négociation auprès d&apos;un employeur
              </strong>{" "}
              au nom ou pour le compte du Client ;
            </li>
            <li>
              <strong>
                toute prise en charge d&apos;une démarche administrative
              </strong>{" "}
              liée à un contrat d&apos;alternance (CERFA, convention de formation,
              inscription en école, dossier OPCO, démarches auprès de France
              Travail) ;
            </li>
            <li>
              <strong>
                toute rédaction du CV, de la lettre ou des candidatures à la place
                du Client
              </strong>{" "}
              : le Prestataire commente, corrige et conseille sur des documents
              produits par le Client ;
            </li>
            <li>
              <strong>
                tout conseil juridique, fiscal, social, psychologique, médical ou
                thérapeutique
              </strong>
              , et toute prestation d&apos;orientation scolaire ou de bilan de
              compétences réglementé ;
            </li>
            <li>
              <strong>toute action de formation</strong>, toute évaluation des
              acquis, toute délivrance d&apos;attestation, de certificat, de
              diplôme ou de titre.
            </li>
          </ol>
          <p>
            5.3.{" "}
            <strong>
              Aucune rétribution n&apos;est perçue au titre d&apos;un service de
              placement.
            </strong>{" "}
            Le prix payé par le Client rémunère exclusivement les documents
            méthodologiques, le temps d&apos;analyse et le temps d&apos;échange
            décrits à l&apos;article 8. Il n&apos;est ni conditionné, ni indexé, ni
            corrélé, en tout ou partie, à l&apos;obtention d&apos;un entretien,
            d&apos;un contrat ou d&apos;une rémunération par le Client.{" "}
            <strong>
              Aucun honoraire de succès, aucune commission et aucun complément de
              prix lié à un résultat n&apos;existe.
            </strong>
          </p>
          <p>
            5.4. Si le Client sollicite l&apos;une des prestations exclues au 5.2,
            le Prestataire est tenu de refuser. Ce refus ne constitue ni une
            inexécution, ni un motif de remboursement.
          </p>

          {/* ─── Article 6 ─── */}
          <h2 id="art-6">
            Article 6 — Absence de garantie de résultat — obligation de moyens
          </h2>
          <p>
            6.1.{" "}
            <strong>
              Le Prestataire est tenu d&apos;une obligation de moyens et non
              d&apos;une obligation de résultat.
            </strong>{" "}
            Il s&apos;engage à consacrer à la prestation le soin, la compétence et
            le temps décrits à l&apos;article 8. Il ne s&apos;engage sur aucun
            résultat.
          </p>
          <p>
            6.2. <strong>Aucune garantie n&apos;est donnée</strong> quant à
            l&apos;obtention d&apos;un entretien, d&apos;un test technique,
            d&apos;une réponse d&apos;entreprise, d&apos;une proposition, d&apos;un
            contrat en alternance, d&apos;un niveau de rémunération, d&apos;un
            délai d&apos;obtention, d&apos;un taux de réponse ou d&apos;un nombre
            de candidatures fructueuses.
          </p>
          <p>
            6.3.{" "}
            <strong>Facteurs hors du contrôle du Prestataire.</strong>{" "}
            L&apos;issue d&apos;une recherche d&apos;alternance dépend notamment du
            niveau et de la spécialité du Client, de son école et de son rythme
            d&apos;alternance, de sa zone géographique et de sa mobilité, du
            calendrier de recrutement, de l&apos;état du marché du recrutement
            informatique, des politiques d&apos;embauche des entreprises, du
            travail personnel effectivement fourni par le Client et de sa constance
            dans la démarche. Aucun de ces facteurs n&apos;est maîtrisé par le
            Prestataire.
          </p>
          <p>
            6.4.{" "}
            <strong>
              Engagement de communication du Prestataire (interdiction interne de
              promesse de résultat).
            </strong>{" "}
            Le Prestataire s&apos;interdit, sur tout support et par tout canal —
            Site, page de vente, publicité, réseaux sociaux, e-mails, échanges
            écrits, appels et visioconférences — :
          </p>
          <ol type="a" className="alpha">
            <li>
              toute promesse ou allusion à un résultat garanti, y compris implicite
              (« tu vas signer », « ça marche à tous les coups », « avec ça tu
              trouves ») ;
            </li>
            <li>
              toute promesse de résultat assortie d&apos;un délai (« une alternance
              en X jours/semaines ») ;
            </li>
            <li>
              tout affichage de taux de réussite, de taux de placement ou de
              statistique de résultat non documenté, non daté et non vérifiable ;
            </li>
            <li>
              tout témoignage non authentique, non vérifiable ou non autorisé par
              écrit par son auteur ;
            </li>
            <li>
              tout procédé d&apos;urgence artificielle : compte à rebours factice,
              « dernières places » non réelles, rareté simulée, prix barré fictif.
            </li>
          </ol>
          <p>
            Ces interdictions sont contractuelles : le Client peut s&apos;en
            prévaloir. Elles répondent notamment aux dispositions des articles L.
            121-2 à L. 121-5 du Code de la consommation relatives aux pratiques
            commerciales trompeuses.
          </p>
          <p>
            6.5. <strong>Contexte de vigilance.</strong> Le Prestataire a
            connaissance de la vigilance des pouvoirs publics sur le secteur du
            coaching et de l&apos;accompagnement : la Mission interministérielle de
            vigilance et de lutte contre les dérives sectaires (Miviludes) a
            relevé, dans son rapport d&apos;activité 2022-2024, que 13 % des
            signalements reçus concernaient le champ de la formation, de
            l&apos;emploi et des finances, et a spécifiquement cité les formations
            en ligne vendues sous couvert de reconversion ou de réussite
            professionnelle ; la DGCCRF, dans son enquête sur le secteur du
            « coaching bien-être », a relevé environ 80 % d&apos;anomalies chez les
            professionnels contrôlés. Le Prestataire adhère aux principes qui en
            découlent : périmètre écrit, quotas chiffrés, prix nets, aucune
            promesse de résultat, aucune pression à l&apos;achat, aucune emprise,
            et respect intégral du droit de rétractation du Client.
          </p>
          <p>
            6.6. <strong>Aucune emprise, aucune exclusivité.</strong> Le Client
            reste libre à tout moment de solliciter d&apos;autres accompagnements,
            son école, son BDE, son réseau, France Travail, l&apos;APEC, une
            mission locale ou tout organisme public. Le Prestataire ne demande ni
            exclusivité, ni engagement de durée au-delà des quotas de
            l&apos;article 8, ni renoncement à d&apos;autres démarches.
          </p>

          {/* ─── Article 7 ─── */}
          <h2 id="art-7">
            Article 7 — Nature de la prestation — absence de formation
            professionnelle
          </h2>
          <p>
            7.1. Les prestations décrites à l&apos;article 8{" "}
            <strong>ne constituent pas des actions de formation</strong> au sens de
            l&apos;article L. 6313-1 du Code du travail, ni des actions concourant
            au développement des compétences au sens du même article. Elles ne
            répondent pas à la définition de l&apos;article L. 6313-2, qui définit
            l&apos;action de formation comme un{" "}
            <strong>
              parcours pédagogique permettant d&apos;atteindre un objectif
              professionnel
            </strong>
            .
          </p>
          <p>
            7.2. En particulier, les prestations ne comportent{" "}
            <strong>
              ni programme pédagogique formalisé assorti d&apos;objectifs
              pédagogiques, ni séquencement pédagogique imposé, ni positionnement à
              l&apos;entrée, ni évaluation des acquis, ni sanction de fin de
              parcours
            </strong>
            . Elles relèvent du{" "}
            <strong>conseil et de l&apos;accompagnement individualisé</strong>,
            catégories que l&apos;administration distingue expressément de
            l&apos;action de formation.
          </p>
          <p>7.3. En conséquence :</p>
          <ol type="a" className="alpha">
            <li>
              le Prestataire n&apos;est pas soumis à l&apos;obligation de
              déclaration d&apos;activité de l&apos;article L. 6351-1 du Code du
              travail et{" "}
              <strong>ne détient pas de numéro de déclaration d&apos;activité</strong>{" "}
              ;
            </li>
            <li>
              les prestations ne sont{" "}
              <strong>éligibles à aucun financement</strong> de la formation
              professionnelle : Compte Personnel de Formation (CPF), OPCO, France
              Travail, conseil régional, plan de développement des compétences ;
            </li>
            <li>
              <strong>
                aucune attestation de formation, aucun certificat, aucune
                certification, aucun titre et aucun diplôme n&apos;est délivré
              </strong>{" "}
              ;
            </li>
            <li>
              toute demande de prise en charge par un financeur de la formation
              professionnelle sera refusée ;
            </li>
            <li>
              le contrat conclu{" "}
              <strong>n&apos;est pas un contrat de formation professionnelle</strong>{" "}
              au sens des articles L. 6353-3 à L. 6353-7 du Code du travail. Le
              droit de rétractation applicable est celui du Code de la
              consommation, décrit à l&apos;article 17 des présentes.
            </li>
          </ol>
          <p>
            7.4. Le Prestataire s&apos;interdit d&apos;employer, dans sa
            communication, les termes « formation », « formation certifiante »,
            « formateur », « stagiaire », « organisme de formation », « éligible
            CPF », « certifiant » et « diplômant ». Le vocabulaire retenu est{" "}
            <strong>« accompagnement méthodologique »</strong>,{" "}
            <strong>« conseil »</strong>, <strong>« audit »</strong> et{" "}
            <strong>« client »</strong>.
          </p>

          {/* ─── Article 8 ─── */}
          <h2 id="art-8">Article 8 — Description des offres et quotas</h2>
          <p>
            Les prix sont{" "}
            <strong>nets, en euros, TVA non applicable (art. 293 B du CGI)</strong>
            . Ils s&apos;entendent tout compris ; aucun frais supplémentaire
            n&apos;est facturé.
          </p>

          <h3 id="art-8-1">8.1 — Le Kit — 49 €</h3>
          <p>
            <strong>Nature</strong> : contenu numérique fourni sans support
            matériel, à accès immédiat. Aucune heure d&apos;accompagnement.
          </p>
          <p>
            <strong>Contenu livré</strong> :
          </p>
          <ul>
            <li>
              modèles de CV lisibles par les logiciels de tri de candidatures
              (ATS), adaptés aux profils techniques ;
            </li>
            <li>un guide de construction du portfolio GitHub ;</li>
            <li>
              une méthode de ciblage des entreprises, que le Client applique
              lui-même à partir de sources publiques ;
            </li>
            <li>un tableau de suivi des candidatures ;</li>
            <li>des modèles de messages de relance ;</li>
            <li>un document de préparation aux entretiens techniques.</li>
          </ul>
          <p>
            <strong>Format</strong> : fichiers numériques (documents et tableurs)
            accessibles par un lien de téléchargement personnel.
          </p>
          <p>
            <strong>Livraison</strong> : voir article 13.
          </p>
          <p>
            <strong>Ce qui n&apos;est pas inclus</strong> : aucun échange
            individuel, aucun audit, aucune visioconférence, aucune relecture,
            aucune réponse personnalisée. Le Kit est un produit, non un
            accompagnement.
          </p>
          <p>
            <strong>Accès</strong> : le lien de téléchargement est valable{" "}
            <strong>30 jours</strong> ; les fichiers téléchargés sont
            conservables par le Client sans limitation de durée. Une réémission du
            lien peut être demandée gratuitement une fois, pendant 12 mois à
            compter de la commande.
          </p>

          <h3 id="art-8-2">8.2 — La Méthode — 149 €</h3>
          <p>
            <strong>Contenu</strong> : Le Kit (article 8.1), <strong>plus</strong>{" "}
            :
          </p>
          <ul>
            <li>
              <strong>un audit vidéo personnalisé</strong> du CV, du dépôt GitHub
              et du profil LinkedIn du Client : une vidéo commentée d&apos;environ{" "}
              <strong>15 minutes</strong>, enregistrée par le Prestataire et
              transmise par lien privé ;
            </li>
            <li>
              <strong>une visioconférence de 45 minutes</strong> avec le
              Prestataire, en direct, sur créneau réservé.
            </li>
          </ul>
          <p>
            <strong>Quotas</strong> : un (1) audit vidéo sur un (1) jeu de
            documents, et une (1) visioconférence de 45 minutes.{" "}
            <strong>
              Il n&apos;y a pas de second audit ni de seconde visio
            </strong>{" "}
            au titre de cette offre.
          </p>
          <p>
            <strong>Ce qui n&apos;est pas inclus</strong> : la réécriture du CV par
            le Prestataire, la relecture de candidatures, tout suivi au-delà de la
            visio, toute assistance illimitée par messagerie.
          </p>

          <h3 id="art-8-3">8.3 — Le Suivi — 290 €</h3>
          <p>
            <strong>Contenu</strong> : La Méthode (article 8.2),{" "}
            <strong>plus</strong> :
          </p>
          <ul>
            <li>
              <strong>
                trois (3) points de suivi en visioconférence de 30 minutes chacun
              </strong>
              , répartis sur une période de <strong>six (6) semaines</strong> ;
            </li>
            <li>
              <strong>jusqu&apos;à dix (10) relectures écrites</strong> de
              candidatures (CV adapté, lettre, message d&apos;accroche, message de
              relance), à raison d&apos;<strong>un document par relecture</strong>.
            </li>
          </ul>
          <p>
            <strong>Quotas</strong> : 3 points de 30 minutes et 10 relectures. Ces
            quotas sont <strong>fermes</strong>. Aucune prestation n&apos;est
            illimitée.
          </p>
          <p>
            <strong>Modalités des relectures</strong> : chaque relecture porte sur
            un document envoyé par le Client à [EMAIL_CONTACT], au format PDF ou
            traitement de texte. La réponse écrite du Prestataire est adressée sous{" "}
            <strong>3 jours ouvrés</strong> à compter de la réception. Une
            relecture est décomptée à chaque retour du Prestataire. Un même
            document réenvoyé après correction consomme une nouvelle relecture.
          </p>
          <p>
            <strong>Ce qui n&apos;est pas inclus</strong> : tout point de suivi,
            toute relecture ou toute prestation au-delà des quotas ; toute
            disponibilité en dehors des créneaux réservés ; toute assistance par
            messagerie instantanée ou téléphone.
          </p>
          <p>
            <strong>Au-delà des quotas</strong> : le Client peut, s&apos;il le
            souhaite et si le Prestataire a la disponibilité, commander une
            prestation complémentaire au tarif alors en vigueur. Aucune obligation
            ne pèse sur l&apos;une ou l&apos;autre partie à cet égard.
          </p>

          <h3 id="art-8-4">8.4 — Capacité d&apos;accueil</h3>
          <p>
            Le Prestataire exerce cette activité à temps partiel et limite
            volontairement le nombre d&apos;accompagnements simultanés. Une
            commande de l&apos;offre Le Suivi peut être refusée ou reportée faute
            de disponibilité ; dans ce cas, le Client en est informé sous 3 jours
            ouvrés et intégralement remboursé s&apos;il a déjà payé.
          </p>

          {/* ─── Article 9 ─── */}
          <h2 id="art-9">Article 9 — Capacité juridique — Clients mineurs</h2>
          <p>
            9.1. Le Prestataire s&apos;adresse à des étudiants dont certains
            peuvent être <strong>mineurs</strong>. Aux termes des articles 1145 et
            1146 du Code civil, les mineurs non émancipés sont{" "}
            <strong>incapables de contracter</strong>, sous réserve des actes
            courants autorisés par la loi ou l&apos;usage conclus à des conditions
            normales (article 1148 du Code civil). Un contrat d&apos;accompagnement
            individualisé impliquant la transmission de données personnelles et un
            engagement financier n&apos;entre pas dans cette catégorie.
          </p>
          <p>
            9.2. <strong>En conséquence :</strong>
          </p>
          <ol type="a" className="alpha">
            <li>
              toute commande concernant un bénéficiaire mineur doit être passée{" "}
              <strong>par son représentant légal</strong> (titulaire de
              l&apos;autorité parentale ou tuteur), qui a seul la qualité de Client
              et de cocontractant ;
            </li>
            <li>
              le représentant légal accepte les CGV, effectue le paiement, exerce
              le cas échéant le droit de rétractation, et{" "}
              <strong>autorise expressément</strong> la participation du mineur aux
              visioconférences et la transmission de ses documents ;
            </li>
            <li>
              le formulaire de commande comporte une{" "}
              <strong>déclaration expresse</strong> : soit « je suis majeur(e) »,
              soit « je commande en qualité de représentant légal d&apos;un
              bénéficiaire mineur ».
            </li>
          </ol>
          <p>
            9.3. <strong>Bénéficiaire mineur</strong> : le Prestataire adresse au
            représentant légal, à sa demande, un compte rendu synthétique des
            points abordés. Les visioconférences peuvent se tenir en présence du
            représentant légal si celui-ci le souhaite.
          </p>
          <p>
            9.4. <strong>Découverte en cours d&apos;exécution.</strong> Si le
            Prestataire découvre qu&apos;une commande a été passée seule par un
            mineur, il suspend l&apos;exécution et sollicite la ratification écrite
            du représentant légal. À défaut de ratification sous 14 jours, le
            contrat est <strong>annulé</strong> et les sommes versées sont{" "}
            <strong>intégralement remboursées</strong>, sans que le Prestataire
            puisse retenir quoi que ce soit au titre des prestations déjà
            exécutées.
          </p>
          <p>
            9.5. <strong>Émancipation.</strong> Un mineur émancipé, sur
            justificatif, contracte comme un majeur.
          </p>

          {/* ─── Article 10 ─── */}
          <h2 id="art-10">Article 10 — Commande</h2>
          <p>
            10.1. La commande est passée sur le Site ou par échange à distance.
            Elle suppose :
          </p>
          <ol type="a" className="alpha">
            <li>
              la fourniture des informations nécessaires : nom, prénom, adresse
              électronique, offre choisie, déclaration de capacité (article 9) ;
            </li>
            <li>
              la prise de connaissance des informations précontractuelles de
              l&apos;article L. 221-5 du Code de la consommation, dont les
              caractéristiques essentielles de l&apos;offre, son prix, les
              modalités d&apos;exécution, l&apos;existence et les modalités du
              droit de rétractation, et l&apos;existence d&apos;une garantie légale
              de conformité ;
            </li>
            <li>
              l&apos;acceptation des CGV par case à cocher distincte et non
              pré-cochée ;
            </li>
            <li>
              le cas échéant, le recueil des accords exprès prévus à
              l&apos;article 17 ;
            </li>
            <li>
              la validation par un bouton portant la mention{" "}
              <strong>« Commande avec obligation de paiement »</strong> ;
            </li>
            <li>le paiement.</li>
          </ol>
          <p>
            10.2. La commande est réputée ferme à réception du paiement. Le
            Prestataire adresse alors, sur support durable (e-mail), une{" "}
            <strong>confirmation de commande</strong> reprenant l&apos;offre
            commandée, le prix, les présentes CGV, l&apos;information sur le droit
            de rétractation, le formulaire type de rétractation figurant en{" "}
            <a href="#annexe-1">Annexe 1</a>, et le cas échéant la reproduction des
            accords exprès donnés au titre de l&apos;article 17.
          </p>
          <p>
            10.3. Le Prestataire se réserve le droit de refuser une commande en cas
            d&apos;indisponibilité (article 8.4), de demande manifestement hors
            périmètre (article 5), de propos ou comportement abusif, ou de litige
            antérieur non résolu. Le refus est notifié sous 3 jours ouvrés et donne
            lieu à remboursement intégral.
          </p>

          {/* ─── Article 11 ─── */}
          <h2 id="art-11">Article 11 — Prix</h2>
          <p>
            11.1. Les prix sont ceux affichés sur le Site au jour de la commande :{" "}
            <strong>Le Kit 49 €</strong>, <strong>La Méthode 149 €</strong>,{" "}
            <strong>Le Suivi 290 €</strong>.
          </p>
          <p>
            11.2. Ce sont des <strong>prix nets, tout compris</strong>.{" "}
            <strong>
              TVA non applicable, article 293 B du Code général des impôts.
            </strong>{" "}
            Aucun frais de dossier, d&apos;accès, de plateforme ou de livraison ne
            s&apos;ajoute.
          </p>
          <p>
            11.3. Le Prestataire peut modifier ses prix à tout moment. Le prix
            applicable est celui en vigueur au jour de la commande.
          </p>
          <p>
            11.4. Une facture est adressée au Client par voie électronique pour
            chaque commande.
          </p>

          {/* ─── Article 12 ─── */}
          <h2 id="art-12">Article 12 — Paiement</h2>
          <p>
            12.1. Le paiement s&apos;effectue{" "}
            <strong>en une fois, au moment de la commande</strong>, par les moyens
            proposés sur le Site : lien de paiement sécurisé [LIEN_PAIEMENT] ou
            virement bancaire. Aucun paiement échelonné n&apos;est proposé.
          </p>
          <p>
            12.2. Les coordonnées bancaires du Client ne transitent ni ne sont
            conservées par le Prestataire : elles sont traitées directement par le
            prestataire de paiement, qui assure la sécurisation de la transaction.
          </p>
          <p>
            12.3. En cas de paiement par virement, la commande n&apos;est ferme
            qu&apos;à réception effective des fonds. Les créneaux de rendez-vous ne
            sont réservés qu&apos;à compter de cette réception.
          </p>
          <p>
            12.4. <strong>Aucune somme n&apos;est exigée avant la commande.</strong>{" "}
            Aucun frais de réservation, aucun acompte non remboursable et aucun
            abonnement tacitement reconduit n&apos;existe.
          </p>

          {/* ─── Article 13 ─── */}
          <h2 id="art-13">Article 13 — Livraison et exécution</h2>
          <p>
            13.1. <strong>Le Kit.</strong> Le lien de téléchargement est adressé à
            l&apos;adresse électronique communiquée par le Client,{" "}
            <strong>au plus tard sous 24 heures ouvrées</strong> après la
            confirmation du paiement, et dans les meilleurs délais lorsque le
            Client a demandé l&apos;exécution immédiate au titre de l&apos;article
            17.2. En cas de non-réception, le Client contacte [EMAIL_CONTACT] ; le
            lien est réémis sans frais.
          </p>
          <p>
            13.2. <strong>L&apos;audit vidéo (La Méthode, Le Suivi).</strong> Le
            Client transmet ses documents dans les conditions de l&apos;article 16.
            La vidéo commentée est mise à disposition par lien privé{" "}
            <strong>sous 7 jours ouvrés</strong> à compter de la réception
            d&apos;un dossier complet.
          </p>
          <p>
            13.3.{" "}
            <strong>
              La visioconférence de 45 minutes (La Méthode, Le Suivi).
            </strong>{" "}
            Elle est programmée d&apos;un commun accord après remise de l&apos;audit
            vidéo. Le lien de connexion est adressé au plus tard 24 heures avant le
            rendez-vous.
          </p>
          <p>
            13.4. <strong>Les points de suivi (Le Suivi).</strong> Les trois points
            de 30 minutes sont répartis sur une période de{" "}
            <strong>six semaines</strong> à compter de la visioconférence initiale,
            selon un calendrier convenu entre les parties.
          </p>
          <p>
            13.5. <strong>Les relectures (Le Suivi).</strong> Réponse écrite sous{" "}
            <strong>3 jours ouvrés</strong> à compter de la réception de chaque
            document, dans la limite du quota de l&apos;article 8.3 et de la
            fenêtre de six semaines.
          </p>
          <p>
            13.6. <strong>Retard.</strong> En cas de dépassement des délais
            ci-dessus imputable au Prestataire, le Client peut le mettre en demeure
            d&apos;exécuter dans un délai raisonnable par écrit à [EMAIL_CONTACT].
            À défaut d&apos;exécution, le Client peut résoudre le contrat pour la
            partie non exécutée, dans les conditions des articles L. 216-6 et L.
            216-7 du Code de la consommation, et obtenir le remboursement de la
            fraction correspondante sous 14 jours.
          </p>
          <p>
            13.7. Les délais ne courent pas tant que le Client n&apos;a pas fourni
            les éléments nécessaires (article 16) ou n&apos;a pas confirmé un
            créneau.
          </p>

          {/* ─── Article 14 ─── */}
          <h2 id="art-14">
            Article 14 — Durée de validité des créneaux et des quotas
          </h2>
          <p>
            14.1. <strong>La Méthode.</strong> L&apos;audit vidéo et la
            visioconférence de 45 minutes doivent être consommés dans un délai de{" "}
            <strong>trois (3) mois</strong> à compter de la commande.
          </p>
          <p>
            14.2. <strong>Le Suivi.</strong> L&apos;audit et la visioconférence
            initiale doivent être consommés dans un délai de{" "}
            <strong>trois (3) mois</strong> à compter de la commande. Les trois
            points de suivi et les dix relectures s&apos;exercent dans une fenêtre
            de <strong>six (6) semaines</strong> à compter de la visioconférence
            initiale.
          </p>
          <p>
            14.3. <strong>Effet du terme.</strong> Les prestations non consommées à
            l&apos;expiration de ces délais sont perdues, <strong>sauf</strong> :
          </p>
          <ol type="a" className="alpha">
            <li>
              si le retard est imputable au Prestataire (indisponibilité, absence
              de proposition de créneau) ;
            </li>
            <li>
              en cas de motif légitime justifié par le Client — maladie,
              hospitalisation, décès d&apos;un proche, examens, obligation scolaire
              ou universitaire impérative, cas de force majeure. Dans ce cas, le
              Prestataire accorde une{" "}
              <strong>prolongation d&apos;au moins six semaines</strong> sur simple
              demande écrite formulée avant l&apos;expiration du délai.
            </li>
          </ol>
          <p>
            14.4. Le Client est informé par e-mail{" "}
            <strong>quinze (15) jours avant</strong> l&apos;expiration d&apos;un
            délai lorsqu&apos;il lui reste des prestations non consommées.
          </p>
          <p>
            14.5. Ces délais ont pour seul objet de permettre au Prestataire
            d&apos;organiser son activité et de rester dans une capacité
            d&apos;accueil tenable. Ils ne visent pas à faire perdre au Client le
            bénéfice de sa commande : en cas de difficulté, le Client est invité à
            écrire à [EMAIL_CONTACT], une solution étant recherchée de bonne foi.
          </p>

          {/* ─── Article 15 ─── */}
          <h2 id="art-15">Article 15 — Annulation et report des rendez-vous</h2>
          <p>
            15.1. <strong>Report à l&apos;initiative du Client.</strong> Le Client
            peut reporter un rendez-vous <strong>sans frais</strong> en prévenant
            par écrit à [EMAIL_CONTACT] <strong>au moins 24 heures avant</strong>{" "}
            l&apos;heure prévue. Un nouveau créneau est proposé sous 7 jours
            ouvrés, dans les limites de l&apos;article 14.
          </p>
          <p>
            15.2. <strong>Report tardif.</strong> En cas de report demandé moins de
            24 heures avant, ou d&apos;absence non prévenue, le créneau est réputé
            consommé. Toutefois :
          </p>
          <ol type="a" className="alpha">
            <li>
              une <strong>tolérance de 15 minutes</strong> est appliquée : au-delà,
              le Prestataire n&apos;est plus tenu de rester connecté ;
            </li>
            <li>
              le Client bénéficie d&apos;
              <strong>un (1) report tardif gratuit</strong> par commande, sans
              justification ;
            </li>
            <li>
              aucun créneau n&apos;est décompté en cas de{" "}
              <strong>motif légitime justifié</strong> au sens de l&apos;article
              14.3 b) ou de force majeure.
            </li>
          </ol>
          <p>
            15.3. <strong>Report à l&apos;initiative du Prestataire.</strong> Le
            Prestataire peut être amené à reporter un rendez-vous. Il en informe le
            Client dès que possible et propose au moins deux nouveaux créneaux dans
            un délai de 10 jours ouvrés. Le report ne consomme aucun quota. Si le
            Prestataire reporte plus de deux fois le même rendez-vous, le Client
            peut demander le remboursement de la fraction correspondante du prix.
          </p>
          <p>
            15.4. <strong>Incident technique.</strong> Si la visioconférence ne
            peut se tenir en raison d&apos;un problème technique imputable au
            Prestataire ou à l&apos;outil de visioconférence, le rendez-vous est
            reprogrammé sans décompte de quota. Si le problème est imputable au
            Client et empêche la tenue du rendez-vous au-delà de la tolérance de 15
            minutes, le créneau est réputé consommé, sous réserve du 15.2 b).
          </p>
          <p>
            15.5. <strong>Annulation définitive.</strong> Le Client peut mettre fin
            à l&apos;accompagnement à tout moment par écrit. Les prestations déjà
            exécutées restent dues. Les prestations non encore exécutées sont
            remboursées au prorata sur la base de la valorisation de l&apos;article
            17.5, hors période de rétractation où s&apos;appliquent les règles de
            l&apos;article 17.
          </p>

          {/* ─── Article 16 ─── */}
          <h2 id="art-16">Article 16 — Obligations du Client</h2>
          <p>
            16.1. Le Client fournit des informations exactes et complètes,
            notamment une adresse électronique valide qu&apos;il consulte.
          </p>
          <p>
            16.2. Pour l&apos;audit, le Client transmet : son <strong>CV</strong>{" "}
            au format PDF, l&apos;<strong>URL de son profil GitHub</strong> (ou
            équivalent) et l&apos;<strong>URL de son profil LinkedIn</strong> (ou
            équivalent), ainsi que, s&apos;il le souhaite, une indication de son
            école, de son niveau, de sa spécialité et de sa zone géographique. Les
            documents doivent être <strong>lisibles et accessibles</strong> ; un
            profil en accès restreint doit être rendu consultable.
          </p>
          <p>
            16.3. Le Client s&apos;assure de disposer d&apos;une connexion,
            d&apos;un micro et d&apos;un environnement permettant la tenue des
            visioconférences.
          </p>
          <p>
            16.4. Le Client demeure <strong>seul responsable</strong> de
            l&apos;exactitude et de la véracité du contenu de son CV, de ses
            réalisations et de ses déclarations aux entreprises. Le Prestataire ne
            vérifie ni ne certifie l&apos;exactitude des informations que le Client
            porte sur ses documents et{" "}
            <strong>
              s&apos;interdit de conseiller toute présentation mensongère ou
              trompeuse d&apos;un parcours, d&apos;un diplôme, d&apos;une
              expérience ou d&apos;une compétence
            </strong>
            .
          </p>
          <p>
            16.5. Le Client s&apos;abstient de tout enregistrement, captation ou
            diffusion des visioconférences sans accord écrit préalable du
            Prestataire, et respecte la licence d&apos;usage de l&apos;article 18.
          </p>
          <p>
            16.6. Les échanges se déroulent dans le respect mutuel. Le Prestataire
            peut mettre fin à l&apos;accompagnement, après un avertissement écrit
            resté sans effet, en cas de propos injurieux, discriminatoires,
            menaçants ou de comportement rendant la prestation impossible. Les
            prestations non exécutées sont alors remboursées au prorata.
          </p>

          {/* ─── Article 17 ─── */}
          <h2 id="art-17">Article 17 — Droit de rétractation</h2>

          <h3 id="art-17-1">17.1 — Principe</h3>
          <p>
            Conformément à l&apos;article L. 221-18 du Code de la consommation, le
            Client consommateur dispose d&apos;un délai de{" "}
            <strong>quatorze (14) jours</strong> pour exercer son droit de
            rétractation sans avoir à motiver sa décision ni à supporter de coûts
            autres que ceux prévus aux articles L. 221-23 à L. 221-25.
          </p>
          <p>
            Le délai court{" "}
            <strong>à compter du jour de la conclusion du contrat</strong> pour les
            contrats de prestation de services et de fourniture de contenu
            numérique non fourni sur un support matériel (article L. 221-18, 1°).
            Si le délai expire un samedi, un dimanche ou un jour férié, il est
            prorogé jusqu&apos;au premier jour ouvrable suivant.
          </p>
          <p>
            Le <strong>formulaire type de rétractation</strong> figure en{" "}
            <a href="#annexe-1">Annexe 1</a> des présentes.
          </p>

          <h3 id="art-17-2">
            17.2 — Cas particulier du Kit : contenu numérique à accès immédiat
          </h3>
          <p>
            Le Kit est un{" "}
            <strong>contenu numérique non fourni sur un support matériel</strong>.
            En application de l&apos;
            <strong>article L. 221-28, 13°</strong> du Code de la consommation, le
            droit de rétractation <strong>ne peut pas être exercé</strong> pour ce
            contenu lorsque son exécution a commencé et que, cumulativement :
          </p>
          <ol type="a" className="alpha">
            <li>
              le Client a{" "}
              <strong>préalablement donné son consentement exprès</strong> à ce que
              l&apos;exécution du contrat commence avant l&apos;expiration du délai
              de rétractation de quatorze jours ; <strong>et</strong>
            </li>
            <li>
              le Client a{" "}
              <strong>
                expressément reconnu qu&apos;il perdrait ainsi son droit de
                rétractation
              </strong>{" "}
              ; <strong>et</strong>
            </li>
            <li>
              le Prestataire a fourni au Client, sur support durable, la{" "}
              <strong>confirmation</strong> de cet accord conformément à
              l&apos;article L. 221-13 du Code de la consommation.
            </li>
          </ol>
          <p>
            <strong>Mise en œuvre.</strong> Lors de la commande du Kit — seul ou
            compris dans La Méthode ou Le Suivi — une{" "}
            <strong>case à cocher distincte, non pré-cochée</strong>, est présentée
            au Client, portant la mention suivante :
          </p>
          <ProseNote tone="accent">
            <Case>
              <strong>
                Je demande expressément que le Kit me soit mis à disposition
                immédiatement, avant l&apos;expiration du délai de rétractation de
                14 jours, et je reconnais qu&apos;une fois cette mise à disposition
                effectuée, je perdrai mon droit de rétractation sur ce contenu
                numérique (article L. 221-28, 13° du Code de la consommation).
              </strong>
            </Case>
          </ProseNote>
          <p>
            <strong>Si le Client ne coche pas cette case</strong>, le Kit lui est
            mis à disposition{" "}
            <strong>à l&apos;expiration du délai de quatorze jours</strong>, et il
            conserve son droit de rétractation entier jusqu&apos;à cette date.
            Cette option est explicitement offerte : le Client n&apos;est jamais
            contraint de renoncer à son droit pour pouvoir commander.
          </p>
          <p>
            <strong>
              Conséquence pour les offres La Méthode et Le Suivi
            </strong>{" "}
            : la renonciation ne porte que sur la{" "}
            <strong>valeur du Kit (49 €)</strong>. Le droit de rétractation reste
            entier, dans les conditions de l&apos;article 17.3, pour la part
            correspondant aux prestations de services (audit, visioconférences,
            relectures) non encore exécutées.
          </p>

          <h3 id="art-17-3">
            17.3 — Prestations de services commencées avant la fin du délai
          </h3>
          <p>
            Les prestations de services (audit vidéo, visioconférences,
            relectures) sont soumises aux règles suivantes.
          </p>
          <p>
            <strong>a) Exécution après le délai — cas par défaut.</strong> Sauf
            demande expresse du Client, aucune prestation de services n&apos;est
            exécutée avant l&apos;expiration du délai de quatorze jours. Le Client
            conserve alors la faculté de se rétracter et d&apos;obtenir le{" "}
            <strong>remboursement intégral</strong> de la part correspondante.
          </p>
          <p>
            <strong>b) Demande d&apos;exécution anticipée.</strong> Si le Client
            souhaite que la prestation commence avant l&apos;expiration du délai —
            ce qui est fréquent compte tenu du calendrier de recrutement —, le
            Prestataire recueille sa <strong>demande expresse</strong> conformément
            à l&apos;article L. 221-25 du Code de la consommation, au moyen
            d&apos;une case à cocher distincte, non pré-cochée :
          </p>
          <ProseNote tone="accent">
            <Case>
              <strong>
                Je demande expressément que l&apos;exécution des prestations de
                services commandées (audit vidéo, visioconférences, relectures)
                commence avant l&apos;expiration du délai de rétractation de 14
                jours. Je reconnais qu&apos;en cas de rétractation, je devrai payer
                le montant correspondant aux prestations déjà fournies, et que je
                perdrai mon droit de rétractation une fois la prestation pleinement
                exécutée (articles L. 221-25 et L. 221-28, 1° du Code de la
                consommation).
              </strong>
            </Case>
          </ProseNote>
          <p>
            <strong>c) Rétractation après exécution partielle.</strong> Si le
            Client se rétracte alors que la prestation a commencé à sa demande
            expresse, il doit au Prestataire un montant{" "}
            <strong>proportionné</strong> à ce qui a été fourni jusqu&apos;à la
            communication de sa décision, calculé sur la base du prix total convenu
            (article L. 221-25). La valorisation figure à l&apos;article 17.5. Le
            solde lui est remboursé.
          </p>
          <p>
            <strong>d) Perte du droit après exécution complète.</strong>{" "}
            Conformément à l&apos;article L. 221-28, 1° du Code de la consommation,
            le droit de rétractation ne peut plus être exercé pour un service{" "}
            <strong>pleinement exécuté</strong> avant la fin du délai de quatorze
            jours, dès lors que l&apos;exécution a commencé avec l&apos;accord
            préalable exprès du Client et avec la reconnaissance par lui de la
            perte de son droit de rétractation.
          </p>
          <p>
            <strong>e) Absence de recueil des accords.</strong> Si le Prestataire
            n&apos;a pas recueilli les accords exprès ci-dessus, ou n&apos;en a pas
            fourni confirmation sur support durable,{" "}
            <strong>le Client ne doit aucune somme</strong> en cas de rétractation,
            et le remboursement est intégral (articles L. 221-25 et L. 221-28).
          </p>

          <h3 id="art-17-4">17.4 — Modalités d&apos;exercice</h3>
          <p>
            Le Client exerce son droit de rétractation en informant le Prestataire
            de sa décision par une{" "}
            <strong>déclaration dénuée d&apos;ambiguïté</strong>, avant
            l&apos;expiration du délai :
          </p>
          <ul>
            <li>
              par e-mail à <strong>[EMAIL_CONTACT]</strong> ;
            </li>
            <li>
              ou par courrier à{" "}
              <strong>[PRÉNOM NOM] — Premier Commit — [ADRESSE]</strong> ;
            </li>
            <li>
              en utilisant, s&apos;il le souhaite, le{" "}
              <strong>
                formulaire type de l&apos;<a href="#annexe-1">Annexe 1</a>
              </strong>{" "}
              — son usage n&apos;est pas obligatoire.
            </li>
          </ul>
          <p>
            Le Prestataire adresse <strong>sans délai</strong> un accusé de
            réception de la rétractation sur support durable.
          </p>
          <p>
            Le délai est respecté si la déclaration est envoyée{" "}
            <strong>avant l&apos;expiration</strong> du délai de quatorze jours. La
            preuve de l&apos;exercice du droit incombe au Client ; l&apos;envoi par
            e-mail suffit.
          </p>
          <p>
            <strong>Remboursement.</strong> Le Prestataire rembourse les sommes
            dues <strong>au plus tard quatorze (14) jours</strong> à compter de la
            réception de la décision de rétractation, par le{" "}
            <strong>même moyen de paiement</strong> que celui utilisé lors de la
            commande, sauf accord exprès du Client pour un autre moyen. Le
            remboursement n&apos;occasionne aucun frais pour le Client.
          </p>
          <p>
            <strong>Obligation du Client sur le contenu numérique.</strong> En cas
            de rétractation portant sur un contenu numérique, le Client
            s&apos;abstient d&apos;utiliser ce contenu et de le rendre accessible à
            des tiers, et supprime les fichiers en sa possession.
          </p>
          <p>
            <strong>Absence d&apos;information.</strong> Conformément à
            l&apos;article L. 221-20 du Code de la consommation, si le Prestataire
            n&apos;a pas informé le Client de son droit de rétractation, le délai
            est <strong>prolongé de douze mois</strong> à compter de
            l&apos;expiration du délai initial.
          </p>

          <h3 id="art-17-5">
            17.5 — Valorisation des prestations pour le calcul proportionnel
          </h3>
          <p>
            Pour l&apos;application des articles 15.5 et 17.3 c), et à défaut
            d&apos;accord contraire entre les parties, les prestations sont
            valorisées comme suit, sur la base des prix affichés :
          </p>
          <ProseTable>
            <thead>
              <tr>
                <th scope="col">Prestation</th>
                <th scope="col">La Méthode (149 €)</th>
                <th scope="col">Le Suivi (290 €)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Le Kit (contenu numérique)</td>
                <td>49 €</td>
                <td>49 €</td>
              </tr>
              <tr>
                <td>Audit vidéo personnalisé</td>
                <td>50 €</td>
                <td>50 €</td>
              </tr>
              <tr>
                <td>Visioconférence initiale de 45 min</td>
                <td>50 €</td>
                <td>50 €</td>
              </tr>
              <tr>
                <td>3 points de suivi de 30 min</td>
                <td>—</td>
                <td>60 € (20 € par point entamé)</td>
              </tr>
              <tr>
                <td>10 relectures écrites</td>
                <td>—</td>
                <td>81 € (8,10 € par relecture rendue)</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>149 €</strong>
                </td>
                <td>
                  <strong>290 €</strong>
                </td>
              </tr>
            </tbody>
          </ProseTable>
          <p>
            Cette valorisation est proportionnée au prix total convenu,
            conformément à l&apos;article L. 221-25 du Code de la consommation. Si
            le Client estime que le montant total est excessif au regard de ce qui
            lui a été fourni, le montant approprié est calculé sur la base de la
            valeur marchande de la prestation fournie.
          </p>

          {/* ─── Article 18 ─── */}
          <h2 id="art-18">
            Article 18 — Propriété intellectuelle et licence d&apos;usage
          </h2>
          <p>
            18.1. Le Kit, les vidéos d&apos;audit, les comptes rendus, les
            relectures écrites et l&apos;ensemble des supports remis sont des{" "}
            <strong>œuvres protégées</strong> par le droit d&apos;auteur. Le
            paiement du prix n&apos;emporte <strong>aucune cession de droits</strong>
            .
          </p>
          <p>
            18.2. Le Client bénéficie d&apos;une{" "}
            <strong>
              licence d&apos;usage personnelle, non exclusive, non transférable, non
              cessible et sans droit de sous-licence
            </strong>
            , limitée à son usage propre dans le cadre de sa recherche
            d&apos;alternance, pour une durée illimitée.
          </p>
          <p>
            18.3. Sont interdits, sans autorisation écrite préalable : la revente,
            la location, le prêt, l&apos;échange, la cession, le partage, la
            republication, la diffusion à des tiers (y compris au sein d&apos;un
            groupe de messagerie, d&apos;un espace de stockage partagé, d&apos;un
            dépôt de code, d&apos;un réseau social ou d&apos;une plateforme de
            partage de documents), la communication du lien de téléchargement, la
            réutilisation dans une prestation ou un contenu concurrent, ainsi que
            l&apos;extraction ou la réutilisation aux fins d&apos;entraînement
            d&apos;un système d&apos;intelligence artificielle.
          </p>
          <p>
            18.4. Le Client demeure propriétaire des documents qu&apos;il produit à
            partir des modèles (son CV, ses lettres, son portfolio) et en dispose
            librement.
          </p>
          <p>
            18.5. En cas de manquement, le Prestataire peut, après mise en demeure
            restée sans effet sous 8 jours, suspendre l&apos;accès et résilier le
            contrat sans remboursement des prestations exécutées, sans préjudice de
            toute action fondée sur les articles L. 335-2 et L. 335-3 du Code de la
            propriété intellectuelle.
          </p>
          <p>
            18.6. Le Prestataire ne publie, ne cite et n&apos;utilise à des fins de
            communication{" "}
            <strong>
              aucun document, extrait, capture d&apos;écran, nom ou témoignage
            </strong>{" "}
            du Client sans son{" "}
            <strong>accord écrit exprès et préalable</strong>, révocable à tout
            moment sans justification.
          </p>

          {/* ─── Article 19 ─── */}
          <h2 id="art-19">Article 19 — Confidentialité</h2>
          <p>
            19.1. Le Prestataire s&apos;engage à traiter comme confidentiels
            l&apos;ensemble des documents et informations transmis par le Client,
            ainsi que le contenu des échanges. Il s&apos;interdit de les
            communiquer à un tiers, sauf obligation légale.
          </p>
          <p>
            19.2. Cette obligation vaut en particulier vis-à-vis des{" "}
            <strong>entreprises, écoles et tiers</strong> : le Prestataire ne
            signale à personne qu&apos;un Client est en recherche, ni ne communique
            son profil.
          </p>
          <p>
            19.3. Le Client s&apos;engage réciproquement à ne pas divulguer les
            méthodes, contenus et supports qui lui sont remis (article 18).
          </p>

          {/* ─── Article 20 ─── */}
          <h2 id="art-20">Article 20 — Données personnelles</h2>
          <p>
            Le traitement des données personnelles est décrit dans la{" "}
            <Link href="/confidentialite/">
              <strong>Politique de confidentialité</strong>
            </Link>
            , qui fait partie intégrante de la relation contractuelle. Le Client y
            trouve notamment les finalités, les bases légales, les durées de
            conservation, la liste des sous-traitants, le sort des documents
            transmis après la prestation et les modalités d&apos;exercice de ses
            droits.
          </p>
          <p>
            Responsable de traitement : [PRÉNOM NOM] — [EMAIL_CONTACT]. Autorité de
            contrôle : CNIL —{" "}
            <a href="https://www.cnil.fr" rel="noreferrer">
              www.cnil.fr
            </a>
            .
          </p>

          {/* ─── Article 21 ─── */}
          <h2 id="art-21">Article 21 — Garantie légale de conformité</h2>
          <p>
            21.1. <strong>Contenu numérique (Le Kit).</strong> Le Kit bénéficie de
            la <strong>garantie légale de conformité</strong> prévue aux articles L.
            224-25-12 et suivants du Code de la consommation. Le Prestataire répond
            des défauts de conformité existant lors de la fourniture et de ceux qui
            apparaissent pendant la durée de fourniture. En cas de défaut, le
            Client peut obtenir la mise en conformité sans frais dans un délai
            raisonnable et sans inconvénient majeur, et à défaut, une réduction du
            prix ou la résolution du contrat.
          </p>
          <p>
            21.2. <strong>Prestations de services.</strong> Le Prestataire répond
            des défauts d&apos;exécution dans les conditions du droit commun et des
            articles L. 216-6 et suivants du Code de la consommation.
          </p>
          <p>
            21.3. Ces garanties légales s&apos;appliquent indépendamment du droit
            de rétractation et de toute garantie commerciale.
          </p>

          {/* ─── Article 22 ─── */}
          <h2 id="art-22">Article 22 — Responsabilité</h2>
          <p>
            22.1. Le Prestataire est responsable de la bonne exécution des
            obligations décrites à l&apos;article 8, dans la limite de son
            obligation de moyens (article 6).
          </p>
          <p>22.2. Le Prestataire n&apos;est pas responsable :</p>
          <ol type="a" className="alpha">
            <li>
              de l&apos;issue de la recherche d&apos;alternance du Client (article
              6) ;
            </li>
            <li>
              des décisions prises par le Client, notamment le choix des
              entreprises visées, le contenu final de ses candidatures et les
              engagements qu&apos;il souscrit ;
            </li>
            <li>des décisions et comportements des employeurs, écoles et tiers ;</li>
            <li>
              de l&apos;indisponibilité d&apos;un service tiers (plateforme de
              visioconférence, messagerie, hébergement) non imputable à sa propre
              faute ;
            </li>
            <li>de l&apos;inexactitude des informations fournies par le Client.</li>
          </ol>
          <p>
            22.3.{" "}
            <strong>
              Aucune clause des présentes ne limite ni n&apos;exclut la
              responsabilité du Prestataire
            </strong>{" "}
            dans les cas où la loi l&apos;interdit, notamment en cas de faute
            lourde, de dol ou d&apos;atteinte à l&apos;intégrité physique. Les
            clauses créant un déséquilibre significatif au détriment du
            consommateur au sens de l&apos;article L. 212-1 du Code de la
            consommation sont réputées non écrites.
          </p>
          <p>
            22.4. <strong>Force majeure.</strong> Aucune partie n&apos;est
            responsable d&apos;un manquement résultant d&apos;un cas de force
            majeure au sens de l&apos;article 1218 du Code civil. Les délais sont
            suspendus pendant la durée de l&apos;événement. Si celui-ci se prolonge
            au-delà de deux mois, chaque partie peut résoudre le contrat, les
            prestations non exécutées étant remboursées.
          </p>

          {/* ─── Article 23 ─── */}
          <h2 id="art-23">Article 23 — Réclamations</h2>
          <p>
            23.1. Toute réclamation est adressée par écrit à{" "}
            <strong>[EMAIL_CONTACT]</strong>, avec la mention « Réclamation » en
            objet, ou par courrier à [PRÉNOM NOM] — Premier Commit — [ADRESSE].
          </p>
          <p>
            23.2. Le Prestataire accuse réception sous{" "}
            <strong>3 jours ouvrés</strong> et apporte une réponse motivée sous{" "}
            <strong>quinze (15) jours</strong> au plus.
          </p>
          <p>
            23.3. Cette démarche est un préalable au recours à la médiation
            (article 24). Elle ne prive le Client d&apos;aucun recours et ne
            constitue pas une condition de recevabilité d&apos;une action en
            justice.
          </p>

          {/* ─── Article 24 ─── */}
          <h2 id="art-24">Article 24 — Médiation de la consommation</h2>
          <p>
            24.1. Conformément aux articles L. 612-1 et suivants du Code de la
            consommation, le Client consommateur a le droit de recourir{" "}
            <strong>gratuitement</strong> à un médiateur de la consommation en vue
            de la résolution amiable d&apos;un litige l&apos;opposant au
            Prestataire.
          </p>
          <p>
            24.2. <strong>Médiateur désigné :</strong>
          </p>
          <blockquote>
            <p>
              <strong>[MÉDIATEUR — NOM/ADRESSE/SITE]</strong>
            </p>
          </blockquote>
          <p>
            24.3. Le recours à la médiation suppose que le Client ait
            préalablement adressé une <strong>réclamation écrite</strong> au
            Prestataire (article 23) et qu&apos;il n&apos;ait pas obtenu
            satisfaction, ou soit resté sans réponse pendant plus de deux mois. La
            saisine doit intervenir dans le délai d&apos;un an à compter de la
            réclamation écrite.
          </p>
          <p>
            24.4. Conformément à l&apos;article L. 612-4 du Code de la
            consommation,{" "}
            <strong>
              le recours à la médiation n&apos;est pas obligatoire pour le Client
            </strong>{" "}
            et ne le prive pas de son droit de saisir la justice. Toute clause
            imposant au consommateur de recourir obligatoirement à la médiation
            préalablement à une action en justice est prohibée.
          </p>
          <p>
            24.5.{" "}
            <strong>
              La plateforme européenne de Règlement en Ligne des Litiges (RLL/ODR)
              a été fermée le 20 juillet 2025
            </strong>{" "}
            en application du règlement (UE) 2024/3228 ; aucun renvoi n&apos;est
            donc fait vers ce dispositif. Pour un litige transfrontalier au sein de
            l&apos;Union européenne, le Client peut s&apos;adresser au{" "}
            <strong>Centre Européen des Consommateurs France</strong> (
            <a href="https://www.europe-consommateurs.eu" rel="noreferrer">
              www.europe-consommateurs.eu
            </a>
            ).
          </p>

          {/* ─── Article 25 ─── */}
          <h2 id="art-25">Article 25 — Preuve</h2>
          <p>
            Les registres informatisés du Prestataire (horodatage des commandes,
            journaux de connexion, courriers électroniques) sont admis comme mode
            de preuve, sauf preuve contraire apportée par le Client par tout moyen.
          </p>

          {/* ─── Article 26 ─── */}
          <h2 id="art-26">Article 26 — Modification des CGV</h2>
          <p>
            Le Prestataire peut modifier les présentes CGV à tout moment. Les CGV
            applicables à une commande sont celles acceptées par le Client au
            moment de cette commande et reproduites dans la confirmation qui lui a
            été adressée. Aucune modification ultérieure ne lui est opposable.
          </p>

          {/* ─── Article 27 ─── */}
          <h2 id="art-27">Article 27 — Nullité partielle et tolérance</h2>
          <p>
            27.1. Si une stipulation des présentes est déclarée nulle, réputée non
            écrite ou inapplicable, les autres stipulations conservent leur force.
            La stipulation concernée est remplacée par une stipulation valable
            d&apos;effet économique équivalent, dans le respect du droit de la
            consommation.
          </p>
          <p>
            27.2. Le fait pour l&apos;une des parties de ne pas se prévaloir
            d&apos;un manquement ne vaut pas renonciation à s&apos;en prévaloir
            ultérieurement.
          </p>

          {/* ─── Article 28 ─── */}
          <h2 id="art-28">Article 28 — Droit applicable et juridiction</h2>
          <p>
            28.1. Les présentes CGV sont soumises au{" "}
            <strong>droit français</strong>. Elles sont rédigées en français, seule
            version faisant foi.
          </p>
          <p>
            28.2. Conformément à l&apos;article R. 631-3 du Code de la
            consommation, le Client consommateur peut saisir, à son choix, la
            juridiction du lieu où il demeurait au moment de la conclusion du
            contrat ou de la survenance du fait dommageable, ou l&apos;une des
            juridictions territorialement compétentes en application du Code de
            procédure civile.
          </p>
          <p>
            28.3. En cas de litige, les parties s&apos;efforcent de rechercher une
            solution amiable (articles 23 et 24) avant toute action contentieuse.
          </p>

          <hr />

          {/* ─── Annexe 1 ─── */}
          <h2 id="annexe-1">Annexe 1 — Formulaire type de rétractation</h2>
          <blockquote>
            <p>
              <strong>
                Modèle conforme à l&apos;annexe à l&apos;article R. 221-1 du Code
                de la consommation.
              </strong>{" "}
              À compléter et renvoyer uniquement si vous souhaitez vous rétracter
              du contrat. Son usage n&apos;est <strong>pas obligatoire</strong> :
              toute déclaration dénuée d&apos;ambiguïté suffit.
            </p>
          </blockquote>

          <div className="my-8 rounded-2xl border border-ligne bg-white p-6 text-sm sm:p-8">
            <p className="font-display font-bold text-nuit">
              À l&apos;attention de :
            </p>
            <p className="mt-2 leading-relaxed text-gris">
              [PRÉNOM NOM] — Premier Commit
              <br />
              [ADRESSE]
              <br />
              Adresse électronique : [EMAIL_CONTACT]
            </p>

            <hr className="my-6 border-ligne" />

            <p className="leading-relaxed">
              Je vous notifie par la présente ma rétractation du contrat portant
              sur la prestation de services ci-dessous :
            </p>

            <div className="mt-6 space-y-5">
              <Ligne
                label="Prestation commandée :"
                apres="Le Kit / La Méthode / Le Suivi"
              />
              <Ligne label="Commandée le :" apres="jj / mm / aaaa" />
              <Ligne label="Numéro de commande (si connu) :" />
              <Ligne label="Nom du consommateur :" />
              <Ligne label="Adresse du consommateur :" />
              <Ligne label="Adresse électronique du consommateur :" />
              <Ligne label="Signature (en cas de notification sur papier) :" />
              <Ligne label="Date :" apres="jj / mm / aaaa" />
            </div>
          </div>

          {/* ─── Annexe 2 ─── */}
          <h2 id="annexe-2">
            Annexe 2 — Mentions de recueil des accords exprès
          </h2>
          <p>
            Les mentions ci-dessous apparaissent dans le tunnel de commande sous
            forme de{" "}
            <strong>cases à cocher distinctes et non pré-cochées</strong>, et sont{" "}
            <strong>reproduites dans l&apos;e-mail de confirmation</strong> adressé
            sur support durable.
          </p>

          <h3 id="annexe-2-a">
            A. Acceptation des CGV <em>(obligatoire)</em>
          </h3>
          <ProseNote>
            <Case>
              J&apos;ai lu et j&apos;accepte les Conditions Générales de Vente et
              la Politique de confidentialité de Premier Commit.
            </Case>
          </ProseNote>

          <h3 id="annexe-2-b">
            B. Déclaration de capacité <em>(obligatoire — choix unique)</em>
          </h3>
          <ProseNote>
            <Case>Je suis majeur(e) et je commande pour moi-même.</Case>
            <Case>
              Je suis le représentant légal d&apos;un bénéficiaire mineur, je
              commande en son nom et j&apos;autorise sa participation aux
              rendez-vous ainsi que la transmission de ses documents.
            </Case>
          </ProseNote>

          <h3 id="annexe-2-c">
            C. Accès immédiat au Kit{" "}
            <em>(facultatif — Le Kit, La Méthode, Le Suivi)</em>
          </h3>
          <ProseNote>
            <Case>
              Je demande expressément que le Kit me soit mis à disposition
              immédiatement, avant l&apos;expiration du délai de rétractation de 14
              jours, et je reconnais qu&apos;une fois cette mise à disposition
              effectuée, je perdrai mon droit de rétractation sur ce contenu
              numérique (article L. 221-28, 13° du Code de la consommation).
            </Case>
            <p className="italic text-gris">
              Si vous ne cochez pas cette case, le Kit vous sera transmis à
              l&apos;issue du délai de 14 jours et vous conserverez votre droit de
              rétractation jusque-là.
            </p>
          </ProseNote>

          <h3 id="annexe-2-d">
            D. Démarrage anticipé des prestations de services{" "}
            <em>(facultatif — La Méthode, Le Suivi)</em>
          </h3>
          <ProseNote>
            <Case>
              Je demande expressément que l&apos;exécution des prestations de
              services commandées (audit vidéo, visioconférences, relectures)
              commence avant l&apos;expiration du délai de rétractation de 14
              jours. Je reconnais qu&apos;en cas de rétractation je devrai payer le
              montant correspondant aux prestations déjà fournies, calculé selon
              l&apos;article 17.5 des CGV, et que je perdrai mon droit de
              rétractation une fois la prestation pleinement exécutée (articles L.
              221-25 et L. 221-28, 1° du Code de la consommation).
            </Case>
            <p className="italic text-gris">
              Si vous ne cochez pas cette case, le premier rendez-vous vous sera
              proposé après l&apos;expiration du délai de 14 jours.
            </p>
          </ProseNote>

          <h3 id="annexe-2-e">
            E. Bouton de validation <em>(obligatoire)</em>
          </h3>
          <ProseNote>
            <p>
              Libellé exact :{" "}
              <strong>« Commande avec obligation de paiement »</strong> (article L.
              221-14 du Code de la consommation).
            </p>
          </ProseNote>
        </Prose>
      </Section>
    </>
  );
}
