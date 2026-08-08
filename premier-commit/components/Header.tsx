import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  { href: "/#methode", label: "La méthode" },
  { href: "/#offres", label: "Offres" },
  { href: "/rattrapage/", label: "Le Rattrapage" },
  { href: "/blog/", label: "Ressources" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ligne bg-papier/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Premier Commit — accueil">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-gris md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-nuit"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#offres"
          className="rounded-lg bg-indigo px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-clair"
        >
          Voir les offres
        </Link>
      </div>
    </header>
  );
}
