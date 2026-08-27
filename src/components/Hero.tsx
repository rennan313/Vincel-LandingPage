import { ArrowRight } from "lucide-react";
import { BlueprintDrawing } from "./BlueprintDrawing";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(214,165,102,0.10),_transparent_55%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-accent-gold uppercase">
            Prancha A-101 — Visão geral
          </p>

          <h1 className="mt-5 font-heading text-4xl font-bold text-text-primary sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Seu escritório,
            <br />
            em uma plataforma.
          </h1>

          <p className="mt-6 max-w-md text-lg text-text-secondary">
            Projetos, clientes, propostas, reuniões e financeiro — tudo em um
            só lugar, feito para a rotina de um escritório de arquitetura.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-gold px-5 py-3 text-sm font-medium text-[#18150e] transition-colors hover:bg-accent-gold-hover"
            >
              Criar conta grátis
              <ArrowRight size={16} />
            </a>
            <a
              href="#painel"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border-card px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-hover"
            >
              Ver como funciona
            </a>
          </div>

          <p className="mt-8 text-sm text-text-muted">
            <span className="font-mono text-accent-gold">340+</span>{" "}
            escritórios de arquitetura no Brasil já organizam a rotina no
            Vincel Studio.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md md:max-w-none">
          <BlueprintDrawing />
        </div>
      </div>
    </section>
  );
}
