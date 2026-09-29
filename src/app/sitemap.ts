import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/content/solutions";
import { BLOG_POSTS } from "@/content/blog";

const SITE_URL = "https://vincelstudio.com";

// Servido em /sitemap.xml (convenção do App Router) — Semrush: "Sitemap.xml
// not found". Só páginas públicas e indexáveis: Home + as páginas de
// solução (content/solutions.ts, mesma fonte usada pra gerar as próprias
// páginas) + /precos. /blog fica de fora enquanto estiver com noindex (ver
// app/blog/page.tsx) — entra sozinho aqui assim que tiver posts de verdade.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const solutionEntries: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s.slug === SOLUTIONS[0].slug ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap =
    BLOG_POSTS.length > 0
      ? [
          { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
          ...BLOG_POSTS.map((post) => ({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: "monthly" as const,
            priority: 0.6,
          })),
        ]
      : [];

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...solutionEntries,
    { url: `${SITE_URL}/precos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...blogEntries,
  ];
}
