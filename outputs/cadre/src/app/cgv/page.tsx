import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente de Cadré : produit, prix, livraison, droit de rétractation et médiation.",
};

export default function CGV() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-[length:var(--text-titre)] font-semibold tracking-tight">
        Conditions générales de vente
      </h1>
      <p className="mt-6 leading-relaxed text-[#A1A1AA]">
        Ces conditions s&apos;appliquent à tout achat réalisé sur ce site. En validant ta
        commande, tu les acceptes. Elles sont écrites pour être comprises : si un point
        te paraît obscur, écris-nous avant d&apos;acheter.
      </p>

      <div className="mt-12 space-y-12 leading-relaxed text-[#A1A1AA]">
        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">1. Qui vend quoi</h2>
          <p className="mt-4">
            Le produit est édité par [À_REMPLACER_PRENOM_NOM], entrepreneur individuel,
            SIRET [À_REMPLACER_SIRET].
          </p>
          <p className="mt-4">
            La vente elle-même est réalisée par <strong className="text-[#F5F5F4]">Paddle</strong>,
            qui agit en qualité de vendeur de référence : c&apos;est Paddle qui conclut le
            contrat de vente avec toi, encaisse le paiement, émet la facture et prend en
            charge la TVA applicable dans ton pays. L&apos;éditeur fournit le produit et
            le support.
          </p>
          {/* ⚠️ À VÉRIFIER : renseigner l'entité Paddle exacte et confirmer que ses propres CGV sont bien portées à la connaissance de l'acheteur au moment du paiement. */}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">2. Le produit</h2>
          <p className="mt-4">
            L&apos;achat donne accès, sans limitation de durée, au générateur de documents :
            un modèle de contrat de partenariat et un modèle de facture, remplis à partir
            des informations que tu saisis, téléchargeables au format PDF, ainsi que la
            checklist des mentions obligatoires.
          </p>
          <p className="mt-4">
            <strong className="text-[#F5F5F4]">Ce que le produit n&apos;est pas.</strong> Les
            documents produits sont des <strong className="text-[#F5F5F4]">modèles génériques</strong>.
            Ils ne constituent ni une consultation juridique, ni un conseil fiscal, ni une
            prestation d&apos;expertise comptable, et ne sont pas adaptés à ta situation
            personnelle. L&apos;éditeur n&apos;est ni avocat ni expert-comptable. Aucune
            garantie n&apos;est donnée quant au résultat obtenu, à l&apos;issue d&apos;une
            négociation ou à l&apos;acceptation d&apos;un document par un tiers. Pour un
            partenariat à enjeu, fais relire ton contrat par un professionnel.
          </p>
          <p className="mt-4">
            Les estimations chiffrées proposées par les outils gratuits sont
            <strong className="text-[#F5F5F4]"> indicatives</strong> et ne valent pas calcul
            officiel de cotisations ou d&apos;impôt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">3. Prix et paiement</h2>
          <p className="mt-4">
            Le prix est indiqué en euros, toutes taxes comprises, sur la page du produit.
            Le paiement s&apos;effectue en une fois, au moment de la commande, via
            l&apos;interface sécurisée de Paddle. Aucun abonnement n&apos;est souscrit et
            aucun prélèvement ultérieur n&apos;est effectué.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">4. Livraison</h2>
          <p className="mt-4">
            L&apos;accès est délivré immédiatement après confirmation du paiement, par
            e-mail à l&apos;adresse que tu as indiquée. Si tu ne reçois rien dans
            l&apos;heure, vérifie tes indésirables puis écris à [À_REMPLACER_EMAIL].
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">
            5. Droit de rétractation
          </h2>
          <p className="mt-4">
            Tu disposes en principe d&apos;un délai de quatorze jours pour te rétracter.
            Ce produit étant un contenu numérique fourni immédiatement, la loi permet de
            renoncer à ce droit — mais seulement si tu y consens expressément, en
            connaissance de cause.
          </p>
          <p className="mt-4">
            C&apos;est pourquoi, au moment du paiement, deux cases distinctes et non
            pré-cochées te sont présentées :
          </p>
          <ul className="mt-4 space-y-3 border-l-2 border-[#D4FF3F] pl-5">
            <li>
              « Je demande expressément que l&apos;exécution du contrat commence
              immédiatement, avant la fin du délai de rétractation. »
            </li>
            <li>
              « Je reconnais que je perdrai mon droit de rétractation dès le début du
              téléchargement, et je renonce expressément à ce droit. »
            </li>
          </ul>
          <p className="mt-4">
            Ces deux mentions sont reprises dans l&apos;e-mail de confirmation qui te sert
            de preuve. Si tu ne coches pas ces cases, l&apos;accès n&apos;est pas ouvert
            immédiatement et tu conserves ton droit de rétractation pendant quatorze
            jours.
          </p>
          <p className="mt-4">
            Ce mécanisme est prévu par l&apos;article L221-28, 13° du code de la
            consommation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">6. Si tu es mineur</h2>
          <p className="mt-4">
            Les outils gratuits sont accessibles librement. En revanche, en validant un
            achat, tu déclares être majeur ou, si tu es mineur, agir avec
            l&apos;autorisation préalable de ton représentant légal. Une case à cocher te
            le demande explicitement au moment du paiement.
          </p>
          <p className="mt-4">
            En cas de réclamation d&apos;un représentant légal concernant un achat
            effectué par un mineur, le remboursement est accordé sur simple demande.
          </p>
          {/* ⚠️ À VÉRIFIER : références des art. 1146 et 1148 du code civil (capacité du mineur, actes courants) non confirmées en ligne pendant la construction. */}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">7. Réclamation et médiation</h2>
          <p className="mt-4">
            Pour toute réclamation, écris à [À_REMPLACER_EMAIL]. Nous répondons sous cinq
            jours ouvrés.
          </p>
          <p className="mt-4">
            Si la réponse ne te satisfait pas, tu peux saisir gratuitement le médiateur de
            la consommation, conformément à l&apos;article L612-1 du code de la
            consommation :
          </p>
          <ul className="mt-4 space-y-1.5">
            <li>[À_REMPLACER_MEDIATEUR_NOM]</li>
            <li>[À_REMPLACER_MEDIATEUR_ADRESSE]</li>
            <li>[À_REMPLACER_MEDIATEUR_URL]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">
            8. Propriété intellectuelle
          </h2>
          <p className="mt-4">
            Ton achat te donne un droit d&apos;usage personnel et professionnel des
            documents générés, dans le cadre de ta propre activité. Il ne t&apos;autorise
            pas à revendre, redistribuer, publier ou intégrer les modèles dans une offre
            concurrente.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">9. Droit applicable</h2>
          <p className="mt-4">
            Ces conditions sont soumises au droit français. En cas de litige, une solution
            amiable sera recherchée avant toute action judiciaire. Les dispositions
            protectrices du droit de la consommation applicables dans ton pays de
            résidence restent acquises.
          </p>
        </section>

        <p className="border-t border-[#26262B] pt-8 text-sm">
          Dernière mise à jour : [À_REMPLACER_DATE]
        </p>
      </div>
    </main>
  );
}
