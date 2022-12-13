# **Teste de Integração**

É um tipo de teste onde os módulos de software são logicamente integrados e testados como um grupo.

Um projeto de software típico consiste de múltiplos módulos, codificados por programadores  diferentes, o propósito deste nível de teste é expor defeitos na interação entre estes módulos uma vez integrados.
Esta técnica foca na validação da comunicação de dados entre estes módulos, também conhecido como *I & T (Integration and Testing)*, *String Testing*, e, por vezes *Thread Testing*.

## Por que realizar o Teste de Integração

Embora cada módulo seja baseado em unidades, defeitos ainda existem por diversas razões:

- Um módulo, no geral, é projetado por um dev individual, que pode possuir uma compreensão e lógica diferente de outros programadores;
- No momento do desenvolvimento de um módulo, existes grandes chance de mudança nas regras de negócios por parte dos clientes. Estes novos requirementos podem não ser testados de forma unitário, e, portanto, o teste de integração do sistema se faz necessário;
- A interface entre módulo e database pode ser errônea;
- Interfaces de Hardware externo, caso existam, podem ser errõneas;
- Administração inadequada de exceções podem causar erros;

## Exemplo de caso de Teste de Integração

O caso de testes de Integração difere de outras modalidades no sentido de que foca principalmente nas interface e fluxo de dados/informações entre os módulos.

A prioridade aqui são os links de integração ao invés das funções unitárias que ja foram testadas.

### *Casos de teste de Integração entre Amostras para o seguinte cenário:*

Aplicação possuí 3 módulos

- Página de Login;
- Caixa de Correio;
- Deletar E-Mails;

 Todos integrados lógicamente.

 Aqui, não nos concentramos no teste da Página de Login já que os testes para esta feature já foram conduzidos no Teste Unitário, mas sim, checamos sua integração com a Caixa de Correio.

 De forma semelhante, checamos a integração entre Caixa de Correio e o módulo Deletar E-Mails.

     - Casos de teste:
      - Caso 1
         - Objetivo: Verificar o link de interface entre Login e Caixa de Correio;
         - Descrição do Caso de Testes: Inserir credenciais de login e clicar no botão Login;
         - Resultado Esperado: Ser direcionado até Caixa de Correio;
      - Caso 2
        - Objetivo: Checar o link de interface entre Caixa de Correio e Deletar E-Mails;
        - Descrição do Caso: a partir de Caixa de Correio, selecione o e-mail e clique em um botão deletar;
        - Resultado Esperado: e-mail selecionado aparecer na aba de deletados/lixo;

## Tipos de Teste de Integração

Engenharia de software define uma míriade de estratégias para executar o teste de integração, vide:

- Abordagem Big Bang
- Abordagem Incremental: que é subdividada em duas partes
  - Abordagem de cima pra baixo (Top Down);
  - Abordagem de baixo pra cima (Bottom Up);
  - Abordagem Sanduíche (combina as duas anteriores);

### Testagem Big Bang

 É uma abordagem no teste de integração em que todos os componentes ou módulos são integrados juntos de uma só vez e testados como uma unidade.

 Este conjunto combinado de componentes é considerado como uma entidade durante os tstes, se todos os componentes na unidade não estão completos, a integração não sera executada.

- Vantagens:
  - Conveniente para sistemas pequenos

- Desvantagens:
  - Localização de falhas é dificil;
  - Dado o número de interfaces que precisam ser testadas neste método, algumas conexões de interface podem ser esquecidas facilmente;
  - Uma vez que o teste de integração pode começar apenas depois de "todos" os modulos foram arquitetados, o time de testes terá menos tempo para execução na fase de testes;
  - Dados que todos módulos são testados de uma vez, módulos críticos de alto risco não são isolados e testados com prioridade. Módulos periféricos que lidam com menos interfaces de usuários também não são isolados para testagem prioritária;

### Testagem Incremental

Nesta abordagem o teste é feito integrando dois ou mais módulos que são lógicamente relacionados entre si, e então, testados para funcionamento adequado da aplicação.

Então, os outros módulos relacionados são integrados incrementalmente e o processo continua até que todos os módulos lógicamente relacionados tenham sido testados com sucesso.

     Stubs e Drivers:
    São os programas dummy utilizados para facilitar a atividades de testes. Estes programas agem como substitutos para os modelos faltantes no teste. Eles não implementam toda a lóica de programação do módulo mas simulam a comunicação de dados com o módulo calling durante os testes.
       - Stub: é chamado pelo módulo sub testes.
       - Driver: chama o módula para ser testado.

### Teste de Integração Bottom-up

É a estratégia em que os módulos de mais baixo nível são testados primeiro.

Estes módulos já testados são então utilizados para facilitar o teste de módulos de nível mais alto. O processo continua até que todos os de nível máximo tenham sido verificados.

Uma vez que os módulos de nível baixo foram testados e integrados, o próximo nível de módulos é formado.

<img src=https://www.guru99.com/images/bottom-up-integration-testing.png alt="Fluxograma Bottom Up">

    1. Vantagens:
      - Localização de erros é mais fácil;
      - Não perde-se tempo aguardando que todos os módulos sejam desenvolvidos como na abordagem Big-Bang
    2. Desvantagens:
      - Módulos críticos (no nível máximo da arquitetura de software) que controlam o fluxo da aplicação são testados por ultimo e podem ser tendentes a defeitos;
      - Um protótipo de estágio inicial não é possível;

### Teste de Integração Top-down

Método em que a testagem se inicia do topo para baixo seguinto o fluxo de controle do sistema de software.

Os níveis mais altos são testados primeiro, seguindo então para os de nivel mais baixos, que são integrados para checar a funcionalidade do software. Stubs são utilizados para testar caso alguns módulos não estiverem prontos.

<img src="https://www.guru99.com/images/top-down-integration-testing.png" alt="Fluxograma Top-down">

    - Vantagens:
      1. Localização de falhas é mais fácil;
      2. Possibilidade de obter um protótipo;
      3. Módulos críticos são testados com prioridade, falhas maiores de design podem ser identificadas e corrigidas primeiro;
    - Desvantagens:
       1. Precisa de muitos Stubs;
       2. Módulos de nivel mais baixo são testados de forma inadequada;

### Testagem Sanduíche

Aqui, os módulos de mais alto nível são testados em conjunto com os de mais baixo nível, ao mesmo tempo, os mais baixos são integrados com os mais altos e testados como um sistema.

É a combinação do Top-down e do Bottom-up, portanto, é chamada de Testagem de Integração Híbrida.

Faz uso tanto de Stubs, quanto de Drivers.

<img src="https://www.guru99.com/images/1/Hybrid-Integration.png" alt="Fluxograma Sanduíche">

## Como realizar o Teste de Integração?

O procedimento de testagem independente das estratégias mencionadas acima:

  1. Prepare o Plano de Testes de Integração;
  2. Defina os cenários de testes, casos e scripts;
  3. Execute os casos de teste, reportando quaisquer defeitos;
  4. Rastreio e re-testagem de defeitos;
  5. Passos 3 e 4 são repetidos até que a integração seja concluída com sucesso;

### Exemplo de Plano de Testes

- Métodos/Abordagens para testes;
- Itens dentro ou fora do escopo do teste de integração;
- Funções e Responsabilidades;
- Pré requisitos para o teste de integração;
- Ambiente de testes;
- Planos para mitigação de riscos;

## Critérios de Entrada e Saída

- Entrada:
  1. Teste Unitário de componentes/módulos;
  2. Todos os bugs de alta prioridade corrigidos e finalizados;
  3. Todos os módulos a serem codificados foram completos e integrados com sucesso;
  4. Plano de Integração, caso de testes, cenários para serem assinados e documentados;
  5. Requer que Ambiente de Testes seja configurado para a integração;
- Saída:
  1. Testagem com sucesso da aplicação integrada;
  2. Casos de teste executados estão documentados;
  3. Bugs de alta prioridade corrigidos;
  4. Documentos técnicos a serem submetidos, seguido das notas de lançamentos;

## Melhores Práticas

Considere as seguintes práticas para testes de integração:

- Primeiro, determine a estratégia de testes de integração que podem ser adotadas, e então, prepare os casos de teste e dados conforme.
- Estude a arquitetura da aplicação e identifique os módulos críticos, para testagem prioritária;
- Obtenha o design de interface do time de Arquitetura, crie os casos de teste para verificar todas as interfaces com detalhes. Interface para database/hardware externo/aplicações de software devem ser testadas com minúcia;
- Após os casos de teste, são os dados de teste que desempenham papel fundamental;
- Sempre tenha os dados de mock preparados, antes de executar. Não selecione dados de teste durante a execução dos casos de teste;
