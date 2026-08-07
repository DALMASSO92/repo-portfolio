import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Polices téléchargées au build puis servies depuis notre domaine (aucun appel
// vers Google côté visiteur — conforme RGPD).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://[DOMAINE]"),
  title: {
    default: "Garde-Site — Maintenance de sites web sans engagement",
    template: "%s — Garde-Site",
  },
  description:
    "Votre site sous bonne garde, 24h/24. Maintenance WordPress et sites custom (Next.js, React, Webflow) dès 49 €/mois, sans engagement.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
