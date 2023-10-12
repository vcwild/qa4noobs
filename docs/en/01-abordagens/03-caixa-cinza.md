# Teste de Caixa Cinza

Testes de caixa cinza são uma combinação de testes de caixa branca e de caixa preta. Eles são usados para testar um produto ou aplicação com conhecimento parcial da estrutura interna da aplicação. O propósito deste teste é procurar e identificar os defeitos gerados devido a estrutura ou uso impróprios da aplicação.

Algumas das principais características do teste de caixa cinza são:

- É uma é uma junção dos métodos caixa branca (com conhecimento completo do código) e caixa preta (sem qualquer conhecimento do código).
- O custo dos defeitos no sistema podem ser reduzidos ou previnidos ao aplicar a caixa cinza
- É mais apropriados para teste de GUI, funcionais, de securança, aplicações web, etc.

Neste processo, erros de contexto específico que são relacionados a sistemas web são comumente identificados. Isso melhora a cobertura de testes ao concentrar em todas as camadas de qualquer sistema complexo

Em QA, o teste caixa cinza provém uma possibilidade de testar ambos os lados de uma aplicação, ou seja, tanto o *front-end* quanto o *back-end*.

## Qual a razão de aplicar o teste Caixa-Cinza?

Alguns dos benefícios de aplicar o teste caixa cinza são:

 1. Ele provém os benefícios combinados de ambas as outras modalidades.

 2. Ele combina o input de *devs*, com a de *testers* e melhora a qualidade geral do produto.

 3. Ele reduz o custo geral ao longo do processo de testagem *funcional* e *não-funcional*.

 4. Ele confere tempo livre suficiente aos *devs* para concertar defeitos.

 5. A testagem é feita do ponto de vista do usuário ao invés do ponto de vista de um designer.

## Estratégia de teste Caixa-Cinza

Para performar um teste caixa cinza, não é necessário que o *tester* tenha acesso ao código fonte.

Um teste é designado baseado no conhecimento de algorítimo, estruturas, arquiteturas, estados interno ou outro tipo de descrição de alto nível do comportamento de um programa.

### Técnicas usadas para o teste

As principais técnicas usadas para o teste caixa cinza são:

- Teste de Matriz: esta técnica de testes envolve definir **todas as variáveis** que existem em um programa.

- Teste de Regressão: para checar se a mudança na **versão anterior** regrediu outros aspesctos do programa na **nova versão**. Isso será feito por estratégias de teste como retestar tudo, retestar *features* arriscadas e retestar dentro de um firewall.

- Teste de Matriz ou Orientado a Ação (OAT): provê o máximo de cobvertyura de código com o mínimo de casos de teste.

- Teste de Padrões: esta técnica é performada nos dados históricos da versão anterior dos defeitos no sistema. Ao contrário do teste  caixa preta, o teste caixa cinza opera ao cavar dentro do código e determinar o motivo da falha acontecer.

### Passos para aplicar o teste Caixa-Cinza

Vejamos as etapas para aplicar o teste caixa cinza:

1. Identificar os *inputs*;
2. Identificar os *outputs*;
3. Identificar os principais *paths*;
4. Identificar as *subfunções*;
5. Desenvolver *inputs* para as *subfunções*;
6. Desenvolver *outputs* para as *subfunções*;
7. Executar casos de teste par as *subfunções*;
8. Verificar o **resultado correto** para as *subfunções*;
9. Repetir os passos 4 & 8 para outras *subfunções*;
10. Repetir passos 7 & 8 para outras *subfunções*;

Observe que os casos de teste para caixa cinza podem incluir:

- Relacionado a interface gráfica do usuário (GUI);
- Relacionado a Segurança;
- Relacionado a Database;
- Relacionado a Browser;
- Relacionado ao Sistema Operacional;
