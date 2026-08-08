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
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
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
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-indigo">
          {kicker}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-papier" : "text-nuit"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-papier/70" : "text-gris"
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
    primary: "bg-indigo text-white shadow-lg shadow-indigo/25 hover:bg-indigo-clair",
    ghost: "border border-nuit/20 text-nuit hover:border-nuit/50 hover:bg-nuit/5",
    "ghost-light":
      "border border-papier/25 text-papier hover:border-papier/60 hover:bg-papier/10",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-6 py-3 text-base font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Étiquette technique en mono — sert de « commande git » décorative. */
export function Cmd({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs text-indigo">
      <span className="opacity-50">$ </span>
      {children}
    </span>
  );
}
