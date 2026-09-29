import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Faq } from "@/components/seo/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE } from "@/lib/metadata";

const SITE_URL = "https://vincelstudio.com";
const TITLE = "Preços | Vincel Studio";
const DESCRIPTION =
  "Um plano só, pague do jeito que fizer mais sentido: mensal, trimestral ou anual. 15 dias grátis, sem cartão de crédito.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/precos" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/precos`,
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

const FAQ_ITEMS = [
  {
    question: "Existe teste grátis?",
    answer: "Sim, 15 dias grátis em qualquer cadência de cobrança, sem pedir cartão de crédito.",
  },
  {
    question: "Qual a diferença entre os planos mensal, trimestral e anual?",
    answer:
      "Nenhuma funcionalidade — Vincel é um produto único. A diferença é só a cadência de cobrança: quanto maior o período, maior o desconto sobre o valor mensal.",
  },
  {
    question: "Projetos e clientes têm limite?",
    answer: "Não, projetos e clientes são ilimitados em qualquer cadência de cobrança.",
  },
  {
    question: "O portal do cliente está incluído?",
    answer: "Sim, o portal do cliente está incluído em todos os planos, sem custo à parte.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/precos`,
  isPartOf: { "@type": "WebSite", name: "Vincel Studio", url: SITE_URL },
};

export default function PrecosPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <Breadcrumbs items={[{ label: "Preços" }]} />
      <main className="flex-1">
        <h1 className="mx-auto max-w-3xl px-6 pt-16 text-center font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          Preços do Vincel Studio
        </h1>
        <Pricing />
        <Faq items={FAQ_ITEMS} />
      </main>
      <Footer />
    </>
  );
}
