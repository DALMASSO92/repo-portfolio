import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { CTA, Section } from "@/components/ui";

export const metadata: Metadata = {
  // 52 caractères
  title: { absolute: "Maintenance site Next.js / React : qui s'en occupe ?" },
  // 150 caractères
  description:
    "Votre site Next.js, React ou généré par IA a été livré… et après ? Dépendances, sécurité, hébergement : ce qu'il faut maintenir, et qui peut le faire.",
};

export default function ArticleMaintenanceNextjs() {
  return (
    <Section>
      <article className="mx-auto max-w-prose">
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-signal">
            Blog · Août 2026
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-encre sm:text-4xl">
            Qui maintient votre site Next.js ou React après la livraison ?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ardoise">
            Cherchez « maintenance site WordPress » sur Google : des dizaines
            de prestataires français se disputent la page 1. Cherchez
            maintenant « maintenance site Next.js » : vous tomberez sur des
            tutoriels techniques en anglais expliquant aux développeurs comment
            afficher une page « en maintenance ». Pas une offre de service
            française digne de ce nom (constat vérifié sur les résultats Google
            France, août 2026).
          </p>
        </header>

        <Prose className="mt-10">
          <p>
            C&apos;est le paradoxe : les sites modernes — Next.js, React, Vue,
            Webflow, et désormais les sites générés par IA — sont de plus en
            plus nombreux, et quasiment personne n&apos;est organisé pour les
            maintenir. Si vous possédez un site de ce type, cet article vous
            concerne directement.
          </p>

          <h2>« Pas de plugins, pas de problème » : le malentendu</h2>
          <p>
            Un site Next.js ou React n&apos;a pas d&apos;extensions WordPress à
            mettre à jour, c&apos;est vrai. Beaucoup de propriétaires en
            concluent qu&apos;il n&apos;y a « rien à maintenir ». C&apos;est
            faux, et voici pourquoi.
          </p>

          <h3>Les dépendances npm vieillissent en silence</h3>
          <p>
            Un site React ou Next.js repose sur des dizaines, souvent des
            centaines de briques logicielles open source (les « packages
            npm »). Chacune évolue, corrige des failles, ou cesse d&apos;être
            maintenue. Des failles de sécurité sont régulièrement publiées sur
            des packages très répandus — c&apos;est précisément pour cela que
            GitHub envoie des alertes automatiques (Dependabot) aux
            développeurs. Problème : si plus aucun développeur ne regarde le
            dépôt de votre site, personne ne lit ces alertes.
          </p>
          <p>
            Et plus on attend, plus la note s&apos;alourdit. Mettre à jour un
            projet dont les dépendances ont six mois de retard : une routine.
            Le faire après deux ans d&apos;abandon, avec deux versions majeures
            de Next.js à franchir : un chantier facturable en jours. La
            maintenance de dépendances, c&apos;est comme la vidange — peu
            coûteuse tant qu&apos;on la fait régulièrement.
          </p>

          <h3>L&apos;hébergement n&apos;est pas éternel non plus</h3>
          <p>
            Votre site tourne probablement sur Vercel, Netlify, ou un VPS.
            Chaque cas a ses angles morts :
          </p>
          <ul>
            <li>
              <strong>Vercel / Netlify</strong> : très fiables, mais les offres
              gratuites ont des limites (bande passante, usage commercial selon
              les conditions), les versions de Node.js supportées évoluent, et
              un site jamais redéployé peut refuser de compiler le jour où
              l&apos;on doit enfin y toucher.
            </li>
            <li>
              <strong>VPS</strong> : le système d&apos;exploitation, Node.js et
              le serveur web demandent des mises à jour de sécurité. Un VPS
              oublié est une cible.
            </li>
            <li>
              Dans tous les cas :{" "}
              <strong>nom de domaine et certificat SSL</strong> expirent. Un
              renouvellement raté et le site affiche une page d&apos;erreur
              effrayante à vos visiteurs.
            </li>
          </ul>

          <h3>Ce qui casse sans prévenir</h3>
          <p>
            Un site custom peut se dégrader sans qu&apos;aucune ligne de code
            ne change : une API tierce qui modifie son contrat, un formulaire
            dont le service d&apos;envoi d&apos;e-mails a suspendu le compte,
            une erreur JavaScript qui ne touche qu&apos;un navigateur récent.
            Sans surveillance (uptime, erreurs JS, tests des formulaires), vous
            l&apos;apprendrez par un client — ou vous ne l&apos;apprendrez
            jamais.
          </p>

          <h2>Le scénario classique : le développeur a disparu</h2>
          <p>
            La plupart des sites custom que nous voyons ont été construits par
            un freelance ou une petite agence. Puis la vie a suivi son cours :
            le freelance a pris un CDI, l&apos;agence a pivoté, le devis de
            « TMA » n&apos;a jamais été signé. Résultat : un site dont personne
            n&apos;a plus les accès complets, un dépôt de code dont on ne sait
            plus où il est, et un propriétaire qui croise les doigts.
          </p>
          <p>
            Si vous vous reconnaissez, première urgence — avant même de parler
            maintenance : <strong>récupérez vos accès</strong>. Code source
            (GitHub/GitLab), hébergement, nom de domaine, base de données le
            cas échéant. C&apos;est votre patrimoine. Un prestataire de
            maintenance sérieux commencera toujours par vérifier et sécuriser
            cette liste avec vous.
          </p>

          <h2>Nouveau cas d&apos;école : les sites générés par IA</h2>
          <p>
            Depuis 2024-2025, des outils comme{" "}
            <strong>Lovable, v0 ou Bolt</strong> permettent de générer un site
            ou une petite application en quelques prompts. C&apos;est une vraie
            démocratisation — et ces outils produisent justement du code
            React/Next.js, avec les mêmes dépendances npm, le même hébergement,
            les mêmes certificats que n&apos;importe quel site custom.
          </p>
          <p>
            La différence : leurs propriétaires sont rarement développeurs. Le
            site est livré fonctionnel, mais sans personne pour lire une alerte
            de sécurité, corriger un déploiement qui échoue ou comprendre
            pourquoi le formulaire n&apos;envoie plus rien. Ces sites naissent
            orphelins. Ils vieilliront comme les autres — juste sans témoin.
          </p>

          <h2>Pourquoi les prestataires WordPress ne peuvent pas vous aider</h2>
          <p>
            Ce n&apos;est pas une question de mauvaise volonté. Les offres de
            maintenance à petit prix (le marché français s&apos;étale
            d&apos;environ 12 à 300 €/mois,{" "}
            <Link href="/blog/tarif-maintenance-site-web/">
              détail des tarifs ici
            </Link>
            ) reposent sur une industrialisation propre à WordPress : tableaux
            de bord multi-sites, mises à jour de plugins en un clic,
            sauvegardes standardisées. Aucun de ces outils ne s&apos;applique à
            un projet Next.js : là, il faut lire du code, exécuter des tests,
            redéployer proprement. C&apos;est un métier de développeur.
          </p>
          <p>
            À noter : ce segment grandit mécaniquement. WordPress reste
            dominant mais recule (de 65,2 % à 59,8 % de part de marché des CMS
            d&apos;après les données consolidées dans notre étude de marché) —
            la part des sites « hors WordPress » augmente donc, sans que
            l&apos;écosystème de maintenance ait suivi.
          </p>

          <h2>Ce qu&apos;une maintenance sérieuse d&apos;un site custom doit couvrir</h2>
          <p>
            Que ce soit avec nous ou un autre développeur, exigez au minimum :
          </p>
          <ol>
            <li>
              <strong>Surveillance continue</strong> : disponibilité,
              certificat SSL, erreurs JavaScript, formulaires testés
              régulièrement.
            </li>
            <li>
              <strong>Mises à jour de dépendances</strong> planifiées
              (mensuelles), avec vérification que le site compile et fonctionne
              après.
            </li>
            <li>
              <strong>Correctifs de sécurité</strong> appliqués en priorité
              quand une faille touche une de vos dépendances.
            </li>
            <li>
              <strong>Sauvegardes</strong> du code et des données,
              restaurables.
            </li>
            <li>
              <strong>Un humain joignable</strong>, qui connaît votre projet et
              peut faire une retouche sans tout redécouvrir.
            </li>
          </ol>
          <p>
            C&apos;est exactement le périmètre de notre forfait{" "}
            <Link href="/maintenance-site-nextjs-react/">
              Phare, à 129 €/mois sans engagement
            </Link>{" "}
            : surveillance avancée, mises à jour de dépendances mensuelles,
            correctifs, 1 h de retouches par mois et un rapport technique
            lisible. Nous sommes développeurs Next.js/React avant d&apos;être
            mainteneurs — c&apos;est notre stack quotidienne, pas une ligne de
            plus au catalogue.
          </p>

          <h2>Par où commencer</h2>
          <p>
            Pas besoin de signer quoi que ce soit pour savoir où vous en êtes.
            Trois questions immédiates :
          </p>
          <ul>
            <li>
              Avez-vous accès au code source, à l&apos;hébergement et au nom de
              domaine de votre site ?
            </li>
            <li>
              Quelqu&apos;un a-t-il mis à jour ou redéployé le site dans les
              six derniers mois ?
            </li>
            <li>Seriez-vous prévenu si votre site tombait cette nuit ?</li>
          </ul>
          <p>
            Deux « non » ou plus : votre site est orphelin.
          </p>
        </Prose>

        {/* ─── CTA de fin ─── */}
        <aside className="mt-14 rounded-2xl bg-encre p-8 text-ecume">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Faites vérifier votre site par un développeur
          </h2>
          <p className="mt-3 leading-relaxed text-ecume/80">
            Notre bilan de santé gratuit s&apos;applique aussi — surtout — aux
            sites Next.js, React, Webflow et générés par IA : état des
            dépendances, certificat, disponibilité, formulaires. Rapport clair
            sous 24 h ouvrées, sans engagement. Vous saurez exactement où
            vous en êtes, même si vous ne donnez pas suite.
          </p>
          <div className="mt-6">
            <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
          </div>
        </aside>
      </article>
    </Section>
  );
}
