# Verificação e Validação

A verificação, na testagem de software é um processo de checar documentos, design, código e programa para validar se o software foi construído de acordo com as regras de negócio.

O principal objetivo é garantir a qualidade da aplicação, design, arquitetura, etc. Este processo envolve atividades como revisões, passo a passo e inspeções.

## O que é Validação para testes de software?

É um mecanismo dinâmico que testa e valida se o software de fato atende as exatas necessidades do cliente ou não. O processo auxilia a garantir que o produto atende o uso desejado em um ambiente apropriado. O processo de Validação envolve atividades como Teste Unitário, Teste de Integração, Teste de Sistema e Teste de Aceitação do Usuário (UAT)

## Diferenças entre Verificação e Validação

Vejamos as características que diferem Verificação de Validação:

### Verificação

- O processo de verificação inclue checar documentos, design, código e programa.
- **Não envolve** a execução de código.
- A verificação utiliza métodos como revisões, passo a passo, inspeções, verificação de mesa, etc.
- Se o sistema está em conformidade com as especificações.
- Encontra bugs no início do ciclo de desenvolvimento.
- Alveja a aplicação e arquitetura de software, especificações, design completo, alto nível, design da base de dados, etc.
- Time de QA realiza verificações e garante que o software encontra-se em conformidade com as regras de negócio.
- Vem **antes** da Validação.

### Validação

- É um mecanismo dinâmico para teste e validação de um produto factual.
- Sempre envolve a execução de código.
- Utiliza-se de métodos como testes Caixa-Preta, Caixa-Branca e Não-Funcionais.
- Pode localizar bugs que o processo de verificação não detectou.
- Tem como alvo o produto em si.
- Com o envolvimento do time de testes a validação é executada em código de software.
- Vem **depois** da verificação.

## Exemplos de Verificação e Validação

*Um botão clicável de nome* **Submet**

- Verificação checaria o documento de design e corrigiria o erro de digitação.
- Do contrário, o time de desenvolvimento criaria o botão da seguinte forma:

<img src="https://www.guru99.com/images/blog/submet.png" alt="Botão Submet">

Portanto, a especificação é um botão de nome **Submit**

- Uma vez que o código está pronto, a Validação é feita.
- No processo de Validação, registra-se que o botão não é clicável.

Graças ao teste de Validação, o time de desenvolvimento fará o botão Submit tornar-se clicável.

## Validação do Projeto

É um processo que avalia se produto de software está de acordo com os exatos requerimentos de usuários finais ou investidores. O propósito é testar o produto de software após desenvolvimento, para garantir que atenda as regras de negócios no ambiente de usuário.

<img src="https://www.guru99.com/images/jsp/030116_0846_LearnDesign1.png" alt="Fluxograma Validação de Design">

A validação preocupa-se em demonstrar a consistência e completude do design no que tange necessidades do usuário. Este é o estágio em que se constrói uma versão do produto e valida-se contra as regras de negócio.

<img src="https://www.guru99.com/images/jsp/030116_0846_LearnDesign2.png" alt="Fluxograma Processo de Validação">

O objetivo é provar com evidências objetivas que o produto satisfaça as necessidades de usuários, as evidências objetivas não são nada além de provas físicas do output, como uma imagem, texto ou arquivo de audio que indique que o procedimento obteve sucesso.

Este processo envolve atividades de teste, inspeção, análise, etc.

## Verificação do Projeto

É um método que confirma se o output de um produto de software designado atende as especificações de input ao examinar e prover evidências. O objetivo do processo de verificação é garantir que o design é idêntico ao especificado.

Entrada de projeto é qualquer requerimento físico e de performance usado como base para propósitos de design. O output é resultado de cada fase de design ao final de todo o esforço de desenvolvimento. O output final é a base para registro mestre do dispositivo.

### Processo de Verificação do Projeto

- Identificação e Preparo
  - Durante o estágio de desenvolvimento de uma especificação, as atividades de identificação e verificação são feitas de forma paralela. Isto permite ao designer garantir que as especificações são verificáveis. Um engenheiro de testes pode, então, iniciar planos de teste e procedimentos detalhados. Quaisquer mudanças na especificação devem ser comunicadas.
  - Identificar a melhor abordagem para condução da verificação, definir métodos de medição, recursos necessários, ferramentas e instalações.
  - O plano de verificação completo será revisado pelo time de design para identificar eventuais problemas antes da finalização do plano.

- Planejamento:
  - Planejar para verificação é uma atividade concomitante entre times de core e desenvolvimento. Isto ocorre através do ciclo de vida do projeto, e será atualizado conforme e quaisquer mudanças sejam feitas nos inputs.
  - Durante esta fase, o sistema ou software sob testes deve ser documentado em escopo.
  - Plano de testes preliminar e seu refinamento são feitos neste estágio. O plano captura as milestones críticas reduzindo os riscos do projeto.
  - Ferramentas, ambiente de testes, estratégia de desenvolvimento e identificação de requerimentos através de inspeção ou análise.

- Desenvolvimento:
  - O desenvolvimento do caso de testes coincidirá com a metodologia SLDC implementada por um time. Uma variedade de métodos são identificados durante este estágio.
  - As entradas de projeto serão desenvolvidos de forma a incluir verificações simples, livres de ambiguidade e verificáveis.
  - Tempo de verificação deve ser reduzido quando conceitos similares são conduzidos em sequência. Até mesmo o output de um teste pode ser usado como input de testes subsequentes.
  - Links de tratabilidade são criados entre casos de testes e inputs de projeto correspondentes, para garantir que todos os requerimentos sejam testados e que o output de projeto atenda aos inputs.

- Execução:
  - Os procedimentos de teste criados durante a fase de desenvolvimento são executados de acordo com o plano de testes, que deve ser estritamente seguido para atividades de verificação.
  - Caso qualquer resultado inválido ocorra, ou caso qualquer procedimento necessite de modificações, é importante documentar as mudanças e conseguir aprovações pertinentes.
  - Neste estágio, quaisquer problemas são identificados e catalogados como um defeito.
  - Matriz de tratabilidade é criada para verificar que todos os inputs de projeto identificados no plano de teste de verificação tenham sido testados e determinar a taxa de sucesso.

- Relatórios:
  - Esta atividade é desenvolvida ao final de cada fase de verificação.
  - O relatório de verificação do design provê um sumário detalhado dos resultados de verificações que incluem gerenciamento de configurações, resultados de teste para cada modalidade e problemas encontrados durante a verificação
  - O relatório de rastreabilidade de verificação de design é criado entre requerimentos e resultados de teste correspondentes para  verificar que todas as regras de negócio foram testadas e providas com resultados apropriados.
  - Qualquer inconformidade será documentada e apropriadamente abordada.
  - Revisões são feitas quando da finalização das verificações de design, e são aprovadas respectivamente.

## Processo de validação do Projeto

- Alguns dos designs podem ser validados ao comparar com equipamentos similares desenvolvendo atividades semelhantes. Este método é particularmente relevante para validar alterações de configuração para a infraestrutura existente, ou designs padrão que devem ser incorporados em um novo sistema ou aplicação.
- Demonstração e/ou inspeções podem ser usadas para validar regras de negócio e outras funcionalidades do projeto.
- Análises de produto podem ser feitas como modelagem matemática, uma simulação que recria a funcionalidade necessária.
- Testes são executados no design final, que valida a habilidade do sistema de operar conforme as diretrizes estabelecidas.
- Plano de testes, execução e resultados devem ser documentados e mantidos como parte dos registros de design. Portanto, Validação é uma coletânea dos resultados de todas as ações de validação.
- Quando produtos equivalentes são utilizados na validação de design final, o fabricante deve documentar a similaridade e qualquer diferença da produção original.

*Exemplo:*

- Tomemos como exemplo um produto simples, um relógio a prova d'agua.
- As regras de negócio podem definir que "o relógio deve ser a prova de água durante natação".
- A especificação de design pode definir que "o relógio deve funcionar mesmo que o usuário nade por tempo prolongado">
- Os resultados de teste devem confirmar que o relógio atende estas regras ou iterações de redesign são feitas até que satisfaça aos requerimentos.

## Vantagens da Validação e Verificação de Design

- Podemos monitorar continuamente os designs, o que nos permite atender aos requerimentos definidos por usuários em cada estágio.
- Validar o design irá pontuar a diferença entre como a funcionalidade opera e como ela deveria operar.
- Documentar os procedimentos de validação irá auxiliar a facilmente enteder a funcionalidade em qualquer estágio no futuro caso exista alguma mudança ou melhoria.
- O tempo de desenvolvimento será consistentemente reduzido, melhorando a produtividade, o que habilita a entrega do produto conforme esperado.
- Este processo inclue amplitude e escopo de cada método de validação que devem ser aplicados.
- Qualquer diferença entre o resultado e as necessidades de usuário devem ser documentados.
- Mudanças na validação de design levam a revalidações.
- É importante documentar todas as atividades  que ocorram durante a validação, o que adequadamente prova que o design atende aos requerimentos de usuário.
