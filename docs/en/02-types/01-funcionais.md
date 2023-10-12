
# Técnicas de Testes Funcionais

Teste funcional é uma espécie de teste que valida o sistema contra especificações e regras de aceite.
O propósito desta modalidade é testar cada uma das funções de um software provendo input apropriado e verificando o output de acordo com os requerimentos de funcionamento.

Vamos explorar algumas das principais técnicas de testes funcionais.

## Partição de Equivalência (BVA)

Técnica de teste que baseia-se em requisitos na documentação.

Executada através da abordagem caixa-preta, através dela o tester passa a ter noção clara da cobertura de testes a partir de requisitos e expecificações.

Não requer conhecimento dos caminhos internos, estrutura e implementação do software sobre testes, e reduz o número de casos de testes a um nível gerenciável, sendo intuitivamente utilizada pela maioria dos testadores.

O particionamento divide as entradas do usuário na aplicação em partições ou classes de equivalência, e então, as subdivide em faixas de valores possíveis, para que um destes valores seja eleito como base dos testes. Existem particões para:

- Valores válidos, que devem ser aceitos pelo sistema.
- Valores inválidos, que devem ser rejeitados pelo sistema.

Considere que em uma empresa exista um sistema de recursos humanos que processa pedidos de colaboradores com base na identidade.

Possuímos uma regra de negócios relacionada a identidade estabelendo que pessoas abaixo de 16 anos não podem trabalhar, indivíduos entre 16-60 anos estão aptos para contratação, e aqueles de 60 anos não são aptos a função.

Dividindo estas regras temos:

- Partição inválida: 0-15
- Partição válida: 16-60
- Partição inválida: 60-

O particionamento de equivalência nos orienta a escolher um subconjunto de testes que encontrará mais defeitos do que um conjunto escolhido aleatóriamente.

Ao trabalhar com partições verificamos uma máxima que dita:

    "Qualquer valor dentro de uma partição, é tão bom quanto qualquer outro"

Portanto, dados que pertençam a mesma partição devem ser tratados igualmente pelo sistema, ou seja, produzirão o mesmo resultado. Desta forma, qualquer valor dentro da classe de equivalência, em termos de testes, equivale a qualquer outro.

Para obtermos uma cobertura de testes satisfatória ao implementar esta técnica os casos de testes devem cobrir todas as partições existentes, no exemplo sob análise, verificamos 3 partições.

Um roteiro de testes para validação de idades no módulo de contratação possuiría 3 casos de testes:

C1: Idade = 5

De acordo com a regra, não poderia funcionar, o valor esperado é "Não deve contratar".

C2: Idade = 33

De acordo com a regra, pode trabalhar, o valor esperado é "Pode contratar".

C3: Idade = 65

De acordo com a regra, não pode trabalhar, o valor esperado é "Não deve contratar".

Subtende-se que dentra da faixa de valores 0-15, independentemente de qual selecionado dentro da partição inválida, não deve ser aceito pelo sistema, o mesmo se aplica a faixa de 16-60, diversas possibilidades que resultem em aceite no sistema.

Não faz-se necessário o teste de todos os valores possíveis, a cobertura é suficiente ao escolher um dentro de cada partição.

## Análise do Valor Limite

Parte do princípio que o comportamento na borda de uma partição tem maior probabilidade de apresentar erro.

No exemplo, com a técnica de valor limite selecionaríamos o valor 15, inválido pelo sistema, após, selecionamos o 16, limítrofe, mas que deve obter resultado positivo.

Uma boa prática de união das técnicas é selecionar um valor aleatório para cada partição, testar, e então validar os valores limítrofes dentre cada partição.

- Tabela de Decisão:

Método relevante para documentação das regras de negócio a serem cumpridas pelo sistema, criadas a partir da análise de especificação funcional e identificação das regras de negócio.

A tabela contém condições de disparo, combinações de verdadeiro ou falso para entrada de dados e resultados para cada uma das combinações. É forma de expressar em forma de tabela qual conjunto de ações deve ocorrer para cheegar a um resultado esperado

O ponto principal da tabela é a regra de negocios, que define o conjunto de ações a serem tomadas a partir de um conjunto de condições.

No exemplo se sabemos que de 0-15 não deve trabalhar, na tabela estabelecemos que

0-15 Não Pode

16-60 Pode

Esta combinação pode, aquela não, é uma representação visual para aauxiliar a documentar as regras que o sistema segue.

## Transição entre Status

Baseia-se que um sistema pode exibir diferentes comportamentos a depender de seu status atual ou eventos anteriores. A elaboração de um diagrama permite que o teste  visualize os status, ou seja as transições, entrada de dados e eventos que acionam as ações

A técnica ajuda a identificar possíveis transações inválidas, pois ao sabermos o que o sistema espera, ao testar as combinações podemos  descobrir transações defeituosas.

Uma pessoa pode estar apta a trabalhar, e passar a tornar-se inapta, inválida.

### Técnicas baseadas na experiência

São aquelas em que os testes são derivados das habilidades e experiência do testador, a capacidade de visualização individuals do profissional, com base em seus trabalhos desenvolvidos no passado, que o possibilita a encontrar erros e falhas que talvez as outras não descubram.

Esse tópico é melhor explorado no artigo sobre [testes exploratórios](test).
