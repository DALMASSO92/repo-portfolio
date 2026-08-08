/**
 * Visuel signature : le parcours représenté comme un historique de commits.
 * Chaque nœud est une étape franchie ; le dernier est plein et vert.
 * Purement décoratif — le texte des étapes est rendu en HTML à côté.
 */
export function CommitGraph({ className = "" }: { className?: string }) {
  const steps = [
    { label: "CV illisible par les ATS", done: true },
    { label: "GitHub qui ne raconte rien", done: true },
    { label: "Candidatures envoyées au hasard", done: true },
    { label: "Ciblage et message personnalisés", done: true },
    { label: "Entretien technique préparé", done: true },
    { label: "Premier commit", done: false },
  ];

  return (
    <ol className={`relative ${className}`}>
      {/* Ligne verticale du graphe */}
      <span
        aria-hidden="true"
        className="absolute left-[11px] top-3 bottom-3 w-px bg-papier/20"
      />
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s.label} className="relative flex items-start gap-4 pb-6 last:pb-0">
            <span
              aria-hidden="true"
              className={`relative z-10 mt-1 flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border-2 ${
                last
                  ? "node-pulse border-vert bg-vert"
                  : "border-papier/30 bg-nuit"
              }`}
            >
              {last && (
                <svg viewBox="0 0 20 20" className="h-3 w-3 fill-nuit">
                  <path d="M7.6 13.6 4 10l1.4-1.4 2.2 2.2 6-6L15 6.2z" />
                </svg>
              )}
            </span>
            <span
              className={`pt-0.5 ${
                last
                  ? "font-display text-lg font-bold text-papier"
                  : "text-sm text-papier/55 line-through decoration-papier/25"
              }`}
            >
              {s.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
