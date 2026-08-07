import type { Metadata } from "next";
import Link from "next/link";
import { Prose, TableScroll } from "@/components/Prose";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Garde-Site : données collectées, finalités, durées de conservation, absence de cookies, et vos droits RGPD.",
};

export default function Confidentialite() {
  return (
    <Section>
      <div className="mx-auto max-w-prose">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-encre sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm font-medium text-ardoise">
          Dernière mise à jour : [DATE]
        </p>

        <Prose className="mt-8">
          <h2>1. Qui est responsable du traitement ?</h2>
          <p>
            Le responsable du traitement des données collectées sur le site{" "}
            <strong>[DOMAINE]</strong> (service « Garde-Site ») est :
          </p>
          <p>
            <strong>[PRÉNOM NOM], entrepreneur individuel (EI)</strong> —
            SIRET <strong>[SIRET]</strong> — <strong>[ADRESSE]</strong>
            <br />
            Contact : <strong>[EMAIL_CONTACT]</strong> —{" "}
            <strong>[TELEPHONE]</strong>
          </p>

          <h2>
            2. Quelles données collectons-nous, pourquoi, et sur quelle base
            légale ?
          </h2>
          <p>
            Le site est un site vitrine : il ne comporte ni compte utilisateur,
            ni paiement en ligne, ni publicité. Les traitements sont les
            suivants :
          </p>
          <TableScroll>
            <table>
              <thead>
                <tr>
                  <th>Traitement</th>
                  <th>Données collectées</th>
                  <th>Finalité</th>
                  <th>Base légale (art. 6 RGPD)</th>
                  <th>Durée de conservation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>
                      Formulaire de contact / demande de « Bilan de santé »
                    </strong>
                  </td>
                  <td>
                    Identité (nom, prénom), adresse e-mail, téléphone
                    (facultatif), URL du site concerné, contenu du message
                  </td>
                  <td>Répondre à votre demande, établir un devis</td>
                  <td>
                    Mesures précontractuelles prises à votre demande (art.
                    6.1.b) et intérêt légitime à répondre aux sollicitations
                    (art. 6.1.f)
                  </td>
                  <td>
                    <strong>3 ans</strong> après le dernier contact
                    (prospect) ; si un contrat est conclu, les données
                    rejoignent le dossier client
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Gestion des clients et facturation</strong>
                  </td>
                  <td>
                    Identité, coordonnées, éléments contractuels et de
                    facturation
                  </td>
                  <td>
                    Exécution du contrat, obligations comptables et fiscales
                  </td>
                  <td>
                    Exécution du contrat (art. 6.1.b) ; obligation légale
                    (art. 6.1.c) pour les factures
                  </td>
                  <td>
                    Durée du contrat + <strong>5 ans</strong> (prescription) ;
                    pièces comptables et factures : <strong>10 ans</strong>{" "}
                    (art. L.123-22 C. com.)
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Journaux techniques du serveur (logs)</strong>
                  </td>
                  <td>
                    Adresse IP, horodatage, pages consultées, user-agent
                  </td>
                  <td>
                    Sécurité du serveur, détection d&apos;abus, diagnostic
                    technique
                  </td>
                  <td>
                    Intérêt légitime (art. 6.1.f) : sécurité du système
                  </td>
                  <td>
                    <strong>12 mois maximum</strong>, puis suppression ou
                    anonymisation
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>E-mails échangés</strong>
                  </td>
                  <td>Adresse e-mail, contenu des échanges</td>
                  <td>Suivi de la relation</td>
                  <td>Selon le cas : art. 6.1.b ou 6.1.f</td>
                  <td>Alignée sur les durées ci-dessus</td>
                </tr>
              </tbody>
            </table>
          </TableScroll>
          <p>
            Les données marquées comme obligatoires dans le formulaire sont
            nécessaires au traitement de votre demande ; à défaut, nous ne
            pourrons pas vous répondre. Aucune donnée n&apos;est utilisée à des
            fins de prospection sans votre consentement, ni vendue ou cédée à
            des tiers.
          </p>
          <p>
            Aucune <strong>décision automatisée</strong> ni aucun{" "}
            <strong>profilage</strong> n&apos;est réalisé.
          </p>

          <h2>3. Cookies et traceurs : aucun</h2>
          <p>
            Le site <strong>[DOMAINE]</strong>{" "}
            <strong>
              ne dépose aucun cookie ni traceur soumis à consentement
            </strong>{" "}
            : pas de cookie publicitaire, pas de mesure d&apos;audience tierce,
            pas de bouton de réseau social, pas de contenu tiers embarqué. Les
            polices de caractères sont auto-hébergées (aucun appel à un CDN
            tiers).
          </p>
          <p>
            Conformément à l&apos;article 82 de la loi Informatique et
            Libertés et à la doctrine de la CNIL (lignes directrices « cookies
            et autres traceurs » du 17 septembre 2020 et recommandation
            associée), l&apos;obligation de recueillir le consentement — et
            donc d&apos;afficher un bandeau cookies — ne s&apos;applique
            qu&apos;aux traceurs <strong>non strictement nécessaires</strong>{" "}
            au service.{" "}
            <strong>
              Un site qui ne dépose aucun traceur de ce type n&apos;a pas à
              afficher de bandeau de consentement.
            </strong>{" "}
            C&apos;est le cas de ce site.
          </p>
          <p>
            Si cette situation évoluait (par exemple ajout d&apos;un outil de
            mesure d&apos;audience), la présente politique serait mise à jour
            et, le cas échéant, votre consentement serait recueilli
            préalablement.
          </p>

          <h2>4. Qui a accès à vos données ? Où sont-elles hébergées ?</h2>
          <ul>
            <li>
              <strong>Destinataire unique</strong> : [PRÉNOM NOM]. Aucun accès
              n&apos;est donné à des tiers, hors obligations légales
              (administrations, autorités judiciaires sur réquisition).
            </li>
            <li>
              <strong>Sous-traitants techniques</strong> : le site et sa
              messagerie sont hébergés sur un serveur (VPS) fourni par{" "}
              <strong>OVH SAS</strong>, 2 rue Kellermann, 59100 Roubaix,
              France — données hébergées dans l&apos;Union européenne{" "}
              <strong>[à confirmer : localisation du datacentre]</strong>.
            </li>
            <li>
              <strong>
                Aucun transfert de données hors de l&apos;Union européenne
              </strong>{" "}
              n&apos;est effectué.
            </li>
          </ul>
          <p>
            Lorsque le Prestataire accède, dans le cadre d&apos;un contrat de
            maintenance, à des données personnelles contenues dans le site
            d&apos;un client, il agit en qualité de{" "}
            <strong>sous-traitant</strong> (art. 28 RGPD) pour le compte de ce
            client ; ce traitement est encadré par l&apos;article 17 des{" "}
            <Link href="/cgv/">CGV</Link>.
          </p>

          <h2>5. Sécurité</h2>
          <p>
            Des mesures techniques et organisationnelles appropriées (art. 32
            RGPD) sont mises en œuvre : connexions chiffrées (HTTPS/TLS),
            accès au serveur par clés, mots de passe forts et uniques dans un
            gestionnaire dédié, mises à jour de sécurité régulières,
            sauvegardes chiffrées.
          </p>

          <h2>6. Vos droits</h2>
          <p>
            Conformément au RGPD (art. 15 à 21) et à la loi Informatique et
            Libertés, vous disposez des droits suivants sur vos données :
          </p>
          <ul>
            <li>
              <strong>droit d&apos;accès</strong> (obtenir une copie de vos
              données) ;
            </li>
            <li>
              <strong>droit de rectification</strong> ;
            </li>
            <li>
              <strong>droit à l&apos;effacement</strong> (« droit à
              l&apos;oubli ») ;
            </li>
            <li>
              <strong>droit à la limitation</strong> du traitement ;
            </li>
            <li>
              <strong>droit d&apos;opposition</strong>, notamment aux
              traitements fondés sur l&apos;intérêt légitime ;
            </li>
            <li>
              <strong>droit à la portabilité</strong> des données que vous avez
              fournies ;
            </li>
            <li>
              droit de définir des{" "}
              <strong>
                directives relatives au sort de vos données après votre décès
              </strong>{" "}
              (art. 85 loi Informatique et Libertés).
            </li>
          </ul>
          <p>
            <strong>Pour exercer vos droits</strong> : écrivez à{" "}
            <strong>[EMAIL_CONTACT]</strong> ou à <strong>[ADRESSE]</strong>,
            en précisant le droit exercé. Une réponse vous sera apportée dans
            un délai d&apos;<strong>un mois</strong> (prolongeable de deux mois
            pour les demandes complexes, avec information préalable). En cas de
            doute raisonnable sur votre identité, un justificatif pourra être
            demandé.
          </p>

          <h2>7. Réclamation auprès de la CNIL</h2>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont
            pas respectés, vous pouvez adresser une réclamation à la{" "}
            <strong>
              Commission nationale de l&apos;informatique et des libertés
              (CNIL)
            </strong>{" "}
            :
          </p>
          <blockquote>
            <p>
              CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
              <br />
              Téléphone : 01 53 73 22 22 — Réclamation en ligne :{" "}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.cnil.fr/fr/plaintes
              </a>
            </p>
          </blockquote>

          <h2>8. Mise à jour de la présente politique</h2>
          <p>
            Cette politique peut être mise à jour pour refléter les évolutions
            du site ou de la réglementation. La date de dernière mise à jour
            figure en tête de document ; toute modification substantielle sera
            signalée sur le site.
          </p>
        </Prose>
      </div>
    </Section>
  );
}
