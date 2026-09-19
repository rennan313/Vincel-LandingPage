import { Check } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";

const PLANS = [
  {
    sheet: "A-111",
    name: "Solo",
    price: "99,90",
    description: "Para arquitetos autônomos administrando poucos projetos.",
    features: [
      "Projetos e clientes ilimitados",
      "1 usuário",
      "Propostas e financeiro básico",
    ],
    highlighted: false,
  },
  {
    sheet: "A-112",
    name: "Escritório",
    price: "159,90",
    description:
      "Para escritórios pequenos e médios com múltiplos projetos ativos.",
    features: [
      "Tudo do plano Solo",
      "Até 10 usuários",
      "Gestão de prestadores",
      "Perfis por função (admin, arquiteto, financeiro)",
    ],
    highlighted: true,
  },
  {
    sheet: "A-113",
    name: "Studio",
    price: "699,90",
    description:
      "Para escritórios maiores com várias equipes e alto volume de projetos.",
    features: [
      "Tudo do plano Escritório",
      "Usuários ilimitados",
      "Múltiplas equipes",
      "Suporte prioritário",
    ],
    highlighted: false,
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
          Um plano para cada tamanho de escritório.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
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
                    Mais escolhido
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-heading text-xl font-bold text-text-primary">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {plan.description}
              </p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-text-muted">R$</span>
                <span className="font-heading text-3xl font-bold text-text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-text-muted">/mês</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
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
                href={`${APP_URL}/register?plan=${plan.name.toLowerCase()}`}
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-accent-gold text-[#18150e] hover:bg-accent-gold-hover"
                    : "border border-border-card text-text-primary hover:bg-surface-hover"
                }`}
              >
                Começar com {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
