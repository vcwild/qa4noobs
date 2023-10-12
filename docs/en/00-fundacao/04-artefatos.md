# **Revisão de Artefatos**

*Artefatos*: Tipos de subprodutos concretos produzidos durante o desenvolvimento de software. Toda a documentação envolvida como casos de uso, requisitos, e documentação que descreve o design e arquitetura

O processo de inspeção envolve o planejamento, indivíduos revisando cada artefatos, encontros para debates e registros, passagem dos defeitos ao autor e avaliação geral acerca da necessidade de nova inspeção com base na existência de alterações durante o processo.

## *Definição dos Conceitos*

O termo defeito muitas vezes é utilizado de forma genérica, mas faz-se importante ter em mente que a interpretação depende do contexto de uso. Defeitos encontrados através de revisão, relacionam-se a faltas no artefato sendo revisado, falhas no software descritas no IEEE 830, 1998

A IEEE define atributos de qualidade que um documento de requisitos deve possuir, considerando a falta de qualquer dos atributos, caracteriza-se um tipo de defeito:

- Omissões 1-5
  - 1: Requisito imporante relacionado a funcionalidade, desempenho, interface externa.
  - 2: Resposta do software para todas as possíveis situações de entrada de dados.
  - 3: Falta de seções nas especificações do requisito.
  - 4: Ausência de referência como figuras, tabelas ou diagramas, ao descrever um caso de uso ou especificação de software é comum a representação visual.
  - 5: Falta de definicação de termos de unidade de medida, em um campo precisamos saber quantos caracteres suporta, input de texto e uma série de componentes que precisam de definição de unidade de medida, como numeral.
- Ambiguidade: Um requisito com diversos significados em um termo para um contexto em particular, dificulta o entendimento da funcionalidade abrindo um grande leque para incidência de defeitos
- Inconsistência: Mais de um requisito em conflito, ordens antagônicas para um mesmo contexto.
- Fato Incorreto: Requisito que descreve um fato não verdadeiro considerando as condições estabelecidas para o sistema. Descrição pede A, retorna B
- Informação Estranha: Informações fornecidas no requisito que não são necessárias ou sequer serão usadas, falta de eficiência na descrição, aumentando a documentação e abrindo margem para interpretações conflitantes.
- Outros: Diversos, como a inclusão de um requisito em seção errada do documento, aplicação de regra em local errado, por exemplo.

Estas classes podem ser subdivididas em classificações mais específicas a depender da necessidade.

## *Benefício da Aplicação de Inspeções de Software*

As inspeções localizam erros no início do processo, com o objetivo de previnir ao máximo o retrabalho nos ciclos posteriores, uma vez que os custos e dispêndio de tempo aumentam exponencialmente ao longo do ciclo de desenvolvimento.

Isto promove o aumento da produtividade no time, e gera artefatos mais inteligíveis facilitando a inspeção e gerando benefícios para fazes seguintes do ciclo, como a fase de manutenção das documentações.
