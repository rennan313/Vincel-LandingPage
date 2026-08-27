import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Logo size={26} />
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Vincel Studio. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
