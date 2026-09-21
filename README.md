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

Para tracking, preencha `NEXT_PUBLIC_GA4_ID` (GA4 Measurement ID, `G-XXXXXXXXXX`) e `NEXT_PUBLIC_META_PIXEL_ID` (Meta Pixel ID, só números) no mesmo `.env.local` — ver `src/components/Analytics.tsx`. Sem esses valores nenhum script de tracking é injetado, então dev local funciona normalmente sem eles.

**Importante:** `NEXT_PUBLIC_*` é embutida no bundle em *build time*, não em runtime — no Cloud Run isso significa que `--set-env-vars NEXT_PUBLIC_APP_URL=...` (ou GA4/Pixel) no `gcloud run deploy` **não tem efeito**. A URL de produção (`https://app.vincelstudio.com`) está fixada como default do `ARG NEXT_PUBLIC_APP_URL` no `Dockerfile`; os IDs de tracking não têm default (build de produção sai sem tracking até alguém passar os valores reais). Para apontar para outra URL ou ligar o tracking em produção é preciso rebuildar a imagem passando `--build-arg` (ou `--substitutions` no Cloud Build).

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS 4
- Inter, Space Grotesk e JetBrains Mono ([Fontsource](https://fontsource.org/))
- [lucide-react](https://lucide.dev/) para ícones

## Estrutura

- `src/app` — layout raiz e a página (`page.tsx`)
- `src/components` — seções da landing (Header, Hero, Features, ProductPreview, Pricing, FinalCta, Footer) e o desenho técnico (`BlueprintDrawing`)

## Notas

- Vincel é um produto único — `Pricing.tsx` não modela mais planos por porte de escritório (Solo/Escritório/Studio), e sim cadências de cobrança (mensal, trimestral, anual) com desconto crescente sobre o mesmo `MONTHLY_PRICE`. Mantenha `MONTHLY_PRICE`/`QUARTERLY_DISCOUNT`/`YEARLY_DISCOUNT` em sincronia com o preço real cobrado pelo backend (`prisma/seed.ts` / `PlansService`, que é a fonte da verdade quando o escritório efetivamente assina).
