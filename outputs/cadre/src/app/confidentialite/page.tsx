import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données Cadré collecte, pourquoi, combien de temps, et comment exercer tes droits.",
};

export default function Confidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-[length:var(--text-titre)] font-semibold tracking-tight">
        Politique de confidentialité
      </h1>
      <p className="mt-6 leading-relaxed text-[#A1A1AA]">
        Version courte : les outils gratuits fonctionnent entièrement dans ton navigateur
        et n&apos;envoient rien. Nous ne déposons aucun traceur publicitaire. Si tu
        achètes, nous traitons ton e-mail pour te livrer le produit. C&apos;est tout.
      </p>

      <div className="mt-12 space-y-12 leading-relaxed text-[#A1A1AA]">
        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Responsable du traitement</h2>
          <p className="mt-4">
            [À_REMPLACER_PRENOM_NOM], entrepreneur individuel, SIRET [À_REMPLACER_SIRET],
            [À_REMPLACER_ADRESSE]. Contact : [À_REMPLACER_EMAIL].
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">
            Les outils gratuits ne transmettent rien
          </h2>
          <p className="mt-4">
            Le simulateur et le diagnostic s&apos;exécutent intégralement dans ton
            navigateur. Les montants et les réponses que tu saisis ne sont ni envoyés à un
            serveur, ni enregistrés, ni consultables par nous. Fermer l&apos;onglet suffit
            à tout effacer.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Si tu achètes</h2>
          <table className="mt-5 w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#26262B] text-left text-[#F5F5F4]">
                <th className="py-3 pr-4 font-medium">Données</th>
                <th className="py-3 pr-4 font-medium">Pourquoi</th>
                <th className="py-3 font-medium">Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#26262B]">
                <td className="py-3 pr-4">Adresse e-mail</td>
                <td className="py-3 pr-4">
                  Livrer l&apos;accès et répondre au support. Exécution du contrat.
                </td>
                <td className="py-3">3 ans après le dernier contact</td>
              </tr>
              <tr className="border-b border-[#26262B]">
                <td className="py-3 pr-4">Données de paiement</td>
                <td className="py-3 pr-4">
                  Traitées par Paddle uniquement. Nous n&apos;y avons pas accès et ne
                  stockons aucune coordonnée bancaire.
                </td>
                <td className="py-3">Selon les règles de Paddle</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Justificatifs comptables</td>
                <td className="py-3 pr-4">Obligation légale de conservation</td>
                <td className="py-3">10 ans</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Pas de bandeau cookies</h2>
          <p className="mt-4">
            Ce n&apos;est pas un oubli, c&apos;est un choix. Le site ne dépose aucun
            traceur publicitaire, aucun pixel de réseau social et aucun outil de mesure
            d&apos;audience non exempté. Puisqu&apos;aucun consentement n&apos;est requis,
            nous ne t&apos;imposons pas de bandeau.
          </p>
          {/* ⚠️ À VÉRIFIER : si un outil d'analytics, un chat ou un widget est ajouté plus tard, réexaminer ce point — un bandeau conforme deviendrait probablement obligatoire. */}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Destinataires</h2>
          <p className="mt-4">
            Tes données sont accessibles à l&apos;éditeur, à Paddle en tant que vendeur de
            référence, et à l&apos;hébergeur OVH. Aucune donnée n&apos;est vendue ni cédée
            à des fins publicitaires.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Tes droits</h2>
          <p className="mt-4">
            Tu disposes d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
            de limitation, d&apos;opposition et de portabilité. Écris à
            [À_REMPLACER_EMAIL] : nous répondons sous un mois. Si la réponse ne te
            convient pas, tu peux saisir la CNIL (cnil.fr).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F5F5F4]">Si tu as moins de 15 ans</h2>
          <p className="mt-4">
            L&apos;achat suppose l&apos;accord de ton représentant légal. Nous limitons
            volontairement la collecte au strict e-mail de livraison, précisément pour
            éviter de traiter des données de mineurs au-delà du nécessaire.
          </p>
          {/* ⚠️ À VÉRIFIER : seuil de 15 ans pour le consentement du mineur (art. 8 RGPD + loi Informatique et Libertés) non confirmé en ligne pendant la construction. */}
        </section>

        <p className="border-t border-[#26262B] pt-8 text-sm">
          Dernière mise à jour : [À_REMPLACER_DATE]
        </p>
      </div>
    </main>
  );
}
