import type { ReactNode } from "react";

/**
 * Conteneur typographique pour les contenus longs (articles, pages légales).
 * On style les balises natives (h2, p, ul, table…) via des variantes
 * arbitraires Tailwind : le contenu s'écrit en JSX « pur », sans classes.
 */
export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-encre/85",
        // Titres
        "[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-encre sm:[&_h2]:text-3xl",
        "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-encre",
        // Liens
        "[&_a]:font-medium [&_a]:text-signal-dark [&_a]:underline [&_a]:decoration-signal/40 [&_a]:underline-offset-2 [&_a]:transition-colors [&_a:hover]:text-signal",
        // Emphase
        "[&_strong]:font-semibold [&_strong]:text-encre",
        // Listes
        "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_li]:pl-1",
        // Citations / encarts
        "[&_blockquote]:rounded-2xl [&_blockquote]:border [&_blockquote]:border-ligne [&_blockquote]:bg-white [&_blockquote]:p-5 [&_blockquote]:text-[0.95rem]",
        // Tableaux (dans un conteneur .table-scroll pour le défilement horizontal)
        "[&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
        "[&_th]:border-b [&_th]:border-ligne [&_th]:bg-ecume-2 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-encre",
        "[&_td]:border-b [&_td]:border-ligne [&_td]:px-4 [&_td]:py-3 [&_td]:align-top",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/** Conteneur de tableau : arrondi, bordure, défilement horizontal si étroit. */
export function TableScroll({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ligne bg-white">
      {children}
    </div>
  );
}
