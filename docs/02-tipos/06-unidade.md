# **Teste Unitário**

É uma técnica de testagem em que unidades individuais ou componentes de um software são testados.

O propósito é validar se cada unidade do código funciona de forma satisfatória.

É aplicado durante a fase de desenvolvimento (fase de codificação) de uma aplicação pelos devs. Esta prática isola a seção de um código e verifica sua integridade, podendo ser uma função, método, procedimento, módulo ou objeto individuais.

## Por que aplicar o Teste Unitário?

- Ajuda a corrigir bugs no início do ciclo de desenvolvimento, poupando custos;
- Auxilia devs a entender a base da testagem de código e os habilita a realizar mudanças rapidamente;
- Bons testes unitários servem como documentação de projeto;
- Colabora com a reutilização de código. Migrando tanto seu código quanto seus testes para um novo projeto;

## Como aplicar o Teste Unitário

Para executar esta técnica, desenvolvedores  escrevem uma seção de código para testar uma função específcica na aplicação, podendo também isola-la para testes mais rigoros que revelam dependências desnecessárias entre a função sob testes e outras unidades, permitindo que sejam eliminadas.

Esta modalidade é comumente feita de forma automatizada, mas pode ainda ser realizada manualmente. Nenhuma das duas possui favoritismo, entretanto a automatização é preferível.

Acerca da abordagem automatizada:

- O desenvolvedor elabora uma seção de código na aplicação apenas para testar a função.
- O dev também poderia isolar a função para testagem mais rigorosa, o que ajuda a identificar dependências desnecessárias entre o codigo sob testes e demais unidades no produto.
- Um coder gera os critérios para automação, de forma a validar que o código funciona. Durante a execução dos casos de teste o framework cataloga todas as falhas, com algumas ferramentas automaticamente reportando-as, e, dependendo da severidade, parando quaisquer demais testes.
- O fluxo de trabalho do teste unitário é:
  - Criar casos de teste
  - Revisão/Correções
  - Linha de Base
  - Executar os testes.

## Técnicas de Teste Unitário

Categorizadas principalmente em três partes, que são

- Caixa Preta: teste de interface de usuário, com input e output;
- Caixa Branca: envolve o comportamento funcional do código;
- Caixa Cinza: usado para executar baterias de teste, métodos de teste, casos de teste e executar análise de riscos;

As técnicas de cobertura de código usadas no teste unitário são:

- Cobertura de Statement
- Cobertura de Decisão
- Cobertura de branches
- Cobertura de Condições
- Cobertura de Máquina em Estado Finito (Finite State Machine Coverage)

### Exemplo de teste Unitário: Mock Objects

O teste unitário depende da criação de mock objects para testar seções de código que ainda não são parte de uma aplicação completa. Os mocks preenchem as partes que faltam no programa.

Por exemplo, voce pode ter uma função que depende de variáveis ou objetos que ainda não foram criados. No teste unitário estas serão substituídas por mocks criados apenas para que o teste seja realizado na seção em questão.

### Ferramentas de Teste Unitário

Algumas das ferramentas mais populares para teste unitário são:

- [Junit](https://www.guru99.com/junit-tutorial.html)
- [NUnit](https://nunit.org/)
- [JMockit](https://jmockit.github.io/index.html)
- [EMMA](http://emma.sourceforge.net/)
- [PHPUnit](https://phpunit.de/)

## Test Driven Development (TDD) e o Teste Unitário

O teste unitário no TDD envolve uma uso extenso de frameworks para teste, que são usados para criar os casos automatizados.

Estes frameworks não são exclusivos do TDD, mas são essenciais a este, devido as seguintes características do processo:

- Tetes são escritos antes do código;
- Depende bastante dos frameworks de testes;
- Todas as classes na aplicação são testadas;
- Integração rápida e facil se torna possível;

## Vantagens do Teste Unitário

1. Devs que buscam aprender qual funcionalidade é fornecida a partir de uma unidade e como usá-la, podem olhar os testes unitários novamente e adquirir uma copreensão básica da API;
2. Teste Unitário permite aos programadores refatorar o código em um estágio posterior, garantindo que o módulo ainda funcione corretamente (Teste de Regressão). O procedimento é escrever os casos de teste para todas as funções e métodos garantindo que novas mudanças falhas, possam ser rapidamente identificadas e corrigidas;
3. Devido a natureza modular do teste unitário, podemos testar partes do projeto sem esperar que outras sejam finalizadas (mocks);

## Desvantagens do Teste Unitário

 1. Testes unitários não podem detectar todos os erros em um programa, não é possível avaliar todos os paths de execução mesmo nos mais triviais dos programas;
 2. Devido a sua própria natureza, esta técnica foca em uma unidade de código, portanto, não pode detectar erros de integração ou falhas de amplo espectro do sistema.

   É recomendado que esta abordagem de testes esteja aliada a demais técnicas.

### Melhores Práticas

Algumas das melhores práticas para o teste unitário são:

- Os testes unitários devem ser independentes. Em caso de quaisquer melhorias ou mudanças nas regras de negócio, os testes devem permanecer inalterados;
- Teste apenas um código por vez;
- Siga diretrizes de nomenclatura claras e consistentes para as unidades de teste;
- Em caso de mudanças no código ou em qualquer módulo, garnata que exista um caso de teste unitário correpondente, e que o módulo passe nos testes antes de alterar a implementação;
- Bug identificados nesta técnicas devem ser corrigidos antes de proceder a demais fases do Ciclo de Desenvolvimento;
- Adote uma postura de "teste enquanto coda". Quanto mais código for escrito sem testes, mais paths deverão ser verificados;
