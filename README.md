# Vincel Landing

Landing page pública do [Vincel Studio](https://github.com/rennan313/Vincel-FrontEnd) — plataforma para escritórios de arquitetura.

Next.js (App Router) + TypeScript + Tailwind CSS 4, reaproveitando os tokens de design (cores, tipografia) do app principal (`vincel-front`).

## Rodando localmente

```bash
yarn install
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Configuração

Copie `.env.example` para `.env.local` e ajuste `NEXT_PUBLIC_APP_URL` para a URL do app (`vincel-front`) — é para lá que os botões de "Criar conta grátis" e "Entrar" apontam. Em desenvolvimento isso é lido pelo `next dev`/`next build` direto do `.env.local`.

**Importante:** `NEXT_PUBLIC_*` é embutida no bundle em *build time*, não em runtime — no Cloud Run isso significa que `--set-env-vars NEXT_PUBLIC_APP_URL=...` no `gcloud run deploy` **não tem efeito**. A URL de produção (`https://app.vincelstudio.com`) está fixada como default do `ARG NEXT_PUBLIC_APP_URL` no `Dockerfile`; para apontar para outra URL é preciso rebuildar a imagem passando `--build-arg` (ou `--substitutions` no Cloud Build).

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS 4
- Inter, Space Grotesk e JetBrains Mono ([Fontsource](https://fontsource.org/))
- [lucide-react](https://lucide.dev/) para ícones

## Estrutura

- `src/app` — layout raiz e a página (`page.tsx`)
- `src/components` — seções da landing (Header, Hero, Features, ProductPreview, Pricing, FinalCta, Footer) e o desenho técnico (`BlueprintDrawing`)

## Notas

- O selo "340+ escritórios de arquitetura no Brasil" no Hero replica o texto mock já usado na tela de login do app — troque por um número real antes de publicar.
- Os planos e preços em `Pricing.tsx` refletem o seed atual do backend (`prisma/seed.ts`: Solo R$149,90, Escritório R$349,90, Studio R$699,90); mantenha os dois em sincronia se os preços mudarem.
