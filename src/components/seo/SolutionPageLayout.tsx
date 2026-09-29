import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { Faq } from "@/components/seo/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSolutionBySlug, SOLUTIONS, type SolutionPageContent } from "@/content/solutions";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";
const SITE_URL = "https://vincelstudio.com";

/** Shell compartilhado pelas páginas de solução (/software-para-arquitetura
 * e as 6 páginas de aprofundamento) — Header, breadcrumb, H1/lead, seções
 * (viram card-link quando `linkTo` aponta pra outra página), CTA, FAQ,
 * "veja também" (link interno com anchor text descritivo) e Footer. */
export function SolutionPageLayout({ content }: { content: SolutionPageContent }) {
  const related = content.relatedSlugs
    .map((slug) => getSolutionBySlug(slug))
    .filter((s): s is SolutionPageContent => Boolean(s));

  const hub = SOLUTIONS[0];
  const isHub = content.slug === hub.slug;
  const breadcrumbItems: Crumb[] = isHub
    ? [{ label: content.navLabel }]
    : [{ label: hub.navLabel, href: `/${hub.slug}` }, { label: content.navLabel }];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.title,
    description: content.description,
    url: `${SITE_URL}/${content.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Vincel Studio",
      url: SITE_URL,
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <main className="flex-1">
        <section className="border-b border-border-card">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">{content.h1}</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">{content.lead}</p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-gold px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-gold-hover"
              >
                Criar conta grátis
                <ArrowRight size={16} />
              </a>
              <p className="text-sm text-text-muted">15 dias grátis, sem cartão de crédito.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl space-y-10 px-6 py-16">
          {content.sections.map((section) =>
            section.linkTo ? (
              <Link
                key={section.heading}
                href={`/${section.linkTo}`}
                className="group block rounded-lg border border-border-card bg-surface-card p-6 transition-colors hover:border-accent-gold/40"
              >
                <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-text-primary">
                  {section.heading}
                  <ArrowUpRight
                    size={18}
                    className="text-accent-gold opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </h2>
                <p className="mt-2 text-text-secondary">{section.body}</p>
              </Link>
            ) : (
              <div key={section.heading}>
                <h2 className="font-heading text-xl font-bold text-text-primary">{section.heading}</h2>
                <p className="mt-2 text-text-secondary">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent-gold" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ),
          )}
        </section>

        {related.length > 0 && (
          <section className="border-t border-border-card">
            <div className="mx-auto max-w-3xl px-6 py-12">
              <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">Veja também</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${item.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border-card px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent-gold/40 hover:text-text-primary"
                    >
                      {item.navLabel}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <Faq items={content.faq} />

        <section className="border-t border-border-card">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Comece grátis por 15 dias
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-text-secondary">
              Crie sua conta e organize projetos, clientes e financeiro em uma plataforma feita para escritórios de
              arquitetura.
            </p>
            <a
              href={`${APP_URL}/register`}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-gold-hover"
            >
              Criar conta grátis
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
