import type { Metadata } from "next";
import Link from "next/link";
import { CTA, Section, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides pratiques sur la maintenance de sites web : tarifs du marché, sites Next.js et React, réflexes en cas de piratage. Par Garde-Site.",
};

const articles = [
  {
    slug: "tarif-maintenance-site-web",
    title: "Combien coûte la maintenance d'un site web en 2026 ?",
    excerpt:
      "Tarifs réels du marché français, de 12 à 300 €/mois. Ce que cachent les prix très bas, pourquoi les agences facturent plus, et la grille de lecture en 6 questions pour choisir sans vous tromper.",
    date: "Août 2026",
  },
  {
    slug: "maintenance-site-nextjs-react",
    title: "Qui maintient votre site Next.js ou React après la livraison ?",
    excerpt:
      "Dépendances npm, hébergement, certificats, développeur disparu, sites générés par IA : pourquoi un site custom se dégrade en silence, et ce qu'une maintenance sérieuse doit couvrir.",
    date: "Août 2026",
  },
  {
    slug: "site-pirate-que-faire",
    title: "Site piraté ou cassé : que faire dans l'heure ?",
    excerpt:
      "Guide d'urgence pas à pas : distinguer piratage et panne, les 60 premières minutes dans l'ordre, les 3 erreurs qui aggravent la situation, et qui appeler selon votre budget.",
    date: "Août 2026",
  },
];

export default function Blog() {
  return (
    <Section>
      <SectionTitle
        kicker="Le journal de bord"
        title="Comprendre la maintenance, sans jargon."
        intro="Des guides pratiques et chiffrés — utiles même si vous ne travaillez jamais avec nous."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <article
            key={a.slug}
            className="flex flex-col rounded-2xl border border-ligne bg-white p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-ardoise">
              {a.date}
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-encre">
              <Link
                href={`/blog/${a.slug}/`}
                className="transition-colors hover:text-signal-dark"
              >
                {a.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ardoise">
              {a.excerpt}
            </p>
            <p className="mt-5">
              <Link
                href={`/blog/${a.slug}/`}
                className="text-sm font-semibold text-signal-dark transition-colors hover:text-signal"
              >
                Lire l&apos;article →
              </Link>
            </p>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-ligne bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className="max-w-xl text-sm leading-relaxed text-ardoise">
          <strong className="text-encre">
            Une question sur votre propre site ?
          </strong>{" "}
          Le bilan de santé gratuit vous donne un état des lieux clair sous
          24 h ouvrées — sans engagement, sans carte bancaire.
        </p>
        <div className="mt-4 shrink-0 sm:mt-0">
          <CTA href="/bilan-gratuit/">Bilan de santé gratuit</CTA>
        </div>
      </div>
    </Section>
  );
}
