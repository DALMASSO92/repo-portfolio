import Link from "next/link";

export type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 ${
        plan.highlight
          ? "border-signal bg-encre text-ecume shadow-xl shadow-encre/20"
          : "border-ligne bg-white"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-signal px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {plan.badge}
        </span>
      )}
      <h3
        className={`font-display text-2xl font-semibold ${
          plan.highlight ? "text-ecume" : "text-encre"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-1 text-sm italic ${
          plan.highlight ? "text-ecume/70" : "text-ardoise"
        }`}
      >
        {plan.tagline}
      </p>
      <p className="mt-5">
        <span
          className={`font-display text-4xl font-semibold ${
            plan.highlight ? "text-ecume" : "text-encre"
          }`}
        >
          {plan.price}
        </span>
        <span
          className={`text-sm ${plan.highlight ? "text-ecume/70" : "text-ardoise"}`}
        >
          {" "}
          €/mois
        </span>
      </p>
      <ul
        className={`mt-6 flex-1 space-y-3 text-sm leading-relaxed ${
          plan.highlight ? "text-ecume/85" : "text-encre/85"
        }`}
      >
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <svg
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 shrink-0 fill-balise"
              aria-hidden="true"
            >
              <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm4.7 7.4-5.3 5.9a1 1 0 0 1-1.5 0L5.3 10.5a1 1 0 1 1 1.5-1.3l1.9 2 4.5-5.1a1 1 0 0 1 1.5 1.3Z" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/bilan-gratuit/"
        className={`mt-8 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-colors ${
          plan.highlight
            ? "bg-signal text-white hover:bg-signal-dark"
            : "border border-encre/25 text-encre hover:bg-encre hover:text-ecume"
        }`}
      >
        Commencer par le bilan gratuit
      </Link>
    </div>
  );
}
