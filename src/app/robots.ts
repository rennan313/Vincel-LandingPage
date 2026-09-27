import type { MetadataRoute } from "next";

// Servido em /robots.txt (convenção do App Router) — Semrush: "Robots.txt
// not found". Landing é a única coisa aberta a indexação; app.vincelstudio.com
// (o produto autenticado) tem seu próprio robots.txt bloqueando tudo, ver
// frontend/public/robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vincelstudio.com/sitemap.xml",
  };
}
