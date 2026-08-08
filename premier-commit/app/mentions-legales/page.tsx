import type { Metadata } from "next";
import Link from "next/link";
import { Prose, ProseHeader, ProseToc } from "@/components/Prose";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Mentions légales — Premier Commit" },
  description:
    "Éditeur, directeur de la publication, hébergeur, régime fiscal, nature de l'activité, propriété intellectuelle et médiation de la consommation.",
};

const sommaire = [
  { id: "editeur", label: "1. Éditeur du site" },
  { id: "directeur", label: "2. Directeur de la publication" },
  { id: "hebergeur", label: "3. Hébergeur" },
  { id: "contact", label: "4. Contact" },
  { id: "tva", label: "5. Régime fiscal — TVA" },
  { id: "activite", label: "6. Nature de l'activité" },
  { id: "propriete", label: "7. Propriété intellectuelle" },
  { id: "liens", label: "8. Liens hypertextes" },
  { id: "donnees", label: "9. Données personnelles" },
  { id: "cookies", label: "10. Cookies et traceurs" },
  { id: "mediation", label: "11. Médiation de la consommation" },
  { id: "droit", label: "12. Droit applicable" },
  { id: "maj", label: "13. Mise à jour" },
];

export default function MentionsLegales() {
  return (
    <>
      <ProseHeader
        kicker="legal · mentions-legales"
        title="Mentions légales"
        intro="Qui édite ce site, qui l'héberge, sous quel statut, et ce que ce service est — ou n'est pas."
        meta="Version [VERSION] — dernière mise à jour : [DATE]"
      />

      <Section>
        <Prose>
          <ProseToc items={sommaire} />

          <h2 id="editeur">1. Éditeur du site</h2>
          <p>
            Le site <code>premiercommit.fr</code> (ci-après « le Site ») est
            édité par :
          </p>
          <p>
            <strong>[PRÉNOM NOM]</strong>, entrepreneur individuel (EI), exerçant
            sous le nom commercial <strong>Premier Commit</strong>.
          </p>
          <ul>
            <li>
              <strong>Statut juridique</strong> : entrepreneur individuel, régime
              de la micro-entreprise
            </li>
            <li>
              <strong>Adresse du siège / d&apos;exercice</strong> : [ADRESSE]
            </li>
            <li>
              <strong>SIRET</strong> : [SIRET]
            </li>
            <li>
              <strong>Numéro de TVA intracommunautaire</strong> : sans objet —
              voir article 5 ci-dessous
            </li>
            <li>
              <strong>Adresse électronique</strong> : [EMAIL_CONTACT]
            </li>
            <li>
              <strong>Téléphone</strong> : [TELEPHONE]
            </li>
          </ul>
          <p>
            L&apos;inscription au Répertoire des Entreprises et des
            Établissements peut être vérifiée gratuitement sur l&apos;Annuaire des
            Entreprises (
            <a href="https://annuaire-entreprises.data.gouv.fr" rel="noreferrer">
              annuaire-entreprises.data.gouv.fr
            </a>
            ).
          </p>

          <h2 id="directeur">2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication du Site est{" "}
            <strong>[PRÉNOM NOM]</strong>, en sa qualité d&apos;éditeur.
          </p>
          <p>
            Toute demande relative au contenu éditorial du Site doit être
            adressée à [EMAIL_CONTACT].
          </p>

          <h2 id="hebergeur">3. Hébergeur</h2>
          <p>
            Le Site est hébergé sur un serveur privé virtuel (VPS) fourni par :
          </p>
          <p>
            <strong>OVH SAS</strong>
            <br />
            2 rue Kellermann
            <br />
            59100 Roubaix — France
            <br />
            Société par actions simplifiée, filiale d&apos;OVH Groupe SA
            <br />
            RCS Lille Métropole 424 761 419
            <br />
            Téléphone : 1007 (depuis la France)
            <br />
            Site :{" "}
            <a href="https://www.ovhcloud.com" rel="noreferrer">
              www.ovhcloud.com
            </a>
          </p>

          <h2 id="contact">4. Contact</h2>
          <p>
            Pour toute question, réclamation ou demande d&apos;exercice de
            droits :
          </p>
          <ul>
            <li>
              <strong>E-mail</strong> : [EMAIL_CONTACT] — canal privilégié,
              réponse sous 3 jours ouvrés
            </li>
            <li>
              <strong>Courrier</strong> : [PRÉNOM NOM] — Premier Commit —
              [ADRESSE]
            </li>
            <li>
              <strong>Téléphone</strong> : [TELEPHONE]
            </li>
          </ul>

          <h2 id="tva">5. Régime fiscal — TVA</h2>
          <p>
            <strong>
              TVA non applicable, article 293 B du Code général des impôts.
            </strong>
          </p>
          <p>
            Tous les prix affichés sur le Site sont des <strong>prix nets</strong>
            , sans TVA à ajouter. Aucune TVA n&apos;est facturée ni récupérable.
          </p>

          <h2 id="activite">
            6. Nature de l&apos;activité — précisions importantes
          </h2>
          <p>
            Afin de lever toute ambiguïté sur la nature des prestations
            proposées :
          </p>

          <h3 id="activite-placement">
            6.1 — Accompagnement méthodologique et conseil, pas de placement
          </h3>
          <p>
            Premier Commit fournit une prestation de{" "}
            <strong>conseil et d&apos;accompagnement méthodologique</strong>{" "}
            destinée à aider un étudiant à construire lui-même sa candidature et
            sa démarche de recherche d&apos;alternance dans les métiers de
            l&apos;informatique.
          </p>
          <p>
            Premier Commit{" "}
            <strong>n&apos;exerce aucune activité de placement</strong> au sens
            des articles L. 5321-1 et suivants du Code du travail. En
            particulier, Premier Commit{" "}
            <strong>ne met en relation aucun candidat avec un employeur</strong>,{" "}
            <strong>ne transmet aucune candidature à une entreprise</strong>,{" "}
            <strong>
              ne dispose ni ne commercialise aucun fichier ou carnet
              d&apos;adresses d&apos;entreprises recruteuses
            </strong>
            , et <strong>ne garantit aucun entretien ni aucun contrat</strong>.
          </p>
          <p>
            L&apos;article L. 5321-3 du Code du travail interdit d&apos;exiger une
            rétribution, directe ou indirecte, d&apos;une personne à la recherche
            d&apos;un emploi en contrepartie de la fourniture de services de
            placement. Le périmètre de Premier Commit est défini pour rester
            strictement en dehors de ce champ. Il correspond aux services de{" "}
            <strong>conseil en insertion professionnelle</strong>, expressément
            distingués de l&apos;activité de placement par l&apos;article L.
            5321-1 du même code.
          </p>
          <p>
            Le détail du périmètre et des exclusions figure aux articles 4 et 5
            des <Link href="/cgv/">Conditions Générales de Vente</Link>.
          </p>

          <h3 id="activite-resultat">6.2 — Absence de garantie de résultat</h3>
          <p>
            Premier Commit est tenu d&apos;une{" "}
            <strong>obligation de moyens</strong> et non d&apos;une obligation de
            résultat. Aucune promesse d&apos;obtention d&apos;un entretien,
            d&apos;une alternance ou d&apos;un contrat de travail n&apos;est
            faite, ni sur le Site, ni dans les échanges commerciaux, ni pendant la
            prestation.
          </p>

          <h3 id="activite-formation">
            6.3 — Ni organisme de formation, ni certification
          </h3>
          <p>
            Premier Commit{" "}
            <strong>
              n&apos;est pas un organisme de formation professionnelle
            </strong>{" "}
            au sens du Livre III de la sixième partie du Code du travail. Les
            prestations proposées ne constituent pas des actions de formation au
            sens des articles L. 6313-1 et L. 6313-2 du Code du travail : elles ne
            comportent ni parcours pédagogique formalisé assorti d&apos;objectifs
            pédagogiques et d&apos;une évaluation des acquis, ni délivrance
            d&apos;une attestation de formation, ni préparation à une
            certification.
          </p>
          <p>En conséquence :</p>
          <ul>
            <li>
              Premier Commit <strong>ne dispose pas</strong> d&apos;un numéro de
              déclaration d&apos;activité de prestataire de formation et n&apos;a
              pas à en disposer ;
            </li>
            <li>
              les prestations{" "}
              <strong>ne sont éligibles à aucun financement</strong> au titre de
              la formation professionnelle : ni Compte Personnel de Formation
              (CPF), ni OPCO, ni France Travail, ni région ;
            </li>
            <li>
              aucune attestation, aucun certificat, aucun diplôme et aucun titre
              n&apos;est délivré ;
            </li>
            <li>
              toute demande de prise en charge par un financeur de la formation
              professionnelle sera <strong>refusée</strong>.
            </li>
          </ul>

          <h2 id="propriete">7. Propriété intellectuelle</h2>

          <h3 id="propriete-site">7.1 — Protection du Site</h3>
          <p>
            L&apos;ensemble des éléments composant le Site — structure, textes,
            chartes graphiques, logotype « Premier Commit », illustrations et
            visuels (notamment le motif de graphe de commits), typographies, code
            source, sélection et agencement des contenus — est protégé par le Code
            de la propriété intellectuelle et demeure la propriété exclusive de
            [PRÉNOM NOM], à l&apos;exception des éléments appartenant à des tiers
            dûment licenciés.
          </p>
          <p>
            Toute reproduction, représentation, adaptation, traduction,
            extraction ou réutilisation, totale ou partielle, par quelque procédé
            et sur quelque support que ce soit, sans autorisation écrite
            préalable, est interdite et constitue un délit de contrefaçon
            sanctionné par les articles L. 335-2 et L. 335-3 du Code de la
            propriété intellectuelle.
          </p>

          <h3 id="propriete-kit">
            7.2 — Le Kit et les livrables : œuvres protégées, licence
            d&apos;usage strictement personnelle
          </h3>
          <p>
            Les contenus vendus ou remis au client — notamment{" "}
            <strong>Le Kit</strong> (modèles de CV, guide du portfolio GitHub,
            méthode de ciblage, tableau de suivi de candidatures, modèles de
            relance, préparation aux entretiens techniques), les{" "}
            <strong>vidéos d&apos;audit personnalisées</strong>, les{" "}
            <strong>comptes rendus</strong> et les{" "}
            <strong>relectures écrites</strong> — constituent des œuvres de
            l&apos;esprit originales protégées par le droit d&apos;auteur.
          </p>
          <p>
            L&apos;achat d&apos;une offre n&apos;emporte{" "}
            <strong>aucune cession de droits d&apos;auteur</strong>. Il confère au
            client une{" "}
            <strong>
              licence d&apos;usage personnelle, non exclusive, non transférable et
              non cessible
            </strong>
            , limitée à son propre usage dans le cadre de sa recherche
            d&apos;alternance.
          </p>
          <p>
            Sont expressément <strong>interdits</strong>, sans autorisation écrite
            préalable :
          </p>
          <ul>
            <li>
              la revente, la location, le prêt, l&apos;échange ou la cession, à
              titre gratuit ou onéreux, de tout ou partie des contenus ;
            </li>
            <li>
              le partage, la diffusion, la mise à disposition ou la republication
              des contenus, y compris sur un espace privé, un groupe de
              messagerie, un espace de stockage partagé, un dépôt de code public
              ou privé, un réseau social, un forum, une plateforme d&apos;entraide
              entre étudiants ou une plateforme de partage de documents ;
            </li>
            <li>
              la communication à un tiers du lien de téléchargement, des
              identifiants d&apos;accès ou des fichiers reçus ;
            </li>
            <li>
              la reproduction des contenus dans une prestation concurrente, une
              formation, un article, une vidéo ou tout support diffusé ;
            </li>
            <li>
              l&apos;extraction, l&apos;ingestion ou la réutilisation des contenus
              aux fins d&apos;entraînement ou d&apos;alimentation d&apos;un
              système d&apos;intelligence artificielle.
            </li>
          </ul>
          <p>
            Est en revanche <strong>autorisé</strong> : l&apos;usage personnel,
            l&apos;impression pour son propre usage, l&apos;adaptation des modèles
            à son propre CV, à son propre portfolio et à ses propres candidatures,
            et la conservation des fichiers sans limitation de durée.
          </p>
          <p>
            Le client demeure propriétaire des documents qu&apos;il produit à
            partir des modèles (son CV, ses lettres, son portfolio) et en dispose
            librement.
          </p>
          <p>
            Toute diffusion non autorisée pourra donner lieu à la suspension de
            l&apos;accès, à la résiliation du contrat sans remboursement et à des
            poursuites.
          </p>

          <h3 id="propriete-client">7.3 — Contenus fournis par le client</h3>
          <p>
            Le client conserve l&apos;intégralité des droits sur les documents
            qu&apos;il transmet (CV, lettres, dépôts de code, profils en ligne).
            Il concède à Premier Commit une autorisation d&apos;usage strictement
            limitée à l&apos;exécution de la prestation commandée. Aucun document,
            extrait, capture d&apos;écran ou nom de client ne sera publié, cité ou
            utilisé à des fins de communication, de démonstration ou de témoignage
            sans son <strong>accord écrit exprès et préalable</strong>, révocable
            à tout moment.
          </p>

          <h2 id="liens">8. Liens hypertextes</h2>
          <p>
            Le Site peut contenir des liens vers des sites tiers (documentation
            technique, sites institutionnels, plateformes de recherche
            d&apos;alternance publiques). Ces liens sont fournis à titre
            informatif. Premier Commit n&apos;exerce aucun contrôle sur ces sites
            et décline toute responsabilité quant à leur contenu, leur
            disponibilité et leurs pratiques en matière de données personnelles.
          </p>
          <p>
            La création d&apos;un lien vers le Site est libre, sous réserve
            qu&apos;elle ne porte pas atteinte à l&apos;image de Premier Commit et
            qu&apos;elle n&apos;entretienne aucune confusion sur l&apos;origine
            des contenus.
          </p>

          <h2 id="donnees">9. Données personnelles</h2>
          <p>
            Le traitement des données personnelles est décrit dans la{" "}
            <Link href="/confidentialite/">
              <strong>Politique de confidentialité</strong>
            </Link>
            , accessible depuis toutes les pages du Site.
          </p>
          <p>
            Le responsable de traitement est [PRÉNOM NOM], joignable à
            [EMAIL_CONTACT]. Toute personne dispose d&apos;un droit d&apos;accès,
            de rectification, d&apos;effacement, de limitation, d&apos;opposition
            et de portabilité, ainsi que du droit d&apos;introduire une
            réclamation auprès de la{" "}
            <strong>
              Commission Nationale de l&apos;Informatique et des Libertés (CNIL)
            </strong>{" "}
            — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
            <a href="https://www.cnil.fr" rel="noreferrer">
              www.cnil.fr
            </a>
            .
          </p>

          <h2 id="cookies">10. Cookies et traceurs</h2>
          <p>
            Le Site est conçu pour fonctionner{" "}
            <strong>
              sans traceur publicitaire ni cookie de mesure d&apos;audience tiers
            </strong>
            . Les typographies utilisées (Space Grotesk, Inter, JetBrains Mono)
            sont <strong>auto-hébergées</strong> : aucune requête n&apos;est
            adressée à un service tiers lors de la consultation du Site.
          </p>
          <p>
            Si une mesure d&apos;audience ou un cookie non strictement nécessaire
            venait à être déployé, un bandeau de consentement conforme aux
            recommandations de la CNIL serait mis en place au préalable, et la
            Politique de confidentialité mise à jour.
          </p>

          <h2 id="mediation">11. Médiation de la consommation</h2>
          <p>
            Conformément à l&apos;article L. 612-1 du Code de la consommation,
            tout consommateur a le droit de recourir gratuitement à un médiateur
            de la consommation en vue de la résolution amiable d&apos;un litige
            l&apos;opposant à un professionnel.
          </p>
          <p>
            Médiateur désigné : <strong>[MÉDIATEUR — NOM/ADRESSE/SITE]</strong>
          </p>
          <p>
            Le recours à la médiation suppose que le consommateur ait
            préalablement tenté de résoudre le litige directement par une
            réclamation écrite adressée à [EMAIL_CONTACT].
          </p>

          <h2 id="droit">12. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au{" "}
            <strong>droit français</strong>. Elles sont rédigées en langue
            française, seule version faisant foi.
          </p>

          <h2 id="maj">13. Mise à jour</h2>
          <p>
            Version : <strong>[VERSION]</strong> — Dernière mise à jour :{" "}
            <strong>[DATE]</strong>
          </p>
          <p>
            Premier Commit se réserve le droit de modifier les présentes mentions
            légales à tout moment. La version applicable est celle publiée sur le
            Site au moment de la consultation.
          </p>
        </Prose>
      </Section>
    </>
  );
}
