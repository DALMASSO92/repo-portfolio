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
  title: { absolute: "Politique de confidentialité — Premier Commit" },
  description:
    "Quelles données sont collectées, pourquoi, sur quelle base légale, combien de temps elles sont conservées, et ce que deviennent tes documents après la prestation.",
};

const sommaire = [
  { id: "responsable", label: "1. Qui est responsable de vos données" },
  { id: "principes", label: "2. Principes appliqués" },
  { id: "donnees", label: "3. Données, finalités et bases légales" },
  { id: "cookies", label: "4. Cookies et traceurs" },
  { id: "sous-traitants", label: "5. Sous-traitants et destinataires" },
  { id: "transferts", label: "6. Transferts hors Union européenne" },
  { id: "durees", label: "7. Durées de conservation" },
  { id: "securite", label: "8. Sécurité" },
  { id: "droits", label: "9. Vos droits" },
  { id: "cnil", label: "10. Réclamation auprès de la CNIL" },
  { id: "maj", label: "11. Modification de la présente politique" },
];

/** Fiche de traitement : deux colonnes, défilables sur mobile. */
function Fiche({ lignes }: { lignes: [string, React.ReactNode][] }) {
  return (
    <ProseTable>
      <tbody>
        {lignes.map(([cle, valeur]) => (
          <tr key={cle}>
            <th scope="row" className="w-48 align-top">
              {cle}
            </th>
            <td>{valeur}</td>
          </tr>
        ))}
      </tbody>
    </ProseTable>
  );
}

export default function Confidentialite() {
  return (
    <>
      <ProseHeader
        kicker="legal · confidentialite"
        title="Politique de confidentialité"
        intro="Protection des données personnelles — RGPD et loi Informatique et Libertés. Ce que je collecte, pourquoi, combien de temps, et ce que deviennent tes documents après la prestation."
        meta="Version [VERSION] — en vigueur au [DATE]"
      />

      <Section>
        <Prose>
          <ProseToc items={sommaire} />

          <h2 id="responsable">1. Qui est responsable de vos données</h2>
          <p>Le responsable du traitement est :</p>
          <p>
            <strong>[PRÉNOM NOM]</strong>, entrepreneur individuel (EI), exerçant
            sous le nom commercial <strong>Premier Commit</strong>
            <br />
            [ADRESSE] — SIRET [SIRET]
            <br />
            Contact : <strong>[EMAIL_CONTACT]</strong> — [TELEPHONE]
          </p>
          <p>
            Aucun délégué à la protection des données (DPO) n&apos;est désigné :
            l&apos;activité n&apos;entre pas dans les cas de désignation
            obligatoire de l&apos;article 37 du RGPD. Toute question relative aux
            données doit être adressée à <strong>[EMAIL_CONTACT]</strong>.
          </p>

          <h2 id="principes">2. Principes appliqués</h2>
          <ul>
            <li>
              <strong>Minimisation</strong> : seules les données nécessaires sont
              demandées. Il n&apos;est jamais demandé de date de naissance, de
              numéro de sécurité sociale, de situation familiale, de nationalité,
              de photographie ni de coordonnées bancaires.
            </li>
            <li>
              <strong>
                Aucune revente, aucune location, aucun partage commercial
              </strong>{" "}
              de données, à quiconque, en aucune circonstance.
            </li>
            <li>
              <strong>
                Aucune transmission à un employeur, une école ou un tiers
                recruteur
              </strong>{" "}
              — ce point est un engagement contractuel (article 19 des{" "}
              <Link href="/cgv/">CGV</Link>) autant qu&apos;une règle de
              traitement.
            </li>
            <li>
              <strong>Aucune décision automatisée</strong>, aucun profilage, aucun
              score, aucune publicité ciblée.
            </li>
            <li>
              <strong>Aucun traceur publicitaire</strong> sur le site.
            </li>
          </ul>

          <h2 id="donnees">
            3. Données collectées, finalités et bases légales
          </h2>

          <h3 id="donnees-contact">
            3.1 — Formulaire de contact et demandes d&apos;information
          </h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Prénom, nom (ou pseudonyme), adresse électronique, contenu du message, et toute information que vous choisissez d'y indiquer (école, niveau d'études, situation de recherche). Date et heure de l'envoi.",
              ],
              [
                "Finalité",
                "Répondre à votre demande et, le cas échéant, vous adresser une proposition.",
              ],
              [
                "Base légale",
                "Article 6.1 b) du RGPD — mesures précontractuelles prises à votre demande ; à défaut, article 6.1 f) — intérêt légitime à répondre aux sollicitations reçues.",
              ],
              [
                "Caractère obligatoire",
                "L'adresse électronique est nécessaire pour répondre. Les autres champs sont facultatifs.",
              ],
            ]}
          />

          <h3 id="donnees-commande">
            3.2 — Commande et exécution de la prestation
          </h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Prénom, nom, adresse électronique, offre commandée, date et montant de la commande, identifiant de transaction, historique des échanges, créneaux de rendez-vous, quotas consommés (points de suivi, relectures), comptes rendus. Le cas échéant : identité du représentant légal pour un bénéficiaire mineur.",
              ],
              [
                "Finalité",
                "Conclure et exécuter le contrat : livrer le Kit, réaliser l'audit, tenir les rendez-vous, rendre les relectures, suivre les quotas, traiter les demandes de rétractation et les réclamations.",
              ],
              ["Base légale", "Article 6.1 b) du RGPD — exécution du contrat."],
              [
                "Caractère obligatoire",
                "Ces données sont nécessaires ; sans elles, la commande ne peut pas être exécutée.",
              ],
            ]}
          />

          <h3 id="donnees-audit">
            3.3 — Documents et supports transmis pour l&apos;audit — traitement le
            plus sensible
          </h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Votre CV (parcours scolaire et universitaire, expériences, stages, compétences techniques, projets, langues, centres d'intérêt, coordonnées) ; l'adresse de votre profil GitHub ou équivalent, et le contenu public des dépôts consultés ; l'adresse de votre profil LinkedIn ou équivalent, et le contenu que vous y publiez ; vos lettres, messages de candidature et de relance ; les informations de contexte que vous communiquez (école, spécialité, rythme d'alternance, zone géographique, mobilité, difficultés rencontrées, nombre de candidatures envoyées, retours reçus).",
              ],
              [
                "Finalité",
                "Réaliser l'audit vidéo, préparer et tenir les rendez-vous, produire les relectures écrites. Ces données ne servent à rien d'autre.",
              ],
              [
                "Base légale",
                "Article 6.1 b) du RGPD — exécution du contrat que vous avez conclu.",
              ],
              [
                "Destinataires",
                "[PRÉNOM NOM] uniquement. Aucun tiers, hormis les sous-traitants techniques strictement nécessaires listés en section 5.",
              ],
            ]}
          />
          <p>
            <strong>
              Pourquoi ces données méritent une vigilance particulière.
            </strong>{" "}
            Un CV et un parcours de recherche d&apos;alternance ne sont pas
            juridiquement des « données sensibles » au sens de l&apos;article 9 du
            RGPD, mais ils dressent un{" "}
            <strong>portrait détaillé d&apos;une personne jeune</strong> : son
            établissement, son niveau réel, ses échecs, ses candidatures refusées,
            son adresse, parfois sa situation personnelle. Ces informations sont
            traitées avec le même soin qu&apos;une donnée confidentielle.
          </p>
          <ProseNote
            title="Données sensibles au sens strict — à ne pas transmettre"
            tone="accent"
          >
            <p>
              Un CV peut contenir, de façon incidente, des données relevant de
              l&apos;article 9 du RGPD : photographie, origine, appartenance
              syndicale, engagement politique ou religieux, état de santé,
              situation de handicap ou reconnaissance RQTH.{" "}
              <strong>
                Il vous est demandé de ne pas transmettre ces informations
              </strong>{" "}
              : elles ne sont pas nécessaires à l&apos;audit. Si votre CV en
              comporte, vous êtes invité à les retirer avant l&apos;envoi ; à
              défaut, elles sont ignorées et supprimées.
            </p>
          </ProseNote>
          <p>
            Si vous souhaitez néanmoins évoquer une situation particulière
            (handicap, aménagement, difficulté de santé) parce qu&apos;elle a un
            impact sur votre recherche, cette information n&apos;est traitée que
            sur la base de votre{" "}
            <strong>consentement explicite</strong> (article 9.2 a) du RGPD),
            donné à l&apos;oral ou par écrit, révocable à tout moment, et
            n&apos;est <strong>jamais consignée par écrit</strong> sans votre
            accord.
          </p>

          <h3 id="donnees-facturation">
            3.4 — Facturation et obligations comptables
          </h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Identité, adresse le cas échéant, offre, montant, date, numéro de facture, mode de paiement.",
              ],
              [
                "Finalité",
                "Émission des factures, tenue de la comptabilité, réponse à un contrôle.",
              ],
              [
                "Base légale",
                "Article 6.1 c) du RGPD — obligation légale (art. L. 123-22 du Code de commerce, art. L. 441-9 du Code de commerce, obligations fiscales).",
              ],
            ]}
          />

          <h3 id="donnees-paiement">3.5 — Paiement</h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Aucune coordonnée bancaire n'est collectée ni conservée par Premier Commit. Les données de paiement sont saisies directement auprès du prestataire de paiement. Premier Commit ne reçoit que le statut de la transaction, son montant, sa date et un identifiant.",
              ],
              ["Base légale", "Article 6.1 b) du RGPD."],
            ]}
          />

          <h3 id="donnees-visio">3.6 — Visioconférences</h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Adresse électronique, prénom affiché, date et durée de connexion, image et voix pendant la séance.",
              ],
              ["Finalité", "Tenir le rendez-vous."],
              ["Base légale", "Article 6.1 b) du RGPD."],
              [
                "Enregistrement",
                "Les visioconférences ne sont pas enregistrées. Aucun enregistrement audio ou vidéo n'est réalisé, ni par le Prestataire ni par le Client, sauf accord écrit exprès et préalable des deux parties pour un usage déterminé.",
              ],
            ]}
          />

          <h3 id="donnees-videos">
            3.7 — Vidéos d&apos;audit produites par le Prestataire
          </h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Enregistrement d'écran commenté montrant vos documents et vos profils.",
              ],
              ["Finalité", "Vous livrer l'audit."],
              ["Base légale", "Article 6.1 b) du RGPD."],
              [
                "Diffusion",
                "Lien privé et non indexé, communiqué à vous seul. La vidéo n'est jamais publiée, ni utilisée comme exemple, ni montrée à un autre client, ni réutilisée à des fins de démonstration ou de communication.",
              ],
            ]}
          />

          <h3 id="donnees-emails">
            3.8 — Information des clients par e-mail
          </h3>
          <Fiche
            lignes={[
              ["Données", "Adresse électronique, prénom."],
              [
                "Finalité",
                "Vous informer d'une mise à jour du Kit, d'une évolution de l'offre ou d'une information utile à votre recherche.",
              ],
              [
                "Base légale",
                "Pour les clients : article 6.1 f) — intérêt légitime, dans les conditions de l'article L. 34-5 du Code des postes et des communications électroniques (produits ou services analogues, opposition possible dès la collecte et dans chaque message). Pour les non-clients : article 6.1 a) — consentement préalable, recueilli par une case distincte non pré-cochée.",
              ],
              [
                "Opposition",
                "Chaque message comporte un lien de désinscription fonctionnel. Une simple réponse à [EMAIL_CONTACT] suffit également.",
              ],
            ]}
          />

          <h3 id="donnees-temoignages">3.9 — Témoignages et avis</h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Prénom, initiale du nom, formation, contenu du témoignage — selon ce que vous acceptez.",
              ],
              ["Finalité", "Publication sur le site."],
              [
                "Base légale",
                "Article 6.1 a) du RGPD — consentement écrit exprès, spécifique et révocable à tout moment. Aucun témoignage n'est publié sans cet accord ; sa révocation entraîne le retrait sous 7 jours ouvrés.",
              ],
            ]}
          />

          <h3 id="donnees-logs">3.10 — Journaux techniques et sécurité</h3>
          <Fiche
            lignes={[
              [
                "Données",
                "Adresse IP, date et heure, pages demandées, code de réponse, agent utilisateur.",
              ],
              [
                "Finalité",
                "Assurer le fonctionnement et la sécurité du site, détecter les abus, répondre à une réquisition légale.",
              ],
              [
                "Base légale",
                "Article 6.1 f) — intérêt légitime à la sécurité ; article 6.1 c) pour les obligations de conservation issues de la LCEN.",
              ],
            ]}
          />

          <h2 id="cookies">4. Cookies et traceurs</h2>
          <p>
            Le site est conçu pour fonctionner{" "}
            <strong>
              sans cookie publicitaire, sans traceur tiers et sans mesure
              d&apos;audience externe
            </strong>
            . Les typographies (Space Grotesk, Inter, JetBrains Mono) sont{" "}
            <strong>auto-hébergées</strong> : aucune requête n&apos;est adressée à
            un service tiers lors de votre visite.
          </p>
          <p>
            Seuls peuvent être déposés des cookies{" "}
            <strong>strictement nécessaires</strong> au fonctionnement du site,
            exemptés de consentement au titre de l&apos;article 82 de la loi
            Informatique et Libertés.
          </p>
          <p>
            Si une mesure d&apos;audience venait à être mise en place, elle le
            serait dans des conditions permettant l&apos;exemption de consentement
            selon les critères de la CNIL, ou à défaut avec un bandeau de
            consentement conforme, et la présente politique serait mise à jour.
          </p>

          <h2 id="sous-traitants">5. Sous-traitants et destinataires</h2>
          <p>
            Vos données ne sont accessibles qu&apos;à{" "}
            <strong>[PRÉNOM NOM]</strong>. Elles sont techniquement traitées par
            les sous-traitants suivants, chacun lié par un contrat conforme à
            l&apos;article 28 du RGPD :
          </p>
          <ProseTable>
            <thead>
              <tr>
                <th scope="col">Sous-traitant</th>
                <th scope="col">Rôle</th>
                <th scope="col">Données concernées</th>
                <th scope="col">Localisation</th>
                <th scope="col">Politique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>OVH SAS</strong> — 2 rue Kellermann, 59100 Roubaix,
                  France
                </td>
                <td>
                  Hébergement du site et du serveur (VPS), stockage des fichiers
                  du Kit et des vidéos d&apos;audit
                </td>
                <td>Journaux techniques, fichiers, documents stockés</td>
                <td>Union européenne (France)</td>
                <td>
                  <a
                    href="https://www.ovhcloud.com/fr/personal-data-protection/"
                    rel="noreferrer"
                  >
                    ovhcloud.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>[PRESTATAIRE_PAIEMENT]</strong>
                </td>
                <td>Encaissement des paiements en ligne</td>
                <td>Données de paiement, identité, montant</td>
                <td>[À COMPLÉTER]</td>
                <td>[À COMPLÉTER]</td>
              </tr>
              <tr>
                <td>
                  <strong>[OUTIL_VISIO]</strong>
                </td>
                <td>Tenue des visioconférences</td>
                <td>
                  Adresse électronique, prénom, flux audio/vidéo en direct,
                  données de connexion
                </td>
                <td>[À COMPLÉTER]</td>
                <td>[À COMPLÉTER]</td>
              </tr>
              <tr>
                <td>
                  <strong>[FOURNISSEUR_MESSAGERIE]</strong>
                </td>
                <td>
                  Envoi et réception des e-mails, transmission des documents
                </td>
                <td>
                  Adresse électronique, contenu des échanges, pièces jointes
                </td>
                <td>[À COMPLÉTER]</td>
                <td>[À COMPLÉTER]</td>
              </tr>
              <tr>
                <td>
                  <strong>[OUTIL_HEBERGEMENT_VIDEO]</strong>{" "}
                  <em>(si distinct du VPS)</em>
                </td>
                <td>
                  Mise à disposition des vidéos d&apos;audit par lien privé
                </td>
                <td>Vidéo d&apos;audit, données de consultation</td>
                <td>[À COMPLÉTER]</td>
                <td>[À COMPLÉTER]</td>
              </tr>
            </tbody>
          </ProseTable>
          <p>
            <strong>Autres destinataires possibles</strong> : l&apos;administration
            fiscale, un expert-comptable, un médiateur de la consommation en cas
            de litige, un avocat ou une juridiction — uniquement dans le cadre
            d&apos;une obligation légale ou de la défense d&apos;un droit, et
            strictement limités aux données nécessaires.
          </p>
          <p>
            <strong>Aucun autre destinataire.</strong> En particulier : aucun
            employeur, aucune école, aucun cabinet de recrutement, aucun jobboard,
            aucun réseau social, aucun régisseur publicitaire, aucun courtier en
            données.
          </p>

          <h2 id="transferts">6. Transferts hors Union européenne</h2>
          <p>
            L&apos;hébergement du site et le stockage des fichiers sont assurés en{" "}
            <strong>France</strong>, au sein de l&apos;Union européenne.
          </p>
          <p>
            Certains outils (paiement, visioconférence, messagerie) peuvent
            impliquer un transfert de données vers un pays tiers. Le cas échéant,
            ces transferts reposent sur une{" "}
            <strong>décision d&apos;adéquation</strong> de la Commission
            européenne ou sur des <strong>clauses contractuelles types</strong>,
            conformément aux articles 44 à 49 du RGPD. Le détail est indiqué dans
            le tableau de la section 5 et peut être obtenu sur simple demande à
            [EMAIL_CONTACT].
          </p>

          <h2 id="durees">7. Durées de conservation</h2>
          <ProseTable>
            <thead>
              <tr>
                <th scope="col">Donnée</th>
                <th scope="col">Durée</th>
                <th scope="col">Fondement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Message reçu via le formulaire de contact, sans commande
                </td>
                <td>
                  <strong>3 ans</strong> à compter du dernier contact de votre
                  part
                </td>
                <td>
                  Référentiel CNIL « gestion des activités commerciales »
                  (prospects)
                </td>
              </tr>
              <tr>
                <td>Données de compte client et historique de la relation</td>
                <td>
                  <strong>Durée de la relation contractuelle, puis 3 ans</strong>{" "}
                  à compter du dernier contact
                </td>
                <td>Référentiel CNIL — gestion de la relation client</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    CV, lettres, candidatures et documents transmis pour
                    l&apos;audit
                  </strong>
                </td>
                <td>
                  <strong>
                    Pendant l&apos;exécution de la prestation, puis 3 mois
                  </strong>{" "}
                  après sa fin — puis <strong>suppression définitive</strong>
                </td>
                <td>Voir section 7.1</td>
              </tr>
              <tr>
                <td>
                  <strong>Vidéo d&apos;audit produite</strong>
                </td>
                <td>
                  <strong>6 mois</strong> à compter de sa mise à disposition, puis
                  suppression du lien et du fichier
                </td>
                <td>Voir section 7.1</td>
              </tr>
              <tr>
                <td>
                  Comptes rendus, notes de séance, retours de relecture
                </td>
                <td>
                  <strong>3 mois</strong> après la fin de la prestation, puis
                  suppression
                </td>
                <td>Minimisation</td>
              </tr>
              <tr>
                <td>Enregistrements de visioconférence</td>
                <td>
                  <strong>Aucun</strong> — les séances ne sont pas enregistrées
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>Factures et pièces comptables</td>
                <td>
                  <strong>10 ans</strong> à compter de la clôture de
                  l&apos;exercice
                </td>
                <td>Art. L. 123-22 du Code de commerce</td>
              </tr>
              <tr>
                <td>
                  Preuve de l&apos;acceptation des CGV et des accords exprès de
                  rétractation
                </td>
                <td>
                  <strong>5 ans</strong> à compter de la commande
                </td>
                <td>
                  Prescription de droit commun (art. 2224 du Code civil)
                </td>
              </tr>
              <tr>
                <td>Réclamations et échanges liés à un litige</td>
                <td>
                  <strong>5 ans</strong> à compter du dernier échange, ou
                  jusqu&apos;au terme de la procédure
                </td>
                <td>Défense d&apos;un droit en justice</td>
              </tr>
              <tr>
                <td>Consentement à recevoir des e-mails d&apos;information</td>
                <td>
                  <strong>3 ans</strong> à compter du dernier contact de votre
                  part
                </td>
                <td>Recommandations CNIL</td>
              </tr>
              <tr>
                <td>Consentement à la publication d&apos;un témoignage</td>
                <td>Jusqu&apos;au retrait du témoignage</td>
                <td>Consentement</td>
              </tr>
              <tr>
                <td>Journaux techniques du serveur</td>
                <td>
                  <strong>6 mois</strong> au plus
                </td>
                <td>Sécurité</td>
              </tr>
              <tr>
                <td>
                  Données d&apos;identification conservées au titre de la LCEN
                </td>
                <td>
                  <strong>1 an</strong>
                </td>
                <td>Art. 6 II de la LCEN et décret n° 2021-1362</td>
              </tr>
            </tbody>
          </ProseTable>

          <h3 id="durees-documents">
            7.1 — Le sort de vos documents après la prestation
          </h3>
          <p>
            C&apos;est un point sur lequel Premier Commit s&apos;engage
            explicitement.
          </p>
          <p>
            <strong>À la fin de la prestation</strong> — dernier rendez-vous
            consommé, dernière relecture rendue, ou expiration du délai de
            l&apos;article 14 des <Link href="/cgv/">CGV</Link> :
          </p>
          <ol>
            <li>
              <strong>Pendant 3 mois</strong>, vos documents (CV, lettres,
              candidatures, notes de travail) sont conservés afin de pouvoir
              répondre à une question de votre part, rouvrir un point ou traiter
              une réclamation.
            </li>
            <li>
              <strong>Votre vidéo d&apos;audit reste accessible 6 mois</strong> à
              compter de sa mise à disposition, pour vous laisser le temps de la
              revoir. <strong>Vous êtes invité à la télécharger</strong> : passé ce
              délai, le lien est désactivé et le fichier supprimé, sans possibilité
              de restauration.
            </li>
            <li>
              <strong>À l&apos;issue de ces délais</strong>, tous les documents que
              vous avez transmis et tous les livrables personnalisés vous
              concernant sont <strong>supprimés définitivement</strong> : du
              serveur, de la messagerie et des sauvegardes, dans un délai maximal
              de 30 jours supplémentaires correspondant au cycle de rotation des
              sauvegardes.
            </li>
            <li>
              <strong>Ne subsistent alors</strong> que les données strictement
              nécessaires aux obligations légales (facture, preuve d&apos;acceptation
              des CGV) et à la gestion d&apos;un éventuel litige, aux durées
              indiquées ci-dessus.
            </li>
          </ol>
          <p>
            <strong>Vous pouvez demander la suppression anticipée</strong> de vos
            documents à tout moment, y compris pendant la prestation, en écrivant à
            [EMAIL_CONTACT]. La suppression est effectuée sous{" "}
            <strong>30 jours</strong>. Vous êtes informé que la suppression des
            documents en cours de prestation peut rendre impossible la poursuite de
            l&apos;accompagnement ; les prestations déjà exécutées restent dues.
          </p>
          <p>
            <strong>
              Vous pouvez à l&apos;inverse demander une conservation prolongée
            </strong>{" "}
            (par exemple pour reprendre l&apos;accompagnement à la rentrée
            suivante) : cette prolongation repose sur votre consentement écrit, est
            limitée à 12 mois et reste révocable.
          </p>

          <h2 id="securite">8. Sécurité</h2>
          <p>Les mesures suivantes sont appliquées :</p>
          <ul>
            <li>
              accès aux données limité au seul responsable de traitement, sur des
              postes protégés par mot de passe et chiffrement du disque ;
            </li>
            <li>
              authentification à deux facteurs sur les comptes d&apos;administration
              (hébergeur, messagerie, paiement) ;
            </li>
            <li>
              transmission des documents par des canaux chiffrés (HTTPS,
              messagerie chiffrée en transit) ;
            </li>
            <li>
              liens de téléchargement et liens vidéo{" "}
              <strong>non indexés, non devinables et à durée limitée</strong> ;
            </li>
            <li>sauvegardes chiffrées, à rotation limitée ;</li>
            <li>
              cloisonnement : aucun document client n&apos;est stocké sur un
              service de partage grand public ni sur un appareil non maîtrisé.
            </li>
          </ul>
          <p>
            <strong>En cas de violation de données</strong> susceptible
            d&apos;engendrer un risque pour vos droits et libertés, la CNIL est
            notifiée dans les <strong>72 heures</strong> (article 33 du RGPD) et
            vous êtes informé dans les meilleurs délais lorsque le risque est élevé
            (article 34).
          </p>

          <h2 id="droits">9. Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi n° 78-17 du 6 janvier 1978 modifiée,
            vous disposez des droits suivants :
          </p>
          <ul>
            <li>
              <strong>Droit d&apos;accès</strong> (art. 15) : obtenir la
              confirmation que vos données sont traitées et en recevoir une copie.
            </li>
            <li>
              <strong>Droit de rectification</strong> (art. 16) : faire corriger
              une donnée inexacte ou incomplète.
            </li>
            <li>
              <strong>Droit à l&apos;effacement</strong> (art. 17) : obtenir la
              suppression de vos données, sous réserve des données que la loi
              impose de conserver (factures notamment).
            </li>
            <li>
              <strong>Droit à la limitation</strong> (art. 18) : geler
              l&apos;utilisation de vos données pendant l&apos;examen d&apos;une
              contestation.
            </li>
            <li>
              <strong>Droit à la portabilité</strong> (art. 20) : recevoir dans un
              format structuré et lisible par machine les données que vous avez
              fournies et qui sont traitées sur la base du contrat ou du
              consentement.
            </li>
            <li>
              <strong>Droit d&apos;opposition</strong> (art. 21) : vous opposer à
              un traitement fondé sur l&apos;intérêt légitime, et{" "}
              <strong>à tout moment et sans motif</strong> à la prospection.
            </li>
            <li>
              <strong>Retrait du consentement</strong> (art. 7.3) : lorsque le
              traitement repose sur votre consentement, le retirer à tout moment,
              sans effet rétroactif.
            </li>
            <li>
              <strong>Directives post mortem</strong> (art. 85 de la loi
              Informatique et Libertés) : définir des directives relatives au sort
              de vos données après votre décès.
            </li>
            <li>
              <strong>Absence de décision automatisée</strong> (art. 22) : aucune
              décision produisant des effets juridiques n&apos;est prise de manière
              automatisée.
            </li>
          </ul>
          <p>
            <strong>Comment les exercer.</strong> Écrivez à{" "}
            <strong>[EMAIL_CONTACT]</strong>, ou par courrier à [PRÉNOM NOM] —
            Premier Commit — [ADRESSE], en précisant votre demande. Une réponse
            vous est apportée dans un délai d&apos;<strong>un mois</strong>,
            prolongeable de deux mois en cas de complexité, avec information
            motivée. Aucun justificatif d&apos;identité n&apos;est demandé si vous
            écrivez depuis l&apos;adresse électronique utilisée lors de votre
            commande ; en cas de doute raisonnable sur votre identité, un
            justificatif pourra être demandé, puis détruit après vérification.
          </p>
          <p>
            <strong>Bénéficiaire mineur</strong> : les droits sont exercés par le
            représentant légal, ou par le mineur lui-même s&apos;il dispose du
            discernement suffisant. En France, l&apos;âge du consentement pour les
            services de la société de l&apos;information est fixé à{" "}
            <strong>15 ans</strong> (article 45 de la loi Informatique et
            Libertés) ; la relation contractuelle demeure toutefois conclue avec le
            représentant légal (article 9 des <Link href="/cgv/">CGV</Link>).
          </p>

          <h2 id="cnil">10. Réclamation auprès de la CNIL</h2>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
            respectés, vous pouvez introduire une réclamation auprès de la{" "}
            <strong>
              Commission Nationale de l&apos;Informatique et des Libertés
            </strong>{" "}
            :
          </p>
          <p>
            <strong>CNIL</strong> — 3 place de Fontenoy, TSA 80715, 75334 Paris
            Cedex 07
            <br />
            Téléphone : 01 53 73 22 22
            <br />
            Plainte en ligne :{" "}
            <a href="https://www.cnil.fr/fr/plaintes" rel="noreferrer">
              cnil.fr/fr/plaintes
            </a>
          </p>

          <h2 id="maj">11. Modification de la présente politique</h2>
          <p>
            La présente politique peut être modifiée, notamment en cas
            d&apos;évolution des outils utilisés ou de la réglementation. La
            version applicable est celle publiée sur le site. En cas de
            modification substantielle affectant un traitement en cours, les
            clients concernés sont informés par e-mail.
          </p>
          <p>
            <strong>Version [VERSION] — [DATE]</strong>
          </p>
        </Prose>
      </Section>
    </>
  );
}
