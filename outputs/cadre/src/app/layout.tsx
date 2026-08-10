import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// Renseigne NEXT_PUBLIC_SITE_URL dans .env.local avec ton vrai domaine avant
// la mise en ligne : cette valeur sert de base aux URL canoniques et aux images
// de partage. La valeur de repli n'est là que pour permettre au build de passer.
const urlSite = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(urlSite),
  title: {
    default: "Cadré — ton premier partenariat, bien cadré",
    template: "%s · Cadré",
  },
  description:
    "Une marque te propose un partenariat ? Calcule ce qu'il te restera vraiment, vérifie que ton contrat est valable, et édite une facture conforme. Fait pour les créateurs français.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Cadré",
  },
};

const liensPied = [
  { href: "/simulateur", texte: "Simulateur" },
  { href: "/conformite", texte: "Diagnostic" },
  { href: "/generateur", texte: "Générateur" },
  { href: "/guide", texte: "Guide" },
];

const liensLegaux = [
  { href: "/mentions-legales", texte: "Mentions légales" },
  { href: "/cgv", texte: "CGV" },
  { href: "/confidentialite", texte: "Confidentialité" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-50 border-b border-[#26262B] bg-[#0B0B0C]/85 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="relative inline-block h-5 w-5">
                <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-[#D4FF3F]" />
                <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-[#D4FF3F]" />
                <span className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-[#D4FF3F]" />
                <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-[#D4FF3F]" />
              </span>
              <span className="text-lg font-semibold tracking-tight">Cadré</span>
            </Link>

            <div className="hidden items-center gap-7 text-sm text-[#A1A1AA] md:flex">
              <Link href="/simulateur" className="transition hover:text-[#F5F5F4]">
                Simulateur
              </Link>
              <Link href="/conformite" className="transition hover:text-[#F5F5F4]">
                Diagnostic
              </Link>
              <Link href="/guide" className="transition hover:text-[#F5F5F4]">
                Guide
              </Link>
            </div>

            <Link
              href="/generateur"
              className="rounded-full bg-[#D4FF3F] px-4 py-2 text-sm font-semibold text-[#0B0B0C] transition hover:bg-[#c2ef2c]"
            >
              Le générateur
            </Link>
          </nav>
        </header>

        {children}

        <footer className="border-t border-[#26262B] bg-[#0B0B0C]">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
              <div className="max-w-sm">
                <p className="text-lg font-semibold tracking-tight">Cadré</p>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  Les outils administratifs du créateur français. Modèles génériques,
                  pas de conseil juridique personnalisé.
                </p>
              </div>

              <div className="flex gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
                    Outils
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {liensPied.map((lien) => (
                      <li key={lien.href}>
                        <Link href={lien.href} className="text-[#A1A1AA] transition hover:text-[#F5F5F4]">
                          {lien.texte}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]">
                    Légal
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {liensLegaux.map((lien) => (
                      <li key={lien.href}>
                        <Link href={lien.href} className="text-[#A1A1AA] transition hover:text-[#F5F5F4]">
                          {lien.texte}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-12 border-t border-[#26262B] pt-8 text-xs leading-relaxed text-[#A1A1AA]">
              Cadré est édité par [À_REMPLACER_PRENOM_NOM], entrepreneur individuel.
              TVA non applicable, art. 293 B du CGI. Les documents produits sont des
              modèles génériques : ils ne remplacent pas l&apos;avis d&apos;un avocat ou
              d&apos;un expert-comptable sur ta situation.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
