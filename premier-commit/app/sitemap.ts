import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

// Export statique (`output: "export"`) : la route doit être rendue au build.
export const dynamic = "force-static";

// Doit rester cohérent avec le `metadataBase` de app/layout.tsx.
const base = "https://premiercommit.example";

// `trailingSlash: true` — les URL canoniques du site se terminent par « / ».
const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, freq: "monthly" },
  { path: "/rattrapage/", priority: 0.9, freq: "monthly" },
  { path: "/blog/", priority: 0.8, freq: "monthly" },
  ...articles.map((a) => ({
    path: `/blog/${a.slug}/`,
    priority: 0.7,
    freq: "yearly" as const,
  })),
  { path: "/mentions-legales/", priority: 0.3, freq: "yearly" as const },
  { path: "/cgv/", priority: 0.3, freq: "yearly" as const },
  { path: "/confidentialite/", priority: 0.3, freq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
