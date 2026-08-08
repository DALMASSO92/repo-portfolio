/**
 * Marque : un graphe de commits minimal.
 * Une branche part de la ligne principale et rejoint un nœud plein —
 * le premier commit. C'est le motif signature de toute l'identité.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      {/* Ligne principale */}
      <path
        d="M11 4v32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Branche qui rejoint */}
      <path
        d="M11 20c0 6 4 8 9 8"
        stroke="var(--indigo)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Nœuds de la ligne principale */}
      <circle cx="11" cy="9" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="11" cy="20" r="3" fill="currentColor" opacity="0.35" />
      {/* Le commit : nœud plein, en vert de validation */}
      <circle cx="27" cy="28" r="5.5" fill="var(--vert)" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex items-center gap-2.5 ${light ? "text-papier" : "text-nuit"}`}
    >
      <LogoMark className="h-8 w-8" />
      <span className="font-display text-lg font-bold tracking-tight">
        Premier<span className="text-indigo">Commit</span>
      </span>
    </span>
  );
}
