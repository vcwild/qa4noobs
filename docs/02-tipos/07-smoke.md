# **Teste de Fumaça**

Técnica que verifica se a versão implantada do software está estável ou não.

Consiste em uma bateria mínima de teste aplicadas a cada build do software para verificar suas funcionalidades.

    Também conhecido como "Teste de Verificação da Build" ou "Teste de Confiança".

Em termos simples o teste de fumaça valida se as features vitais estão funcionando e se não existem quaisquer showstoppers na build sob testes.

É um pequeno e rápido teste de regressão apenas para testar as principais funcionalidades, de forma a determinar se a build esta falha a ponto de tornar demais testes um desperdício de tempo e recursos.

### Teste de Fumaça x Teste de Sanidade

- *Teste de fumaça* verifica funcionalidades críticas enquanto o *Teste de Sanidade* verifica novas funcionalidades como bug fixes.
- *Teste de fumaça* é documentado ou roteirizado, enquanto o *Teste de Sanidade*, não é.
- O *Teste de Fumaça* verifica a totalidade do sistema do começo ao fim, enquanto o *Teste de Sanidade* verifica apenas um componente individual.

## Quando aplicar o Teste de Fumaça?

Aplicado sempre que novas funcionalidades forem desenvolvidas e integradas com uma build já existente, que é então implantada no ambiente de QA, garantindo que todas as funcionalidades estejam, ou não, funcionando perfeitamente.

<img src="https://www.guru99.com/images/3-2016/032816_1308_SmokeTestin1.png" alt="Fluxograma Testes">

Caso a build seja positivamente verificada pelo time de QA no Teste de Fumaça, a equipe continua com a testagem funcional.

### Quais os motivos para aplicar o Teste de Fumaça?

- Todos os showstoppers serão identificados aqui;

- É feito após uma build ser encaminhada ao QA. Assim a maioria dos defeitos são identificados em estágios iniciais do desenvolvimento de software;

- Com o teste de fumaça, nós simplificamos a detecção e correção dos principais defeitos;

## Como aplicar o Teste de Fumaça?

Esta técnica é, geralmente, feita de forma manual embora exista a possibilidade de atingir o mesmo efeito através da automação. Pode variar de empresa pra empresa.

- **Testagem Manual:**
    Realizado para garantir que a navegação de paths críticos esteja operando como esperando e não impeça a funcionalidade.
    Uma vez que a build é encaminhada ao QA, casos de teste de alta prioridade devem ser tomados para localizar defeitos principais no sistema.
    Caso a build seja aprovada, contniuamos a testagem funcional. Caso o teste falhe, a build é rejeitada e encaminhada de volta a equipe de desenvolvimento, recomeçando o ciclo.

- **Testagem Automatizada**
   A automatização é utilizada para a testagem de regressão, entretanto, podemos também aplicá-la para casos de teste desta modalidade, agilizando todo o processo de verificação de novas builds.
   Ao invés do processo ineficiente de repetir todos os testes sempre que uma nova build for implementada, podemos automatizar os passos necessários, poupando tempo e recursos.

   <img src=https://www.guru99.com/images/3-2016/032816_1308_SmokeTestin2.png alt= "Fluxograma Ciclo Testagem">
