# Priorização de Testes

- A priorização é uma das formais mais eficientes para produzir produtos de alta qualidade de acordo com os padrões do mercado e de consumo.

- É uma forma de priorizar e tabelar os casos do mais importante ao menos importante.

- Minimiza custos, esforço e tempo durante a fase de testes.

- É importante conhecer bem os benefícios, desafios e tecnicas de priorização dos casos para colher os melhores benefícios

Priorizar testes é ordenar os casos de testes a serem eventualmente conduzidos.

Priorizar os testes ajuda a satisfazar as limitações de tempo e orçamento na testagem para melhorar a taxa de detecção de falhas o mais rápido quanto o possível

## Categorias de Prioridade

- Prioridade 1:

  Casos de teste que **precisam** ser executados, ou as consequências podem ser piores após o lançamento do produto. Estes são casos de teste críticos, onde as chances de uma funcionalidade ser quebrada por uma funcionalidade nova são mais prováveis.
- Prioridade 2:

  Casos que **podem** ser executados se houver tempo. Estes não são tão críticos, mas podem ser executados como uma medida de boas-práticas para dar um double check antes do lançamento.
- Prioridade 3:

  Casos de teste que **não são** importantes o suficiente para serem testados antes do lançamento atual. Estes podem ser testados depois, logo após o lançamento da versão atual do software,  novamente, como uma medida de boas práticas. Entretanto, não há dependência direta para com eles.
- Prioridade 4:

   Casos que **nunca** são importantes, já que seu impacto é irrisório.

No esquema de priorização, a diretriz principal a ser seguida é garantir que os casos de baixa prioridade não devem causar impactos severos no software. Esta priorização deve possuir diversos objetivos, assim como:

- Baseada na funcionalidade que já foi comunicada aos usuários e é crucial do ponto de vista do business.

- Avaliar a probabilidade de falhas ao checar a taxa de detecção de falhas de uma categoria de testes. Isto ajuda a entender se esta categoria é crítica ou não.

- Aumentar a cobertura de código do sistema sob testes com maior velocidade utilizando os critérios de cobertura usados anteriormente.

- Aumentar a taxa de detcção de falhas críticas em uma categoria de teste ao localizar falhas similares que ocorreram mais cedo no processo de testes.

- Aumentar a probabilidade de falhas serem reveladas devido a mudanças específicas no código anteriormente no processo de Teste de Regressão.

## - Tipos de Priorização de Casos de Teste

- Priorização Geral:

Aqui, os casos de teste são priorizados de acordo com o quão úteis eles serão para versions subsquentes do produto. Isto não requer qualquer conhecimento das versões modificadas, portanto, uma priorização geral pode ser aplicada logo após o lançamento de uma versão do programa fora do horário de pico. Devido a isso, o custo de aplicação desta categoria de priorização é amortizado durante lançamentos subsquentes.

- Priorização de Casos de Teste Específica por Versão:

Nesta modalidade, priorizamos os casos de forma que eles serão úteis de acordo com cada versão do produto. Isto requer conhecimento de todas as mudanças que foram  feitas no produto. É aplicado antes da testagem de regressão na versão modificada.

## Quais são as Diferentes Técnicas para Priorização?

Podemos priorizar os casos de teste de acordo com as seguintes técnicas:

### 1. Baseado em Cobertura

Foca na cobertura de código pelos testes de acordo com as seguintes técnicas:

- Cobertura Total de Extratos:

      Aqui, o número total de extratos cobertos por um caso de testes é usado como fator para priorizar os testes. Por exemplo, um teste que cubra 5 extratos receberá prioridade sobre um que cubra somente 2

- Cobertura de Extrato Adicional:

   Esta técnica envolve selecionar iterativamente um caso de testes com o máximo de cobertura, e, então, selecionar um caso que cubra o que o anterior deixou de cobrir. O processo é repetido até que tudo esteja coberto.

- Cobertura de Branches Total:

   Aqui, branches se refere ao total de possibilidades de output em uma condição, e a maior cobertura destas é o fator determinante.

- Cobertura de Branches Adicional:

   De forma semelhante a cobertura de extratos adicional, aqui a técnica pega o teste com a maior cobertura de branches, e vai iterativamente selecionando os próximo de acordo com aqueles que o anterior não cobre.

### 2. Baseada em Risco

Aqui utiliza-se análise de risco para identifiar possíveis áreas-problema que, em caso de falha, podem levar a graves consequências.

### 3. Baseada nas Regras de Negócio

Nesta técnica a priorização é feita com base em diversos fatores que determinam as regras de negócio. Estes fatores são documentados nas condições de aceite. Casos de teste são pensados considerando a prioridade assinalada pelo cliente para uma regra, sua complexidade e volatilidade.

Os fatores usados são:

- Prioridade Indicada pelo Cliente: é a medida da importante de regras de negócio para um cliente sob o ponto de vista do business.
- Volatividade da Regra de Negócio: indica quantas vezes a regra de negócios mudou.
- Complexidade de Implementação: indica o esforço ou tempo necesário para implementar uma regra de negócio.
- Tendência a erro: indica o quão passível de erro uma regra de negócio foi em versões anteriores do software.

### 4. Baseada em Histórico

Nesta técnica, a priorização é feita no histórico dos casos de teste, ou seja, os resultados das execuções anteriores são verificadas.

É usado para determinar as possíveis chances de falha nos testes e aqueles em que o erro é mais provável recebem prioridade. A verificação de histórico é utilizada para selecionais quais casos de testes poderiam ser considerados para retestagem no ciclo atual.

### 5. Baseado na Noção de Custo

Aqui, o fator custo entra em voga, testes que custem menos serão priorizados sobre testes com maior custo, isto inclui:

- Custo do processo de teste de regressão.
- Custo da juntada das regras de negócio.
- Custo para analisar se deve selecionar um caso de teste.
- Custo de priorização dos casos de teste.
- Custo da execução completa do teste.
