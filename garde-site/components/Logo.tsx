export function LogoMark({
  className = "h-8 w-8",
  beam = false,
}: {
  className?: string;
  beam?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Écusson */}
      <path
        d="M24 2 44 9v15c0 12-8.5 19.5-20 22C12.5 43.5 4 36 4 24V9l20-7Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M24 2 44 9v15c0 12-8.5 19.5-20 22C12.5 43.5 4 36 4 24V9l20-7Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Faisceau */}
      {beam && (
        <g className="beam" style={{ transformOrigin: "24px 15px" }}>
          <path d="M24 15 12 6h24L24 15Z" fill="#FF6B35" opacity="0.55" />
        </g>
      )}
      {/* Phare */}
      <path
        d="M21 20h6l1.6 15h-9.2L21 20Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="20.5" y="14" width="7" height="6" rx="1.2" fill="#FF6B35" />
      <path
        d="M19 35h10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Vagues */}
      <path
        d="M13 39c2.2 1.6 4.4 1.6 6.6 0 2.2 1.6 4.4 1.6 6.6 0 2.2 1.6 4.4 1.6 6.6 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex items-center gap-2.5 ${light ? "text-ecume" : "text-encre"}`}
    >
      <LogoMark className="h-9 w-9" />
      <span className="font-display text-xl font-semibold tracking-tight">
        Garde<span className="text-signal">-</span>Site
      </span>
    </span>
  );
}
