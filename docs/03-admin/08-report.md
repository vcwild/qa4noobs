# Elaboração de Relatório

Elaborar um relatório é uma tarefa que exige muita atenção e cuidado, pois é um documento que deve ser claro e objetivo, e que deve conter informações relevantes para o leitor.

## O que é um Bug?

Um bug é a consequencia/resultado de uma falha no código. Uma falha no código pode ter sido gerada por um erro de programação, ou por um erro de design. Geralmente erros no código acontecem por falta de conhecimento do programador, ou por falta de atenção.

É esperado que o software desenvolvido contenha uma quantidade razoável de bugs, pois é impossível prever todos os cenários possíveis de uso da aplicação. Porém, quanto mais bugs forem encontrados de forma tardia, mais tempo será gasto para corrigi-los, e mais tempo será gasto para testar a aplicação.

## Defeitos na Testagem de Software

Um defeito é uma variação ou desvio da aplicação de software em relação as regras de negócio ou requerimentos de business originais.

Um defeito de software consiste em um erro no processo de codificação, o que causa resultados incorretos ou inesperado no programa, o que não atende aos requerimentos estabelecidos. Testers podem se deparar com tais defeitos ao aplicar os casos de teste.

Estes dois termos possuem tênue diferença, e na indústria ambos são falhas que precisam ser corrigidas, sendo usadas de forma intercambeável por alguns times

## Relatório de Bugs na Testagem de Software

Um relatório de bugs é um documento detalhado acerca de bugs encontrados na aplicação, contendo cada detalhe como descrição, data em que foi localizado, nome do testers que o encontrou, nome do dev que corrigiu, etc. Estes relatórios auxiliam a identificar bugs similares no futuro, de forma a evitá-los.

Ao reportar bugs ao desenvolvedor, o seu relatório deve conter as seguintes informações:

- Defeito_ID: Número de identificação única para o defeito.
- Descrição do Defeito: Descrição detalhada incluindo informações sobre o módulo em que o defeito foi encontrado.
- Versão: Em qual versão da aplicação o defeito foi localizado.
- Data de Surgimento: Data em que o defeito surgiu.
- Referência: Onde se provê referencias a documentações como requerimentos, design, arquitetura ou até mesmo capturas de tela do erro para auxiliar a compreensão.
- Detectado por: Nome/ID do testers que identificou o defeito.
- Status: Situação do defeito.
- Corrigido por: Nome/ID do desenvolvedor que corrigiu.
- Data de Encerramento: Data em que o defeito foi finalizado.
- Gravidade: Descreve o impacto do defeito na aplicação.
- Prioridade: Relacionada com a urgência na correção do defeito. A prioridade pode ser alta/média/baixa com base na urgência de impacto com que o defeito deve ser corrigido.

Outros elementos necessários para o relatório são:

- Quando o bug ocorre? Como é possível reproduzí-lo?
- Qual é o comportamento incorreto e o que era esperado?
- Qual é o impacto no usuário? O quão crítica será sua correção?
- Isto ocorre apenas com dados de teste específicos?
- Qual build foi utilizada para o teste? (incluindo, idealmente, a commit do git)
- Se o bug ocorre na versão mobile, qual modelo, tamanho de viewport e sistema operacional?
- Se o bug ocorre em um browser, qual o tipo de browser, resolução e versão?
- Se o bug ocorre em uma API, qual a API específica/fluxo de trabalho é impactado, quais são os parâmetros de request e resposta?
- Captura de tela com as áreas relevantes demarcadas.
- Video demonstrando os passos tomadas até ocorrência do bug.
- Logs da aplicação/servidor
- Qualquer feature de seleção/configuração específica, caso envolvida quando o bug ocorreu?

## Processo de Gerenciamento dos Defeitos

Sistemática para identificação e correção dos bugs. O ciclo de gerenciamento dos defeitos contém os seguintes passos:

 1. Descoberta do Defeito.
 2. Categorização.
 3. Correção do Defeito por Desenvolvedores.
 4. Verificação por Testers
 5. Encerramento do Defeito
 6. Relatório de Defeitos ao fim do projeto.

<img src="https://www.guru99.com/images/TestManagement/testmanagement_article_4_4.png" alt="Ciclo de Gerenciamento de Defeitos">

### Descoberta

Nesta fase os times devem descobrir tantos defeitos quanto possível antes que o usuário final o faça. Um defeito é declarado como encontrado, e tem seu status alterado para "Aceito" uma vez reconhecido e aceito por desenvolvedores.

<img src="https://www.guru99.com/images/TestManagement/testmanagement_article_4_5.png" alt="Fluxograma Detecção e Reconhecimento de Defeitos">

### Categorização

A categorização de defeitos auxilia os desenvolvedores de software a priorizar suas tarefas de acordo com sua prioridade.

- Crítica: Os defeitos que precisam ser corrigods **imediatamente** uma vez que podem causar grandes danos ao produto.
- Alta: O defeito impacta as principais features do produto.
- Média: O defeito causa desvios mínimos nas regras de negócio do poduto.
- Baixa: O defeito em pouco afeta a operação do produto.

### Resolução

A resolução de defeitos na testagem de software é um processo que corrige desvios passo a passo, iniciando-se com a designação de defeitos para desenvolvedores, que por sua vez inserem os defeitos em um cronograma de acordo com sua prioridade.

Uma vez que a correção seja finalizada, os desenvolvedores enviam um relatório ao Gerente de Testes, o processo auxilia na correção e registro dos defeitos.

- Designação: Um desenvolvedor ou outro profissional recebe a correção a ser feita, e altera o status para *Respondendo*.
- Fixação de Cronograma: O desenvolvedor assume parte do controle nesta fase, criando uma agenda para corrigir os defeitos com base em sua prioridade.
- Correção do Defeito: Enquanto o time de desenvolvimento corrige os defeitos, o Gerente de Testes registra o processo.
- Relatório da Resolução: Envio do relatório sobre a correção de defeito por parte dos desenvolvedores.

### Verificação

Após o time de desenvolvimento ter corrigido e reportado o  defeito, a equipe de testes  verifica que os problemas foram realmente corrigidos.

### Encerramento

Uma vez que o defeito tenha sido resolvido e verificado, o status é alterado para *"Encerrado"*.

## Relatório de Defeitos

É um processo em que gerentes de testes preparam e enviam o relatório de defeitos para que o time de gerência provenha feedback no processo de gestão dos defeitos, bem como o status destes.

Então, o time de gerência checa o relatório, podendo enviar o feedback ou prover suporte adicional caso necessário. O relatório de defeitos auxilia a melhor comunicar, registrar e explicar defeitos com detalhes.

O conselho de administração tem o direito de saber o status dos defeitos, uma vez que devem compreender o processo de gestão para auxiliar no projeto. Portanto, deve-se reportar a eles a situação atual dos defeitos, acatando feedback.

### Como medir e avaliar a qualidade da execução de testes

- Taxa de Rejeição dos Defeitos: (Número de defeitos rejeitados/Número total de defeitos)*100
- Taxa de Vazamento dos Defeitos: (Número de defeitos não detectados/Total de defeitos do software)*100
