import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductPreview } from "@/components/ProductPreview";
import { Pricing } from "@/components/Pricing";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE } from "@/lib/metadata";

const SITE_URL = "https://vincelstudio.com";
const TITLE = "Software para Escritórios de Arquitetura | Vincel Studio";
const DESCRIPTION =
  "Gerencie projetos, clientes, financeiro, equipe e portal do cliente em uma única plataforma para escritórios de arquitetura. Teste grátis por 15 dias.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Vincel Studio",
    locale: "pt_BR",
    type: "website",
    images: OG_IMAGE,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: OG_IMAGE,
  },
};

// SoftwareApplication descreve o produto em si (não a página) — dados
// reais: preço mensal de partida e período de teste grátis já existentes
// em Pricing.tsx/backend (prisma/seed.ts). Sem avaliações/notas (não
// existem de verdade, ver AGENTS/regra "não inventar" do pedido de SEO).
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vincel Studio",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: DESCRIPTION,
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "79.00",
    priceCurrency: "BRL",
    priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    url: `${SITE_URL}/precos`,
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: SITE_URL,
  isPartOf: { "@type": "WebSite", name: "Vincel Studio", url: SITE_URL },
};

export default function Home() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema, webPageSchema]} />
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductPreview />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
