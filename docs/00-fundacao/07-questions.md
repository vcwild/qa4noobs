# **Perguntas e Respostas**

Vamos revisar os conceitos aprendidos até agora e responder algumas perguntas.

## **Perguntas**

Vamos responder algumas perguntas sobre os conceitos aprendidos até agora.

### *1) Quais são as fases envolvidas no ciclo de vida do teste de software*

- Planejamento de teste: estrategia a ser aplicada nos testes
- Desenvolvimento dos casos de teste: casos de testes são definidos e desenvolvidos
- Configuração de Ambiente: configuração de software e hardware necessário aos testes
- Execução: execução do código e comparar dos resultados esperados vs resultados reais
- Encerramento: avaliação dos critérios de conclusão com base na cobertura de testes, qualidade, objetivos criticos de negócio, etc.

### *2) Quais são os diferentes tipos de teste*

- Caixa Preta: Requisitos e especificações, sem visão interna de funcionamento e estrutura do software, da parte funcional e sob a perspectiva do usuário
- Caixa Branca: Baseada na estrutura interna, arquitetura e código fonte, podemos testar as unidades do sistema.
- Caixa Cinza: Depuração de software, testador tem conhecimento limitado do funcionamento interno. Misto.

### *3) Quais são os diferentes níveis de teste?*

- Testes de Unidade: valida partes individuais do código
- Teste de Integração: Teste que valida a interação das partes individuais do projeto, bem como sua interação com interfaces externas
- Teste de Sistema: funcional, utiliza de  fato o sistema
- Teste de Aceitação: com o usuário, aceitação do sistema

### *4) Explique o ciclo de  vida do bug ou o ciclo de vida do defeito*

- Defeito é encontrado(NEW)
- Assign: atribuir para o dev corrigir
- Atividade: resolvendo o bug em si, rejeitar ou aceitar, retornar para maiores explicações, etc.
- Testes: o bug corrigido é testado novamente para validação. Caso não esteja, retorna a fase de atividade.
- Closed: Corrigido, validado, encerrado.

### *5) O que é um caso de teste?*

É um conjunto de condições e variáveis sob as quais um testador determinará se um sistema em testes satisfaz os requisitos funcionais corretamente.

### *6) Qual é a diferença entre testes funcionais e não funcionais?*

- Funcionais: **Realizado antes dos não-funcionais**, tem como base os requisitos do cliente, descreve o que o produto faz
- Não-Funcional: **Realizado apos o teste funcional**, baseado nas expectativas do cliente e descrevem como o produto funciona.

### *7) O que é Verificação e Validação em Teste de Software*

Verificação - Técnica de análise estática, verifica a documentação, teste é feito sem execução do código (revisão, inspeção e teste passo-a-passo)

Validação - Técnica de análise dinâmica onde o teste é feito executando o código (técnicas de teste não-funcionais e funcionais)

### *8) O que é teste de usabilidade*

Metodologia de testes onde o cliente final é solicitado a usar o softwar para verificar sua facilidade de usa, percepção, desempenho do sistema, etc. Forma precisa de entender o ponto de vista do cliente, podendo ser utilizados protótipos mocks e etc.

### *9) O que é cobertura e quais sãos os diferentes tipos de técnicas de  cobertura?*

Parâmetro para descrever até que ponto o código fonte é testado.

- Cobertura de declaração: garante que cada linha de código foi executada e testada
- Cobertura de decisão: todas os verdadeiro e falsos foram executadas e testados
- Cobertura de Caminho: todas as rotas possíveis através de uma determinada parte do código foram executadas e testadas.

### *10) Um defeito que poderia ter sido removido durante o estágio inicial é removido em um estágio posterior. Como isso afeta o custo?*

O defeito deve ser removido o quanto antes, pois ao ser postergado o custo aumenta exponencialmente. A remoção em fases iniciais é mais barata e simples.

### *11) O que é teste de regressão e confirmação*

- Regressão: confirma que uma alteração recente no código não afeta adversamente os recursos ja existentes
- Confirmação: quando um teste falha devido a defeito, este é relatado, nova versão do software corrigido é enviado e o teste é novamente executado. É a confirmação da correção.

### *12) Qual base em que você pode chegar a uma estimativa para o seu projeto*

Para estimar o projeto deve-se considerar:

- Dividir todo o projeto em tarefas menores:
- Atribuir cada tarefa aos membros da equipe
- Faça uma estimativa do esforço necessário para completar cada tarefa
- Valide a estimativa

### *13) Quais casos de teste são escritos primeiro: caixas brancas ou caixas pretas?*

Normalmente os casos **caixa preta** são escritos primeiro.

Uma vez que estes necessitam somente dos documentos de requisitos e design, ou plano de projeto. Estes documentos estão facilmente disponíveis no início do projeto.

Já testes de caixa branca não podem ser executados na fase inicial do projeto pois precisam de maior clareza de arquitetura, que não está disponível em etapas iniciais. Portanto, são geralmente escritos **depois** dos testes caixa-preta.

### *14) Mencione os componentes básicos do formato do relatório de defeitos*

- Nome do projeto
- Nome do módulo (se houver)
- Defeito detectado em
- Defeito detectado por
- Onde o defeito foi encontrado
- ID e nome do defeito
- Instantâneo do defeito (evidências do bug)
- Status de Prioridade/Gravidade
- Defeito resolvido por
- Defeito resolvido em (data)

### *15) O que significa Cascata de Defeitos*

Cascateamento de defeitos ocorre quando um defeito é causado por outro defeito, um defeito adiciona o outro.

Quando um defeitos estiver presente em qualquer etapa, mas não for identificado, oculto para as outros fases sem ser notado, resultará em grande aumento no número de defeitos.

São majoritariamente detectados no teste de regressão

### *16) Quais são as categorias dos defeitos*

- Errado: significa que os requisitos foram implementados incorretamente, é uma variação da especificação fornecida.
- Ausente: Esta é variação das especificações, uma indicação de que uma especificação não foi implementada ou um requisito do cliente não foi anotado corretamente.
- Extra: É um requisito incorporado ao produto que não foi fornecido pelo cliente final. É sempre uma variação da especificação, mas pode ser um atributo desejado pelo usuário do produto.

### *17) Em que base o plano de aceitação é preparado*

- Documento de requisito: especifica o que exatamente é neecssário no projeto da perspectiva do cliente.
- Entrada do Cliente: podem ser discussões, conversas informais, e-mail, etc.
- Plano do Projeto: o plano do projeto preparado pleo gerente do projeto também serve como uma boa entrada para finalizar o teste de aceitação

### *18) Por que o Selenium é a ferramenta preferida para testes de automação?*

Selenium é uma ferramenta de código aberto que se destina a automatizar testes realizados em navegadores web. Como o Selenium é de código aberto, não há custo de licenciamento envolvido, o que é grande vantagem sobre outras ferramentas de teste. Outras razões são:

- Os *scripts* de teste podem ser escritos em diversas linguagens de programação: Java, Python, C#, PHP, Ruby, Perl &, Internet
- Os testes podem ser realizados em qualquer navegador: Mozilla, IE, Chrome, Safari ou Opera.
- Ele pode ser integrado com ferramentas como TestNG, Junit para gerenciar casos de teste e gerar relatórios
- Pode ser integrado com Maven, Jenkins & Docker para realizar testes contínuos.

### *19) Quais são os varios componentes do Selenium?*

- Selenium Integrated Development Environment (IDE)
- Selenium Remote Control (RC)
- Selenium WebDriver
- Grade de Selenium

### *20) Quais são os diferentes tipos de localizadores no Selenium?*

O localizador nada mais é que um endereço que identifica um elemento web exclusivamente dentro da página web. Assim, para identificar os elementos da web de forma precisa e, temos diferentes tipos de localizadores no Selenium da seguinte forma:

- EU IA
- Nome da Classe
- Nome
- TagName
- Texto do Link
- PartialLinkText
- XPath
- Seletor CSS
- DOM

### *21) O que é XPath?*

XPath, também chamado de XML Path é uma linguagem para consultar documentos XML. É uma estratégia imporatnte para localizar elementos no Selenium. Consiste em uma expressão de caminho junto com algumas condições. Aqui, voce pode escrever facilmente um script/consulta XPath para localizar qualquer elemento na página da web. Ele é projetado para permitir a navegação de documentos XML com o objetivo de selecionar elementos individuais, atributos ou alguma outra parte de um documento XML para processamento específico. Também produz localizadores confiáveis

### *22) Qual a diferença entre Caminho Absoluto e Relativo?*

- XPath absoluto:

É a maneira direta de localizar o elemento, mas a desvantagem do XPath absoluto é que, se houver alguma alteração feita no caminho do elemento, o XPath falhará. Por exemplo:

         /html/body/div[1]/section/div[1]/div

- XPath Relativo:

Para XPath relativo, o caminho começa no meio da estrutura HTL DOM. Ele começa com barra dupla (//), o que significa que pode pesquisar o elemento em qualquer lugar da página da web. Por exemplo:

       // input [@ id = 'ap_email']

### *23) Quando devo usar o Selenium Grid?*

O Selenium Grid pode ser usado para executar scripts de teste iguais ou diferentes em várias plataformas e navegadores simultaneamente, de modo a obter execução de teste distribuida, testando em ambientes diferentes e economizando tempo de execução.

### *24) Como eu inicio o navegador usando o WebDriver?*

A seguinte sintaxe pode ser usada para iniciar o navegador:

WebDriver driver = new FirefoxDriver ()

Driver WebDriver = novo ChromeDriver()

Driver WebDriver = novo InternetExplorerDriver ()

### *25) O teste deve ser feito somente após a conclusão das fases de construção e execução?*

O teste é sempre feito após as fases de construção e execução. Quanto mais cedo detectarmos um defeito, mais econômico ele será. Por exemplo, consertar um defeito na manutenção é dez vezes mais caro do que consertá-lo durante a execuação.

### *26) Qual a relação entre a realidade do ambiente e as fases de teste?*

Conforme as fases de testes avançam, a realidade do ambiente se torna mais importante. Por exemplo, durante o teste de unidade, você precisa que o ambiente seja parcialmente real, mas na fase de aceitação você deve ter um ambiente 100% real, ou podemos dizer que deveria ser **o** ambiente real.

### *27) O que é teste aleatório?*

Normalmente, em testes aleatórios, os dados são gerados aleatoriamente, muitas vezes usando uma ferramenta. Por exemplo, a figura a seguir mostra como os dados gerados aleatoriamente são enviados ao sistema.

Esses dados são gerados usando uma ferramenta ou mecanismo automatizado. Com essa entrada aleatória, o sistema é então testado e os resultados observados.

### *28) Quais casos de teste podem ser automatizados?*

- Teste de Fumaça
- Teste de regressão
- Teste de cálculo complexo
- Testes baseados em dados
- Teste não funcionais

### *29) Com base em que você pode mapear o sucesso dos testes de automação?*

- Taxa de detecção de defeitos
- Tempo de execução da automação e economia de tempo para lançar o produto
- Redução de mão de obra e outros custos

### *30) Como clicar em um hyperlink usando linkText()?*

           driver.findElement(By.linkText("Google")).click();

Este comando encontra o elemento usando o textos do link e, a seguir, clica no elemento. Assim, o usuário seria redirecionado para a página correspondente.

### *31) O que é TestNG?*

É uma estrutura avançada projetada de forma a aproveitar os benefícios dos desenvolvedores e testadores. Ele também possui um mecanismo de tratamento de exceções embutido que permite que o programa seja executado sem encerrar inesperadamente.

### *32) Como definir a prioridade do caso de teste no TestNG*

O código abaixo ajuda você a entender como definir a prioridade do caso de teste no TestNG:

      ```java
      package TestNG;
      import org.testing.annotation.*;

      public class SettingPriority {
            @Test(priority=0)
            public void method1() {}

            @Test(priority=1)
            public void method2() {}

            @Test(priority=2)
            public void method3() {}
      }
      ```

Sequência de execução de teste:

 1. Method1
 2. Method2
 3. Method3

### *33) O que é repositório de objetos? Como podemos criar um repositório de objetos no Selenium?*

O repositório de objetos refere-se à coleção de lementos da web pertencentes ao Application Under Test (AUT) junto com seus valores de localizador. Com relação ao Selenium, os objetos podem ser armazenados em uma planilha do Excel que pode ser preenchida dentro do script sempre que necessário.

### *40) Como inserir texto na caixa de texto usando Selenium WebDriver?*

Usando o método **sendKeys()** podemos inserir o texto na caixa de texto.

### *41) Quais são as diferentes estratégias de distribuição para os usuários finais?*

- Piloto
- Implementação Gradual
- Implementação em Fases
- Implementação Paralela

### *42) Explique como você pode encontrar links quebrados em uma página usando o Selenium WebDriver*

Suponha que entrevistador apresente 20 links em uma página web, e temos de verificar quais destes 20 links estão funcionando, e quais estão quebrados.

A solução é enviar solicitações HTTP a todos os links na página da web e analisar a resposta. Sempre que você usar o método **driver.get()** para navegar até uma URL, ele responderá com um status de 200-OK. Isso indica que o link está funcionando e foi obtido. Qualquer outro status indica que o link está quebrado

Primeiro, temos que usar as marcas âncora `<a>` para determinar os diferentes hiperlink na página da web.

Para cada tag `<a>` podemos usar o valor do atributo 'href' para obter os hiperlinks e então analisar a resposta recebida quando usado no método **driver.get()**

### *43) Qual técnica deve ser considerada no script caso não haja ID ou nome do frame?*

Se o nome e id do quadro não estiverem disponíveis, podemos usar **quadro por índice**. Por exemplo, caso existam 3 frames em uma páginda web, e nenhum deles tiver nome ou id de frame, podemos selecioná-los usando um atributo de índice de frame (baseado em zero).

Todo o quadro terá um número de índice, sendo o primeiro "0", o segundo "1" e o terceiro "2".

      driver.switchTo().frame(int arg0);

### *44) Como tirar screenshots no Selenium WebDriver?*

Usando a função **TakeScreenshot** é possível efetuar a captura de tela. Com a ajuda do método **getScreenshotAs()** você pode salvar a captura efetuada.

Exemplo:

       scrFile = ((TakeScreenshot)driver).getScreenshotAs(outputtype.FILE)

### *45) Explique como você logará em qualquer site se ele está mostrando qualquer pop-up de autenticação para nome de usuário e senha?*

Se houver um pop-up para fazer login, precisamos usar o comando explícito e verificar se o alerta está realmente presente. O código a seguir a entender o uso do comando explícito.

       WebDriverWait wait = new WebDriverWait(driver, 10);
       Alert alert = wait.until(ExpectedConditions.alertIsPresent());
       alert.authenticateUsing(new UserAndPassword(**username**, **password**));

### *46) Como pular um método ou bloco de código no TestNG?*

Para pular um determinado método de teste ou código, você pode definir o parâmetro 'enabled' na anotação de teste como *false*

          @Test(ativado=falso)

### *47) Explique resumidamente o que o trecho de código abaixo indica?*

      WebElement sample = driver.findElement(By.xpath("//[contains(text(), 'data')]"));

Ele define uma *amostra* de variável do tipo WebElement e usa uma pesquisa Xpath para inicializá-la com uma referência a um elemento que contém o valor de texto "dados".
