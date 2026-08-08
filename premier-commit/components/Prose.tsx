import type { ReactNode } from "react";
import { Cmd, Section } from "./ui";

/**
 * Typographie partagée des pages longues (articles et pages légales).
 *
 * Le composant applique une feuille de style locale via des variantes
 * arbitraires Tailwind : pas de plugin `@tailwindcss/typography`, pas de
 * classe globale, et rien à ajouter dans `globals.css`.
 *
 * Largeur de ligne plafonnée à ~68 caractères — au-delà, l'œil perd la ligne
 * suivante sur un texte juridique de plusieurs milliers de mots.
 */
const prose = [
  // ─── Base ───
  "max-w-[68ch] text-base leading-[1.75] text-nuit/85",

  // Rythme vertical par défaut entre blocs de même niveau.
  // Les titres redéfinissent leur marge plus bas (sélecteur plus spécifique).
  "[&>*+*]:mt-5",
  "[&>:first-child]:mt-0",

  // ─── Titres ───
  "[&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:scroll-mt-24 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:tracking-tight [&_h2]:text-nuit",
  "[&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:scroll-mt-24 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-nuit",
  "[&_h4]:mt-7 [&_h4]:mb-2 [&_h4]:scroll-mt-24 [&_h4]:font-display [&_h4]:text-base [&_h4]:font-bold [&_h4]:text-nuit",

  // ─── Texte courant ───
  "[&_p]:leading-[1.75]",
  "[&_strong]:font-semibold [&_strong]:text-nuit",
  "[&_em]:italic",
  "[&_abbr]:no-underline",

  // ─── Liens ───
  "[&_a]:font-medium [&_a]:text-indigo [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:decoration-indigo/30 [&_a]:transition-colors hover:[&_a]:decoration-indigo",

  // ─── Listes ───
  "[&_ul]:list-disc [&_ol]:list-decimal",
  // Énumérations juridiques en a) b) c) — sélecteur plus spécifique que la
  // règle décimale ci-dessus, sinon la liste resterait numérotée.
  "[&_ol.alpha]:list-[lower-alpha]",
  "[&_ul]:pl-5 [&_ol]:pl-5",
  "[&_ul]:space-y-2 [&_ol]:space-y-2",
  "[&_li]:pl-1.5 [&_li]:leading-[1.7]",
  "[&_li]:marker:font-mono [&_li]:marker:text-indigo/70",
  "[&_li>ul]:mt-2 [&_li>ol]:mt-2",

  // ─── Tableaux (toujours encapsulés par <ProseTable>) ───
  "[&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-sm",
  "[&_thead]:bg-papier-2",
  "[&_th]:border-b [&_th]:border-ligne [&_th]:px-4 [&_th]:py-3 [&_th]:font-display [&_th]:font-bold [&_th]:text-nuit",
  "[&_td]:border-b [&_td]:border-ligne [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:leading-relaxed",
  "[&_tbody_tr:last-child_td]:border-b-0",

  // ─── Code et mono ───
  "[&_code]:rounded [&_code]:border [&_code]:border-ligne [&_code]:bg-papier-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-nuit",
  "[&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-nuit [&_pre]:p-5 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:text-papier",
  "[&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-papier",

  // ─── Citations ───
  "[&_blockquote]:border-l-2 [&_blockquote]:border-indigo/40 [&_blockquote]:pl-5 [&_blockquote]:text-nuit/70 [&_blockquote]:italic",
  "[&_blockquote_p+p]:mt-3",

  // ─── Divers ───
  "[&_hr]:my-10 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-ligne",
  "[&_dt]:mt-4 [&_dt]:font-semibold [&_dt]:text-nuit",
  "[&_dd]:mt-1",
].join(" ");

export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${prose} ${className}`}>{children}</div>;
}

/**
 * En-tête des pages longues : bandeau sombre, cohérent avec les hero
 * de l'accueil et du Rattrapage.
 */
export function ProseHeader({
  kicker,
  title,
  intro,
  meta,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  meta?: ReactNode;
}) {
  return (
    <div className="bg-nuit text-papier">
      <Section className="!py-14 sm:!py-20">
        <div className="max-w-3xl">
          {kicker && <Cmd>{kicker}</Cmd>}
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-papier/75">
              {intro}
            </p>
          )}
          {meta && (
            <p className="mt-6 font-mono text-xs leading-relaxed text-papier/50">
              {meta}
            </p>
          )}
        </div>
      </Section>
    </div>
  );
}

/**
 * Tableau défilable horizontalement : sur mobile, un tableau juridique à
 * trois colonnes déborde toujours. Le conteneur scrolle, jamais la page.
 */
export function ProseTable({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <div className="my-6">
      <div className="overflow-x-auto rounded-xl border border-ligne bg-white">
        <table>{children}</table>
      </div>
      {caption && (
        <p className="mt-2 font-mono text-xs text-gris">{caption}</p>
      )}
    </div>
  );
}

/** Encadré : précision, avertissement utile, rappel de périmètre. */
export function ProseNote({
  title,
  children,
  tone = "neutre",
}: {
  title?: string;
  children: ReactNode;
  tone?: "neutre" | "accent" | "vert";
}) {
  const border = {
    neutre: "border-l-ligne",
    accent: "border-l-indigo",
    vert: "border-l-vert",
  }[tone];
  return (
    <div
      className={`my-6 rounded-xl border border-ligne border-l-4 bg-papier-2 p-5 text-sm leading-relaxed ${border}`}
    >
      {title && (
        <p className="font-display font-bold text-nuit">{title}</p>
      )}
      <div className={title ? "mt-2 [&>*+*]:mt-3" : "[&>*+*]:mt-3"}>
        {children}
      </div>
    </div>
  );
}

/** Sommaire ancré — indispensable sur les CGV (28 articles). */
export function ProseToc({
  items,
  title = "Sommaire",
}: {
  items: { id: string; label: string }[];
  title?: string;
}) {
  return (
    <nav
      aria-label={title}
      className="my-8 rounded-2xl border border-ligne bg-white p-6"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-indigo">
        {title}
      </p>
      <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-gris transition-colors hover:text-nuit"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
