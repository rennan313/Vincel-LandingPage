import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Convenção de arquivo do App Router — Next aplica esta imagem como
// og:image (e, via auto-fill, twitter:image) em TODA rota que não declare
// a sua própria (nenhuma declara hoje). Ver lib/metadata.ts.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const iconPath = join(process.cwd(), "public/brand/app-icon-solid-512-transparent.png");
  const iconBase64 = await readFile(iconPath, "base64");
  const iconSrc = `data:image/png;base64,${iconBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#151719",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={iconSrc} width={72} height={72} alt="" />
          <span style={{ fontSize: 56, fontWeight: 800, color: "#f4f2ee" }}>
            Vincel <span style={{ color: "#d6a566" }}>Studio</span>
          </span>
        </div>
        <div style={{ marginTop: 36, fontSize: 34, color: "#f4f2ee", textAlign: "center", padding: "0 80px" }}>
          Software para escritórios de arquitetura
        </div>
        <div style={{ marginTop: 20, fontSize: 22, color: "#b8babe" }}>
          Projetos · Clientes · Financeiro · Portal do cliente
        </div>
      </div>
    ),
    { ...size },
  );
}
