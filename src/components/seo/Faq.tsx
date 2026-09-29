import { Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import type { FaqItem } from "@/content/solutions";

/** <details>/<summary> nativo — sonanche/expande sem JavaScript no cliente
 * (nenhum componente client-side necessário só pra um acordeão). FAQPage
 * schema (schema.org) segue as mesmas perguntas/respostas exibidas. */
export function Faq({ items, title = "Perguntas frequentes" }: { items: FaqItem[]; title?: string }) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="border-t border-border-card">
      <JsonLd data={schema} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">{title}</h2>
        <dl className="mt-8 divide-y divide-border-card">
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-text-primary marker:content-['']">
                <span>{item.question}</span>
                <Plus size={16} className="shrink-0 text-accent-gold transition-transform group-open:rotate-45" />
              </summary>
              <dd className="mt-2 text-sm leading-relaxed text-text-secondary">{item.answer}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
