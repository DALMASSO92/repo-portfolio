import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { CTA, Section } from "@/components/ui";

export const metadata: Metadata = {
  // 47 caractères
  title: { absolute: "Site piraté ou cassé : que faire dans l'heure ?" },
  // 144 caractères
  description:
    "Votre site est piraté, défiguré ou hors ligne ? Guide d'urgence pas à pas : les bons réflexes dans l'heure, les erreurs à éviter, et qui appeler.",
};

export default function ArticleSitePirate() {
  return (
    <Section>
      <article className="mx-auto max-w-prose">
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-signal">
            Blog · Août 2026
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-encre sm:text-4xl">
            Site piraté ou cassé : que faire dans l&apos;heure ?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ardoise">
            Votre site affiche une page inconnue, redirige vers un site
            douteux, montre une erreur incompréhensible, ou a simplement
            disparu. Respirez : dans la grande majorité des cas, un site se
            répare, et les bonnes décisions de la première heure font la
            différence. Voici quoi faire, dans l&apos;ordre, sans paniquer — et
            sans aggraver les choses.
          </p>
        </header>

        <Prose className="mt-10">
          <h2>D&apos;abord : piraté ou juste cassé ?</h2>
          <p>
            Les deux situations se ressemblent, mais ne se traitent pas pareil.
          </p>
          <p>
            <strong>Signes d&apos;un piratage</strong> :
          </p>
          <ul>
            <li>
              Redirections vers des sites de pharmacie, paris, contrefaçon ;
            </li>
            <li>
              Contenus ou pages que vous n&apos;avez jamais créés (souvent en
              langue étrangère) ;
            </li>
            <li>
              Avertissement rouge de Google (« Ce site peut avoir été piraté »
              / « Site trompeur ») ;
            </li>
            <li>
              E-mails de votre hébergeur signalant un envoi massif de spam
              depuis votre compte ;
            </li>
            <li>Antivirus des visiteurs qui bloque le site.</li>
          </ul>
          <p>
            <strong>Signes d&apos;une panne « simple »</strong> :
          </p>
          <ul>
            <li>
              Erreur 500, page blanche, « Error establishing a database
              connection » ;
            </li>
            <li>
              Site cassé juste après une mise à jour ou une manipulation ;
            </li>
            <li>
              Message d&apos;expiration (certificat SSL, nom de domaine,
              hébergement impayé).
            </li>
          </ul>
          <p>
            Dans le doute, traitez comme un piratage : les précautions
            ci-dessous ne coûtent rien et ne cassent rien.
          </p>

          <h2>Les 60 premières minutes, pas à pas</h2>

          <h3>Minute 0-10 : documentez, ne supprimez rien</h3>
          <p>
            Le réflexe naturel est d&apos;effacer ce qui est anormal.
            C&apos;est une erreur : vous détruiriez les indices qui permettent
            de comprendre par où l&apos;attaquant est entré — et donc
            d&apos;empêcher qu&apos;il revienne.
          </p>
          <ul>
            <li>
              <strong>Capturez des écrans</strong> de tout ce qui est anormal
              (pages, redirections, messages d&apos;erreur, alertes reçues).
            </li>
            <li>
              <strong>Notez l&apos;heure</strong> approximative où le problème
              a commencé, et ce qui a été fait sur le site dans les jours
              précédents (mise à jour ? nouveau plugin ? nouvel utilisateur ?).
            </li>
            <li>
              Ne restaurez pas encore de sauvegarde : si elle est récente, elle
              peut contenir la porte dérobée.
            </li>
          </ul>

          <h3>Minute 10-25 : coupez les accès</h3>
          <p>
            Un piratage vit des accès qu&apos;il a volés. Changez-les, dans cet
            ordre :
          </p>
          <ol>
            <li>
              <strong>Mot de passe de l&apos;hébergement</strong> (OVH,
              o2switch, Vercel, etc.) — c&apos;est le plus critique.
            </li>
            <li>
              <strong>Mots de passe d&apos;administration du site</strong>{" "}
              (compte admin WordPress ou équivalent). Vérifiez au passage la
              liste des administrateurs : supprimez tout compte que vous ne
              reconnaissez pas.
            </li>
            <li>
              <strong>Mot de passe de la boîte e-mail</strong> liée au site
              (elle permet de réinitialiser tout le reste).
            </li>
            <li>
              Si vous les utilisez : accès FTP/SSH et base de données.
            </li>
          </ol>
          <p>
            Activez la double authentification partout où c&apos;est proposé.
            Utilisez des mots de passe longs et uniques — c&apos;est le moment.
          </p>

          <h3>Minute 25-40 : limitez les dégâts publics</h3>
          <ul>
            <li>
              <strong>Mettez le site en pause</strong> si le contenu affiché
              est dangereux pour vos visiteurs (redirections, malware) : la
              plupart des hébergeurs permettent de suspendre l&apos;affichage,
              ou d&apos;afficher une page de maintenance. Un site « en
              maintenance » une journée abîme moins votre image qu&apos;un site
              qui infecte ses visiteurs.
            </li>
            <li>
              <strong>Prévenez votre hébergeur</strong> via son support :
              signalez la compromission, demandez s&apos;il a des journaux
              (logs) et des sauvegardes de son côté. Certains hébergeurs
              détectent l&apos;incident avant vous et ont déjà des
              informations.
            </li>
            <li>
              Si le site encaisse des paiements ou stocke des données clients :
              notez-le dès maintenant, la question des obligations RGPD
              (notification d&apos;une violation de données) devra être
              examinée — la CNIL publie la marche à suivre sur cnil.fr.
            </li>
          </ul>

          <h3>Minute 40-60 : faites l&apos;inventaire de vos sauvegardes</h3>
          <p>Avant toute réparation, répondez à trois questions :</p>
          <ul>
            <li>
              <strong>De quand date la dernière sauvegarde saine</strong>{" "}
              (antérieure au début du problème) ?
            </li>
            <li>
              <strong>Où est-elle stockée ?</strong> Une sauvegarde stockée sur
              le même hébergement que le site a pu être compromise ou supprimée
              avec lui.
            </li>
            <li>
              <strong>Que perdriez-vous</strong> en restaurant à cette date
              (commandes, articles, inscriptions) ?
            </li>
          </ul>
          <p>
            Si vous avez une sauvegarde saine et externalisée : la remise en
            ligne sera simple. Si vous n&apos;en avez aucune : tout n&apos;est
            pas perdu (le nettoyage manuel existe), mais confiez la suite à un
            professionnel.
          </p>

          <h2>Les 3 erreurs qui aggravent la situation</h2>
          <ol>
            <li>
              <strong>
                Restaurer une sauvegarde sans nettoyer la faille.
              </strong>{" "}
              Le site revient… et retombe une semaine plus tard, car la porte
              d&apos;entrée (plugin vulnérable, mot de passe volé) est toujours
              là. Restaurer et corriger la cause vont toujours ensemble.
            </li>
            <li>
              <strong>
                Supprimer des fichiers « suspects » à la main sans savoir.
              </strong>{" "}
              Sur WordPress comme sur un site custom, un fichier mal supprimé
              peut rendre le site irrécupérable — ou laisser en place une porte
              dérobée bien cachée.
            </li>
            <li>
              <strong>Repousser à plus tard.</strong> Un site compromis qui
              reste en ligne se fait blacklister par Google et les antivirus ;
              plus l&apos;infection reste, plus le nettoyage et la récupération
              de réputation sont longs.
            </li>
          </ol>

          <h2>Et si c&apos;est « juste » une panne ?</h2>
          <p>Bonne nouvelle : c&apos;est souvent plus rapide.</p>
          <ul>
            <li>
              <strong>Erreur après une mise à jour WordPress</strong> : la
              cause la plus fréquente est un conflit d&apos;extension. Un
              professionnel (ou vous, via FTP) peut désactiver les extensions
              une à une pour isoler la coupable.
            </li>
            <li>
              <strong>Certificat SSL expiré</strong> (« Votre connexion
              n&apos;est pas privée ») : renouvellement côté hébergeur,
              généralement réglé en moins d&apos;une heure.
            </li>
            <li>
              <strong>Nom de domaine expiré</strong> : renouvelez-le
              immédiatement chez votre registrar — passé un certain délai, le
              domaine peut être racheté par un tiers.
            </li>
            <li>
              <strong>
                Site Next.js/React qui ne se met plus à jour ou ne compile
                plus
              </strong>{" "}
              : c&apos;est presque toujours une histoire de dépendances
              vieillissantes ou de déploiement cassé —{" "}
              <Link href="/blog/maintenance-site-nextjs-react/">
                on a écrit un guide complet sur la maintenance de ces sites
              </Link>
              .
            </li>
          </ul>

          <h2>Qui appeler, et pour quel budget ?</h2>
          <p>
            Si vous avez un contrat de maintenance : appelez votre prestataire,
            c&apos;est son travail (et c&apos;est exactement{" "}
            <Link href="/blog/tarif-maintenance-site-web/">
              ce que couvre un bon contrat
            </Link>
            ). Si vous n&apos;en avez pas, trois options :
          </p>
          <ul>
            <li>
              <strong>Votre hébergeur</strong> : aide sur l&apos;infrastructure
              (sauvegardes, suspension, logs), mais ne nettoiera pas votre
              site.
            </li>
            <li>
              <strong>Un développeur freelance en urgence</strong> : efficace
              si vous en connaissez un de confiance, disponible
              aujourd&apos;hui.
            </li>
            <li>
              <strong>Un service de remise en état forfaitaire</strong> : prix
              connu d&apos;avance, intervention rapide.
            </li>
          </ul>
          <p>
            C&apos;est ce que nous proposons chez Garde-Site : la{" "}
            <strong>
              <Link href="/#forfaits">Remise en état à 149 €</Link>
            </strong>
            , prix fixe annoncé avant toute intervention — diagnostic,
            nettoyage ou réparation, remise en ligne, et compte rendu de ce qui
            s&apos;est passé. WordPress comme sites custom (Next.js, React,
            Webflow). Et si vous souscrivez ensuite un forfait de maintenance
            dans les 30 jours, ces 149 € sont déduits : l&apos;urgence
            d&apos;aujourd&apos;hui finance la tranquillité de demain.
          </p>

          <h2>Après l&apos;incident : que ça ne se reproduise plus</h2>
          <p>
            Une fois le site réparé, trois mesures non négociables : mises à
            jour régulières (cœur, extensions ou dépendances), sauvegardes
            automatiques <strong>externalisées</strong> et testées, et
            surveillance qui vous alerte avant vos clients. C&apos;est
            précisément le rôle d&apos;un{" "}
            <Link href="/#forfaits">forfait de maintenance</Link> — le nôtre ou
            un autre. Un incident est un mauvais souvenir acceptable ; deux
            incidents, c&apos;est un choix.
          </p>
        </Prose>

        {/* ─── CTA de fin ─── */}
        <aside className="mt-14 rounded-2xl bg-encre p-8 text-ecume">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Site en panne maintenant ?
          </h2>
          <p className="mt-3 leading-relaxed text-ecume/80">
            Écrivez-nous à [EMAIL_CONTACT] avec l&apos;adresse de votre site et
            une capture d&apos;écran : nous vous répondons rapidement avec un
            premier diagnostic (Remise en état : 149 €, prix fixe). Et si votre
            site va bien mais que vous voulez vérifier qu&apos;il est prêt à
            encaisser, le bilan de santé gratuit est fait pour ça.
          </p>
          <div className="mt-6">
            <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
          </div>
        </aside>
      </article>
    </Section>
  );
}
