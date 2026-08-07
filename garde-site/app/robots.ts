import type { MetadataRoute } from "next";

// Requis pour l'export statique (`output: "export"`) : le fichier est généré
// une fois au build, en /robots.txt.
export const dynamic = "force-static";

// Même placeholder que metadataBase dans app/layout.tsx.
const BASE_URL = "https://garde-site.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
