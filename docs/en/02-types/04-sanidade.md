# Teste de Sanidade

É uma modalidade executada após o recebimento de uma build de software, com mudanças pequenas no codigo ou funcionalidade, **para verificar que os bugs tenham sido corrigidos e que não foram introduzidos novos problemas.**

O objetivo é assegurar que a funcionalidade proposta trabalha rudimentarmente como o esperado.

Caso falhe, a build é recusada para evitar o dispêndio de tempo e recursos que seriam envolvidos em uma testagem mais rigorosa.

O teste de sanidade é um subtipo do teste de regressão, e é aplicada para garantir que mudanças no código funcionam apropriadamente. É uma etapa para checar se a testagem da build pode prosseguir ou não.

O foco do  time durante testes de sanidade é validar a funcionalidade da aplicação e não testagem detalhada.

É geralmente aplicado em uma build onde o implemento de produção é necessário imediatamente como uma correção de bug crítico.

## Funcionalidade do Teste de Sanidade

O principal objetivo é determinar que as mudanças, ou funcionalidade proposta funcionam como esperado.

Se o teste de qualidade falha, o produto é rejeitado pela equipe de testes para poupar tempo e dinheiro.

Apenas é aplicado após o produto ter passado no Teste de Fumaça e o time de QA tenha aceito para demais testes.

## Exemplos de Teste de Sanidade

Em um projeto de e-commerce, os módulos principais são página de login, página inicial e página de perfil do usuário.

Existe um defeito na página de login em que o campo de senha aceita menos do que 4 caracteres alfanuméricos e as regras de negócio mencionam que este campo não deveriam ser inferior a oito caracteres. Portanto, o defeito é reportado pelo QA para que o dev resolva.

O dev então corrige o problema e envia novamente para o time de testes para aprovação.

O QA checa se as mudanças feitas estão funcionando ou não.

Também é determinado se isso possui impacto em outras funcionalidades relacionadas. Supondo que agora exista uma funcionalidade para atualizar a senha na tela de perfil do usuário, como parte do teste de sanidade, a página de login é também validada, bem como a página de perfil para garantir que ambas funcionem bem com a adição da nova função.

### Aspectos do Teste de Sanidade

Abaixo estão alguns aspectos que devem ser considerados ao executar o teste de sanidade:

1. Subtipo do Teste de Regressão: foca nas seções menores da aplicação.
2. Não possui *script* (ocasionalmente);
3. Não documentada (ocasionalmente);
4. Específica e Aprofundada: funcionalidades limitadas são checadas de forma aprofundada.
5. Desenvolvida por *testers*;

### Vantagens do Teste de Sanidade

- Ajuda a rapidamente identificar defeitos no núcleo da funcionalidade.
- Se defeitos forem localizados durante o teste de sanidade, o projeto é rejeitado, o que ajuda a poupar tempo na execução de testes de regressão.
- A técnica de testagem não é tão cara se comparada a outras modalidades.
- Ajuda a identificar os *"objects"* necessários que faltem.
- É usado para validar uma funcionalidade pequena da aplicação, esteja ela funcionando ou não após uma pequena mudança.
- Auxilia no cenário em que o tempo para testar o produto, ou executar o teste, é limitado.

### Desvantagens do Teste de Sanidade

- Foca apenas nas funções e comandos da aplicação.
- Não é possível cobrir todos os casos e cenários de teste.
- Cobre apenas poucas funcionalidades da aplicação. Problemas nas funcionalidades não verificadas não podem ser descobertos.
- O teste de sanidade não possui, geralmente, um script. Portanto, referências futuras não ficam disponíveis.
- Não cobrem o nível de estrutura do design, e, portanto, será dificil para o time de desenvolvimento identificar e corrigir os problemas.
