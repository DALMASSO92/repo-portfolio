import type { MetadataRoute } from "next";

// Requis pour l'export statique (`output: "export"`) : le fichier est généré
// une fois au build, en /sitemap.xml.
export const dynamic = "force-static";

// Même placeholder que metadataBase dans app/layout.tsx — à remplacer par le
// domaine réel au déploiement.
const BASE_URL = "https://garde-site.example";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/bilan-gratuit/", priority: 0.9 },
  { path: "/maintenance-wordpress/", priority: 0.8 },
  { path: "/maintenance-site-nextjs-react/", priority: 0.8 },
  { path: "/blog/", priority: 0.6 },
  { path: "/blog/tarif-maintenance-site-web/", priority: 0.6 },
  { path: "/blog/maintenance-site-nextjs-react/", priority: 0.6 },
  { path: "/blog/site-pirate-que-faire/", priority: 0.6 },
  { path: "/mentions-legales/", priority: 0.2 },
  { path: "/cgv/", priority: 0.2 },
  { path: "/confidentialite/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2026-08-01"),
    changeFrequency: "monthly",
    priority,
  }));
}
