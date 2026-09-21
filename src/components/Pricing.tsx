import { Check } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";

// Vincel is a single product — these are billing cadences, not feature
// tiers. Keep MONTHLY_PRICE/discounts in sync with backend/prisma/seed.ts
// (PlansService is the actual source of truth once an office subscribes;
// this is just the marketing-site mirror of the same numbers).
const MONTHLY_PRICE = 79.0;
const QUARTERLY_DISCOUNT = 0.15;
const YEARLY_DISCOUNT = 0.2;

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const FEATURES = [
  "Projetos e clientes ilimitados",
  "Propostas e financeiro",
  "Gestão de prestadores",
  "Perfis por função (admin, arquiteto, financeiro)",
];

const PLANS = [
  {
    key: "mensal",
    sheet: "A-111",
    name: "Mensal",
    price: formatBRL(MONTHLY_PRICE),
    period: "/mês",
    description: "Cobrança mensal, sem compromisso de permanência.",
    savingsLabel: null as string | null,
    highlighted: false,
  },
  {
    key: "trimestral",
    sheet: "A-112",
    name: "Trimestral",
    price: formatBRL(round2(MONTHLY_PRICE * 3 * (1 - QUARTERLY_DISCOUNT))),
    period: "/trimestre",
    description: "Cobrança a cada 3 meses.",
    savingsLabel: `-${Math.round(QUARTERLY_DISCOUNT * 100)}%`,
    highlighted: false,
  },
  {
    key: "anual",
    sheet: "A-113",
    name: "Anual",
    price: formatBRL(round2(MONTHLY_PRICE * 12 * (1 - YEARLY_DISCOUNT))),
    period: "/ano",
    description: "Cobrança anual — a melhor oferta.",
    savingsLabel: `-${Math.round(YEARLY_DISCOUNT * 100)}%`,
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="planos" className="border-t border-border-card">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">
          Prancha A-111 a A-113 — Planos
        </p>
        <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          Um plano só, pague do jeito que fizer mais sentido.
        </h2>
        <p className="mt-3 text-text-secondary">
          Todos começam com 15 dias grátis, sem cartão de crédito. Quanto
          maior o período, maior o desconto.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              className={`flex flex-col rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-accent-gold bg-surface-card"
                  : "border-border-card bg-surface-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted">
                  {plan.sheet}
                </span>
                {plan.highlighted && (
                  <span className="rounded-full bg-accent-gold/15 px-2.5 py-0.5 text-[11px] font-medium text-accent-gold">
                    Melhor oferta
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <h3 className="font-heading text-xl font-bold text-text-primary">
                  {plan.name}
                </h3>
                {plan.savingsLabel && (
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-500">
                    {plan.savingsLabel}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-text-secondary">
                {plan.description}
              </p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-text-muted">R$</span>
                <span className="font-heading text-3xl font-bold text-text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-text-muted">{plan.period}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent-gold"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/register?billing=${plan.key}`}
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-accent-gold text-white hover:bg-accent-gold-hover"
                    : "border border-border-card text-text-primary hover:bg-surface-hover"
                }`}
              >
                Começar com o plano {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
