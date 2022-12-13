# **Casos de Teste, Relatos de Incidentes e Prioridades**

Quando realizamos testes, é necessário que sejam escritos os casos de testes, para que possamos realizar os testes de forma organizada e padronizada. Devemos também relatar os incidentes encontrados, para que possamos corrigi-los e garantir a qualidade do software. Além  de priorizar os incidentes encontrados, para que possamos corrigi-los de acordo com a sua importância.

## *Como escrever casos de testes a partir de uma historia de usuário*

- O que são histórias de usuários

Explicação informal e geral sobre um recurso de software escrito a partir da perspectiva do usuário final, com o objetivo de articular como um recurso de software pode gerar valor ao cliente. Elas não são requisitos de sistema, são componentes chave no desenvolvimento que insere os usuários finais em ênfase, utilizam linguagem não-técnica para dar contexto a equipe de desenvolvimento, intruindo o que estão desenvolvendo e qual valor isso gerará ao usuário,

Possibilitam estrutura centrada no usuário, impulsionando a colaboração, criatividade e promovendo a qualidade do produto. Articulam como uma única tarefa pode oferecer um determinado valor ao cliente

São escritas em algumas frases com linguagem simples que delimitam o resultado desejado, os requisitos são adicionados mais tarde, uma vez que a equipe esteja de acordo com as histórias de usuário

### Exemplo de História de Usuário

**Como um** cliente
**Eu** quero que sejam disponibilizadas diversas formas de pagamento
**Para** pagar meu pedido

## *Especificação dos Casos de Teste*

Como se escreve um caso de teste?

- Título: Deverá ser sucinto, simples e auto explicativo, com informações para que o analista saiba a qual validação o teste se propões (Validar Cadastro de Usuário, Envio de Ordem de Compra, etc).
- Objetivo Detalhado: Descrever o que será executado, fornecendo visão geral do teste a ser realizado. Por exemplo, "Verificar se realiza o upload de arquivo com as extensões permitidas","Verificar se a ordem de compra é enviada informando ativo, quantidade, preço, etc";
- Pré-Condições Necessárias para Execução: Evita que existam informações necessárias, como não informar que o usuário deve estar cadastrado para realização do teste. São os elementos fundamentais para que o teste seja executado corretamente, como a necessidade do usuário ter cadastrado nota anteriormente para testar a consulta. A ausência das pré condições, o teste será falho e ineficiente.
- Passos Definidos: Descrevem todas as ações que o analista deve seguir durante a execução até chegar até o resultado esperado. "Acessar tal funcionalidade", "Clicar em tal botão", "Preencha formulário apresentado", "Verifique se foi apresentado formulário em branco".
- Resultados Esperados: É a descrição do comportamento esperado do sistema após execução dos passos. "Válida","Apresenta", "Recupera", "Retorna". Deve ser direta e clara para evitar falsos positivos. "Sistema apresenta tela de edição com os campos preenchidos", "A ordem é enviada e resultada com preço informado", "Cadastro é salvo no banco de dados".

O caso deve ser autossuficiente, incluindo todas as informações necessárias para sua execução em seu próprio corpo. Deve ser conciso, otimizando o tempo de execução, como também devem possui o menor número de passos quanto o possível, facilitando a compreensão das etapas necessárias.

Também é necessário incluir com entradas válidas e não esperadas, bem como entradas válidas e esperadas.

## *Classificação de Bugs: Severidade e Prioridade*

- Severidade: Define o grau ou intensidade de um defeito no que se refere ao seu impacto no software e seu funcionamento.
  - S1 - Crítica/ShowStopper: Bloqueio no teste ou funcionalidade que causa crash na aplicação ou principais caso de uso de funcionalidades chave, questões de segurança, perda grave no salvamento de dados. Bloqueios que impedem o teste de outras funções;
  - S2 - Grave: Problemas relacionados a informações inesperadas, defeitos indesejados, input incomum que cause efeitos irreversíveis, etc. A navegação é possível mas gera erros relevantes na função.
  - S3 - Moderada: A funcionalidade não atinge certos critérios de aceite, como mensagem de erro e sucesso não exibida.
  - S4 - Pequena: Gera pouco impacto, erros de interface, ortográficos, colunas desordenadas, falhas de design.
  - Resultados Esperados

- Prioridade: Bugs vistos da perpectiva de negócio, quais devem ser corrigidos primeiro com base na demanda e contexto atual.
  - P1 - Crítico: Tem de ser solucionado imediatamente. Severidade 1, erros de desempenho, interface gráfica que afeta o usuário.
  - P2 - Alta: Funcionalidade não está usável como deveria por erros de código.
  - P3 - Média: Problemas que podem ser avaliados pelo desenvolvedor junto do tester para ciclo posterior a depender dos recursos disponíveis.
  - P4 - Baixa: Erros de texto, pequenas melhories de experiência e interface.
