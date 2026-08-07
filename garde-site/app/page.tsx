import type { Metadata } from "next";
import { LogoMark } from "@/components/Logo";
import { PlanCard } from "@/components/PlanCard";
import { CTA, Section, SectionTitle, WaveDivider } from "@/components/ui";
import { faq, plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: { absolute: "Garde-Site — Maintenance de site web sans engagement" },
  description:
    "Maintenance WordPress, Next.js, React et Webflow par abonnement dès 49 €/mois. Sans engagement, rapport mensuel, réponse < 24 h ouvrées. Bilan gratuit.",
};

const reassurance = [
  { t: "Sans engagement", d: "résiliation en 1 clic, par e-mail." },
  { t: "Réponse < 24 h ouvrées", d: "un humain, pas un ticket perdu." },
  { t: "Service français", d: "interlocuteur unique, factures conformes." },
  { t: "Rapport chaque mois", d: "vous savez exactement ce qui a été fait." },
];

const douleurs = [
  {
    t: "Le dimanche soir.",
    d: "Votre site est tombé, ou pire : piraté. Vous le découvrez par un client, un dimanche. Personne à appeler, et chaque heure hors ligne vous coûte des contacts. Avec une surveillance 24h/24, l'alerte part avant le client.",
  },
  {
    t: "L'abandon tranquille.",
    d: "Votre site n'a pas été touché depuis sa livraison. Mises à jour en retard, sauvegardes inexistantes, failles connues non corrigées : il tient, jusqu'au jour où il ne tient plus. Un site sans entretien, c'est un bateau sans carénage.",
  },
  {
    t: "L'agence injoignable.",
    d: "Changer un numéro de téléphone, corriger une faute : 90 € la retouche, quand on vous répond. Vous n'osez plus rien demander. Nos forfaits Capitaine et Phare incluent 1 h de retouches par mois, réponse sous 24 h ouvrées.",
  },
];

const etapes = [
  {
    n: "1",
    t: "Le bilan de santé (gratuit)",
    d: "Vous nous indiquez l'adresse de votre site. Nous lançons un audit automatisé : disponibilité, mises à jour, sécurité, sauvegardes, vitesse. Vous recevez un état des lieux clair, chiffré, sans engagement.",
  },
  {
    n: "2",
    t: "La mise sous garde (48 h)",
    d: "Vous choisissez votre forfait. Sous 48 h, votre site est sous surveillance : sauvegardes en place, mises à jour planifiées, alertes actives. Vous n'avez rien à installer.",
  },
  {
    n: "3",
    t: "Le rapport mensuel",
    d: "Chaque mois, un rapport lisible : ce qui a été mis à jour, sauvegardé, corrigé, surveillé. Pas de nouvelles ? Si : de bonnes nouvelles, noir sur blanc.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <div className="bg-encre text-ecume">
        <Section className="!py-20 sm:!py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="flex items-center gap-2 text-sm font-medium text-ecume/70">
                <span className="dot-balise inline-block h-2.5 w-2.5 rounded-full bg-balise" />
                Surveillance active — vous dormez, on veille
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Votre site sous bonne garde,{" "}
                <span className="text-signal">24h/24</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ecume/80">
                Maintenance de sites web par abonnement, sans engagement, pour
                indépendants et TPE. Mises à jour, sauvegardes, surveillance et
                retouches : vous dormez, on veille.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
                <CTA href="/#forfaits" variant="ghost-light">
                  Voir les forfaits
                </CTA>
              </div>
              <p className="mt-3 text-sm text-ecume/60">
                Audit automatisé de votre site. Sans engagement, sans carte
                bancaire.
              </p>
            </div>
            <div className="hidden justify-center lg:flex">
              <LogoMark className="h-64 w-64 text-ecume" beam />
            </div>
          </div>
        </Section>
        <WaveDivider />
      </div>

      {/* ─── Réassurance ─── */}
      <Section className="!py-10">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reassurance.map((r) => (
            <li key={r.t} className="flex gap-3">
              <svg
                viewBox="0 0 20 20"
                className="mt-1 h-5 w-5 shrink-0 fill-balise"
                aria-hidden="true"
              >
                <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm4.7 7.4-5.3 5.9a1 1 0 0 1-1.5 0L5.3 10.5a1 1 0 1 1 1.5-1.3l1.9 2 4.5-5.1a1 1 0 0 1 1.5 1.3Z" />
              </svg>
              <p className="text-sm leading-snug">
                <strong className="block text-encre">{r.t}</strong>
                <span className="text-ardoise">{r.d}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ─── Douleurs ─── */}
      <Section>
        <SectionTitle
          kicker="Le constat"
          title="Un site web, ça ne se garde pas tout seul."
          intro="Trois situations que nous voyons trop souvent. Peut-être la vôtre."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {douleurs.map((s) => (
            <article
              key={s.t}
              className="rounded-2xl border border-ligne bg-white p-6"
            >
              <h3 className="font-display text-xl font-semibold text-encre">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ardoise">{s.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <CTA href="/bilan-gratuit/" variant="ghost">
            Faire le point gratuitement
          </CTA>
        </div>
      </Section>

      {/* ─── Comment ça marche ─── */}
      <div className="bg-ecume-2">
        <Section>
          <SectionTitle kicker="Le cap" title="Trois étapes, zéro jargon." />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {etapes.map((e) => (
              <li
                key={e.n}
                className="relative rounded-2xl border border-ligne bg-white p-6 pt-8"
              >
                <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-encre font-display text-lg font-semibold text-ecume">
                  {e.n}
                </span>
                <h3 className="font-display text-lg font-semibold text-encre">
                  {e.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ardoise">
                  {e.d}
                </p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      {/* ─── Forfaits ─── */}
      <Section id="forfaits">
        <SectionTitle
          kicker="Les forfaits"
          title="Trois forfaits. Sans engagement. Prix nets."
          intro="Résiliation en 1 clic, par e-mail. TVA non applicable, art. 293 B du CGI."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
        <p className="mt-8 rounded-2xl border border-signal/40 bg-signal/5 p-5 text-sm leading-relaxed">
          <strong className="text-encre">
            Site cassé, mises à jour en retard, malware léger ?
          </strong>{" "}
          Remise en état : <strong>149 €</strong>, une fois, sans abonnement.
          Montant intégralement crédité si vous souscrivez un forfait dans les
          30 jours.
        </p>
      </Section>

      {/* ─── Encart custom ─── */}
      <div className="bg-encre text-ecume">
        <WaveDivider flip />
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="hidden justify-center lg:flex">
              <LogoMark className="h-40 w-40 text-ecume" beam />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Sites Next.js, React, Webflow ou générés par IA ?{" "}
                <span className="text-signal">Vous êtes au bon endroit.</span>
              </h2>
              <p className="mt-5 leading-relaxed text-ecume/80">
                Les offres de maintenance françaises s&apos;arrêtent presque
                toutes à WordPress. Pour les sites custom, c&apos;est le
                désert : à notre connaissance, aucun autre service productisé
                français ne couvre ces technologies. C&apos;est précisément
                notre terrain — c&apos;est la stack sur laquelle nous
                développons au quotidien. Votre site a été généré par une IA et
                personne n&apos;ose y toucher ? Nous, si. Forfait{" "}
                <strong className="text-ecume">Phare, 129 €/mois</strong>, mise
                sous garde en 48 h.
              </p>
              <div className="mt-7">
                <CTA href="/maintenance-site-nextjs-react/">
                  Maintenance de sites custom
                </CTA>
              </div>
            </div>
          </div>
        </Section>
        <WaveDivider />
      </div>

      {/* ─── Non inclus ─── */}
      <Section>
        <SectionTitle
          kicker="Transparence"
          title="Ce que nos forfaits ne couvrent pas."
          intro="Un forfait clair, c'est aussi un périmètre clair. Voici ce qui sort du cadre — et ce que nous vous dirons franchement, plutôt que de facturer au flou."
        />
        <ul className="mt-8 max-w-2xl space-y-4 text-encre/90">
          <li className="rounded-xl border border-ligne bg-white p-4 text-sm leading-relaxed">
            <strong>Refonte de site</strong> : sur devis, à part.
          </li>
          <li className="rounded-xl border border-ligne bg-white p-4 text-sm leading-relaxed">
            <strong>Nouvelles fonctionnalités</strong> (boutique, espace
            membre, module sur mesure…) : sur devis, à part.
          </li>
          <li className="rounded-xl border border-ligne bg-white p-4 text-sm leading-relaxed">
            <strong>Retouches au-delà du quota</strong> : 1 h par mois, tâches
            de 30 min maximum, non reportable d&apos;un mois sur l&apos;autre.
            Au-delà, nous vous proposons un devis avant toute intervention —
            jamais de facture surprise.
          </li>
        </ul>
        <p className="mt-6 max-w-2xl font-medium text-encre">
          Vous savez ce que vous payez. Vous savez ce que vous obtenez.
          C&apos;est le contrat.
        </p>
      </Section>

      {/* ─── FAQ ─── */}
      <div className="bg-ecume-2">
        <Section id="faq">
          <SectionTitle
            kicker="FAQ"
            title="Questions franches, réponses chiffrées."
          />
          <div className="mt-10 max-w-3xl divide-y divide-ligne rounded-2xl border border-ligne bg-white">
            {faq.map((item) => (
              <details key={item.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-encre [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    viewBox="0 0 20 20"
                    className="h-5 w-5 shrink-0 fill-ardoise transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M9 3h2v6h6v2h-6v6H9v-6H3V9h6V3Z" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ardoise">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Section>
      </div>

      {/* ─── CTA final ─── */}
      <div className="bg-encre text-ecume">
        <WaveDivider flip />
        <Section className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Et si vous arrêtiez d&apos;y penser ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ecume/80">
            Deux minutes pour demander votre bilan de santé gratuit. Sous 48 h,
            votre site peut être sous garde. Sans engagement — c&apos;est
            écrit, et c&apos;est vrai.
          </p>
          <div className="mt-8">
            <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
          </div>
        </Section>
      </div>
    </>
  );
}
