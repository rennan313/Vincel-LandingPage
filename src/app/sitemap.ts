import type { MetadataRoute } from "next";

// Servido em /sitemap.xml (convenção do App Router) — Semrush: "Sitemap.xml
// not found". Site de uma página só (ver README: "src/app — layout raiz e a
// página (page.tsx)") — atualize esta lista se/quando ganhar mais rotas.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vincelstudio.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
