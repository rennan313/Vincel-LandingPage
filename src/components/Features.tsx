import {
  FolderKanban,
  Users,
  Globe,
  Wallet,
  HardHat,
  UserCog,
  GanttChartSquare,
  Timer,
} from "lucide-react";

const MODULES = [
  {
    sheet: "A-102",
    icon: FolderKanban,
    title: "Projetos",
    description:
      "Acompanhe cada projeto do estudo preliminar à entrega, com status, tipo e cliente sempre visíveis.",
  },
  {
    sheet: "A-103",
    icon: Users,
    title: "Clientes",
    description:
      "Cadastro completo de pessoa física ou jurídica, com endereço, contato e histórico em um só lugar.",
  },
  {
    sheet: "A-104",
    icon: Globe,
    title: "Portal do cliente",
    description:
      "Compartilhe o andamento, o briefing e a lista de materiais com o cliente — e receba pedidos de novo projeto direto pela plataforma.",
  },
  {
    sheet: "A-105",
    icon: Wallet,
    title: "Financeiro",
    description:
      "Honorários a receber, despesas a pagar, contas fixas e fluxo de caixa projetado — tudo em um painel único, sem planilha paralela.",
  },
  {
    sheet: "A-106",
    icon: HardHat,
    title: "Prestadores",
    description:
      "Organize os prestadores e consultores que entram em cada obra: estrutural, elétrico, hidráulico e mais.",
  },
  {
    sheet: "A-107",
    icon: UserCog,
    title: "Equipe",
    description:
      "Perfis de administrador, arquiteto e financeiro — cada pessoa vê só o que precisa para trabalhar.",
  },
  {
    sheet: "A-108",
    icon: GanttChartSquare,
    title: "Agenda",
    description:
      "Linha do tempo em Gantt por projeto e calendário de tarefas, sincronizados com as fases do cronograma.",
  },
  {
    sheet: "A-109",
    icon: Timer,
    title: "Controle de horas",
    description:
      "Cronômetro na barra lateral para iniciar, pausar e retomar — as horas caem direto na fase certa do projeto.",
  },
];

export function Features() {
  return (
    <section id="modulos" className="border-t border-border-card">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">
          Prancha A-102 a A-109 — Módulos do sistema
        </p>
        <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          Cada módulo resolve uma parte real da rotina do escritório.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border-card bg-border-card sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map(({ sheet, icon: Icon, title, description }) => (
            <div key={sheet} className="bg-surface-card p-7">
              <div className="flex items-center justify-between">
                <Icon className="text-accent-gold" size={22} strokeWidth={1.75} />
                <span className="font-mono text-[11px] text-text-muted">
                  {sheet}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
