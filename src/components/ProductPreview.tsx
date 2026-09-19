import {
  LayoutDashboard,
  FolderKanban,
  Users,
  HardHat,
  UserCog,
  CreditCard,
} from "lucide-react";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FolderKanban, label: "Projetos" },
  { icon: Users, label: "Clientes" },
  { icon: HardHat, label: "Prestadores" },
  { icon: UserCog, label: "Usuários" },
  { icon: CreditCard, label: "Assinatura" },
];

const STATS = [
  { label: "Projetos ativos", value: "12" },
  { label: "Clientes ativos", value: "34" },
  { label: "Faturamento do mês", value: "R$ 48.200" },
];

export function ProductPreview() {
  return (
    <section id="painel" className="border-t border-border-card">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">
              Prancha A-110 — Painel
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Um resumo do escritório, todo dia, sem abrir planilha.
            </h2>
            <p className="mt-4 text-text-secondary">
              Ao entrar, cada pessoa do time vê o que importa para o seu
              papel: projetos em andamento, clientes ativos e o faturamento
              do mês — atualizados automaticamente conforme o trabalho
              acontece.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-[#292c30] bg-[#151719] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d42]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d42]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3d42]" />
            </div>

            <div className="flex bg-surface-card">
              <div className="hidden w-40 shrink-0 border-r border-[#292c30] bg-[#151719] py-4 sm:block">
                {NAV.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`mx-2 mb-1 flex items-center gap-2.5 rounded-md px-3 py-2 text-xs ${
                      active
                        ? "bg-[#202328] text-accent-gold"
                        : "text-[#b8babe]"
                    }`}
                  >
                    <Icon size={14} strokeWidth={1.75} />
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex-1 p-6">
                <p className="font-heading text-lg font-semibold text-text-primary">
                  Olá, Estúdio Horizonte
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Aqui está um resumo do seu escritório.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {STATS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border-card bg-bg-app p-4"
                    >
                      <p className="text-xs text-text-muted">{label}</p>
                      <p className="mt-1.5 font-heading text-xl font-bold text-text-primary">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
