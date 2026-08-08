import type { Offre } from "@/lib/offres";

export function OffreCard({ offre }: { offre: Offre }) {
  const dark = offre.highlight;
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 ${
        dark
          ? "border-indigo bg-nuit text-papier shadow-xl shadow-nuit/20"
          : "border-ligne bg-white"
      }`}
    >
      {offre.badge && (
        <span className="absolute -top-3 left-6 rounded-md bg-indigo px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-white">
          {offre.badge}
        </span>
      )}

      <p className="font-mono text-xs text-indigo">
        <span className="opacity-50">$ git </span>
        {offre.cmd}
      </p>
      <h3
        className={`mt-2 font-display text-2xl font-bold ${dark ? "text-papier" : "text-nuit"}`}
      >
        {offre.nom}
      </h3>
      <p className={`mt-1.5 text-sm ${dark ? "text-papier/65" : "text-gris"}`}>
        {offre.pitch}
      </p>

      <p className="mt-5 flex items-baseline gap-1.5">
        <span
          className={`font-display text-4xl font-bold ${dark ? "text-papier" : "text-nuit"}`}
        >
          {offre.prix} €
        </span>
        <span className={`text-sm ${dark ? "text-papier/55" : "text-gris"}`}>
          net
        </span>
      </p>
      <p
        className={`mt-1 font-mono text-xs ${dark ? "text-papier/50" : "text-gris"}`}
      >
        {offre.temps}
      </p>

      <ul
        className={`mt-6 flex-1 space-y-3 text-sm leading-relaxed ${
          dark ? "text-papier/85" : "text-nuit/85"
        }`}
      >
        {offre.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <svg
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 shrink-0 fill-vert"
              aria-hidden="true"
            >
              <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm4.7 7.4-5.3 5.9a1 1 0 0 1-1.5 0L5.3 10.5a1 1 0 1 1 1.5-1.3l1.9 2 4.5-5.1a1 1 0 0 1 1.5 1.3Z" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="[LIEN_PAIEMENT]"
        className={`mt-8 rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors ${
          dark
            ? "bg-indigo text-white hover:bg-indigo-clair"
            : "border border-nuit/25 text-nuit hover:bg-nuit hover:text-papier"
        }`}
      >
        Choisir {offre.nom}
      </a>
    </div>
  );
}
