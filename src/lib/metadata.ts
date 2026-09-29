import type { Metadata } from "next";
import type { SolutionPageContent } from "@/content/solutions";

const SITE_URL = "https://vincelstudio.com";

/** Metadata (title/description/canonical/OpenGraph/Twitter) padrão pra uma
 * página de solução — evita repetir o mesmo bloco nos 7 `page.tsx`. A
 * imagem OG vem do opengraph-image.tsx da raiz (aplicado a todas as rotas
 * como fallback), então não precisa ser redeclarada aqui. */
export function solutionMetadata(content: SolutionPageContent): Metadata {
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${content.slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${SITE_URL}/${content.slug}`,
      siteName: "Vincel Studio",
      locale: "pt_BR",
      type: "website",
      images: OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: OG_IMAGE,
    },
  };
}

// O convention file app/opengraph-image.tsx só é herdado automaticamente
// pela própria Home (mesmo segmento) — uma página que declara seu próprio
// `openGraph` (todas aqui declaram) precisa apontar pra imagem explicitamente,
// confirmado testando localmente (og:image sumia em toda rota != "/").
export const OG_IMAGE = [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }];
