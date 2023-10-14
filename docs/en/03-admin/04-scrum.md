# Scrum

Em testagem de software o Scrum é uma metodologia utilizada para construir aplicações complexas. Ela provê soluções fáceis para execução de tarefas complexas. Scrum auxilia o time de desenvolvimento a focas em todos os aspectos do desenvolvimento de um produto de software, como qualidade, performance, usabilidade, etc. Gera transparência, inspeção e adaptação durante o SLDC para evitar complexibilidade.

<img src="https://www.guru99.com/images/11-2014/agile_Processesv1_4.png" alt="Funcionamento Scrum">

## Testagem Scrum

É feita na metodologia scrum para validar as regras de negócio, e envolve a checagem de parâmetros não funcionais. Não existe papel ativo do tester no processo então é usualmente desenvolvida por developers com Testes Unitários. Por vezes times de testes dedicados são necessários a depender da natureza e complexidade do projeto.

## Características Chave da Metodologia Scrum

- Scrum possui agendas curtas para ciclos de lançamento com escopos ajustavens conhecidas como sprints. Cada realease pode possuir múltiplas sprints, e cada projeto Scrum pdoe possuir múltiplos ciclos de lançamento;
- Uma sequência repetitiva de reuniões, eventos e milestones;
- A prática de testagem e implementação de novas regras de negócio, conhecida como estórias, para garantir que part e do trabalho é lançada logo após cada sprint;

<img src="https://www.guru99.com/images/11-2014/112714_1232_ScrumTestin1.jpg" alt="Papéis Metodologia Scrum">

### 1. Papéis no Scrum

- Product Owner:
  - Define as features do produto;
  - Decide a data de lançamentos e features relacionadas;
  - É responsável pela rentabilidade do produto;
  - Pode aceitar ou rejeitar um resultado;

- Scrum Master:
  - Organiza o time e verifica sua produtividade;
  - Mantém a lista de bloqueios e remove barreiras no desenvolvimento;
  - Coordena com todos os papéis e funções;
  - Defente o time de interferências externas;
  - Convida para o Scrum diário, review da sprint e planejamento de reuniões;

- O Time:
  - Consiste geralmente de 5-9 membros;
  - Inclui desenvolvedores, designers, testers, etc;
  - O Time organiza e planeja o trabalho sozinhos;
  - Tem o direito de fazer tudo dentro das demarcações do projeto para atingir o objetivo da sprint;
  - Ativamente participa das cerimônias diárias

### 2. Artefatos Scrum

<img src="https://www.guru99.com/images/2/scrum_testing_2.png" alt="Fluxograma Artefatos Scrum">

Um processo Scrum, inclúi:

- Estórias de Usuários: São uma explicação curta das funcionalidades do sistema sob testes. Um exemplo para uma agência de seguros é - "Premium pode ser pago usando o sistema online";
- Backlog do Produto: É uma coleção de estórias de usuários capturadas para um projeto Scrum. O P.O prepara e mantém este backlog. É priorizado pelo P.O, e qualquer um pode adicionar dados com sua aprovação;
- Backlog de Lançamento: Um lançamento é um lapso temporal em que um número de iterações é completa. O P.O coordena com o Scrum Master para decidir quais estórias devem ser priorizadas em uma release. Estórias no backlog de lançamento são priorizadas para finalização em uma release;
- Sprints: É um espaço de tempo determinado para finalização das histórias de usuário, decidida pelo P.O e time de desenvolvemento, geralmente 2-4 semanas;
- Sprint Backlog: É um grupo de histórias de usuários a serem finalizadas em uma sprint. Durante o sprint backlog, o trabalho nunca é designado, e o time se habilita para um trabalho por si só. É de posse e administração do time enquanto o trabalho restante estimado é atualizado diariamente. É a lista de tasks que devem ser desenvolvidas em uma sprint;
- Lista de Blocks: É uma lista de blocks e decisões que não foram realizadas, de posse de Scrum Master e atualizada diariamente;
- Gráfico Burndown: Representa o progresso geral entre trabalho em desenvolvimento e trabalho completo através de todo o processo. Representa em forma de gráfico as histórias e features não finalizadas;

### 3. Cerimônias (Processos) em Scrum

- Planejamento de Sprints: Uma sprint se inicia com o time importando estórias do Backlog de Lançamentos para o Backlog de Sprints. Os testers estimam o esforço para validar as diversas histórias no Sprint Backlog;
- Scrum Diário: Apresentado pelo Scrum Master, dura cerca de 15 minutos. Durante o Scrum diário os membros irão discutir o trabalho completo no dia anterior, o trabalho planejado para o dia seguinte e dificuldades encontradas durante uma sprint. No decorrer da reunião diária o progresso de um time é rastreado;
- Review da Sprint/Retrospectiva: Também apresentada pelo Scrum Master, dura entre 2-4 horas e discute o que o time desenvolveu na última sprint e que lições foram aprendidas;

## Papel do Tester no Scrum

**Não há papel ativo do tester no Processo Scrum.**

Geralmente, os testes são desenvolvidos por um dev com o Teste Unitário. Enquanto o P.O é também frequentemente envolvido no processo de testes em cada sprint. Alguns projetos Scrum tem times de teste dedicados dependendo da natureza e complexibilidade do projeto.

## Atividades de Teste no Scrum

- Planejamento de Sprints:
  - Aqui o tester deve escolher uma estória de usuário do backlog de produto para testes.
  - Como tester, deve decidir quantas horas (Estimativa de Esforço) levará para finalizar os testes para cada estória selecionada.
  - Deve saber quais os objetivos da sprint.
  - Contribuir para o proesso de priorização.

- Sprints:
  - Dão suporte a devs no teste unitário
  - Com testes de histórias de usuário completos, a execução de teste é desenvolvida em laboratório onde dev e tester trabalham juntos. Defeitos são catalogados na ferramenta de Gerenciamento de defeitos que são verificados diariamente. Defeitos podem ser conferidos e analisados durante uma reunião Scrum. Quaisquer bugs são retestados tão logo corrigidos e implementados para teste.
  - Enquanto tester, comparecer a todas as reuniões diárias para falar;
  - Trazers quaisquer itens de backlog que não foram completos na sprint atual, para inserção na proxima sprint;
  - Tester é resposável pelo desenvolvimento dos scripts de automação. Ele agenda as testagens automatizadas com o Sistema de Integração Contínuo (CI). Automatização recebe importância devido aos tempos de entrega curtos. Automatização de testes pode ser atingida utilizando diversas ferramentas pagas ou open-source disponíveis. Isto prova sua eficiência ao garantir que tudo que precisa ser testado esteja coberto. Cobertura de Testes Satisfatória pode ser atingida com uma comunicação proxima com o time.
  - Revisão dos resultados da Automação no CI e envio de Relatórios para os Investidores.
  - Execução de testes não funcionais para estórias de usuários aprovadas.
  - Coordenação com cliente e P.O para definir critérios de aceite para os Testes de Aceite.
  - No fim da Sprint, o tester também performa o UAT em alguns casos, e confirma a finalização dos testes para a sprint atual.

- Retrospectiva da Sprint:
  - Enquanto tester, ira estabelecer o que deu errado e o que obteve sucesso na sprint atual.
  - Identifica lições aprendidas e melhores práticas.

## Relatório de Testes

Métricas de teste Scrum provém transparência e visibilidade para os investidores sobre o projeto. As métricas reportadas permitem que um time analise seu progresso e planeje estratégias futuras para melhoria do produto.

Existem duas métricas frequentimente usadas para reportar:

### Gráfico Burn Down

Diariamente, o Scrum Master registra o trabalho restante estiamdo para a sprint atual. O que nada mais é do que o Burn Down, atualizado diariamente.

Este grafico provê visualização geral rápida do progresso no projeto, aqui, temos informações como o volume total de trabalho no projeto que precisa ser finalizado, volume de trabalho completo em cada sprint e etc.

<img src="https://www.guru99.com/images/11-2014/112714_1232_ScrumTestin4.jpg" alt="Gráfico Burn Down">

### Gráfico de Histórico de Velocidade

Esta técnica prevê a velocidade do time em cada sprint, É um gráfico de barras que representa como o output do time mudou ao longo.

As métricas adicionais que podem ser úteis consistem na queima de cronograma, queima de orçamento, porcentagem do tema completo, estórias completas, estórias remanescentes, etc.
