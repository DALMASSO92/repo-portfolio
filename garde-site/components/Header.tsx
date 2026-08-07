import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  { href: "/#forfaits", label: "Forfaits" },
  { href: "/maintenance-site-nextjs-react/", label: "Sites custom" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog/", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ligne bg-ecume/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Garde-Site — accueil">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ardoise md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-encre"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/bilan-gratuit/"
          className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-signal-dark"
        >
          Bilan gratuit
        </Link>
      </div>
    </header>
  );
}
