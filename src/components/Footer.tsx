import Link from "next/link";
import { Logo } from "./Logo";
import { SOLUTIONS } from "@/content/solutions";

// Estratégia de internal linking (item 20 da auditoria de SEO): toda
// página de solução aparece aqui, com anchor text descritivo — nunca
// "clique aqui". Sem coluna "Institucional" (Sobre/Contato/Privacidade/
// Termos) de propósito: essas páginas ainda não existem e um link pra uma
// rota inexistente vira um 404 — ver "Pendências" na auditoria de SEO.
export function Footer() {
  return (
    <footer className="border-t border-border-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo size={26} />
            <p className="mt-4 max-w-xs text-sm text-text-secondary">
              Plataforma para escritórios de arquitetura — projetos, clientes, financeiro e portal do cliente em um
              só lugar.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-text-muted uppercase">Soluções</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-text-secondary transition-colors hover:text-text-primary">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-text-muted uppercase">Produto</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/precos" className="text-text-secondary transition-colors hover:text-text-primary">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary transition-colors hover:text-text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border-card pt-6">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Vincel Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
