import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Vincel Studio — Plataforma para Escritórios de Arquitetura",
  description:
    "Projetos, clientes, propostas, reuniões e financeiro — tudo em uma plataforma para escritórios de arquitetura.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Vincel Studio — Plataforma para Escritórios de Arquitetura",
    description:
      "Projetos, clientes, propostas, reuniões e financeiro — tudo em uma plataforma para escritórios de arquitetura.",
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
