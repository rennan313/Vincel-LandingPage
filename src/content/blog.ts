// Conteúdo dos artigos do blog — cada afirmação reflete uma feature real
// do Vincel Studio (ver frontend/src/features/*), igual content/solutions.ts.
// Nada de dado, prazo ou estatística inventada; nenhuma comparação
// injusta com alternativas (planilha inclusa).

export interface BlogSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  publishedAt: string; // ISO date
  sections: BlogSection[];
  /** Páginas de solução (content/solutions.ts) relevantes pro assunto. */
  relatedSolutionSlugs: string[];
  /** Outros posts do blog relacionados. */
  relatedPostSlugs?: string[];
}

const PUBLISHED = "2026-09-29";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-gerenciar-escritorio-arquitetura",
    keyword: "como gerenciar um escritório de arquitetura",
    title: "Como Gerenciar um Escritório de Arquitetura | Vincel Studio",
    description:
      "Um guia prático de como gerenciar um escritório de arquitetura: projetos, clientes, financeiro, equipe e prestadores organizados num só lugar.",
    h1: "Como gerenciar um escritório de arquitetura",
    lead: "Gerenciar um escritório de arquitetura é, na prática, gerenciar cinco coisas ao mesmo tempo: projetos, clientes, financeiro, equipe e prestadores. O problema não é falta de esforço — é falta de um lugar único onde essas cinco coisas se conversam.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "O sintoma mais comum: informação espalhada",
        body: "Na maioria dos escritórios, o projeto vive numa pasta, o financeiro numa planilha, o contato do cliente no celular do arquiteto e o combinado com o prestador numa conversa de WhatsApp que ninguém mais acha. Cada ferramenta funciona sozinha, mas nenhuma delas sabe da outra — e quem paga o preço disso é quem precisa responder rápido: “esse cliente já pagou a segunda parcela?”, “quem tá tocando esse projeto essa semana?”.",
      },
      {
        heading: "Projetos: um status por vez, não uma pasta por projeto",
        body: "Cada projeto do escritório deveria ter uma resposta clara e visível pra “em que pé está isso”: em andamento, aguardando revisão do cliente, pausado, concluído ou cancelado. Um cronograma em Gantt e um calendário de tarefas evitam que prazo vire surpresa, e materiais organizados por ambiente evitam que a especificação se perca entre e-mails.",
      },
      {
        heading: "Financeiro: separado do resto, mas visível junto",
        body: "Honorários a receber, despesas a pagar e contas fixas recorrentes (aluguel, softwares, folha) precisam estar no mesmo painel — com um fluxo de caixa que projeta os próximos meses a partir do que já foi lançado. Isso é o que permite ver um mês no vermelho antes dele acontecer, não depois.",
      },
      {
        heading: "Clientes e prestadores: cadastro completo, não contato solto",
        body: "Um cadastro completo de cada cliente (pessoa física ou jurídica, com histórico de projetos) e dos prestadores que entram em cada obra (estrutural, elétrico, hidráulico e outros) tira essa informação da cabeça de uma pessoa só e coloca no escritório como um todo.",
      },
      {
        heading: "Equipe: cada pessoa vendo só o que precisa",
        body: "Um administrador, um arquiteto e a pessoa do financeiro não precisam ver a mesma tela — cada perfil deveria mostrar só o que aquela função realmente usa no dia a dia.",
      },
    ],
    relatedSolutionSlugs: ["gestao-de-escritorio-de-arquitetura", "gestao-de-projetos-arquitetura", "gestao-financeira-arquitetura"],
    relatedPostSlugs: ["rotina-escritorio-arquitetura", "software-para-escritorio-arquitetura"],
  },
  {
    slug: "como-organizar-projetos-arquitetura",
    keyword: "como organizar projetos de arquitetura",
    title: "Como Organizar Projetos de Arquitetura | Vincel Studio",
    description:
      "Como organizar projetos de arquitetura do estudo preliminar à entrega: status, cronograma em Gantt, materiais por ambiente e documentos centralizados.",
    h1: "Como organizar projetos de arquitetura",
    lead: "Um projeto de arquitetura desorganizado quase nunca é um projeto mal feito — é um projeto cuja informação está no lugar errado. A organização entra antes da execução: status, prazo, material e documento, todos visíveis no mesmo lugar.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "Comece pelo status, não pela pasta",
        body: "Cada projeto deveria ter um status único e claro a qualquer momento — em andamento, aguardando revisão do cliente, pausado, concluído ou cancelado — em vez de viver espalhado entre pastas com nomes tipo “final”, “final_v2” e “final_revisado”.",
      },
      {
        heading: "Cronograma em Gantt, com uma estimativa de partida",
        body: "Uma estimativa inicial de prazo, calculada a partir da complexidade e da área do projeto, dá um ponto de partida real pro cronograma — que a equipe ajusta na Agenda conforme o trabalho avança, sem depender de recalcular tudo manualmente numa planilha a cada mudança.",
      },
      {
        heading: "Materiais organizados por ambiente",
        body: "Especificar material sala por sala, com status de cada item e sugestões reaproveitadas de projetos anteriores do escritório, evita a pergunta clássica: “qual foi mesmo o piso que a gente especificou pra esse quarto?”.",
      },
      {
        heading: "Documentos num só lugar",
        body: "Plantas, memoriais e revisões centralizados no próprio projeto — não numa pasta do Google Drive cujo link se perde na conversa de três meses atrás.",
      },
      {
        heading: "O cliente acompanha, sem precisar perguntar",
        body: "Um portal próprio, onde o cliente vê o andamento, o briefing e os materiais do projeto dele, tira do arquiteto o trabalho de responder “como tá indo?” toda semana.",
      },
    ],
    relatedSolutionSlugs: ["gestao-de-projetos-arquitetura", "portal-do-cliente-arquitetura"],
    relatedPostSlugs: ["como-controlar-horas-arquiteto", "como-gerenciar-escritorio-arquitetura"],
  },
  {
    slug: "gestao-financeira-escritorio-arquitetura",
    keyword: "controle financeiro escritório de arquitetura",
    title: "Como Controlar o Financeiro de um Escritório de Arquitetura | Vincel Studio",
    description:
      "Controle financeiro de escritório de arquitetura: honorários a receber, despesas a pagar, contas fixas e fluxo de caixa projetado, sem planilha paralela.",
    h1: "Como controlar o financeiro de um escritório de arquitetura",
    lead: "O financeiro de um escritório de arquitetura tem uma particularidade: honorário de projeto (parcelado, por etapa, mensal) convive com despesa fixa de escritório (aluguel, softwares, folha) e com despesa variável de obra. Misturar tudo numa planilha só é onde o controle começa a falhar.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "Separe o que é receita do que é despesa fixa",
        body: "Honorários a receber e despesas a pagar deveriam ser duas listas com status próprio (pendente, pago, atrasado) e vencimento — não linhas misturadas numa mesma aba de planilha.",
      },
      {
        heading: "Contas fixas não deveriam ser lançadas todo mês",
        body: "Aluguel, softwares, folha de pagamento e outras despesas recorrentes cadastradas uma vez, repetindo automaticamente mês a mês, tiram do financeiro o trabalho manual mais chato e mais fácil de esquecer.",
      },
      {
        heading: "Fluxo de caixa: ver o mês antes dele fechar",
        body: "Uma projeção de entradas e saídas dos próximos meses, a partir do que já está lançado, é o que separa “descobrir que o mês fechou no vermelho” de “ver isso vindo com antecedência”.",
      },
      {
        heading: "Saber onde o dinheiro realmente vai",
        body: "Uma média mensal de gasto por categoria (aluguel, softwares, folha, marketing e outras) — com a opção de excluir um lançamento pontual e fora do padrão, como uma reforma única, pra não distorcer a média — mostra o custo fixo real do escritório, separado do que foi exceção.",
      },
    ],
    relatedSolutionSlugs: ["gestao-financeira-arquitetura", "gestao-de-escritorio-de-arquitetura"],
    relatedPostSlugs: ["planilha-ou-software-arquitetura", "como-gerenciar-escritorio-arquitetura"],
  },
  {
    slug: "software-para-escritorio-arquitetura",
    keyword: "software para escritório de arquitetura",
    title: "Software para Escritório de Arquitetura: o Que Avaliar | Vincel Studio",
    description:
      "O que avaliar antes de escolher um software para escritório de arquitetura: projetos, financeiro, clientes, equipe, portal do cliente e teste grátis.",
    h1: "Software para escritório de arquitetura: o que avaliar",
    lead: "Existem várias ferramentas genéricas de gestão no mercado — a pergunta certa não é “qual é a melhor”, é “essa ferramenta entende a rotina de um escritório de arquitetura, ou eu que vou ter que adaptar a rotina do escritório pra caber nela?”.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "Gestão de projetos, não só uma lista de tarefas",
        body: "Um projeto de arquitetura tem status, cronograma, material por ambiente e documento — verifique se o software organiza isso de verdade, ou se ele só oferece um quadro genérico de tarefas que qualquer time usaria.",
        bullets: [
          "Status claro por projeto (em andamento, aguardando cliente, concluído)",
          "Cronograma em Gantt, não só uma lista",
          "Materiais organizados por ambiente, com histórico reaproveitável",
        ],
      },
      {
        heading: "Financeiro de verdade, não um campo de “valor do contrato”",
        body: "Honorários a receber, despesas a pagar, contas fixas recorrentes e fluxo de caixa projetado são o mínimo — um sistema que só guarda “quanto o cliente vai pagar” não substitui uma planilha financeira de verdade.",
      },
      {
        heading: "Portal do cliente incluso, não um módulo à parte",
        body: "Dar ao cliente um espaço próprio pra acompanhar o projeto reduz o volume de mensagens repetidas — vale checar se isso já vem no produto ou se é uma funcionalidade vendida separadamente.",
      },
      {
        heading: "Perfis por função",
        body: "Administrador, arquiteto e financeiro deveriam ver telas diferentes, cada uma mostrando só o que aquela pessoa precisa pra trabalhar — não o mesmo painel genérico pra todo mundo.",
      },
      {
        heading: "Teste antes de assinar",
        body: "Um período de teste grátis, sem pedir cartão de crédito, é o jeito mais direto de responder “isso serve pro meu escritório” antes de qualquer decisão de assinatura.",
      },
    ],
    relatedSolutionSlugs: ["software-para-arquitetura", "precos"],
    relatedPostSlugs: ["planilha-ou-software-arquitetura", "como-gerenciar-escritorio-arquitetura"],
  },
  {
    slug: "como-fazer-gestao-de-clientes-arquitetura",
    keyword: "gestão de clientes escritório de arquitetura",
    title: "Como Fazer Gestão de Clientes em um Escritório de Arquitetura | Vincel Studio",
    description:
      "Gestão de clientes para escritório de arquitetura: cadastro completo, histórico por cliente e um canal direto para pedidos de novo projeto.",
    h1: "Como fazer gestão de clientes em um escritório de arquitetura",
    lead: "Gestão de clientes num escritório de arquitetura não é funil de vendas — é ter o cadastro certo, o histórico completo e um canal direto pra quando aquele cliente antigo quiser fazer um novo projeto.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "Um cadastro completo por cliente",
        body: "Pessoa física ou jurídica, com documento, endereço, contato e o histórico de todos os projetos já feitos com aquele cliente — informação que hoje costuma estar espalhada entre e-mail, celular pessoal e memória de quem atendeu.",
      },
      {
        heading: "O cliente também tem um espaço",
        body: "Um portal com login próprio, onde o cliente acompanha o andamento, o briefing e os materiais do seu projeto, tira do escritório boa parte das mensagens de “como tá indo?”.",
      },
      {
        heading: "Novo pedido, sem virar mensagem perdida",
        body: "Um cliente que já trabalhou com o escritório e quer um projeto novo deveria ter um jeito direto de pedir isso — uma solicitação que chega centralizada pra equipe, em vez de uma mensagem de WhatsApp que se perde na correria da semana.",
      },
      {
        heading: "O que isso não é",
        body: "Vale ser direto: isso não é um CRM de vendas com funil de oportunidades ou pontuação de leads — é a organização de cliente que um escritório de arquitetura realmente usa.",
      },
    ],
    relatedSolutionSlugs: ["crm-para-arquitetos", "portal-do-cliente-arquitetura"],
    relatedPostSlugs: ["como-organizar-projetos-arquitetura", "como-gerenciar-escritorio-arquitetura"],
  },
  {
    slug: "como-controlar-horas-arquiteto",
    keyword: "controle de horas arquiteto",
    title: "Como Controlar Horas de Projetos de Arquitetura | Vincel Studio",
    description:
      "Controle de horas para arquitetos: cronômetro por projeto e fase, direto na barra lateral, sem planilha de apontamento manual no fim do dia.",
    h1: "Como controlar horas de projetos de arquitetura",
    lead: "Quase todo escritório sabe, no fim do mês, quanto faturou. Poucos sabem, com precisão, quantas horas cada projeto realmente consumiu — e é exatamente essa lacuna que torna difícil saber se um projeto deu lucro de verdade.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "Por que apontamento manual falha",
        body: "Anotar horas no fim do dia depende de lembrar — e quem trabalhou em três projetos diferentes numa tarde dificilmente reconstrói com precisão quanto tempo foi de cada um.",
      },
      {
        heading: "Cronômetro, não formulário",
        body: "Um cronômetro na barra lateral, pra iniciar, pausar e retomar conforme o trabalho muda de projeto ou de fase, captura a hora no momento em que ela acontece — não numa reconstrução por memória horas depois.",
      },
      {
        heading: "Horas por fase, não só por projeto",
        body: "Saber que um projeto consumiu 40 horas é menos útil do que saber que 25 delas foram no estudo preliminar e 15 no executivo — é essa granularidade que mostra onde o tempo da equipe realmente está indo.",
      },
    ],
    relatedSolutionSlugs: ["controle-de-horas-arquitetura", "gestao-de-projetos-arquitetura"],
    relatedPostSlugs: ["como-organizar-projetos-arquitetura", "rotina-escritorio-arquitetura"],
  },
  {
    slug: "planilha-ou-software-arquitetura",
    keyword: "planilha ou software para escritório de arquitetura",
    title: "Planilha ou Software para Escritório de Arquitetura? | Vincel Studio",
    description:
      "Planilha ou software para escritório de arquitetura: até onde a planilha funciona, e o que ela deixa de resolver conforme o escritório cresce.",
    h1: "Planilha ou software para escritório de arquitetura?",
    lead: "A planilha não é o vilão — é uma ferramenta genérica que funciona bem até um certo ponto. A pergunta que vale fazer não é “planilha é ruim?”, é “até onde ela dá conta da rotina do meu escritório?”.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "Onde a planilha funciona bem",
        body: "Pra um ou dois projetos, com um arquiteto cuidando de tudo, uma planilha bem feita resolve — o problema não é a ferramenta, é o volume de informação que ela precisa segurar sozinha conforme o escritório cresce.",
      },
      {
        heading: "Onde ela costuma quebrar",
        body: "Planilhas não se conectam entre si: a de projetos não sabe da de financeiro, que não sabe da de clientes. Cada atualização é manual, cada erro de digitação vira um número errado em algum lugar, e ninguém mais lembra qual é “a versão certa” do arquivo.",
        bullets: [
          "Financeiro fica separado do projeto que gerou aquela despesa ou honorário",
          "Cronograma não se ajusta sozinho — cada mudança é retrabalho manual",
          "Cliente não tem acesso a nada — toda atualização depende de alguém responder",
          "Sem histórico automático: uma célula sobrescrita apaga a informação anterior",
        ],
      },
      {
        heading: "O que um software dedicado resolve",
        body: "Projeto, cliente e financeiro se conversando automaticamente — uma despesa lançada no projeto certo já aparece no fluxo de caixa do escritório, sem precisar copiar o número de um arquivo pro outro.",
      },
      {
        heading: "Como decidir",
        body: "Se a rotina do escritório ainda cabe numa única planilha que uma pessoa só entende de cor, talvez ainda não seja a hora. Se já existem várias planilhas, cada uma cobrindo uma parte diferente do negócio, esse é o sinal mais claro de que a informação já cresceu além do que uma planilha consegue segurar sozinha.",
      },
    ],
    relatedSolutionSlugs: ["software-para-arquitetura", "precos"],
    relatedPostSlugs: ["software-para-escritorio-arquitetura", "gestao-financeira-escritorio-arquitetura"],
  },
  {
    slug: "rotina-escritorio-arquitetura",
    keyword: "rotina de um escritório de arquitetura",
    title: "Como Organizar a Rotina de um Escritório de Arquitetura | Vincel Studio",
    description:
      "Como organizar a rotina de um escritório de arquitetura: agenda, horas, projetos e financeiro funcionando juntos, não em ferramentas separadas.",
    h1: "Como organizar a rotina de um escritório de arquitetura",
    lead: "A rotina de um escritório de arquitetura não é uma lista de tarefas — é agenda, horas, projeto e financeiro acontecendo ao mesmo tempo, todos os dias. Organizar a rotina é fazer essas quatro coisas se conversarem, em vez de tratar cada uma como um mundo à parte.",
    publishedAt: PUBLISHED,
    sections: [
      {
        heading: "O dia começa pela Agenda",
        body: "Um calendário de tarefas e uma linha do tempo em Gantt por projeto dão o ponto de partida do dia — o que precisa ser feito, e em qual projeto, sem depender de abrir cinco pastas pra lembrar.",
      },
      {
        heading: "O trabalho gera horas",
        body: "Um cronômetro por projeto e fase, iniciado e pausado conforme o dia acontece, registra o tempo no momento certo — sem depender de reconstruir tudo de memória à noite.",
      },
      {
        heading: "O projeto avança, o cliente acompanha",
        body: "Conforme o projeto muda de status, o cliente já vê isso no portal dele — sem precisar de uma atualização manual por e-mail toda semana.",
      },
      {
        heading: "O financeiro fecha sozinho",
        body: "Honorários, despesas e contas fixas lançados ao longo do mês já alimentam o fluxo de caixa projetado — o fechamento do mês vira uma conferência, não uma reconstrução do zero.",
      },
    ],
    relatedSolutionSlugs: ["gestao-de-escritorio-de-arquitetura", "controle-de-horas-arquitetura"],
    relatedPostSlugs: ["como-gerenciar-escritorio-arquitetura", "como-controlar-horas-arquiteto"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Pautas ainda sem artigo escrito — fica só como lembrete editorial,
// nunca vira rota até ter conteúdo de verdade.
export const PLANNED_TOPICS: string[] = [];
