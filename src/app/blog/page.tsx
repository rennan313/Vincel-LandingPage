import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BLOG_POSTS } from "@/content/blog";
import { OG_IMAGE } from "@/lib/metadata";

const SITE_URL = "https://vincelstudio.com";
const TITLE = "Blog | Vincel Studio";
const DESCRIPTION = "Conteúdo sobre gestão de escritórios de arquitetura — projetos, financeiro, clientes e equipe.";

// noindex enquanto não existir pelo menos um artigo de verdade — uma
// listagem vazia não tem conteúdo único que valha a pena indexar. Remova
// este bloco assim que BLOG_POSTS tiver o primeiro post (ver content/blog.ts).
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
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
  robots: BLOG_POSTS.length === 0 ? { index: false, follow: true } : undefined,
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">Blog</h1>
          <p className="mt-4 text-lg text-text-secondary">{DESCRIPTION}</p>

          {BLOG_POSTS.length === 0 ? (
            <p className="mt-10 rounded-lg border border-border-card bg-surface-card p-6 text-text-secondary">
              Os primeiros artigos estão a caminho. Enquanto isso, veja como o Vincel Studio funciona na{" "}
              <a href="/software-para-arquitetura" className="text-accent-gold underline underline-offset-2">
                página de soluções
              </a>
              .
            </p>
          ) : (
            <ul className="mt-10 space-y-6">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug} className="rounded-lg border border-border-card bg-surface-card p-6">
                  <a href={`/blog/${post.slug}`} className="font-heading text-xl font-bold text-text-primary">
                    {post.title}
                  </a>
                  <p className="mt-2 text-text-secondary">{post.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
