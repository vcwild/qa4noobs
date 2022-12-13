# **Teste de Regressão**

É a modalidade de teste usado para confirmar que uma mudança recente no código não afetou de forma adversa outras features já existentes.

O testes de regressão é uma técnica de  caixa preta, em que casos de teste são refeitos para verificar se funcionalidades anteriores da aplicação estão funcionando de forma adequada e que novas adições não produziram quaisquer bugs.

Ele pode ser aplicado em uma nova build quando existe uma mudança significativa na funcionalidade original, pois garante que o código ainda funciona uma vez que mudança ocorrem. Regressão significa *"re-testar"* essas partes da aplicação, que continuam sem alteração.

Testes de Regressão também são conhecidos como Método de Verificação, casos de teste são frequentemente automatizados, uma vez que precisam ser executadas repetidas vezes durante o processo de desenvolvimento.

## Quando devemos aplicar o Teste de Regressão?

Sempre que o código for modificado, como nos cenários a seguir:

1. Nova funcionalidade adicionada a aplicação
   Exemplo: Um site possui uma funcionalidade de login que permite login por Email. Agora provendo a opção de logar com o Facebook.

2. Quando existe um Requisito de Mudança
   Exemplo:
   Função "Lembrar senha" removida da página de login.

3. Quando um defeito é corrigido
   Exemplo:
   Foi encontrado e reportado bug, uma vez que o time de desenvolvimento tenha corrigido-o o time de QA irá testá-lo novamente para garantir que o problema foi resolvido. Simultaneamente testando demais funcionalidades relacionadas.

4. Quando existe uma correção para problemas de performance
   Exemplo: o loading de uma página inicial leva 5 segundos, e uma atualização o reduz para 2 segundos.

5. Quando existe uma mudança em Ambiente
   Exemplo: projeto sai do ambiente de Testes para o ambiente de Produção.

## Como aplicar um Teste de Regressão?

A necessidade para um teste de regressão surge quando uma manutenção no software inclúi melhorias, correções, otimizações ou remoção de features existentes.

Estas modificações podem afetar a funcionalidade do sistema, fazendo-se necessário a regressão.

O teste pode ser aplicado de acordo com as seguintes técnicas:

### 1. *"Re-testa"* tudo

A retestagem é uma das abordagens utilizadas para a aplicação de um teste de regresão.   Aqui, tudo os casos de teste devem ser re-executados.

Aqui, define-se *"re-testar"*, como quando um teste falha, e determinamos a causa como sendo uma falha de software.

A falha é reportada, e, uma vez corrigida em nova versão do software, é necessário nova execução do teste para confirmar a sua correção.

Este processo é conhecido como *"re-testagem"*, ou como teste de confirmação, e consome tanto tempo, quanto recursos financeiros.

### 2. Teste de Regressão Seletivo

Nesta modalidade, um caso de testes específico é selecionado, ao invés de toda a bateria de testes.

A seleção é divida em dois casos:

- Reutilizáveis:
      Que **podem** ser utilizados em testes de regressão posteriores.

- Obsoletos:
      Que **não podem** ser utilizados em testes de regressão posteriores.

## Ferramentas do Teste de Regressão

Se o software sofre mudanças constantes, os testes regressivos irão ficar cada vez mais custosos, assim como o tempo investido neste processo nos casos em que é feito manualmente.

Nestas situações, a automatização é a melhor escolha.

- [Selenium](https://www.seleniumhq.org/): ferramenta open-source utilizada para a automação de testes em uma aplicação web. Para testes de regressão baseados em browsers, o Selenium é utilizado, assim como para regressõe a nível de UI.

## O que são o Teste de Regressão e a Administração de Configurações?

Administração de Configurações em testes regressivos torna-se imperativa em ambientes que apliquem a Metodologia Ágil, onde o código é continuamente alterado.

Para garantir um teste de regressão válido, devemos seguir os seguintes passos:

- Mudanças no código não são permitidas durante a fase de teste regressivo.
- Um caso de teste de regressão deve constituir-se de mudanças no desenvolvimento não afetadas.
- A database utilisada para a regressão deve estar isolada, mudanças não são permitidas.

## Quais são as diferenças entre Re-testar e Teste de Regressão?

- Re-Testar:
  - Significa testar a funcionalidade novamente para garantir a correção no código. Se não solucionada, defeitos devem ser re-abertos, se solucionada, o defeito é finalizado.

  - Re-testar é uma modalidade aplicada para checar se casos de teste infrutíferos na execução final, obtém sucesso uma vez que os defeitos foram corrigidos.
  - Re-testes trabalham para detectar correções.
  - A verificação de defeitos é parte do processo.
  - A prioridade é mais alta que a dos testes de regressão, sendo, portando, feitos antes.
  - É um teste planejado
  - Não pode ser automatizado

- Teste de Regressão:
  - Significa testar a aplicação quando ela sofre uma mudança no código, para garantir que o novo código não afetou outras partes já existentes do software.
  - Não inclui verificação de defeitos
  - Baseado no tipo de projeto e disponibilidade de recursos o teste de regressão pode ser paralelo a Re-testagem.
  - É um teste genérico
  - Pode ser automatizado.
  - Checa por efeitos colaterais não previstos.
  - Ocorre quando há modificação, ou mudanças se tornam obrigatórias para o projeto.
