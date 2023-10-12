# Teste de Aceitação do Usuário (UAT)

O Teste de Aceitação do Usuário (UAT), ou muitas vezes chamado apenas de teste de aceitação é um tipo de teste aplicado pelo usuário final ou o cliente para verificar, e aceitar, o sistema antes de progredir a aplicação para o ambiente de produção.

O Teste de Aceitação é feito no final da fase de testes, após os testes de funcionamento, integração e sistema.

## Propósito do UAT

O principal objetivo do UAT é validar o fluxo do começo ao fim.

Ele não foca em erros cosméticos, de digitação ou teste do sistema, e é conduzido em um ambiente de testes separado com um setup semelhante ao ambiente de produção.

**É parecido com o teste caixa-preta onde dois ou mais usuários finais estão envolvidos**.

## Qual a Necessidade do UAT?

A necessidade deste teste surge uma vez que, tendo o software passado por teste de integração, sistemas, e unidade, podem ter os desenvolvedores construído o software baseado em regras de negócio documentadas sob seu próprio entendimento, **havendo a chance de que demais mudanças necesárias durante esta fase não tenham sido eficientemente comunicadas a eles**.

Logo, para verificar se o produto final é aceitável ao cliente/usuário, este teste faz-se necessário.

### Pré-Requisitos para o UAT

- As condições de aceite devem estar disponíveis;
- O código da aplicação deve estar completamente desenvolvido;
- Testes unitário, de integração e de sistema, devem ter sido completos;
- Ausência de falhas graves na fase de testes de integração;
- Apenas erros cosméticos são aceitáveis antes do UAT;
- Testes de regressão devem ter sido completos sem maiores erros;
- Todos os bugs reportados devem ter sido corrigidos e retestados antes do UAT;
- Rastreamento da matriz para toda a testagem deve ter sido completa;
- O ambiente UAT deve estar pronto;
- O Time de Testes deve dar o go-ahead para o UAT;

## Como Executar Testes UAT

O UAT é feito pelo público alvo do sistema ou software.

É geralmente feito no local do cliente, o que é comumente conhecido como **Beta Testing**.

Uma vez que os critérios de entrada do UAT sejam saciados, as seguinte lista de tarefas devem ser realizadas pelos testers:

1. Análise das Regras de Negócio;
2. Criação do Plano de Teste UAT;
3. Criação dos Casos de Teste UAT;
4. Preparação dos Dados de Teste (como seriam na Produção);
5. Executar os Casos de Teste;
6. Catalogar os resultados;
7. Confirmar os critérios de aceite;

### 1. Análise das regras de aceite

Uma das atividades mais importantes no UAT é identificar e desenvolver cenários de teste. Estes cenários derivam dos seguintes documentos:

- Plano do Projeto
- Casos de Uso
- Diagramas de Fluxo do Processo
- Documentação de Business necessária
- Especificações de Requerimentos do Sistema

### 2. Criação do Plano UAT

O plano de testes define a estratégia que será aplicada para verificar e garantir que a aplicação atinge as condições de aceite.
Isto documenta critérios para entrada e saída do UAT, a abordagem dos cenários e casos de teste, bem como, a linha do tempo da testagem.

### 3. Identificação dos Casos de Teste

A identificação dos cenários respeitará o processo do business e criará casos de teste  com passos claros.
Os casos devem cobrir suficientemente a maioria dos cenários UAT.
Os casos de uso do negócio são input para a criação dos casos de teste.

### 4. Preparação dos Dados de Teste

É recomendado utilizar dados em tempo real para o UAT.
Os dados devem ser embaralhados por razões de segurança e privacidade.
Testers devem estar familiarizados com o fluxo da database.

### 5. Executar e documentar resultados

Executar os testes e reportar eventuais bugs, retestar os bugs uma vez corrigidos.

### 6. Confirmar as Regras de Negócio>

Analistas de Business ou UAT Testers precisam enviar uma declaração após a testagem. Com esta confirmação, o produto esta apto para prosseguir até a Produção.
Entregas para o UAT são o Plano de Testes, cenários UAT e casos de testes, resultados e log de defeitos.

## Critérios de Saída para o UAT

Antes de prosseguir para o ambiente de produção, devem ser considerados:

- Nenhum defeito crítico sem correção;
- Processo de Business funciona de forma satisfatória;
- Reunião para a declaração positiva do UAT com os investidores;

## Boas Práticas

- Preparar o plano UAT no início do clico de vida do projeto;
- Preparar a checklist antes do início do UAT;
- Conduzir sessões pré-UAT durante a fase de testagem do sistema em si;
- Definir as expectativas e o escopo do UAT claramente;
- Testar do início ao fim o business flow e evitar testes de sistema;
- Testar o sistema ou aplicação com cenários e dados com aplicação na vida real;
- Pensar como um usuário sem familiaridade para com o sistema;
- Executar testes de Usabilidade;
- Conduzir sessões de feedback e reuniões antes de prosseguir para Produção;
