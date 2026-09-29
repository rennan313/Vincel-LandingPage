import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSolutionBySlug } from "@/content/solutions";
import { getBlogPostBySlug, type BlogPost } from "@/content/blog";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";
const SITE_URL = "https://vincelstudio.com";

function formatDate(iso: string): string {
  // timeZone: "UTC" — sem isso, um viewer num fuso atrás de UTC vê a
  // data errada (ex.: "2026-09-29" virando "28 de setembro").
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" });
}

/** Shell compartilhado pelos 8 artigos do blog — Header, breadcrumb, H1/lead
 * com data de publicação, seções, link pra(s) página(s) de solução do
 * assunto, "continue lendo" (outros posts) e Footer. Article/BlogPosting
 * schema com data real, sem autor fictício (organização, não pessoa). */
// Páginas linkáveis que não fazem parte de content/solutions.ts (hoje só
// /precos) — resolvidas aqui pra "Como o Vincel resolve isso" poder
// apontar pra elas também, sem `getSolutionBySlug` engolir o slug em
// silêncio (ele só conhece as páginas de solução).
const EXTRA_PAGES: Record<string, { slug: string; navLabel: string }> = {
  precos: { slug: "precos", navLabel: "Preços" },
};

export function BlogPostLayout({ post }: { post: BlogPost }) {
  const relatedSolutions = post.relatedSolutionSlugs
    .map((slug) => getSolutionBySlug(slug) ?? EXTRA_PAGES[slug])
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedPosts = (post.relatedPostSlugs ?? [])
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Vincel Studio", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Vincel Studio", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.h1 }]} />
      <main className="flex-1">
        <article>
          <div className="mx-auto max-w-2xl px-6 pt-16 pb-4">
            <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">
              {formatDate(post.publishedAt)}
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">{post.h1}</h1>
            <p className="mt-4 text-lg text-text-secondary">{post.lead}</p>
          </div>

          <div className="mx-auto max-w-2xl space-y-8 px-6 py-8">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-xl font-bold text-text-primary">{section.heading}</h2>
                <p className="mt-2 text-text-secondary">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent-gold" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {relatedSolutions.length > 0 && (
            <div className="mx-auto max-w-2xl px-6 py-8">
              <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">Como o Vincel resolve isso</p>
              <ul className="mt-4 space-y-3">
                {relatedSolutions.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-lg border border-border-card bg-surface-card p-4 transition-colors hover:border-accent-gold/40"
                    >
                      <span className="font-medium text-text-primary">{s.navLabel}</span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-accent-gold opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {relatedPosts.length > 0 && (
          <section className="border-t border-border-card">
            <div className="mx-auto max-w-2xl px-6 py-12">
              <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">Continue lendo</p>
              <ul className="mt-4 space-y-3">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="font-medium text-text-primary underline underline-offset-2 hover:text-accent-gold">
                      {p.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="border-t border-border-card">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Comece grátis por 15 dias
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-text-secondary">
              Organize projetos, clientes e financeiro numa plataforma feita para escritórios de arquitetura.
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
