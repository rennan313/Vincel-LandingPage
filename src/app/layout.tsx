import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

// Absoluta, não localhost/relativa — Next usa isso pra montar as URLs
// absolutas de canonical/OpenGraph. vincelstudio.com (apex) é o host
// canônico; www redireciona pra cá (ver next.config.ts).
const SITE_URL = "https://vincelstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vincel Studio — Plataforma para Escritórios de Arquitetura",
  description:
    "Projetos, clientes, financeiro e portal do cliente — tudo em uma plataforma para escritórios de arquitetura.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Vincel Studio — Plataforma para Escritórios de Arquitetura",
    description:
      "Projetos, clientes, financeiro e portal do cliente — tudo em uma plataforma para escritórios de arquitetura.",
    url: SITE_URL,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
