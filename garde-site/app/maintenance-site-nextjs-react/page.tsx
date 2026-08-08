import type { Metadata } from "next";
import Link from "next/link";
import { PlanCard } from "@/components/PlanCard";
import { CTA, Section, SectionTitle, WaveDivider } from "@/components/ui";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  // 56 caractères
  title: { absolute: "Maintenance site Next.js, React, Webflow — Garde-Site" },
  // 147 caractères
  description:
    "Maintenance de sites Next.js, React, Webflow et générés par IA. Forfait Phare 129 €/mois : surveillance, dépendances, correctifs. Sans engagement.",
};

const degradations = [
  {
    t: "Les dépendances npm vieillissent en silence",
    d: "Un site Next.js ou React repose sur des dizaines, souvent des centaines de briques logicielles open source. Chacune évolue, corrige des failles, ou cesse d'être maintenue. Si plus personne ne regarde le dépôt de votre site, personne ne lit les alertes de sécurité. Et plus on attend, plus la note s'alourdit : six mois de retard, c'est une routine ; deux ans, c'est un chantier facturable en jours.",
  },
  {
    t: "L'hébergement n'est pas éternel",
    d: "Vercel, Netlify ou VPS : les versions de Node.js supportées évoluent, les offres gratuites ont des limites, un site jamais redéployé peut refuser de compiler le jour où il faut enfin y toucher. Et dans tous les cas, nom de domaine et certificat SSL expirent — un renouvellement raté et vos visiteurs voient une page d'erreur effrayante.",
  },
  {
    t: "Le développeur a disparu",
    d: "Le freelance a pris un CDI, l'agence a pivoté, le contrat de maintenance n'a jamais été signé. Résultat : un site dont personne n'a plus les accès complets, un dépôt de code dont on ne sait plus où il est. Nous commençons toujours par vérifier et sécuriser cette liste avec vous — c'est votre patrimoine.",
  },
  {
    t: "Les sites générés par IA naissent orphelins",
    d: "Lovable, v0, Bolt : ces outils produisent du vrai code React/Next.js, avec les mêmes dépendances, le même hébergement, les mêmes certificats que n'importe quel site custom. Mais leurs propriétaires sont rarement développeurs. Le site est livré fonctionnel — sans personne pour lire une alerte de sécurité ou réparer un déploiement qui échoue. Il vieillira comme les autres, juste sans témoin.",
  },
];

export default function MaintenanceSitesCustom() {
  const phare = plans.find((p) => p.name === "Phare")!;

  return (
    <>
      {/* ─── Hero ─── */}
      <div className="bg-encre text-ecume">
        <Section className="!py-16 sm:!py-24">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-sm font-medium text-ecume/70">
              <span className="dot-balise inline-block h-2.5 w-2.5 rounded-full bg-balise" />
              Forfait Phare 129 €/mois · sans engagement
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Maintenance de sites Next.js, React, Webflow et{" "}
              <span className="text-signal">générés par IA</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ecume/80">
              Les offres de maintenance françaises s&apos;arrêtent presque
              toutes à WordPress. Pour les sites custom, c&apos;est le désert.
              C&apos;est précisément notre terrain : nous sommes développeurs
              Next.js/React avant d&apos;être mainteneurs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
              <CTA href="#forfait-phare" variant="ghost-light">
                Voir le forfait Phare
              </CTA>
            </div>
          </div>
        </Section>
        <WaveDivider />
      </div>

      {/* ─── Le malentendu ─── */}
      <Section>
        <SectionTitle
          kicker="Le malentendu"
          title="« Pas de plugins, pas de problème » : faux."
        />
        <div className="mt-8 max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-encre/85">
          <p>
            Un site Next.js, React ou Webflow n&apos;a pas d&apos;extensions
            WordPress à mettre à jour, c&apos;est vrai. Beaucoup de
            propriétaires en concluent qu&apos;il n&apos;y a « rien à
            maintenir ». C&apos;est le malentendu le plus coûteux du web
            moderne : un site custom ne tombe pas d&apos;un coup, il se dégrade
            en silence — jusqu&apos;au jour où le formulaire n&apos;envoie plus
            rien, où le certificat expire, ou où plus personne n&apos;arrive à
            le recompiler.
          </p>
          <p>
            Un site custom peut même casser sans qu&apos;aucune ligne de code
            ne change : une API tierce qui modifie son contrat, un service
            d&apos;envoi d&apos;e-mails qui suspend un compte, une erreur
            JavaScript qui ne touche qu&apos;un navigateur récent. Sans
            surveillance, vous l&apos;apprendrez par un client — ou vous ne
            l&apos;apprendrez jamais.
          </p>
        </div>
      </Section>

      {/* ─── Pourquoi ça se dégrade ─── */}
      <div className="bg-ecume-2">
        <Section>
          <SectionTitle
            kicker="Le diagnostic"
            title="Pourquoi un site custom se dégrade."
            intro="Quatre mécanismes, tous silencieux. Les quatre sont couverts par le forfait Phare."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {degradations.map((s) => (
              <article
                key={s.t}
                className="rounded-2xl border border-ligne bg-white p-6"
              >
                <h3 className="font-display text-xl font-semibold text-encre">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ardoise">
                  {s.d}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </div>

      {/* ─── Pourquoi pas un prestataire WordPress ─── */}
      <Section>
        <SectionTitle
          kicker="Le désert"
          title="Pourquoi les prestataires WordPress ne peuvent pas vous aider."
        />
        <div className="mt-8 max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-encre/85">
          <p>
            Ce n&apos;est pas une question de mauvaise volonté. Les offres de
            maintenance classiques reposent sur une industrialisation propre à
            WordPress : tableaux de bord multi-sites, mises à jour de plugins
            en un clic, sauvegardes standardisées. Aucun de ces outils ne
            s&apos;applique à un projet Next.js : là, il faut lire du code,
            exécuter des tests, redéployer proprement.{" "}
            <strong className="text-encre">
              C&apos;est un métier de développeur
            </strong>{" "}
            — et c&apos;est le nôtre, au quotidien.
          </p>
          <p>
            À notre connaissance, aucun autre service productisé français ne
            couvre ce segment. Nous en avons fait notre spécialité : mêmes
            engagements que pour WordPress — délais chiffrés, rapport mensuel,
            sans engagement — avec des outils adaptés aux sites custom. Pour
            comprendre le sujet en profondeur, lisez notre article{" "}
            <Link
              href="/blog/maintenance-site-nextjs-react/"
              className="font-medium text-signal-dark underline decoration-signal/40 underline-offset-2 hover:text-signal"
            >
              « Qui maintient votre site Next.js ou React après la
              livraison ? »
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* ─── Forfait Phare ─── */}
      <div className="bg-ecume-2">
        <Section id="forfait-phare">
          <SectionTitle
            kicker="Le forfait"
            title="Phare : la garde des sites custom."
            intro="Prix net — TVA non applicable, art. 293 B du CGI. Sans engagement, résiliation par e-mail."
          />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="mx-auto w-full max-w-md">
              <PlanCard plan={phare} />
            </div>
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-encre/85">
              <p>
                Concrètement, la mise sous garde prend 48 h : nous vérifions
                avec vous les accès (code source, hébergement, nom de domaine),
                installons la surveillance — disponibilité, certificat SSL,
                formulaires, erreurs JavaScript — et planifions les mises à
                jour de dépendances, chaque mois, avec vérification que le site
                compile et fonctionne après.
              </p>
              <p>
                Chaque mois, vous recevez un rapport technique lisible : ce qui
                a été mis à jour, surveillé, corrigé. Et quand une faille de
                sécurité touche une de vos dépendances, le correctif passe en
                priorité — sans devis, c&apos;est compris dans le forfait.
              </p>
              <p className="rounded-2xl border border-signal/40 bg-signal/5 p-5 text-sm">
                <strong className="text-encre">
                  Site custom déjà cassé ou qui ne compile plus ?
                </strong>{" "}
                Remise en état : <strong>149 €</strong>, une fois, sans
                abonnement — crédités si vous souscrivez dans les 30 jours.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* ─── CTA final ─── */}
      <div className="bg-encre text-ecume">
        <WaveDivider flip />
        <Section className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Votre site custom est-il orphelin ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ecume/80">
            Le bilan de santé gratuit s&apos;applique aussi — surtout — aux
            sites Next.js, React, Webflow et générés par IA : état des
            dépendances, certificat, disponibilité, formulaires. Sans
            engagement, même si vous ne donnez pas suite.
          </p>
          <div className="mt-8">
            <CTA href="/bilan-gratuit/">Faire vérifier mon site</CTA>
          </div>
        </Section>
      </div>
    </>
  );
}
