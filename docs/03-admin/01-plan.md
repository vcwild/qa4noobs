# Planejamento de Testes

Um Plano de Testes é um documento detalhado que descreve a estratégia de testes, objetivos, agenda, estimativas, entregáveis e recursos necessários para desenvolver os testes em um produto de software.

O plano auxilia a determinar o esforço necessário para validar a qualidade da aplicação sob testes. Este plano funciona como um blueprint para conduzir as atividades de teste como um processo definido, o que é monitorado de perto e controlado pelo Gerente de Testes.

De acordo com a definição da ISTQB

     "O Plano de Testes é um documento que descreve o escopo, abordagem, recursos e agenda das atividades de teste planejadas"

## Importância do Plano de Testes

Os benefícios do documento Plano de Testes são variados:

- Auxilia pessoas fora do time de teste, como desenvolvedores, gerentes de business e clientes a entender os detalhes da testagem.
- O plano guia o raciocínio, é como um livro de regras a serem seguidas.
- Aspectos importantes como estimativa de testes, escopo dos testes, estratégias, etc são documentadas no Plano, para que possam ser revisadas pelo Time de Gerência e reutilizada para outros projetos.

## Como Escrever um Plano de Testes

<img src="https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_3.png" alt="Fluxograma Plano de Testes">

### 1. Analise o Produto

Como você pode testar um produto sem qualquer informação dele? Não pode. É necessário profunda familiaridade com um produto antes de testa-lo.

O produto sob testes é Guru99 Site Bancário. Deve-se pesquisar clientes, usuários finais e conhecer suas necessidades e expectativas do aplicativo.

- Quem irá usar o Site?
- Qual sua função?
- Como funcionará?
- Quais softwares/hardwares o produto utiliza?

A ideia é sondar o produto e revisar sua documentação, isto auxiliará a entender todas as features do projeto bem como sua usabilidade. Em caso de não entendimento, pode-se conduzir entrevistas com clientes, desenvolvedores e designers para maiores informações.

### 2. Desenvolve a Estratégia de Testes

A Estratégia de Testes é um passo crítico ao elaborar um Plano de Testes dentro da testagem de software. Uma estratégia é documento de alto nível, que é geralmente desenvolvida pelo Gerente de Testes. O documento define:

- Os objetivos de teste do projeto, bem como os meios para atingí-los.
- Determina o esforço e custos necessários.

<img src="https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_6.png" alt="Fluxograma do Desenvolvimento de Estratégia">

#### 2.1. Defina o Escopo de Testes

Antes de iniciar qualquer atividade de teste, o escopo deve ser definido.

- Componentes do sistema a serem testados (hardware,software,middleware, etc) são definidas segundo o escopo.
- Os componentes do sistema que não serão testados também precisão estar claramente definidos como não fazendo parte do escopo.

Definir o Escopo de seu projeto de testes é importante para todos os investidores, uma vez que ajuda a:

- Provê a todos com informação confiável e precisa da testagem a ser elaborada.
- Todos os membros do projeto terão entendimento claro do que será testado, e do que não será.

##### 2.1.1. Como determinar o Escopo de Testes

- Requerimentos de Cliente Precisos
- Orçamento do Projeto
- Especificação de Produto
- Habilidades e Talentos no Time de Testes

Agora deve-se definir claramente o que esta dentro e fora do escopo.

#### 2.2. Identificando o Tipo de Testes

Um tipo de teste é um procedimento padrão que provê um resultado esperado para os testes.

Cada tipo de testagem é formulada para identificar um tipo específico de bug no produto. Mas, todos os tipos possuem como alvo atingir o objetivo comum de identificação antecipada dos defeitos, antes do lançamento ao cliente.

Os tipos comumente utilizados são:

- Teste Unitário: Verifica as menores partes de software verificável na aplicação
- Teste de API: Valida a API criada para a aplicação
- Teste de Integração: Módulos individuais são combinados e testados como um grupo
- Teste de Sistemas: Conduzidos em um sistema completo e integrado para avaliar se está em conformidade com os requerimentos
- Teste de Instalação/Desinstalação: Foca no que os clientes precisarão fazer para instalar/desinstalar e configurar/remover o novo software com sucesso
- Teste Ágil: Avalia o sistema de acordo com a metodologia ágil

Existe uma infinidade de tipos de teste para o produto, deverá o Gerente de Testes definir a Priorização adequada, com base nas funções da aplicação e respeitando o orçamento definido.

#### 2.3. Documento Riscos e Problemas

Riscos são eventos futuros e incertos com probabilidade de ocorrência e potencial de perda. Quando o risco ocorre de fato, torna-se um "problema".

Exemplos de Riscos para documentação:

- Membro da equipe não possui habilidade necessária: Planeje sessões de treinamento
- O cronograma é apertado, tornando difícil completar os requisitos a tempo: Determine prioridade de testes para cada atividade
- Gerente de Testes possui habilidades de gerência inadequadas: Planeje sessões de treinamento para lideranças
- Uma falta de cooperação negativamente afeta a produtividade da equipe: Encoraje cada membro em suas tarefas, e inspire-os a maiores esforços
- Estimativa de orçamento errada e custos adicionais: Estabeleça o escopo antes de iniciar o trabalho, preste atenção devida ao planejamento e constantemente meça os progressos

#### 2.4. Crie Lógicas de Teste

Na lógica de testes, o Gerente deverá responder as seguintes perguntas:

- Quem irá testar?
- Quando o teste irá ocorrer?

Você pode não conhecer exatamente os nomes de cada tester, mas o tipo de tester pode ser definido.

Para selecionar o membro correto para uma tarefa específica, deve-se considerar se suas habilidades qualificam-se para a tarefa ou não, também estimando o orçamento disponível. Selecionar errôneamente pode causar atrasos ou falha no projeto.

Possuir as seguintes habilidades é o mais ideal para aplicação de testes:

- Capacidade de compreensão do ponto de vista dos clientes
- Forte desejo por qualidade
- Atenção a Detalhes
- Boa cooperação

Em seu projeto, o tester irá tomar as rédeas da execução. Baseado no orçamento, pode-se selecionar terceirizações.

*Quando o teste ocorrerá?*

Atividades de teste devem ser associadas com atividades de desenvolvimento, devendo iniciar-se quando todos os itens necessários existirem.

<img src="https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_8.png" alt="Itens Necessários Para Início de Testes">

### 3. Defina objetivos para o teste

Consiste no objetivo geral e conquista da melhor execução. O objetivo dos testes é encontrar tantos defeitos quanto o possível, garantindo que o software seja livre de bugs antes de seu lançamento.

Para definir objetivos, deve-se:

- Listar todas as features (funcionalidade, performance, GUI, etc) que podem precisar de testes.
- Definir o alvo, ou objetivo, do teste baseado nas características acima.

### 4. Defina os critérios de teste

Os critérios são padrões ou regras nas quais os procedimentos de teste baseiam-se, existem dois tipos:

#### 4.1. Critério de Suspensão

Especifique os critérios de suspensão críticos para um teste. Caso estes sejam atendidos durante a testagem, o ciclo de testes ativos será *suspendido* até que os critérios sejam solucionados.

*Exemplo:* Caso os relatórios da equipe indiquem que 40% dos casos falharam, você deve suspender a testagem até que o time de desenvolvimento corrija todos os casos.

<img src="https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_10.png" alt="Fluxograma Critérios de Suspensão">

#### 4.2. Critérios de Saída

Especificam as diretrizes que denotam sucesso em uma fase de testes. Os critérios de saída são resultados alvo dos testes, necessários antes de proceder para a proxima fase de desenvolvimento.
Ex: 95%  de todos os casos de teste críticos devem passar.

Alguns métodos para definir os critérios de saída consistem na especificação de taxas par execução e sucesso.

- Taxa de execução: É a relação entre o número de casos de teste executados/total de casos.
- Taxa de Sucesso: Relação entre número de testes que passaram/casos de teste executados.

Estes dados podem ser coletados em documentos de Metrica para Testes.

- Taxa de Execução deve ne cessáriamente ser de 100%, a não ser que uma razão clara seja provida.
- Taxa de Suceso depende do escopo do projeto, mas o ideal é que seja tão alta quanto o possível.

### 5. Planejamento de recursos

Planejamento de recursos é um sumário detalhado de todos os tipos de recursos necessários para completar um projeto de tarefa. Recursos podem ser humanos, equipamento e materiais necessários para finaliza um projeto.

O planejamento de recursos é fator importante para o planejamento de testes uma vez que auxilia a determinar o número de recursos a serem empregados no projeto. Portanto, o Gerente de Testes pode elaborar corretamente o cronograma e estimativas para o projeto.

- Recursos Humanos:
  - Gerente de Teste:
        1. Administra todo o Projeto
        2. Define diretrizes
        3. Adquire os recursos necessários
        4. Identifica e descreve técnicas/ferramentas/arquitetura de automação apropriadas
  - Tester:
       1. Executa os testes, cataloga resultados, reporta defeitos
       2. Pode ser interno ou terceirizado, com base no orçamento disponível
       3. Para tarefas que requeiram baixa especialização, é recomentdado o uso de equipe terceirizada para poupar custos
  - Desenvolvedor em Teste:
      1. Implementa casos de testes, programa de testes, baterias etc.

  - Administrador de Testes:
     1. Constrói e garante que Ambiente de Testes e seus recursos sejam administrados e recebam manutenção
     2. Provê apoio ao Tester para uso do ambiente de testes
  - Membros SQA:
     1. Responsável pelo Quality Assurance
     2. Verifica e confirma se o processo de testes atende aos requerimentos especificados

#### 5.1. Recursos do Sistema

Para testar um aplicativo web, deve-se planejar os recursos de acordo com:

- Servidor:
  - Instala a aplicação web sob testes
  - Inclui um servidor web separado, servidor para database e servidor para aplicação, caso seja aplicável
- Ferramenta de Testes:
  - A ferramentas de teste é usada para automatizar os processos, simular operação apropriada de usuários e gerar resultados
  - Existem diversas ferramentas disponíveis para este uso (Selenium, QTP, etc)
- Rede:
  - A rede deve incluir LAN e Internet para simular condições de negócios reais, bem como o ambiente de usuário
- Computador:
  - O computador em que usuários comumente acessam o servidor web

### 6. Planeje o ambiente de testes

*O que é o ambiente de testes?*

Consiste em setup de software e hardware em que o time de teste desenvolve os casos. Caracteriza-se de um ambiente real de negócios e usuários, bem como ambientes físicos, como servidores e ambiente para execução de front-end.

#### 6.1. Como Configurar o Ambiente de Testes

Pressuponto cooperação entre time de desenvolvimento e time de testes, pergunte aos desenvolvedores todo o necessário para compreender a aplicação sob testes de forma clara.

- Qual o máximo de usuários conectados ativamente o website pode aguentar de forma simultânea?
- Qual os requerimentos de hardware/software para instalação do website?
- O usuário precisa de alguma configuração específica para navegar no website?

### 7. Cronograma e Estimativa

Suponha que todo o projeto seja subdivido em tarefas menores e adicionados na estimativa da seguinte forma:

- Criação das Especificações de Teste:
  - Elaborado pelo Desginer de Testes
  - 170 horas de trabalho
- Execução de Testes:
  - Tester, Administrador de Testes
  - 80 horas de trabalho
- Relatório de Testes:
  - Tester
  - 10 horas de trabalho
- Entrega de Testes:
  - 20 horas de trabalho
- Total: 280 Horas de Trabalho.

Assim, pode-se elaborar o cronograma para completar todas as tarefas.

Elaborar cronogramas é um termo comum em administração de projetos. Ao criar uma agenda solida no Planejamento de Testes, o Gerente pode usar como ferramenta para monitorar o progresso e controlar custos adicionais.

Para elaborar o cronograma de um projeto, o Gerente de Testes precisa de diversas informações, tais como:

- Prazos de Funcionários e do Projeto: Dias de trabalho, prazo do projeto e recursos disponíveis são fatores que afetam o cronograma
- Estimativa do Projeto: Com base na estimativa, o Gerente saberá quanto tempo será dispendido para completar o projeto. Podendo elaborar o cronograma apropriado
- Riscos do Projeto: Compreender os riscos auxilia o Gerente a adicionar tempo extra suficiente ao cronograma para lidar com riscos

### 8. Determine os entregáveis para os testes

Entregáveis são uma lista de todos os documentos, ferramentas e outros componentes que precisam ser desenvolvidos e mantidos em apoio ao esforço de testes.

Existem diferentes entregáveis em todas as fases do desenvolvimento

<img src="https://www.guru99.com/images/TestManagement/testmanagement_article_2_4_15.png" alt="Antes do Teste, Durante o Teste, Após o Teste">

Entregáveis são providenciados *antes* da fase de testes:

- Documento Planos de Testes
- Documento Casos de Teste
- Especficiações do Design de Testes

Entregáveis providenciados *durante* a fase de testes:

- Scripts de Teste
- Simuladores
- Dados de Testes
- Matriz de Rastreabilidade de Teste
- Logs de erros e execuções

Entregáveis providenciados *após* a fase de testes:

- Resultados/Relatórios de Testes
- Relatório de Defeitos
- Instalação/Diretrizes dos Procedimentos de Testes.
- Notas de Lançamento.
