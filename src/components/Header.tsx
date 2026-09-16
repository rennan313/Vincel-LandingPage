import Link from "next/link";
import { Logo } from "./Logo";

// Aponta para o app (vincel-front). Configure NEXT_PUBLIC_APP_URL no deploy.
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";
const LOGIN_URL = APP_URL;
const REGISTER_URL = `${APP_URL}/register`;
const CLIENT_PORTAL_URL = `${APP_URL}/portal/login`;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-card/70 bg-bg-app/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#topo">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
          <a href="#modulos" className="transition-colors hover:text-text-primary">
            Módulos
          </a>
          <a href="#painel" className="transition-colors hover:text-text-primary">
            Como funciona
          </a>
          <a href="#planos" className="transition-colors hover:text-text-primary">
            Planos
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CLIENT_PORTAL_URL}
            className="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:inline"
          >
            Área do cliente
          </a>
          <span className="hidden h-4 w-px bg-border-card sm:inline" aria-hidden="true" />
          <a
            href={LOGIN_URL}
            className="hidden text-sm text-text-secondary transition-colors hover:text-text-primary sm:inline"
          >
            Entrar
          </a>
          <a
            href={REGISTER_URL}
            className="rounded-md bg-accent-gold px-4 py-2 text-sm font-medium text-[#18150e] transition-colors hover:bg-accent-gold-hover"
          >
            Criar conta grátis
          </a>
        </div>
      </div>
    </header>
  );
}
