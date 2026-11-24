"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  Clock,
  Folder,
  Globe,
  LayoutPanelLeft,
  MoreVertical,
  PanelsTopLeft,
  Settings,
  Users,
} from "lucide-react";
import { createReveal, FULL_VIEW, type Reveal, type View } from "./hero/reveal";
import s from "./Hero.module.css";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173";

// Cada fase do projeto diz quanto da casa já é real e o que o painel mostra.
// `today` é a posição do marcador "hoje" no cronograma (fração de maio a outubro).
const PHASES = [
  { name: "Estudo", reveal: 0.1, today: 0.057, hours: 32, fees: 28800, portal: ["novo comentário", "no estudo"] },
  { name: "Anteprojeto", reveal: 0.36, today: 0.24, hours: 90, fees: 24000, portal: ["cliente aprovou", "o estudo"] },
  { name: "Executivo", reveal: 0.62, today: 0.563, hours: 186, fees: 18000, portal: ["cliente aprovou", "o anteprojeto"] },
  { name: "Obra", reveal: 1, today: 0.94, hours: 226, fees: 6000, portal: ["diário de obra", "publicado"] },
] as const;

// Cronograma de maio a outubro: início e fim de cada etapa (fração da linha do tempo)
const TASKS = [
  { name: "Anteprojeto", a: 0.024, b: 0.229 },
  { name: "Executivo", a: 0.173, b: 0.652 },
  { name: "Compatibilização", a: 0.504, b: 0.763 },
  { name: "Orçamento", a: 0.712, b: 0.898 },
];
const MONTHS = ["MAI", "JUN", "JUL", "AGO", "SET", "OUT"];

// Em telas estreitas a imagem é recortada na casa (o lado esquerdo das pranchas é papel em branco)
const NARROW_VIEW: View = { x: 420, y: 120, w: 1116, h: 744 };

const brl = (v: number) => "R$ " + v.toLocaleString("pt-BR");

function CountUp({ value, format }: { value: number; format: (v: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const from = useRef(value);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const start = from.current;
    from.current = value;
    if (start === value || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = format(value);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / 900);
      const e = 1 - Math.pow(1 - k, 3);
      el.textContent = format(Math.round(start + (value - start) * e));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, format]);
  return <span ref={ref}>{format(value)}</span>;
}
const fmtHours = (v: number) => `${v} h`;

export function Hero() {
  const [phase, setPhase] = useState(2);
  const [ready, setReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<Reveal | null>(null);
  const phaseRef = useRef(2);
  const idleRef = useRef<number | undefined>(undefined);
  const introRef = useRef<number[]>([]);
  const scrollOwned = useRef(false);

  const goTo = useCallback((i: number, revealTo?: number) => {
    revealRef.current?.setProgress(revealTo ?? PHASES[i].reveal);
    if (phaseRef.current !== i) {
      phaseRef.current = i;
      setPhase(i);
    }
  }, []);

  const loop = useCallback(() => {
    window.clearInterval(idleRef.current);
    if (scrollOwned.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    idleRef.current = window.setInterval(() => goTo((phaseRef.current + 1) % 4), 4500);
  }, [goTo]);

  // Qualquer interação assume o controle: a entrada para de avançar as fases sozinha
  const takeOver = useCallback(() => {
    introRef.current.forEach((id) => window.clearTimeout(id));
    introRef.current = [];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let reveal: Reveal;
    try {
      reveal = createReveal(canvas, {
        drawingSrc: "/hero/casa-desenho.jpg",
        renderSrc: "/hero/casa-render.jpg",
        reduced,
        onReady: () => setReady(true),
      });
    } catch {
      return;
    }
    revealRef.current = reveal;

    const wide = matchMedia("(min-width: 1200px)");
    const applyView = () => reveal.setView(wide.matches ? FULL_VIEW : NARROW_VIEW);
    applyView();
    wide.addEventListener("change", applyView);

    // Entrada: a casa começa em lápis e se constrói até o Executivo
    if (reduced) {
      reveal.setProgress(PHASES[2].reveal);
    } else {
      reveal.setProgress(0.02);
      introRef.current = [
        window.setTimeout(() => goTo(0, 0.02), 0),
        window.setTimeout(() => goTo(1), 1100),
        window.setTimeout(() => goTo(2), 2300),
        window.setTimeout(loop, 2600),
      ];
    }

    // A rolagem leva do estudo à obra enquanto o hero sai da tela; no topo, o laço volta
    const onScroll = () => {
      let p: number;
      if (wide.matches) {
        // palco no topo da página: conta a partir do início da rolagem
        p = window.scrollY / Math.max(1, section.offsetHeight * 0.75);
      } else {
        // imagem no meio da página: conta a partir de quando ela entra bem na tela
        const r = canvas.getBoundingClientRect();
        const vh = window.innerHeight;
        p = (vh * 0.6 - r.top) / Math.max(1, vh * 0.8);
      }
      p = Math.min(1, Math.max(0, p));
      if (p < 0.02) {
        if (scrollOwned.current) {
          scrollOwned.current = false;
          loop();
        }
        return;
      }
      takeOver();
      scrollOwned.current = true;
      window.clearInterval(idleRef.current);
      const r = PHASES[0].reveal + (1 - PHASES[0].reveal) * p;
      let i = 0;
      PHASES.forEach((P, k) => {
        if (r >= P.reveal - 0.02) i = k;
      });
      goTo(i, r);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Pausa quando o hero não está visível ou a aba está escondida
    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      reveal.pause(!visible || document.hidden);
    });
    io.observe(section);
    const onVis = () => {
      reveal.pause(!visible || document.hidden);
      if (document.hidden) window.clearInterval(idleRef.current);
      else loop();
    };
    document.addEventListener("visibilitychange", onVis);

    const intro = introRef.current;
    return () => {
      intro.forEach((id) => window.clearTimeout(id));
      window.clearInterval(idleRef.current);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
      wide.removeEventListener("change", applyView);
      io.disconnect();
      reveal.destroy();
      revealRef.current = null;
    };
  }, [goTo, loop, takeOver]);

  const choose = (i: number) => {
    takeOver();
    goTo(i);
    loop();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = Math.max(0, Math.min(3, phase + (e.key === "ArrowRight" ? 1 : -1)));
    choose(n);
    (e.currentTarget.querySelectorAll("button")[n] as HTMLButtonElement | undefined)?.focus();
  };

  const P = PHASES[phase];

  return (
    <section id="topo" ref={sectionRef} className={s.hero} aria-labelledby="hero-title">
      <div className={s.stage}>
        <div
          className={s.art}
          onPointerMove={(e) => {
            if (e.pointerType !== "touch") revealRef.current?.paintAt(e.clientX, e.clientY);
          }}
        >
          {/* Antes do canvas ficar pronto (e sem JavaScript), a prancha aparece parada */}
          <Image
            src="/hero/casa-render.jpg"
            alt="Casa térrea de concreto e madeira com jardim, metade em desenho a lápis e metade construída"
            fill
            priority
            sizes="100vw"
            className={`${s.still} ${ready ? s.hidden : ""}`}
          />
          <canvas ref={canvasRef} className={`${s.canvas} ${ready ? s.shown : ""}`} aria-hidden="true" />
          <div className={s.washLeft} aria-hidden="true" />
          <div className={s.washTop} aria-hidden="true" />
        </div>

        <div className={s.copy}>
          <p className={s.label} style={{ "--d": 0 } as React.CSSProperties}>
            Prancha A-101 — Visão geral
          </p>
          <h1 id="hero-title" className={s.title} style={{ "--d": 1 } as React.CSSProperties}>
            Software para <br className={s.brWide} />
            escritórios <br />
            de arquitetura.
          </h1>
          <p className={s.sub} style={{ "--d": 2 } as React.CSSProperties}>
            Seu escritório, em uma plataforma.
          </p>
          <p className={s.para} style={{ "--d": 3 } as React.CSSProperties}>
            Projetos, clientes, financeiro, equipe e portal do cliente — do estudo preliminar à obra entregue.
          </p>
          <div className={s.ctas} style={{ "--d": 4 } as React.CSSProperties}>
            <a href={`${APP_URL}/register`} className={s.btnGold}>
              Criar conta grátis
              <ArrowRight aria-hidden="true" />
            </a>
            <a href="#painel" className={s.btnWhite}>
              Ver como funciona
            </a>
          </div>
          <p className={s.note} style={{ "--d": 5 } as React.CSSProperties}>
            15 dias grátis, sem cartão de crédito.
          </p>
        </div>

        {/* O painel do Vincel: a fase escolhida aqui controla a imagem */}
        <div className={s.panelWrap}>
          <article className={s.panel} aria-label="Exemplo de projeto no Vincel: Casa Pinheiros">
            <aside className={s.side} aria-hidden="true">
              <span className={s.sideLogo}>
                <Image src="/brand/app-icon-solid-512-transparent.png" alt="" width={18} height={18} />
                Vincel
              </span>
              <LayoutPanelLeft className={s.on} />
              <Folder />
              <Users />
              <CircleDollarSign />
              <Clock />
              <BarChart3 />
              <Settings />
            </aside>

            <div className={s.main}>
              <header className={s.pjHead}>
                <span className={s.pjIcon} aria-hidden="true">
                  <PanelsTopLeft />
                </span>
                <div>
                  <h2 className={s.pjTitle}>Casa Pinheiros</h2>
                  <p className={s.pjKind}>Residencial</p>
                </div>
                <span className={s.chip}>A-101</span>
                <MoreVertical className={s.dots} aria-hidden="true" />
              </header>

              <p className={s.lbl}>Fases do projeto</p>
              <div
                className={s.phases}
                role="radiogroup"
                aria-label="Fase do projeto (muda a imagem da casa)"
                onKeyDown={onKey}
                style={{ "--fill": phase / 3 } as React.CSSProperties}
              >
                <span className={s.track} aria-hidden="true">
                  <i />
                </span>
                {PHASES.map((ph, i) => (
                  <button
                    key={ph.name}
                    type="button"
                    role="radio"
                    aria-checked={i === phase}
                    tabIndex={i === phase ? 0 : -1}
                    className={`${s.ph} ${i === phase ? s.phOn : ""} ${i < phase ? s.phDone : ""}`}
                    onClick={() => choose(i)}
                  >
                    <span>{ph.name}</span>
                    <i aria-hidden="true" />
                  </button>
                ))}
              </div>

              <p className={s.lbl}>Cronograma</p>
              <div className={s.gantt} style={{ "--today": P.today } as React.CSSProperties}>
                <div className={s.months} aria-hidden="true">
                  {MONTHS.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <ul className={s.rows}>
                  {TASKS.map((t) => {
                    const done = Math.max(0, Math.min(1, (P.today - t.a) / (t.b - t.a)));
                    return (
                      <li key={t.name} className={s.row}>
                        <span className={s.rowName}>{t.name}</span>
                        <span className={s.lane}>
                          <i
                            className={s.bar}
                            style={{ "--a": t.a, "--b": t.b, "--done": done } as React.CSSProperties}
                          >
                            <i />
                          </i>
                        </span>
                      </li>
                    );
                  })}
                  <li className={s.todayCol} aria-hidden="true">
                    <i className={s.today} />
                  </li>
                </ul>
              </div>

              <div className={s.stats}>
                <div className={s.stat}>
                  <Clock aria-hidden="true" />
                  <span>Horas</span>
                  <b>
                    <CountUp value={P.hours} format={fmtHours} />
                  </b>
                </div>
                <div className={s.stat}>
                  <CircleDollarSign aria-hidden="true" />
                  <span>A receber</span>
                  <b>
                    <CountUp value={P.fees} format={brl} />
                  </b>
                </div>
                <div className={`${s.stat} ${s.portal}`}>
                  <Globe aria-hidden="true" />
                  <span>Portal</span>
                  <b key={phase} aria-live="polite">
                    {P.portal[0]}
                    <br />
                    {P.portal[1]}
                  </b>
                  <i className={s.live} aria-hidden="true" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
