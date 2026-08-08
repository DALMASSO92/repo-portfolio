import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Garde-Site : éditeur, directeur de la publication, hébergeur, propriété intellectuelle et données personnelles.",
};

export default function MentionsLegales() {
  return (
    <Section>
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-encre sm:text-4xl">
          Mentions légales
        </h1>

        <Prose className="mt-8">
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>[DOMAINE]</strong> (ci-après « le Site »), exploité
            sous la marque <strong>Garde-Site</strong>, est édité par :
          </p>
          <p>
            <strong>[PRÉNOM NOM], entrepreneur individuel (EI)</strong>
            <br />
            Micro-entrepreneur immatriculé sous le numéro SIRET :{" "}
            <strong>[SIRET]</strong>
            <br />
            Adresse : <strong>[ADRESSE]</strong>
            <br />
            E-mail : <strong>[EMAIL_CONTACT]</strong>
            <br />
            Téléphone : <strong>[TELEPHONE]</strong>
          </p>
          <p>
            <strong>TVA non applicable, art. 293 B du CGI</strong> (franchise
            en base de TVA).
          </p>
          <p>
            L&apos;éditeur n&apos;est pas soumis à l&apos;immatriculation au
            RCS ni au répertoire des métiers au-delà de son enregistrement au
            Registre national des entreprises (RNE) en qualité
            d&apos;entrepreneur individuel.
          </p>

          <h2>Directeur de la publication</h2>
          <p>
            Le directeur de la publication est <strong>[PRÉNOM NOM]</strong>,
            en sa qualité d&apos;éditeur du Site.
            <br />
            Contact : <strong>[EMAIL_CONTACT]</strong>.
          </p>

          <h2>Hébergeur</h2>
          <p>
            Le Site est hébergé sur un serveur privé virtuel (VPS) fourni par :
          </p>
          <p>
            <strong>OVH SAS</strong>
            <br />
            Société par actions simplifiée au capital de 10 174 560 €
            <br />
            RCS Lille Métropole 424 761 419
            <br />
            Siège social : 2 rue Kellermann — 59100 Roubaix — France
            <br />
            Téléphone : 1007 (depuis la France) / +33 9 72 10 10 07
            <br />
            Site :{" "}
            <a
              href="https://www.ovhcloud.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.ovhcloud.com
            </a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments composant le Site (textes,
            illustrations, logos — notamment le logo « Garde-Site » —, charte
            graphique, structure, code source, illustrations SVG) est la
            propriété exclusive de <strong>[PRÉNOM NOM]</strong> ou fait
            l&apos;objet d&apos;une autorisation d&apos;utilisation, et est
            protégé par le Code de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, adaptation ou
            exploitation, totale ou partielle, du Site ou de l&apos;un de ses
            éléments, par quelque procédé que ce soit et sur quelque support
            que ce soit, sans autorisation écrite préalable de l&apos;éditeur,
            est interdite et constitue une contrefaçon au sens des articles
            L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
          <p>
            La marque et le nom « Garde-Site » ne peuvent être utilisés sans
            l&apos;accord écrit préalable de l&apos;éditeur.
          </p>

          <h2>Données personnelles et cookies</h2>
          <p>
            Le traitement des données personnelles collectées via le Site
            (notamment le formulaire de contact) est décrit dans la{" "}
            <Link href="/confidentialite/">Politique de confidentialité</Link>.
          </p>
          <p>
            Le Site ne dépose{" "}
            <strong>aucun cookie ni traceur soumis à consentement</strong> (pas
            de mesure d&apos;audience tierce, pas de publicité, pas de réseaux
            sociaux embarqués). Aucun bandeau de recueil de consentement
            n&apos;est donc requis.
          </p>

          <h2>Médiation de la consommation</h2>
          <p>
            Conformément aux articles L.612-1 et suivants du Code de la
            consommation, tout consommateur a le droit de recourir gratuitement
            à un médiateur de la consommation en vue de la résolution amiable
            d&apos;un litige l&apos;opposant à l&apos;éditeur. Les coordonnées
            du médiateur désigné figurent dans les{" "}
            <Link href="/cgv/">Conditions générales de vente</Link>.
          </p>

          <h2>Signalement de contenus — LCEN</h2>
          <p>
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance
            dans l&apos;économie numérique (LCEN), tout contenu manifestement
            illicite peut être signalé à l&apos;éditeur à l&apos;adresse{" "}
            <strong>[EMAIL_CONTACT]</strong>.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le Site et les présentes mentions légales sont soumis au droit
            français.
          </p>
        </Prose>
      </div>
    </Section>
  );
}
