import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Polices téléchargées au build et servies depuis notre domaine :
// aucun appel vers Google côté visiteur (conformité RGPD).
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Remplacer par le domaine réel au déploiement (ex. https://premiercommit.fr).
  metadataBase: new URL("https://premiercommit.example"),
  title: {
    default: "Premier Commit — Décrocher son alternance en informatique",
    template: "%s — Premier Commit",
  },
  description:
    "Ce n'est pas un problème d'effort, c'est un problème de méthode. Accompagnement méthodologique pour les étudiants en informatique qui cherchent une alternance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${space.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
