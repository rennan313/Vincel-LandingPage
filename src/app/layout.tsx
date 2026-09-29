import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";

// Absoluta, não localhost/relativa — Next usa isso pra montar as URLs
// absolutas de canonical/OpenGraph. vincelstudio.com (apex) é o host
// canônico; www redireciona pra cá (ver next.config.ts).
const SITE_URL = "https://vincelstudio.com";

// Fallback pra qualquer rota que não declare seu próprio `metadata` — hoje
// nenhuma (cada página em src/app/*/page.tsx tem title/description/
// canonical/OpenGraph próprios), mas fica como rede de segurança. `title`
// aqui NÃO é um template (`%s | ...`) de propósito: cada página já monta
// seu próprio título completo (ex.: lib/metadata.ts), então um template
// duplicaria o sufixo " | Vincel Studio".
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vincel Studio — Plataforma para Escritórios de Arquitetura",
  description:
    "Projetos, clientes, financeiro e portal do cliente — tudo em uma plataforma para escritórios de arquitetura.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    siteName: "Vincel Studio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Organization/WebSite — presentes em toda página (schema.org). Só dados
// verificáveis: nome, URL e o ícone real da marca. Sem endereço, telefone,
// e-mail de contato, redes sociais (`sameAs`) ou data de fundação — nada
// disso está confirmado/existe hoje no site (ver item "Pendências" da
// auditoria de SEO: falta página Sobre/Contato pra isso ficar real).
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vincel Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/app-icon-solid-512-transparent.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vincel Studio",
  url: SITE_URL,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
