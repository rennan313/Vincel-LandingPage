import { ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";

export function FinalCta() {
  return (
    <section className="border-t border-border-card">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          Tire o escritório da planilha.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-text-secondary">
          Crie sua conta grátis e organize projetos, clientes e financeiro em
          uma plataforma feita para escritórios de arquitetura.
        </p>
        <a
          href={`${APP_URL}/register`}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-gold-hover"
        >
          Criar conta grátis
          <ArrowRight size={16} />
        </a>
        <p className="mt-4 text-sm text-text-muted">
          15 dias grátis, sem cartão de crédito.
        </p>
      </div>
    </section>
  );
}
