import type { NextConfig } from "next";

// Domínio canônico — www redireciona pra cá (ver redirects() abaixo e
// alternates.canonical em app/layout.tsx). Mantém em sincronia com
// SITE_URL em app/layout.tsx e com o sitemap/robots.
const CANONICAL_HOST = "vincelstudio.com";

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      // Semrush: "2 pages have duplicate content/title/meta description"
      // (vincelstudio.com e www.vincelstudio.com serviam o mesmo HTML sem
      // nenhum redirect entre os dois) — www vira o único host indexável.
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${CANONICAL_HOST}` }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Semrush: "3 subdomains don't support HSTS". Sem `preload` de
          // propósito — isso é um compromisso praticamente permanente
          // (lista embutida nos browsers), decisão pra tomar à parte,
          // não algo pra ligar de passagem numa correção de SEO.
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
