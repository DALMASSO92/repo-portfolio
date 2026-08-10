import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations légales sur l'éditeur et l'hébergeur du site Cadré.",
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-[length:var(--text-titre)] font-semibold tracking-tight">
        Mentions légales
      </h1>

      <div className="mt-12 space-y-12 leading-relaxed text-[#A1A1AA]">
        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Éditeur du site</h2>
          <ul className="mt-4 space-y-1.5">
            <li>[À_REMPLACER_PRENOM_NOM], entrepreneur individuel</li>
            <li>Adresse : [À_REMPLACER_ADRESSE]</li>
            <li>SIRET : [À_REMPLACER_SIRET] — code APE 62.01Z</li>
            <li>E-mail : [À_REMPLACER_EMAIL]</li>
            <li>Téléphone : [À_REMPLACER_TELEPHONE]</li>
            <li>Directeur de la publication : [À_REMPLACER_PRENOM_NOM]</li>
          </ul>
          {/* ⚠️ À VÉRIFIER : ajouter le n° de TVA intracommunautaire s'il en est attribué un (obligatoire au titre de la LCEN le cas échéant). */}
          <p className="mt-4">
            TVA non applicable, art. 293 B du CGI. L&apos;éditeur relève du régime de la
            franchise en base de TVA et ne facture donc pas de TVA.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Hébergeur</h2>
          <p className="mt-4">
            OVH SAS — 2 rue Kellermann, 59100 Roubaix, France.
            <br />
            Téléphone : [À_REMPLACER_TEL_OVH]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">
            Médiateur de la consommation
          </h2>
          <p className="mt-4">
            Conformément à l&apos;article L612-1 du code de la consommation, tu peux
            recourir gratuitement à un médiateur de la consommation en vue de la
            résolution amiable d&apos;un litige qui nous opposerait.
          </p>
          <ul className="mt-4 space-y-1.5">
            <li>[À_REMPLACER_MEDIATEUR_NOM]</li>
            <li>[À_REMPLACER_MEDIATEUR_ADRESSE]</li>
            <li>[À_REMPLACER_MEDIATEUR_URL]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Vendeur des produits</h2>
          <p className="mt-4">
            Les produits payants proposés sur ce site sont vendus par Paddle, qui
            intervient en qualité de vendeur de référence et émet la facture. Les
            coordonnées complètes de l&apos;entité contractante figurent dans les
            conditions générales de vente.
          </p>
          {/* ⚠️ À VÉRIFIER : renseigner l'entité Paddle exacte (dénomination, siège, immatriculation) avant mise en ligne. */}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Propriété intellectuelle</h2>
          <p className="mt-4">
            L&apos;ensemble des contenus de ce site — textes, mise en page, identité
            visuelle, modèles de documents — est protégé par le droit d&apos;auteur.
            L&apos;achat d&apos;un accès te donne le droit d&apos;utiliser les documents
            générés pour ta propre activité. Il ne t&apos;autorise ni à les revendre, ni
            à les redistribuer, ni à les intégrer dans une offre concurrente.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Nature des contenus</h2>
          <p className="mt-4">
            Cadré met à disposition des modèles documentaires génériques et des
            estimations chiffrées. Il ne s&apos;agit ni de conseil juridique, ni de
            conseil fiscal, ni de conseil comptable personnalisé. L&apos;éditeur
            n&apos;est ni avocat ni expert-comptable et ne fournit aucune prestation
            d&apos;accompagnement individuel. Pour toute situation particulière,
            adresse-toi à un professionnel qualifié ou aux organismes officiels
            (urssaf.fr, impots.gouv.fr, service-public.fr).
          </p>
        </section>

        <p className="border-t border-[#26262B] pt-8 text-sm">
          Dernière mise à jour : [À_REMPLACER_DATE]
        </p>
      </div>
    </main>
  );
}
