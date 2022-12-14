# **Teste de Caixa Branca**

Alguns dos principais conceitos que define o teste de caixa branca são:

- Envolve a testagem dos mecanismos internos de uma aplicação, o tester deve estar familiarizado com a linguagem de programação utilizada na aplicação que irá testar.

- Código é visivel aos testers.

- Identifica areas de um programa que não foram exercitadas por uma bateria de testes.

Técnica em que a estrutra interna, design e código são testados para verificar o fluxo input-output e melhorar o design, usabilidade e segurança.

Aqui, o código é visivel aos testers, também podendo ser chamado de teste da Caixa Transparente, Caixa Aberta, Caixa de vidro etc.

## Alvos de teste

Alguns dos principais alvos do teste de caixa branca são:

- Buracos na segurança interna
- Paths quebrados ou mal estruturados no processo de coding
- O fluxo de inputs especificos pelo código
- Output esperado
- A funcionalidade de loops condicionais
- Testagem de cada statement, objeto e função individualmente

## Como aplicar um teste de Caixa Branca?

Vejamos o passo-a-passo de como aplicar um teste de caixa branca:

### 1. Entenda o Código

A primeira coisa que um tester geralmente fará é aprender e entender o código fonte da aplicação.
Uma vez que teste Caixa Branca envolve a testagem dos mecanismos internos de uma aplicação, o tester deve estar familiarizado com a linguagem de programação utilizada na aplicação que irá testar.
Além disso, o tester deve estar ciente de boas práticas do desenvolvimento de código.
A segurança é muitas vezes um dos objetivos principais da testagem de software, o tester deve localizar brechas de segurança e previnir ataques de hackers e usuarios que podem infectar código maligno na aplicação.

### 2. Crie Casos de Teste e Execute-os

O segundo passo básico para o teste de caixa branca envolve testar o código fonte para fluxo e estrutura apropriada.

Uma forma de fazer isso é escrevendo mais codigo para testar o código fonte.

O tester irá desenvolver pequenos testes para cada processo ou série de processos na aplicação, este método requer que o tester possua conhecimento intimo do código e muitas vezes é feito pelo *dev*

Outros métodos incluem testes manuais, tentativa e erro, e o uso de ferramentas de teste.

#### Exemplo de Teste Caixa Branca

Vejamos um exemplo de teste de caixa branca em um código simples:

```c
void printme (int a, int b) {     //  Printme is a function
  int result = a + b;

  if (result > 0)
    print ("Positive", result)
  else
    print ("Negative", result)
}                              //  End of the source code
```

O objetivo do Caixa Branca em engenharia de software é verificar todas as ramificações de decisão, loops e statements no código.

### Técnicas de Teste Caixa Branca

A maioria das técnicas são análise de Cobertura de Código, isto elimina lacunas em um Caso de Teste.

Isto identifica areas de um programa que não foram exercitadas por uma bateria de testes.

Uma vez que lacunas sejam identificadas, você cria casos de teste para verificar as partes não testadas do código, aumentando a qualidade do produto

Existem ferramentas automatizadas disponíveis para aplicar a Analise de Cobertura de Código.

### Formas de Cobertura de Testes

Abaixo temos algumas technicas de analise de cobertura que um tester pode utilizar:

1. Cobertura de declarações: Esta técnica requer que todos os statements possíveis do código sejam testados ao menos uma vez durante o processo de testes.

2. Cobertura de execução: Esta técnica checa todos os caminhos possíveis (if/else e outros loops condicionais) de uma aplicação

### Tipos de Teste Caixa Branca

Vejamos como se classificam os testes de caixa branca:

#### Teste Unitario

Muitas vezes é o primeiro tipo de teste aplicado em um programa.

O teste unitário é performada em cada unidade ou bloco do código durante o seu desenvolvimento. É essencialmente realizado pelo dev, que desenvolve algumas linhas de código, uma unica função ou um objeto e testa para verificar que funciona antes de prosseguir.

Este tipo auxilia a identificar a maioria dos bugs nos estágios iniciais do desenvolvimento de um softare, sendo mais baratos e rapidos de concertar.

#### Teste de Vazamento de Memória

Vazamentos de memória são as principais causas de aplicações lentas. Um especialista em QA que é experiente em detectá-los é essencial em casos de uma aplicação que roda lento.

#### Teste de Penetração

Neste teste, o tester/dev tem informação completa do código fonte, detalhes da network, endereços de IP envolvidos e toda a informação do servidor em que a aplicação roda.
O objetivo é atacar o código por diversos angulos para expor ameaças de segurança.

### Ferramentas de Teste White Box

Segue algumas ferramentas de teste de caixa branca:

- [EclEmma](https://www.eclemma.org/download.html)
- [NUit](http://nunit.org/)
- [PyUnit](https://www.guru99.com/python-unit-testing-guide.html)
- [HTMLUnit](http://htmlunit.sourceforge.net/)
- [CppUnit](https://sourceforge.net/projects/cppunit/)
