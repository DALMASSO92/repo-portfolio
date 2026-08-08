import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  kicker,
  title,
  intro,
  light = false,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {kicker && (
        <p className="text-sm font-semibold uppercase tracking-widest text-signal">
          {kicker}
        </p>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-ecume" : "text-encre"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-ecume/75" : "text-ardoise"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-signal text-white shadow-md shadow-signal/25 hover:bg-signal-dark",
    ghost:
      "border border-encre/20 text-encre hover:border-encre/50 hover:bg-encre/5",
    "ghost-light":
      "border border-ecume/30 text-ecume hover:border-ecume/60 hover:bg-ecume/10",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-6 py-3 text-base font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/* Séparateur de vagues entre un fond encre et un fond écume */
export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full sm:h-14 ${flip ? "rotate-180" : ""}`}
    >
      <path
        d="M0 45 C 180 10, 360 70, 540 42 C 720 15, 900 66, 1080 40 C 1260 16, 1380 50, 1440 38 L 1440 70 L 0 70 Z"
        className="fill-ecume"
      />
    </svg>
  );
}
