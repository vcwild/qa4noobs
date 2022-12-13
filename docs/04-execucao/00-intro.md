# Execução de Testes

Inicialmente para executarmos testes precisamos ter noção de como o software funciona, para isso talvez seja necessário que o software esteja em um estágio avançado de desenvolvimento, ou que ele tenha requerimentos muito consistentes.

## Tipos de Execução de Testes

Existem duas formas em quais testes podem ser executados, manualmente ou automaticamente. A execução manual é a mais comum, pois ela permite que o teste seja executado de forma mais rápida e simples. Porém, ela é mais propensa a erros, pois o teste pode ser executado de forma incorreta. Por outro lado, a execução automática é mais lenta, pois ela requer a criação de um script que será responsável por executar o teste.

Devido a essas diferenças, a execução manual é mais recomendada para testes simples, enquanto a execução automática é mais recomendada para testes complexos.

A complexidade de testes é relativa ao seu escopo, ou seja, quanto maior o escopo do teste, maior será a complexidade dele. Por exemplo, um teste que verifica se um botão está funcionando corretamente é um teste simples, pois ele possui um escopo pequeno. Por outro lado, um teste que verifica se um sistema inteiro está funcionando corretamente é um teste complexo, pois ele possui um escopo grande.

Além disso, a complexidade de um teste também pode ser medida pela quantidade de passos necessários para executá-lo. Por exemplo, um teste que possui apenas um passo é um teste simples, enquanto um teste que possui vários passos é um teste complexo.

## Casos de Teste e Cenários

Casos de teste consiste em um grupo de ações executadas para verificar uma feature ou funcionalidade da aplicação de software. Um Caso de Testes contém passos de teste, de dados, pré-condições, pós-condições desenvolvidas para um cenário de testes específico, a fim de validar quaisquer requerimentos necessários.

O caso de testes incluí variáveis e condições específicas, por meio das quais um engenheiro de testes pode comparar os resultados esperados, com os factuais, para determinar se um produto de software está funcionando de acordo  com as regras de negócio determinadas.

## Cenário de Teste Vs Caso de Teste

- Cenário de Testes:
  - Um cenário contem documentação de alto nível que descreve uma funcionalidade a ser testada do começo ao fim;
  - Foca mais "no que" testar ao invés de "como" testar;
  - Os cenários possuem uma linha. Portanto, sempre existe a chance de ambiguidade ao testar;
  - Cenários de teste são derivados de artefatos como BRS, SRS, etc;
  - Auxilia com uma forma ágil de testar a funcionalidade do começo ao fim;
  - Os cenários de teste são ações de alto nível;
  - Comparativamente, menos tempo e recursos são necessários para criar e testar com o uso de cenários;

- Casos de Teste
  - Contém passos definidos, dados necessários, resultados esperados para testagem de todas as features em uma aplicação;
  - Uma completa ênfase "em que testar" **e** "como testar";
  - Casos de teste possuem passos definidos, pré-requisitos, resultados esperados, etc. Portanto, não existe ambiguidade no processo;
  - Casos de teste são majoritariamente derivados de cenários de teste. Múltiplos casos de teste podem derivar de apenas um cenário;
  - Auxiliam na testagem exaustiva de uma aplicação
  - Casos de Teste são ações de baixo nível
  - Mais recursos são necessários para documentação e execução de casos de teste;

## Formatação de Casos de Teste Padrão

- ID: TU01
  - Descrição do Caso de Testes: Verificar login com informações válidas.
  - Passos do Teste:
      1. Acessar o site;
      2. Inserir ID de usuário;
      3. Inserir senha;
      4. Clicar em Submit;
  - Dados do Teste:
      1. ID de Usuário: guru99;
      2. Senha: pass99;
  - Resultados Esperados: Usuário deve logar na aplicação.
  - Resultados Factuais: Conforme esperado.
- ID: TU02
  - Descrição do Caso de Testes:   Verificar Login com informações inválidas.
  - Passos do Teste:
    1. Ir até o Site;
    2. Inserir ID de Usuário;
    3. Inserir Senha;
    4. Clicar em Submit;
  - Dados do Teste:
    1. ID de usuário: guru99;
    2. Senha: glass99;
- Resultados Esperados: Usuário não deve logar na aplicação.
- Resultados Factuais: Conforme Esperado.

## Como Escrever Casos de Teste nos Testes Manuais

Criemos um Caso de Testes para o Cenário: Verifique funcionalidade Login

<img src="https://www.guru99.com/images/1/test-cases_01.png" alt="Tela de Login">

Passo 1) Um caso de testes simples para explicar o cenário seria

- Caso de Testes #1
- Descrição Do Caso:
  Verificar resposta quando informações de email e senha válidos são inseridos

Passo 2) Testar as Informações

A fim de executar os casos de teste, seriam necessárias as informações do teste, adicionadas abaixo:

- Caso de Testes #1
- Descrição do Caso:
  Verificar resposta quando dados de email e senha válidos são inseridos
- Dados de Teste:
  Email: guru99@email.com
  Senha: lNf9^Oti7^2h

Identificar os dados de teste pode demorar, e por vezes requerer a criação de dados novos, razões pelas quais precisa ser documentado.

Passo 3) Executar Ações

Para executar um caso, o tester deve desenvolver uma série de ações no UAT, que são documentadas da seguinte forma:

- Caso de Testes #1
- Descrição do Caso:
  Verificar resposta quando dados de email e senha válidos são inseridos.
- Passos do Teste:
  1. Inserir endereço de email;
  2. Inserir senha;
  3. Clicar em Sign In;
- Dados de Teste:
  Email: guru99@email.com;
  Senha: lNf9^Oti7^2h;

Muitas vezes os Passos de Testes não são simples assim, fazendo-se necessária a documentação. Além disso, o autor do caso de testes pode deixar o quadro de funcionários, entrar em férias, ficar doente ou demais situações do gênero. Uma contratação recente pode receber a função de executar o caso de testes, passos documentados irão auxiliar no desenvolvimento da função e facilitar revisões por outros investidores.

Passo 4) Verificar o comportamento do AUT

O objetivo dos casos na testagem de software é verificar o comportamento da UAT por um resultado esperado. Deve ser documentado como se segue:

- Caso de Testes #1
- Descrição do Caso: Verificar resposta quando dados de email e senha válidos são inseridos.
- Passos do Teste:
  1. Inserir endereço de email;
  2. Inserir senha;
  3. Clicar em Sign In;
- Dados de Teste:
  Email: guru99@email.com;
  Senha: lNf9^Oti7^2h;
- Resultados Esperados:
  Login com sucesso.

Durante o período de execução do teste, o profisisonal irá verificar resultados esperados contra os resultados factuais, designando um status de Sucesso ou Falha.

- Caso de Testes #1
- Descrição do Caso:
  Verificar resposta quando dados de email e senha válidos são inseridos.
- Passos do Teste:
  1. Inserir endereço de email;
  2. Inserir senha;
  3. Clicar em Sign In;
- Dados de Teste:
  Email: guru99@email.com;
  Senha: lNf9^Oti7^2h;
- Resultados Esperados: Login com sucesso.
- Sucesso/Falha: Sucesso.

Passo 5) O caso de testes pode possuir uma pré-condição que especifique elementos necessários antes do inícios dos testes.

Para o nosso caso de testes, uma pré-condição seria ter um browser instalado para obter acesso ao site sob validação. Um caso também pode incluir pós-condições que especifiquem quisquer elementos que apliquem-se após a finalização dos casos.

Neste exemplo, a pós-condição seria que  o horário e data do login sejam documentados na base de dados.

## Melhores práticas para escrever um bom Caso de Testes

Consideremos as seguintes práticas:

### 1. Casos precisam ser simples e transparentes

Crie casos que sejam tão simples quanto o possível. Devem ser claros e concisos uma vez que o autos do caso pode não ser aquele que o executará.

Use linguagem assertiva como "vá para a pagina inciial", "insira os dados", "clique em x". Isto tornará a compreensão fácil, e a execução mais rápida.

### 2. Crie casos com o usuário final em mente

O principal objetivo de qualquer projeto de software é criar casos de teste que atendam as regras de negócio do cliente e sejam fáceis de operar. Um tester deve criar casos com o usuário final em mente.

### 3. Evite repetição de casos

Não repita casos de testes. Se um caso é necessário para a execução de outro caso, refira-se a ele por seu id na coluna de pré-condições.

### 4. Não presuma

Não presuma funcionalidades e features da aplicação enquanto prepara um caso de testes. Atenha-se aos documentos de especficiações.

### 5. Garanta 100% de Cobertura

Garanta que a escrita dos casos de teste verifiquem todos os requerimentos de software mencionados na documentação de especificação. Use matrizes de rastreamento para garantir que nenhuma função/condição seja deixada de lado.

### 6. Casos de teste devem ser identificáveis

Nomeie os ID para casos de forma que sejam indentificáveis facilmente ao vasculhar por defeitos ou identificar um requerimento de software nos estágios mais avançados.

### 7. Implemente as técnicas de Testagem

Não é possível verificar todas as possíveis condições na aplicação de software. As técnicas de testagem auxiliam a selecionar casos de teste com a maior possibilidade de localizarem defeitos.

- Análise de Valor de Limite (Boundary Value Analysis - BVA): Como o nome sugere esta técnica define a testagem dos limites de um escopo específico de valores.
- Partição de Equivalência (Equivalence Partition - EP): Esta técnica divide o intervalo em partes/grupos iguais que tendem a possuir o mesmo comportamento.
- Técnica de Transição de Estado: Este método é utilizado quando o comportamento de um software muda de um estado para outro em seguida de uma ação particular.
- Técnica de Dedução de Erros: Esta técnica deduz/antecipa os erros que podem surgir durante a execução de um teste manual. Este não é um método formal e se vale da experiência do testers com a aplicação.

### 8. Auto-Limpeza

O caso de testes criado deve voltar ao Ambiente de Testes em seu estado pre-testes, não devendo tornar o ambiente testes inutilizável. Isto é especialmente pertinente para testes de configuração.

### 9. Repetíveis e Autônomos

O Caso de Testes deve gerar os mesmos resultados todas as vezes, não importando quem realizou o teste.

### 10. Revisão de Pares

Após a criação dos casos de teste, leve-os para revisão por seus colegas. Seus pares podem descobrir defeitos no design do caso.

*Inclua as seguintes informações ao desenvolver um caso de testes*:

- A descrição de qual requerimento está sendo testado.
- Expllicação de como o sistema será validado.
- O setup de testes como uma versão da aplicação sob verificação, software, arquivos de dados, sistema operacional, acesso de segurança, data lógica ou física, horário do dia, pré requisitos como outros testes e quaisquer outras informações de setup pertinentes aos requerimentos sob teste.
- Inputs, outputs, ações e seus resultados esperados.
- Quaisquer provas ou anexos.
- Use linguagem ativa para maiúsculas e minúsculas.
- Caso de testes não deve possuir mais do que 15 passos.
- Um script de teste automatizado é comentado com inputs, propósito e resultados esperados.
- O Setup oferece uma alternativa para testes prévios necessários.
- Com outros testes, deve ser uma ordem incorreta do cenário de negócios.

## Ferramentas para Administração de Casos de Teste

Ferramentas de administração são os elementos de automação que auxiliam a coordenar e manter os casos de testes. As principais funcionalidades de uma ferramenta como esta, são:

1. Documentar Casos de Teste: com ferramentas, pode-se acelerar a criação de casos de testes com o uso de templates.
2. Executar o Caso de Testes e Documentar resultados: Casos podem ser executados através das ferramentas, e resultados coletados para fácil registrar.
3. Automatizar o Rastreio de Defeitos: Testes que obtiveram falha são automaticamente ligados ao rastrador de bugs, o que, por sua vez, pode ser designado aos desenvolvedores através de notificação via email.
4. Rastreabilidade: Requerimentos, casos de teste e suas execuções são conectados através das ferramentas, e cada caso pode ser rastreado até os demais para validar cobertura.
5. Proteção dos Casos de Teste: Casos de testes devem ser reutilizáveis, e protegidos de perda ou corrupção devido a controle de versões deficitário.

As feramentas muitas vezes oferecem funcionalidades como:

- Convenções de nomenclatura e numeração
- Controle de Versão
- Armazenamento read-only
- Acesso controlado
- Backup externo

*Ferramentas de administração dos testes populares são*:

- [Quality Center](https://www.guru99.com/hp-alm-free-tutorial.html)
- [Jira](https://www.guru99.com/jira-tutorial-a-complete-guide-for-beginners.html)
