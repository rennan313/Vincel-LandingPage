// Estrutura pronta pro blog — sem posts fabricados só pra preencher URL
// (pedido explícito: "não criar artigos vazios"). Quando um artigo de
// verdade for escrito, ele entra neste array e ganha automaticamente uma
// rota em /blog/[slug] (crie esse arquivo quando o primeiro post existir)
// e uma entrada no sitemap (ver app/sitemap.ts).
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
}

export const BLOG_POSTS: BlogPost[] = [];

// Títulos sugeridos pelo briefing de SEO — pautas, não posts publicados.
// Mantido aqui só como lembrete editorial; não vira rota até ter conteúdo.
export const PLANNED_TOPICS = [
  "Como gerenciar um escritório de arquitetura",
  "Como organizar um escritório de arquitetura",
  "Gestão financeira de escritório de arquitetura",
  "Como controlar horas como arquiteto",
  "Software para escritório de arquitetura: o que avaliar",
  "Como organizar projetos de arquitetura",
  "Como fazer gestão de clientes na arquitetura",
  "Como melhorar a gestão de um escritório de arquitetura",
];
