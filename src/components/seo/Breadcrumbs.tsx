import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export interface Crumb {
  label: string;
  /** Ausente no último item (página atual, sem link). */
  href?: string;
}

const SITE_URL = "https://vincelstudio.com";

/** Trilha visual + BreadcrumbList schema (schema.org) — o primeiro item é
 * sempre "Início" (/), implícito: chame com os itens depois dele. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Início", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="breadcrumb" className="border-b border-border-card">
      <JsonLd data={schema} />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-6 py-3 text-xs text-text-muted">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} aria-hidden="true" />}
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="transition-colors hover:text-text-primary">
                  {crumb.label}
                </Link>
              ) : (
                <span className={isLast ? "text-text-primary" : undefined} aria-current={isLast ? "page" : undefined}>
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
