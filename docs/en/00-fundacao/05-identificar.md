# Como Identificar o que Testar

Durante o processo de testes é necessário identificar o que deve ser testado, para isso, é necessário entender o que é um teste, e como ele é realizado.

## As 3 Principais formas de Documentar um Teste

Vamos entender as 3 formas de documentar um teste, para que possamos entender como identificar o que deve ser testado.

### Scripts de Teste

Forma mais detalhada de documentar um teste, quando os scripts são mencionados, geralmente detalham linha a linha as ações e dados necessários para rodar o teste. Tipicamente tem etapas para entender como o usuario programa, quais ações e em qual ordem para executar, incluindo resultados específicos de cada etapa, como verificação de mudanças.
A ação é clicar em botão X, o resultado é uma janela fechar. Ao iniciar o trabalho, não necessariamente o tester entende de forma aprofundada a função, os scripts auxiliam no desenvolvimento suave do processo e compreensão do sistema. Entretanto, devemos considerar que o projeto sempre sofre alterações, com páginas refeitas, novas funcionalidades, etc, portanto, os scripts devem ser sempre atualizados. O empecilho gerado nesta modalidade é que o tempo gasto para atualização do script poderia ser investido na execução de mais testes, além disso, são feitos para testar coisas muito específicas e repetitivas, abrindo margem para que bugs localizados nas margens deste caminho não sejam detectados, sendo necessária a evolução constante.

### Casos de Teste

Segunda forma mais detalhada, descrevem uma ideia específica a ser testada, sem detalhar as etapas exatas a serem executadas. Por exemplo, testar se um código de desconto pode ser aplicado a produto em promoção, isto não descreve quais códigos serão utilizados, variando as abordagens utilizadas para encontrar o resultado. Proporciona maior flexibilidade de decisão ao tester para completar o teste, sendo benéfica para testers experiêntes e com boa compreensão da natureza e funções do sistema, entretanto, a ausência dessa familiaridade e experiência permite que bugs passem despercebidos.

### Cenários de Teste

Tipo menos detalhado de documentação, descrição de objetivo que o usuário pode encontrar ao utilizar o programa. Como por exemplo, testar se o usuário pode deslogar do programa ao fechá-lo, serão necessárias diversas técnicas para validar e testar a função apropriadamente, uma vez que os cenários oferecem pouca especificação o tester possui ampla flexibilidade para desenvolvimento do teste, esta flexibilidade oferece os mesmos prós e contras vistos nos casos de teste, sendo livre para o tester experiente e quase impossível ao profissional novato.

Pode ser feito o uso de todos estas modalidades, muitas vezes simultâneamente, e divida entre a equipe com base em suas diferentes habilidades e competências dentro do contexto específico do projeto.

## Como identificar o que testar

Vamos entender as diferentes formas de testar.

### Teste baseado em documentação

Ao efetuar qualquer teste, a documentação mais atualizada deve ser solicitada, como casos de uso, regras de negócio e qualquer documentação relevante.

É importante, uma vez com as documentações em mãos, iniciar, terminar e reportar os casos de teste de forma contínua, evitando esquecimentos e retrabalho futuro.

### Técnicas de Teste

É impossível testar tudo, sendo fundamental a aplicação das técnicas de forma a contemplar o máximo do sistema no menor tempo possível.

- Soft Skills
- Curiosidade Exploratória
- Sabe ouvir: Nem sempre todas as informações estão em documentos, por vezes encontram-se em pessoas.
- Team Player: Contribuir ativamente no grupo a fim de completar tarefas, cumprir metas e colaborar para o objetivo em comum.
