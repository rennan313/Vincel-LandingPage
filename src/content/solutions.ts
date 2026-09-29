// Fonte única de conteúdo das páginas de solução (SEO) — usada pelas
// páginas em src/app/<slug>/page.tsx, pelo sitemap (src/app/sitemap.ts) e
// pelos links internos do Footer. Cada afirmação aqui reflete uma feature
// real do produto (ver frontend/src/features/*) — nada inventado.

export interface SolutionSection {
  heading: string;
  body: string;
  bullets?: string[];
  /** Quando definido, a seção vira um card-link pra outra página de
   * solução (usado pela página "hub" /software-para-arquitetura). */
  linkTo?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SolutionPageContent {
  slug: string;
  navLabel: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: SolutionSection[];
  faq: FaqItem[];
  relatedSlugs: string[];
}

export const HUB_SLUG = "software-para-arquitetura";

export const SOLUTIONS: SolutionPageContent[] = [
  {
    slug: HUB_SLUG,
    navLabel: "Software para arquitetura",
    keyword: "software para escritório de arquitetura",
    // Distinto do <title> da Home (que também mira essa palavra-chave) de
    // propósito — mesmo H1 nas duas (pedido explícito do usuário), mas
    // títulos idênticos nas duas páginas seria canibalização de SEO.
    title: "Como Funciona o Software Vincel Studio | Vincel Studio",
    description:
      "Conheça os módulos do Vincel Studio: projetos, clientes, financeiro, equipe e portal do cliente em uma única plataforma para escritórios de arquitetura.",
    h1: "Software para escritórios de arquitetura",
    lead: "Gerencie projetos, clientes, financeiro e equipe em uma única plataforma feita para escritórios de arquitetura.",
    sections: [
      {
        heading: "Gestão completa para escritórios de arquitetura",
        body: "O Vincel Studio substitui a combinação de planilhas soltas, WhatsApp e e-mail que a maioria dos escritórios usa hoje. Projetos, clientes, financeiro, prestadores, agenda e horas ficam num único lugar, organizados do jeito que a rotina de um escritório de arquitetura realmente funciona.",
      },
      {
        heading: "Organize seus projetos",
        body: "Cada projeto tem status, tipo, cronograma em Gantt, materiais especificados por ambiente e documentos centralizados — do estudo preliminar à entrega.",
        linkTo: "gestao-de-projetos-arquitetura",
      },
      {
        heading: "Gerencie seus clientes",
        body: "Cadastro completo de pessoa física ou jurídica, histórico de projetos e um canal direto pra receber pedidos de novo projeto.",
        linkTo: "crm-para-arquitetos",
      },
      {
        heading: "Controle o financeiro",
        body: "Honorários a receber, despesas a pagar, contas fixas e fluxo de caixa projetado — sem planilha paralela.",
        linkTo: "gestao-financeira-arquitetura",
      },
      {
        heading: "Acompanhe sua equipe",
        body: "Perfis de administrador, arquiteto e financeiro — cada pessoa do time vê só o que precisa pra trabalhar — com cronômetro de horas por projeto e fase.",
        linkTo: "controle-de-horas-arquitetura",
      },
      {
        heading: "Portal do cliente",
        body: "O cliente acompanha o andamento, o briefing e a lista de materiais do próprio projeto, e pode pedir um novo projeto direto pela plataforma.",
        linkTo: "portal-do-cliente-arquitetura",
      },
      {
        heading: "Por que usar o Vincel Studio?",
        body: "Porque é feito só pra escritório de arquitetura — não é uma planilha genérica de gestão adaptada, nem um CRM de vendas forçado a caber na rotina de projeto, cliente e obra.",
      },
    ],
    faq: [
      {
        question: "O que é um software para escritório de arquitetura?",
        answer:
          "É uma plataforma que organiza projetos, clientes, financeiro e equipe num só lugar, no lugar de planilhas, e-mail e WhatsApp espalhados. O Vincel Studio foi desenhado especificamente pra esse fluxo de trabalho.",
      },
      {
        question: "Qual o melhor sistema para gerenciar um escritório de arquitetura?",
        answer:
          "Depende do tamanho e da rotina do escritório. O Vincel Studio é feito pra escritórios que querem projetos, financeiro e relacionamento com cliente organizados numa única plataforma, sem depender de planilhas paralelas.",
      },
      {
        question: "O Vincel Studio serve para arquitetos autônomos?",
        answer:
          "Sim. O plano é o mesmo pra qualquer tamanho de escritório — de um arquiteto autônomo a uma equipe maior — e o teste grátis de 15 dias não pede cartão de crédito.",
      },
      {
        question: "Posso gerenciar vários projetos no Vincel?",
        answer: "Sim, projetos e clientes são ilimitados em todos os planos.",
      },
      {
        question: "O Vincel possui gestão financeira?",
        answer:
          "Sim — honorários a receber, despesas a pagar, contas fixas recorrentes e fluxo de caixa projetado por mês.",
      },
      {
        question: "Existe portal para clientes?",
        answer:
          "Sim. O cliente tem login próprio pra acompanhar o andamento do projeto, o briefing e a lista de materiais, e pode solicitar um novo projeto.",
      },
      {
        question: "Existe teste grátis?",
        answer: "Sim, 15 dias grátis, sem cartão de crédito.",
      },
      {
        question: "Preciso instalar algum programa?",
        answer: "Não. O Vincel Studio roda no navegador, sem instalação.",
      },
    ],
    relatedSlugs: [
      "gestao-de-projetos-arquitetura",
      "gestao-financeira-arquitetura",
      "crm-para-arquitetos",
      "portal-do-cliente-arquitetura",
      "controle-de-horas-arquitetura",
      "gestao-de-escritorio-de-arquitetura",
    ],
  },
  {
    slug: "gestao-de-projetos-arquitetura",
    navLabel: "Gestão de projetos",
    keyword: "gestão de projetos de arquitetura",
    title: "Gestão de Projetos de Arquitetura | Vincel Studio",
    description:
      "Organize projetos de arquitetura do estudo preliminar à entrega: cronograma em Gantt, materiais por ambiente, documentos e equipe num só lugar.",
    h1: "Gestão de projetos de arquitetura",
    lead: "Acompanhe cada projeto do estudo preliminar à entrega, com status, cronograma, materiais e documentos sempre visíveis — sem depender de planilhas soltas.",
    sections: [
      {
        heading: "Organize cada etapa do projeto",
        body: "Cada projeto tem um status claro (em andamento, aguardando revisão do cliente, pausado, concluído ou cancelado) e um tipo — nada fica perdido numa aba de planilha.",
      },
      {
        heading: "Acompanhe prazos com cronograma em Gantt",
        body: "A Agenda do Vincel gera uma linha do tempo em Gantt por projeto e um calendário de tarefas, com uma estimativa inicial de prazo calculada a partir da complexidade e da área do projeto — ponto de partida que a equipe ajusta conforme o trabalho avança.",
      },
      {
        heading: "Centralize documentos e materiais",
        body: "Documentos do projeto ficam num só lugar, e a lista de materiais é organizada por ambiente, com status de especificação e sugestões reaproveitadas de outros projetos do escritório.",
      },
      {
        heading: "Acompanhe clientes e equipe no mesmo projeto",
        body: "Cliente, equipe alocada e prestadores envolvidos ficam vinculados ao projeto — sem precisar cruzar informação entre planilhas diferentes.",
      },
    ],
    faq: [
      {
        question: "O Vincel organiza o cronograma do projeto automaticamente?",
        answer:
          "O Vincel estima um cronograma inicial (fases e prazos) a partir da complexidade e da área do projeto, que a equipe acompanha e ajusta na Agenda conforme o trabalho avança.",
      },
      {
        question: "Dá pra acompanhar vários projetos ao mesmo tempo?",
        answer: "Sim, projetos são ilimitados em todos os planos.",
      },
      {
        question: "O cliente também acompanha o projeto?",
        answer:
          "Sim, pelo portal do cliente — sem acesso às informações internas do escritório, só ao andamento, briefing e materiais do próprio projeto dele.",
      },
    ],
    relatedSlugs: [
      "gestao-de-escritorio-de-arquitetura",
      "portal-do-cliente-arquitetura",
      "controle-de-horas-arquitetura",
    ],
  },
  {
    slug: "gestao-financeira-arquitetura",
    navLabel: "Gestão financeira",
    keyword: "gestão financeira para arquitetos",
    title: "Gestão Financeira para Arquitetos | Vincel Studio",
    description:
      "Software financeiro para arquitetos: honorários a receber, despesas a pagar, contas fixas e fluxo de caixa projetado — sem planilha paralela.",
    h1: "Gestão financeira para escritórios de arquitetura",
    lead: "Honorários a receber, despesas a pagar, contas fixas recorrentes e fluxo de caixa projetado — tudo num painel único, sem planilha paralela.",
    sections: [
      {
        heading: "Honorários a receber e despesas a pagar",
        body: "Cada honorário e cada despesa tem status (pendente, pago, atrasado) e vencimento — nunca mais descobrir um atraso só quando o cliente ou o fornecedor cobra.",
      },
      {
        heading: "Contas fixas recorrentes",
        body: "Aluguel, softwares, folha de pagamento e outras despesas fixas do escritório ficam cadastradas uma vez e se repetem automaticamente, mês a mês.",
      },
      {
        heading: "Fluxo de caixa projetado",
        body: "Uma projeção de entradas e saídas para os próximos meses, a partir do que já está lançado — pra enxergar antes se um mês vai fechar no vermelho.",
      },
      {
        heading: "Quanto o escritório gasta em cada categoria",
        body: "Uma média mensal de gasto por categoria (aluguel, softwares, folha, marketing e outras), com a opção de excluir um lançamento pontual e fora do padrão pra não distorcer a média — útil pra separar um gasto atípico (uma reforma única, por exemplo) do custo fixo real.",
      },
    ],
    faq: [
      {
        question: "O sistema financeiro do Vincel substitui uma planilha?",
        answer:
          "Sim — honorários, despesas, contas fixas e fluxo de caixa ficam no mesmo painel, sem precisar manter uma planilha à parte.",
      },
      {
        question: "Dá pra saber quanto o escritório gasta em cada categoria?",
        answer:
          "Sim, o Vincel mostra a média mensal de gasto por categoria, com a opção de excluir um lançamento pontual pra não distorcer a média.",
      },
      {
        question: "O financeiro é só do escritório ou também dos projetos?",
        answer:
          "Os dois — despesas podem ser do escritório (contas fixas, por exemplo) ou de um projeto específico, e entram juntas no fluxo de caixa.",
      },
    ],
    relatedSlugs: [
      "gestao-de-projetos-arquitetura",
      "gestao-de-escritorio-de-arquitetura",
      "precos",
    ],
  },
  {
    slug: "crm-para-arquitetos",
    navLabel: "CRM para arquitetos",
    keyword: "CRM para arquitetos",
    title: "CRM para Arquitetos | Vincel Studio",
    description:
      "CRM para escritório de arquitetura: cadastro completo de clientes, histórico por cliente e um canal direto para pedidos de novo projeto.",
    h1: "CRM para arquitetos",
    lead: "Um cadastro de clientes completo e um canal direto pra receber pedidos de novo projeto — sem depender de e-mail ou WhatsApp solto.",
    sections: [
      {
        heading: "Cadastro completo de cada cliente",
        body: "Pessoa física ou jurídica, com documento, endereço, contato e o histórico de todos os projetos já feitos com aquele cliente — tudo num só lugar.",
      },
      {
        heading: "Um canal direto para novos pedidos",
        body: "Pelo portal do cliente, quem já é cliente do escritório pode solicitar um novo projeto direto pela plataforma — a solicitação chega centralizada pra equipe responder, em vez de se perder numa conversa de WhatsApp.",
      },
      {
        heading: "O que o Vincel não é",
        body: "Vale ser direto: o Vincel não é um CRM de vendas com funil de oportunidades, automação de e-mail ou pontuação de leads. É a organização de cliente e relacionamento que um escritório de arquitetura de fato usa no dia a dia.",
      },
    ],
    faq: [
      {
        question: "O Vincel tem funil de vendas?",
        answer:
          "Não. O Vincel organiza o cadastro de clientes e centraliza os pedidos de novo projeto — não é um CRM de vendas com funil de oportunidades.",
      },
      {
        question: "Como um cliente antigo pede um novo projeto?",
        answer:
          "Pelo portal do cliente, com um botão de solicitar novo projeto — a solicitação cai direto pra equipe do escritório.",
      },
    ],
    relatedSlugs: ["portal-do-cliente-arquitetura", "gestao-de-projetos-arquitetura"],
  },
  {
    slug: "portal-do-cliente-arquitetura",
    navLabel: "Portal do cliente",
    keyword: "portal do cliente arquitetura",
    title: "Portal do Cliente para Arquitetura | Vincel Studio",
    description:
      "Portal para clientes de arquitetura: o cliente acompanha o andamento, o briefing e os materiais do projeto, e solicita um novo projeto pela plataforma.",
    h1: "Portal do cliente para escritórios de arquitetura",
    lead: "Dê ao seu cliente um espaço próprio pra acompanhar o projeto — sem precisar mandar prints, PDFs ou responder a mesma pergunta por WhatsApp toda semana.",
    sections: [
      {
        heading: "O cliente acompanha o andamento",
        body: "Com login próprio, o cliente vê o status de cada um dos seus projetos, sem acesso a nenhuma informação interna do escritório ou de outros clientes.",
      },
      {
        heading: "Briefing e materiais visíveis",
        body: "O briefing do projeto e a lista de materiais especificados por ambiente ficam disponíveis pro cliente acompanhar, no ritmo dele.",
      },
      {
        heading: "Pedir um novo projeto sem sair da plataforma",
        body: "Quem já é cliente do escritório pode solicitar um novo projeto direto pelo portal — a equipe recebe a solicitação centralizada.",
      },
    ],
    faq: [
      {
        question: "O cliente vê os dados de outros clientes do escritório?",
        answer: "Não. O portal do cliente mostra só os projetos daquele cliente específico.",
      },
      {
        question: "O portal do cliente tem custo à parte?",
        answer: "Não, está incluído em todos os planos do Vincel Studio.",
      },
    ],
    relatedSlugs: ["crm-para-arquitetos", "gestao-de-projetos-arquitetura"],
  },
  {
    slug: "controle-de-horas-arquitetura",
    navLabel: "Controle de horas",
    keyword: "controle de horas arquitetura",
    title: "Controle de Horas para Arquitetos | Vincel Studio",
    description:
      "Controle de horas para escritório de arquitetura: cronômetro por projeto e fase, direto na barra lateral, sem planilha de apontamento manual.",
    h1: "Controle de horas para escritórios de arquitetura",
    lead: "Um cronômetro na barra lateral pra iniciar, pausar e retomar — as horas caem direto na fase certa do projeto, sem apontamento manual em planilha.",
    sections: [
      {
        heading: "Cronômetro por projeto e fase",
        body: "Cada arquiteto liga o cronômetro no projeto e na fase em que está trabalhando, pausa quando muda de tarefa e retoma depois — sem depender de lembrar de anotar no fim do dia.",
      },
      {
        heading: "Horas por fase, não só por projeto",
        body: "As horas ficam associadas à fase certa do cronograma, dando visibilidade de onde o tempo da equipe realmente está sendo gasto dentro de cada projeto.",
      },
    ],
    faq: [
      {
        question: "O controle de horas é manual ou automático?",
        answer:
          "É um cronômetro — o arquiteto inicia, pausa e retoma conforme trabalha, em vez de apontar as horas manualmente no fim do dia.",
      },
      {
        question: "As horas ficam vinculadas a um projeto específico?",
        answer: "Sim, a um projeto e a uma fase dentro dele.",
      },
    ],
    relatedSlugs: ["gestao-de-projetos-arquitetura", "gestao-de-escritorio-de-arquitetura"],
  },
  {
    slug: "gestao-de-escritorio-de-arquitetura",
    navLabel: "Gestão de escritório",
    keyword: "gestão de escritório de arquitetura",
    title: "Gestão de Escritório de Arquitetura | Vincel Studio",
    description:
      "Centralize projetos, clientes, financeiro, equipe, prestadores, agenda, horas e documentos do seu escritório de arquitetura em uma única plataforma.",
    h1: "Gestão de escritório de arquitetura",
    lead: "Projetos, clientes, financeiro, equipe, prestadores, agenda, horas e documentos — tudo centralizado numa única plataforma, feita pra rotina de um escritório de arquitetura.",
    sections: [
      {
        heading: "Projetos e clientes",
        body: "Cada projeto com status, cronograma, materiais e documentos; cada cliente com cadastro completo e histórico — sem depender de planilhas cruzadas.",
        linkTo: "gestao-de-projetos-arquitetura",
      },
      {
        heading: "Financeiro do escritório e dos projetos",
        body: "Honorários a receber, despesas a pagar, contas fixas recorrentes e fluxo de caixa projetado, num painel único.",
        linkTo: "gestao-financeira-arquitetura",
      },
      {
        heading: "Equipe e prestadores",
        body: "Perfis de administrador, arquiteto e financeiro por dentro da equipe, e o cadastro dos prestadores e consultores de cada obra (estrutural, elétrico, hidráulico e mais).",
      },
      {
        heading: "Agenda, horas e documentos",
        body: "Cronograma em Gantt e calendário de tarefas na Agenda, cronômetro de horas por projeto e fase, e os documentos de cada projeto centralizados.",
        linkTo: "controle-de-horas-arquitetura",
      },
      {
        heading: "Portal do cliente",
        body: "O cliente acompanha o andamento, o briefing e os materiais do próprio projeto, e pode solicitar um novo projeto pela plataforma.",
        linkTo: "portal-do-cliente-arquitetura",
      },
    ],
    faq: [
      {
        question: "O Vincel serve pra escritórios de qualquer tamanho?",
        answer:
          "Sim — de um arquiteto autônomo a uma equipe maior, o plano e as funcionalidades são os mesmos.",
      },
      {
        question: "Preciso usar todos os módulos desde o início?",
        answer:
          "Não. Projetos, clientes e financeiro já vêm prontos pra usar; agenda, horas e prestadores entram conforme a rotina do escritório precisar.",
      },
    ],
    relatedSlugs: [
      HUB_SLUG,
      "gestao-de-projetos-arquitetura",
      "gestao-financeira-arquitetura",
      "portal-do-cliente-arquitetura",
      "precos",
    ],
  },
];

export function getSolutionBySlug(slug: string): SolutionPageContent | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
