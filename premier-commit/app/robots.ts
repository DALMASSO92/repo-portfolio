import type { MetadataRoute } from "next";

// Export statique (`output: "export"`) : la route doit être rendue au build.
export const dynamic = "force-static";

// Doit rester cohérent avec le `metadataBase` de app/layout.tsx.
const base = "https://premiercommit.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
