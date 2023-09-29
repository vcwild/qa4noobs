<!-- Logo 4noobs -->

<p align="center">
  <a href="https://github.com/he4rt/4noobs" target="_blank">
    <img src="docs/.vuepress/public/images/header_4noobs.svg">
  </a>
</p>

<!-- Title -->

<p align="center">
  <h2 align="center">Curso de QA da He4rt Developers</h2>

  <h1 align="center">

  <img src=".github/qa.gif" alt="Imagem de QA" width="150">
  </br>
  <img src="https://img.shields.io/github/actions/workflow/status/vcwild/qa4noobs/build.yml?branch=main&style=flat-square&color=9468cc" alt="build" />
  <img src="https://img.shields.io/badge/topics-42-9468cc?style=flat-square" alt="topics" />
  <img src="https://img.shields.io/github/languages/code-size/vcwild/qa4noobs?color=9468cc&style=flat-square" alt="topics" />
  <img src="https://img.shields.io/github/license/vcwild/qa4noobs?color=9468cc&style=flat-square" alt="license" />

</h1>

  <h2 align="center">
    <a href="https://vcwild.github.io/qa4noobs/" > <strong>Veja o projeto na íntegra »</strong></a>
  </h2>
  <br />
  <p align="center">
    <a href="#about">Sobre</a> •
    <a href="#ROADMAP">Roadmap •</a>
    <a href="#contribute">Contribua</a> •
    <a href="#author">Autores</a> •
    <a href="#license">Licença</a>
  </p>
</p>

 <!-- ABOUT THE PROJECT -->

## ❓ Sobre o Projeto <a id="about"></a>

Qualidade de software é uma área de conhecimento que envolve a garantia de que um produto de software atenda aos requisitos, seja confiável, eficiente e eficaz. A qualidade de software é um atributo que pode ser avaliado por meio de testes, que são atividades que visam verificar se um produto de software atende aos requisitos e se está livre de defeitos.

Esse projeto tem como objetivo apresentar os fundamentos de testes de software, ferramentas e boas práticas para quem está começando na área de qualidade de software.

<!-- ROADMAP OF PROJECT -->

## ⛕ Roadmap <a id="ROADMAP"></a>

<details>

```mermaid
graph LR

subgraph "Fundamentos de teste"
A((Fundamentos de teste))
A --> B((Introdução))
A --> C((Testes tradicionais e ágeis))
A --> D((Interação com o time))
A --> E((Ferramentas e seus objetivos))
A --> F((Revisão de artefatos))
A --> G((Como identificar o que testar))
A --> H((Casos de testes, relatórios e erros))
A --> I((Perguntas e respostas))
end

subgraph "Abordagens de testes"
J((Abordagens de testes))
J --> K((Tipos de abordagens))
J --> L((Caixa branca))
J --> M((Caixa preta))
J --> N((Caixa cinza))
end

subgraph "Os diferentes tipos de testes"
O((Os diferentes tipos de testes))
O --> P((Tipos de testes))
O --> Q((Teste de funcionalidade))
O --> R((Teste de aceitação))
O --> S((Teste exploratório))
O --> T((Teste de sanidade))
O --> U((Teste de regressão))
O --> V((Teste de unidade))
O --> W((Teste de fumaça))
O --> X((Teste de integração))
O --> Y((Teste não-funcional))
O --> Z((Teste de carga))
O --> AA((Teste de performance))
O --> AB((Teste de stress))
O --> AC((Teste de segurança))
O --> AD((Teste de acessibilidade))
O --> AE((Teste de compatibilidade))
end

subgraph "Administração de projeto"
AF((Administração de projeto))
AF --> AG((Introdução))
AF --> AH((Planejamento de testes))
AF --> AI((Priorização de requisitos))
AF --> AJ((O ciclo de vida do software))
AF --> AK((Método Ágil))
AF --> AL((Método Scrum))
AF --> AM((Método Kanban))
AF --> AN((Método Waterfall))
AF --> AO((Método V-Model))
AF --> AP((Elaborando um relatório de testes))
AF --> AQ((Verificação e validação de testes))
end

subgraph "Execução de testes"
AR((Execução de testes))
AR --> AS((Construindo casos de teste))
AR --> AT((Teste manual))
AR --> AU((Teste automatizado))
end

A --> J
J --> O
O --> AF
AF --> AR
```
</details>
<details open>
  <summary> <a href="src/00-FOUNDATIONS.md">Fundamentos de teste </a> </summary>

- [Introdução](docs/00-fundacao/00-intro.md)
- [Testes tradicionais e ágeis](docs/00-fundacao/01-tradicionais-vs-ageis.md)
- [Interação com o time](docs/00-fundacao/02-interacao.md)
- [Ferramentas e seus objetivos](docs/00-fundacao/03-ferramentas.md)
- [Revisão de artefatos](docs/00-fundacao/04-artefatos.md)
- [Como identificar o que testar](docs/00-fundacao/05-identificar.md)
- [Casos de testes, relatórios e erros](docs/00-fundacao/06-casos-relator-incidentes.md)
- [Perguntas e respostas](docs/00-fundacao/07-questions.md)

</details>

<details>

  <summary> <a href="src/01-ABORDAGENS.md">Abordagens de testes </a> </summary>

- [Tipos de abordagens](docs/01-abordagens/00-intro.md)
- [Caixa branca](docs/01-abordagens/01-caixa-branca.md)
- [Caixa preta](docs/01-abordagens/02-caixa-preta.md)
- [Caixa cinza](docs/01-abordagens/03-caixa-cinza.md)

</details>

<details>

  <summary> <a href="src/02-TIPOS.md">Os diferentes tipos de testes</a> </summary>

- [Tipos de testes](docs/02-tipos/00-intro.md)
- [Teste de funcionalidade](docs/02-tipos/01-funcionais.md)
- [Teste de aceitação](docs/02-tipos/02-uat.md)
- [Teste exploratório](docs/02-tipos/03-exploratorio.md)
- [Teste de sanidade](docs/02-tipos/04-sanidade.md)
- [Teste de regressão](docs/02-tipos/05-regressao.md)
- [Teste de unidade](docs/02-tipos/06-unidade.md)
- [Teste de fumaça](docs/02-tipos/07-smoke.md)
- [Teste de integração](docs/02-tipos/08-integracao.md)
- [Teste não-funcional](docs/02-tipos/09-nao-funcionais.md)
- [Teste de carga](docs/02-tipos/10-carga.md)
- [Teste de performance](docs/02-tipos/11-performance.md)
- [Teste de stress](docs/02-tipos/12-stress.md)
- [Teste de segurança](docs/02-tipos/13-pentest.md)
- [Teste de acessibilidade](docs/02-tipos/14-acessibilidade.md)
- [Teste de compatibilidade](docs/02-tipos/15-compatibilidade.md)

</details>

<details>

  <summary> <a href="src/03-ADMIN.md">Administração de projeto</a> </summary>

- [Introdução](docs/03-admin/00-intro.md)
- [Planejamento de testes](docs/03-admin/01-plan.md)
- [Priorização de requisitos](docs/03-admin/01-priorizacao.md)
- [O ciclo de vida do software](docs/03-admin/02-sldc.md)
- [Método Ágil](docs/03-admin/03-agile.md)
- [Método Scrum](docs/03-admin/04-scrum.md)
- [Método Kanban](docs/03-admin/05-kanban.md)
- [Método Waterfall](docs/03-admin/06-waterfall.md)
- [Método V-Model](docs/03-admin/07-v-model.md)
- [Elaborando um relatório de testes](docs/03-admin/08-report.md)
- [Verificação e validação de testes](docs/03-admin/09-verificacao.md)

</details>

<details>

  <summary> <a href="src/04-EXECUCAO.md">Execução de testes</a> </summary>

- [Construindo casos de teste](docs/04-execucao/00-intro.md)
- [Teste manual](docs/04-execucao/01-manual.md)
- [Teste automatizado](docs/04-execucao/02-automatizado.md)

</details>
<br>
<!-- CONTRIBUTING -->

## 🤝 Como contribuir <a id="contribute"></a>

Contribuições fazem com que a comunidade open source seja um lugar incrível para aprender, inspirar e criar. Todas contribuições
são **extremamente apreciadas**

1. Realize um Fork do projeto
2. Crie um branch com a nova feature (`git checkout -b feature/featureBraba`)
3. Realize o Commit (`git commit -m 'Adicionado conteudo brabo'`)
4. Realize o Push no Branch (`git push origin feature/featureBraba`)
5. Abra um Pull Request

### Desenvolvimento local <a id="development"></a>

Para rodar o projeto localmente, você precisa ter o [Node.js](https://nodejs.org/en/) instalado na sua máquina. Também recomendamos utilizar o [Yarn](https://yarnpkg.com/) como gerenciador de pacotes.

Adicione as variáveis de ambiente ao seu path:

```sh
source scripts/enviroment.sh
```

Rode os comandos:

```sh
# instalar dependências
yarn

# servir com hot reload em localhost:8080
yarn dev
```

## 💁‍♂️ Autores <a id="author"></a>

- **Victor Manoel** - _Software Quality Engineer_ - [@Keeabo](https://www.linkedin.com/in/victor-manoel-0b4413191/)
- **Victor Wildner** - _Software Quality Engineer_ - [@vcwild](https://twitter.com/vcwild)

## 🏷️ Licença <a id="license"></a>

O projeto está sob a licença AGPL-3.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
