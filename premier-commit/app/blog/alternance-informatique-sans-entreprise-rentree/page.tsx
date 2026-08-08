import type { Metadata } from "next";
import { ArticleOutro } from "@/components/ArticleOutro";
import { Prose, ProseHeader, ProseNote } from "@/components/Prose";
import { Section } from "@/components/ui";

const slug = "alternance-informatique-sans-entreprise-rentree";

export const metadata: Metadata = {
  title: {
    absolute: "Alternance informatique sans entreprise à la rentrée",
  },
  description:
    "Pas d'entreprise pour ta rentrée en alternance informatique ? Les délais réels, ton statut au CFA et les démarches à lancer cette semaine.",
};

export default function ArticleRentree() {
  return (
    <>
      <ProseHeader
        kicker="blog · rentrée"
        title="Alternance en informatique sans entreprise à la rentrée : ce qui est encore possible"
        meta="Août 2026 · 8 min de lecture · Article vérifié le 8 août 2026"
      />

      <Section>
        <Prose>
          <ProseNote tone="accent">
            <p>
              Les règles de l&apos;apprentissage évoluent régulièrement — vérifie
              toujours ta situation avec ton CFA ou ton école.
            </p>
          </ProseNote>

          <p>
            La rentrée approche, tu es inscrit en BTS SIO, en BUT informatique,
            en licence pro ou en école d&apos;ingé, et tu n&apos;as pas
            d&apos;entreprise. Tu ne sais pas si tu peux quand même y aller,
            combien de temps il te reste, ni ce qui se passe si tu ne trouves
            pas.
          </p>
          <p>
            Cet article répond à ces trois questions dans l&apos;ordre, avec les
            textes qui s&apos;appliquent. Il n&apos;est pas là pour te rassurer
            artificiellement : la fin dit franchement ce qui arrive si ça ne
            marche pas. Mais la première chose à savoir, c&apos;est que{" "}
            <strong>tu n&apos;es pas hors délai</strong>.
          </p>

          <h2 id="sans-contrat">
            Oui, tu peux commencer ton cursus sans contrat
          </h2>
          <p>
            C&apos;est le point que beaucoup d&apos;étudiants ignorent, et il
            change tout :{" "}
            <strong>
              tu peux entrer en formation en septembre sans avoir signé de
              contrat d&apos;apprentissage.
            </strong>
          </p>
          <p>
            C&apos;est l&apos;
            <strong>article L6222-12-1 du Code du travail</strong> (
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037385961"
              rel="noreferrer"
            >
              texte sur Légifrance
            </a>
            ) qui le prévoit. Une personne remplissant les conditions d&apos;âge
            de l&apos;apprentissage peut demander à{" "}
            <strong>
              débuter un cycle de formation en apprentissage dans la limite de
              trois mois
            </strong>{" "}
            sans avoir été engagée par un employeur.
          </p>
          <p>Trois conséquences concrètes :</p>
          <ul>
            <li>
              <strong>
                Tu as le statut de stagiaire de la formation professionnelle
              </strong>{" "}
              pendant cette période. Ce n&apos;est pas un statut vide : ta
              protection sociale est prise en charge (
              <a
                href="https://www.opcoep.fr/question-formation/se-former-en-alternance/contrat-d-apprentissage/quel-est-le-statut-du-jeune-qui-entre-en-formation-avant-la-signature-du-contrat-d-apprentissage"
                rel="noreferrer"
              >
                précisions Opco EP
              </a>
              ).
            </li>
            <li>
              <strong>
                Le CFA t&apos;accompagne dans ta recherche d&apos;employeur
              </strong>{" "}
              — c&apos;est prévu par le texte, et c&apos;est une obligation que
              tu peux légitimement leur rappeler.
            </li>
            <li>
              <strong>Tu peux signer à tout moment</strong> pendant cette
              période. La durée du contrat est alors réduite du nombre de mois
              écoulés depuis le début du cycle de formation.
            </li>
          </ul>
          <p>
            <strong>La nuance qu&apos;il faut connaître</strong> : ces trois mois
            sont la limite du dispositif de l&apos;article L6222-12-1, pas une
            date après laquelle plus rien n&apos;est possible. Au-delà, le statut
            de stagiaire de la formation professionnelle ne s&apos;applique plus,
            et la situation dépend de ton établissement et de ta situation
            précise.{" "}
            <strong>
              C&apos;est exactement la question à poser à ton CFA cette semaine,
              par écrit
            </strong>
            , plutôt que de la découvrir en décembre.
          </p>

          <h3 id="apprentissage-pro">
            Attention : apprentissage ≠ contrat de professionnalisation
          </h3>
          <p>
            Cette distinction est ignorée par la quasi-totalité des articles sur
            le sujet, et elle est importante.
          </p>
          <p>
            Le dispositif des trois mois sans employeur décrit ci-dessus relève
            du <strong>contrat d&apos;apprentissage</strong>. Le{" "}
            <strong>contrat de professionnalisation</strong> est un autre
            contrat, régi par d&apos;autres articles (L6325-1 et suivants), et il
            ne prévoit pas le même mécanisme.
          </p>
          <p>
            <strong>
              Donc : commence par vérifier lequel des deux ton cursus prévoit.
            </strong>{" "}
            Beaucoup de cursus en informatique acceptent les deux, et certains
            n&apos;ouvrent qu&apos;à l&apos;un des deux. C&apos;est la première
            information à obtenir, parce qu&apos;elle conditionne tout le reste.
          </p>

          <h2 id="trois-questions">
            Les trois questions à poser à ton école cette semaine
          </h2>
          <p>
            Envoie <strong>un mail, écrit, daté</strong>, à ton responsable
            pédagogique ou au référent alternance. Un mail, pas un appel : tu
            veux une trace.
          </p>
          <ol>
            <li>
              <strong>
                Puis-je intégrer la formation à la rentrée sans contrat signé, et
                sous quel statut exactement ?
              </strong>
            </li>
            <li>
              <strong>
                Quelle est la date limite au-delà de laquelle mon inscription en
                alternance est remise en cause ?
              </strong>{" "}
              Demande une date, pas un ordre de grandeur.
            </li>
            <li>
              <strong>
                Que se passe-t-il si je n&apos;ai pas trouvé à cette date ?
              </strong>{" "}
              Y a-t-il une place en cursus initial ? Une rentrée décalée en
              janvier ou février ? Une autre voie ?
            </li>
          </ol>
          <p>
            Ces trois réponses, écrites, valent plus que dix articles de blog — y
            compris celui-ci.{" "}
            <strong>
              Ta situation dépend de ton établissement autant que de la loi
            </strong>
            , et tu es le seul à pouvoir obtenir cette information.
          </p>

          <h2 id="specificites">
            Ce qui est spécifiquement possible en informatique en septembre
          </h2>
          <p>
            Le calendrier de l&apos;alternance est brutal, et il faut le regarder
            en face. Environ{" "}
            <strong>
              la moitié des offres annuelles paraissent entre mai et juillet
            </strong>
            ,{" "}
            <strong>
              plus de la moitié des entreprises ont choisi leur alternant à la
              mi-juin
            </strong>{" "}
            (Apec), et{" "}
            <strong>seulement 9 % des offres paraissent en septembre</strong>.
          </p>
          <p>
            Autrement dit : le gros de la vague est passé. Mais « 9 % » n&apos;est
            pas « 0 % », et il y a en informatique quelques particularités qui
            jouent en ta faveur à cette période.
          </p>

          <h3 id="desistements">1. Les désistements de rentrée</h3>
          <p>
            Chaque septembre, des contrats déjà calés tombent : l&apos;alternant
            a trouvé mieux ailleurs, a changé d&apos;orientation, ou n&apos;a pas
            validé son année. L&apos;entreprise se retrouve avec un poste ouvert,
            un budget déjà validé et une urgence réelle.{" "}
            <strong>Ce sont les meilleures opportunités de septembre</strong>,
            elles ne sont presque jamais publiées, et elles se pourvoient en
            quelques jours.
          </p>
          <p>
            Concrètement : les entreprises qui avaient publié une offre
            d&apos;alternance en avril-juin et l&apos;ont retirée sont tes cibles
            prioritaires. Recontacte celles auxquelles tu avais candidaté sans
            suite en juin, en signalant simplement que tu restes disponible. Une
            candidature de juin peut valoir un contrat en septembre parce que la
            situation de l&apos;entreprise a changé, pas la tienne.
          </p>

          <h3 id="petites-structures">
            2. Les petites structures qui ne publient pas
          </h3>
          <p>
            Une part importante du tissu qui accueille des alternants en
            informatique n&apos;a pas de service RH : PME avec trois personnes au
            service informatique, agences web, éditeurs locaux, collectivités.
            Elles ne publient pas d&apos;offres, ne suivent pas le calendrier des
            écoles, et peuvent décider en une semaine.
          </p>
          <p>
            Tu les trouves par l&apos;annuaire des entreprises de ta zone, par
            les réseaux locaux d&apos;entreprises du numérique, par les
            événements techniques de ta ville, et par ton propre réseau.
          </p>
          <ProseNote title="Précision légale, parce qu'elle te protège" tone="accent">
            <p>
              Personne n&apos;a le droit de te faire payer pour te mettre en
              relation avec des entreprises ou te vendre un carnet
              d&apos;adresses (art. L5321-3 du Code du travail). Si un service te
              propose ça contre de l&apos;argent, c&apos;est un signal
              d&apos;alarme. Ce que tu peux légitimement chercher, c&apos;est{" "}
              <strong>une méthode pour construire ta propre liste</strong>.
            </p>
          </ProseNote>

          <h3 id="rythme">3. Le rythme d&apos;alternance comme argument</h3>
          <p>
            En informatique, les rythmes sont très variés (3 semaines / 1
            semaine, 2 jours / 3 jours, alternance longue), et beaucoup
            d&apos;étudiants n&apos;en parlent jamais dans leur candidature.
            C&apos;est une erreur : pour une petite structure,{" "}
            <strong>le rythme est souvent le facteur décisif</strong>, parce
            qu&apos;il détermine si tu peux tenir un vrai sujet ou seulement des
            tâches ponctuelles.
          </p>
          <p>
            Mets ton rythme et ta date de disponibilité en haut de ton CV et dans
            les trois premières lignes de ton mail.
          </p>

          <h2 id="plan">Le plan des trois prochaines semaines</h2>
          <p>Pas de miracle, mais un ordre qui évite de perdre du temps.</p>

          <h3 id="semaine-1">Semaine 1 — sécuriser ta situation</h3>
          <ul>
            <li>
              Le mail à ton école avec les trois questions. En premier, avant
              tout le reste.
            </li>
            <li>
              Vérifier si ton cursus relève de l&apos;apprentissage, du contrat
              de professionnalisation, ou des deux.
            </li>
            <li>
              Demander au CFA quel accompagnement à la recherche d&apos;employeur
              il propose concrètement — c&apos;est prévu par le texte.
            </li>
          </ul>

          <h3 id="semaine-2">Semaine 2 — réparer avant de renvoyer</h3>
          <ul>
            <li>
              Vérifier que ton CV est lisible par une machine (le test : ouvrir
              le PDF, tout sélectionner, coller dans un bloc-notes brut — si rien
              ne se colle ou si le texte sort en désordre, c&apos;est cassé).
            </li>
            <li>
              Nettoyer deux dépôts GitHub : un README qui explique ce que fait le
              projet et ce que tu as fait dedans, et aucun secret qui traîne dans
              l&apos;historique.
            </li>
            <li>
              Écrire une accroche de mail qui parle de l&apos;entreprise avant de
              parler de toi.
            </li>
          </ul>

          <h3 id="semaine-3">Semaine 3 — relancer intelligemment</h3>
          <ul>
            <li>
              Reprendre <strong>toutes</strong> tes candidatures d&apos;avril à
              juillet restées sans réponse et les relancer une fois, en
              mentionnant ta disponibilité immédiate.
            </li>
            <li>
              Constituer une liste de vingt à trente petites structures de ta
              zone qui font de l&apos;informatique, et écrire à une personne
              identifiée dans chacune — pas à <code>contact@</code>.
            </li>
            <li>
              Prévenir ton réseau : promo, anciens de ta formation, enseignants,
              entreprise de stage précédente.{" "}
              <strong>
                C&apos;est de très loin le canal le plus efficace en septembre
              </strong>
              , et le plus négligé.
            </li>
          </ul>
          <p>
            Vingt candidatures ciblées et relancées valent mieux que deux cents
            envoyées à l&apos;aveugle. Un témoignage recueilli par L&apos;Étudiant
            fait état de{" "}
            <strong>944 candidatures pour 3 entretiens et 0 contrat</strong> : le
            volume seul ne résout rien.
          </p>

          <h2 id="sinon">Et si tu ne trouves pas</h2>
          <p>
            Plusieurs voies existent, et elles se préparent <strong>avant</strong>{" "}
            d&apos;être acculé :
          </p>
          <ul>
            <li>
              <strong>Basculer en cursus initial</strong> sur le même diplôme,
              s&apos;il accueille aussi des étudiants hors alternance et
              s&apos;il reste de la place. À demander maintenant.
            </li>
            <li>
              <strong>Une rentrée décalée</strong> : certains établissements
              ouvrent des sessions en janvier ou février. À vérifier auprès de
              ton école et d&apos;autres établissements de ta région.
            </li>
            <li>
              <strong>La prépa-apprentissage</strong>, proposée par certains CFA
              et certaines missions locales, généralement de deux à trois mois,
              destinée à ceux qui rencontrent des difficultés pour décrocher un
              contrat.
            </li>
            <li>
              <strong>Un stage ou une mission courte</strong>, pour ne pas passer
              une année sans expérience et arriver plus fort sur la campagne de
              printemps 2027.
            </li>
          </ul>
          <p>
            Aucune de ces options n&apos;est un échec. Ce sont des trajectoires
            différentes, et elles se choisissent bien mieux en octobre, calmement,
            qu&apos;en décembre dans l&apos;urgence.
          </p>

          <h2 id="retenir">Ce qu&apos;il faut retenir</h2>
          <ol>
            <li>
              <strong>Tu peux entrer en formation sans contrat</strong> :
              l&apos;article L6222-12-1 du Code du travail prévoit un cycle
              pouvant débuter sans employeur, dans la limite de trois mois, avec
              le statut de stagiaire de la formation professionnelle.
            </li>
            <li>
              <strong>Vérifie de quel contrat relève ton cursus</strong> —
              apprentissage et contrat de professionnalisation n&apos;ont pas les
              mêmes règles.
            </li>
            <li>
              <strong>
                Obtiens par écrit, cette semaine, la date limite fixée par ton
                établissement.
              </strong>
            </li>
            <li>
              <strong>
                Cible les désistements de rentrée et les petites structures
              </strong>
              , pas les job boards saturés.
            </li>
            <li>
              <strong>Prépare une porte de sortie</strong> dès octobre, pendant
              que les places existent encore.
            </li>
          </ol>
          <p>
            La fenêtre de septembre à novembre est étroite, mais elle est réelle.
            Ce qui la ferme définitivement, ce n&apos;est pas le calendrier —
            c&apos;est d&apos;attendre décembre pour poser les bonnes questions.
          </p>

          <h2 id="sources">Sources citées</h2>
          <ul>
            <li>
              Article L6222-12-1 du Code du travail —{" "}
              <a
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037385961"
                rel="noreferrer"
              >
                Légifrance
              </a>
            </li>
            <li>
              Statut du jeune entrant en formation avant la signature du contrat
              d&apos;apprentissage —{" "}
              <a
                href="https://www.opcoep.fr/question-formation/se-former-en-alternance/contrat-d-apprentissage/quel-est-le-statut-du-jeune-qui-entre-en-formation-avant-la-signature-du-contrat-d-apprentissage"
                rel="noreferrer"
              >
                Opco EP
              </a>
            </li>
            <li>
              Cycle de formation débutant sans employeur, précisions
              réglementaires —{" "}
              <a
                href="https://www.centre-inffo.fr/site-droit-formation/plan-de-relance-apprentissage-et-cycles-de-formation-debutant-sans-employeur-precisions"
                rel="noreferrer"
              >
                Centre Inffo
              </a>
            </li>
            <li>
              Chiffres de saisonnalité et de difficulté de recherche : Apec (mars
              2025). Témoignage des 944 candidatures : L&apos;Étudiant.
            </li>
          </ul>
        </Prose>
      </Section>

      <ArticleOutro slug={slug} />
    </>
  );
}
