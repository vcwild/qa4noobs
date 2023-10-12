# Teste Exploratório

Testagem exploratória é avaliar um produto aprendendo sobre ele através de exploração e experimentação, incluindo:

- Questionamento;
- Estudo;
- Modelagem;
- Observação;
- Inferência;

Muitas vezes descrito como aprendizagem simultânea, design de teste e execução. Foco na descoberta, e dependa da orientação do testador indivual para descobrir eventuais defeitos que não são abrangidos  com facilidade no escopo de outros testes.

## Por que usar testes exploratórios?

A maioria dos testes de qualidade de software usa uma abordagem **estruturada**, com casos de teste definidos segundo métricas como o histórico de usuários e parâmetros de engenharia de software, com uma projeção de cobertura adequada do ponto de vista técnico.

O que falta é cobertura para casos extremos, que são verificados no UAT e testados com base nas personas dos usuário. Já os testes Exploratórios são **aleatórios**, ou não estruturados, por natureza, e podem revelar bugs que não seriam descobertos nas modalidades estruturadas de testes.

A execução dos testes é implementada sem a criação de etapas formais, sendo, portanto, um precursor da automação.

Ajuda a formalizar as descobertas e fazer a documentação automática. Com o auxílio de feedback visual e ferramentas de teste colaborativo toda a equipe pode participar de testes exploratórios, permitindo uma rápida daptação às mudanças, promovendo um fluxo de trabalho ágil.

Além disso, o testador pode converter sequências de teste exploratório em scripts de testes funcionais, automatizando o processo.

Portanto, testes exploratórios aceleram a documentação, facilitam os testes unitários e ajudam a criar um ciclo de feedback instantâneo.

## Quando você deve usar testes exploratórios?

São adequados para cenários específicos, como quando alguem precisa aprender sobre um produto ou aplicativo com rapidez e fornecer feedback rápido. Eles ajudam a avaliar a qualidade sob a perspectiva do usuário.

Em muitos ciclos de software, uma iteração inicial é necessária quando as equipes não tem muito tempo para estruturar testes, testes exploratórios, são bastante úteis nesse cenário.

O teste exploratório garante que nenhum caso de falha crítica passe batido, garantindo a qualidade.
Também auxiliam no processo de teste de unidade, podendo o tester documentar as etapas e usar essas informações para testar com maior amplitude em sprints posteriores.

É especialmente útil ao encontrar novos cenários de teste para aprimorar a cobertura.

## Quando **não** executar testes exploratórios?

As organizações devem ser capazes de atingir equilíbrio entre teste exploratório e com script. Sozinhos, os exploratórios não podem oferecer cobertura suficiente, sendo portanto, complementares aos com script em alguns casos.

Especialmente em testes regulamentados ou baseados em conformidade, que requerem o teste com script. Nestes casos, certas checklists e mandatos precisam ser seguidos por motivos legais, sendo preferível o teste com script.

Um exemplo são testes de acessibilidade que seguem protocolos legais, com padrões definidos que precisam ser aprovados.

## Importância dos testes exploratórios para CI/CD

*// CI/CD: Continuous Integration/Continuous Delivery, método para entregar aplicações com frequência aos clientes. //*

Testes exploratórios abrem os testes para todos, não apenas testadores treinados, assim, a revisão será mais rápida e eficiente, e poderá ser feita por pessoas além do tester tradicional.

Testes exploratórios **complementam** a estratégia de testes das equipes de QA, incluindo uma série de sessões de teste não documentadas para encontrar bugs ainda não descobertos.

Quando combinados com *testes automatizados* e outras práticas, aumentam a cobertura de testes, descobrindo casos extremo e adicionando, potencialmente, novos recursos e melhorias no produto.

**Sem rigidez estrutural, estimulam a experimentação, a criatividade e a descoberta nas equipes.**

A natureza quase instantânea de feedback ajuda a fechar lacunas entre testers e devs, mas acima de tudo, os resultados fornecem uma perspectiva orientada ao usuário e feedback para as equipes de devs.

**O objetivo é complementar os testes tradicionais e localizar defeitos ocultos atrás do fluxo de trabalho tradicional**.
