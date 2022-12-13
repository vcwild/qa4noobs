module.exports = {
  base: "/qa4noobs/",
  title: "Curso de QA da He4rt Developers",
  theme: "yuu",
  description: "QA",
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: "purple",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/guide/" },
      { text: "He4rt", link: "https://twitter.com/He4rtDevs" }
    ],
    sidebar: {
      "/guide/": [
        "00-FOUNDATIONS",
        "01-ABORDAGENS",
        "02-TIPOS",
        "03-ADMIN",
        "04-EXECUCAO",
      ],
      "/00-fundacao/": [
        "00-intro",
        "01-tradicionais-vs-ageis",
        "02-interacao",
        "03-ferramentas",
        "04-artefatos",
        "05-identificar",
        "06-casos-relator-incidentes",
        "07-questions",
      ],
      "/01-abordagens/": [
        "00-intro",
        "01-caixa-branca",
        "02-caixa-preta",
        "03-caixa-cinza",
      ],
      "/02-tipos/": [
        "00-intro",
        "01-funcionais",
        "02-uat",
        "03-exploratorio",
        "04-sanidade",
        "05-regressao",
        "06-unidade",
        "07-smoke",
        "08-integracao",
        "09-nao-funcionais",
        "10-carga",
        "11-performance",
        "12-stress",
        "13-pentest",
        "14-acessibilidade",
        "15-compatibilidade",
      ],
      "/03-admin/": [
        "00-intro",
        "01-plan",
        "01-priorizacao",
        "02-sldc",
        "03-agile",
        "04-scrum",
        "05-kanban",
        "06-waterfall",
        "07-v-model",
        "08-report",
        "09-verificacao",
      ],
      "/04-execucao/": [
        "00-intro",
        "01-manual",
        "02-automatizado",
      ],
    }
  }
};
