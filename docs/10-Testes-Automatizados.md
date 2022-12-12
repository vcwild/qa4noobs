# **Testes Automatizados**

## *O que são Testes Automatizados?*

Testagem automatizada é aplicação de ferramentas de software para automatizar um processo manual de revisão e validação do produto de software. Projetos Ágil e DevOps mais modernos incluem esta técnica.

A modalidade cooloca responsabilidades de propriedade nas mãos do time de engenharia. Os planos de teste são desenvolvidos paralelamente ao roteiro de desenvolvimento padrão e executado automaticamente por ferramentas de integração contínua. Isto promove um time de QA eficiente, e permite que  a equipe foque em features mais sensíveis

Entrega Contínua (*Continuous Delivery*/CD) refere-se a entrega de novos lançamentos de código o mais rápido possível aos clientes, e a automatização de testes desempenha fator crítico para este objetivo. Não há forma de automatizar a entrega aos usuários se existe um processo manual e dispendioso dentro do processo de entregas.

A entrega contínua faz parte de uma pipeline de implantação maior, sendo sucessora e também dependente da integração contínua (*Continuous Integration*/CI). Esta, por sua vez, é inteiramente responsável por executar testes automatizados em quaisquer mudanças de código, verificando se estas mudanças não quebram features estabelecidas ou introduzem novos bugs.  

A CD  entra em ação uma vez que a etapa de integração contínua passe no plano de testes automatizado.

Esta relação entre testagem automatizada, CI e CD produzem muitos benefícios para um time de alta eficiência. A automação garante qualidade em todos de desenvolvimento ao verificar que novas commits não introduzam bugs, para que o software permaneça pronto para implantação a qualquer momento.

<br>

<img src="https://wac-cdn.atlassian.com/dam/jcr:c4c69694-506f-4d68-9563-c1bc5770e784/testing-stack@4x.png?cdnVersion=631" alt="Pirâmide Teste Automatizado/CI/CD">

<br>

## *Quais tipos de testes devem ser automatizados primeiro?*

<br>

1. Testes ponta-a-ponta:

Discutivelmente um dos testes mais valiosos a serem implementados, a técnica simula uma experiência a nível de usuário através de todo o produto de software. Planos para testes ponta-a-ponta geralmente cobrem estórias a nivel de usuário como "o usuário pode realizar login", "o usuário pode efetuar um depósito", "usuário pode alterar configurações de Email".

A implementação destes teste é altamente valiosa já que oferecem garantia de que usuários reais terão uma experiência suave e livre de bugs, mesmo quando novas commits são aplicadas.

<br>

2. Testes Unitários:

Como o nome sugere, testes unitários cobrem partes individuais de código, sendo melhor medidos em definições de função.  

Um teste unitário irá validar uma função individual, verificando que o input esperado em uma função irá coincidir com o output previsto. Código que possuam cálculos sensíveis (uma vez que pode referir-se a finanças, planos de saúde ou espaço aereo) são melhor cobertor por esta técnica de testes.

Caracterizam-se por seu baixo custo e velocidade de implementação, provendo um alto retorno de investimento.

<br>

3. Testes de Integração:

Muitas vezes uma unidade de código fará uma chamada externa para um serviço terceirizado, mas a base de código primária sob testes não terá acesso ao código deste utilitário de terceiros.

Testes de integração irão lidar com o mock destas dependências de terceiros, com o intuito de verificar se o código que realiza a interface comporta-se como esperado.

Esta técnica é similar aos Testes Unitários na forma com que são escritos e em suas ferramentas. São uma alternativa mais barata aos testes ponta-a-ponta, porém, o retorno de investimento é debatível quando a combinação de testes unitários e ponta-a-ponta já está estabelecida.

<br>

4. Testes de Performance

Quando usado no contexto de desenvolvimento de software 'performance' refere-se a velocidade e responsividade com que um projeto de software reaje. Alguns exemplos para métricas de performance são:

- Tempo para carregamento de página
- Tempo para renderização inicial
- Tempo de resposta para resultados de pesquisa

Esta modalidade de testes criam métricas e garantias para estes casos.

Em sua versão automatizada, os testes de performance irão executar os casos de teste através das métricas e alertar o time caso regressões ou perdas de velocidade ocorram.

<br>

## *Quais tipos de teste devem ser executados manualmente?*

É discutível se todos os testes que *podem* ser automatizados, *deveriam* ser. A automação representa enorme ganho de produtividade e custo de horas de trabalho, isto posto, existem situações em que o Retorno de Investimento (*Return of Investiment*/ROI) para desenvolver uma bateria de testes automatizada é inferior quando comparado a execução de testes manuais.

1. Teste Exploratório:

Teste automatizados são, por definição, scriptados, e seguem uma sequência de passos para validar um comportamento. Um teste exploratório é mais aleatório e aplica sequências não roteirizadas para localizar bugs ou comportamentos inesperados.

Enquanto existem ferramentas para estabelecer uma bateria de testes exploratórios, elas não foram refinadas o suficiente, e ainda não receberam adoção ampla por empresas. Pode ser muito mais eficiente designar um tester manual e utilizar criatividade humana para explorar como é possivel quebrar um produto de software.

2. Teste de Regressão Visual:

Uma regressão visual ocorre quando uma falha de design visual é introduzida na UI do produto, podendo constituir-se de elementos mal posicionados, fontes ou cores erradas, etc.

Assim como no teste exploratório existem ferramentas para desenvolvimentos de testes automatizados com o intuito de detectar estas regressões. As ferramentas realizam capturas de tela a partir de diferentes estados do produto, aplicando reconhecimento óptico de caracteres (*Optical Character Recognition*/OCR) para comparar com os resultados esperados. Estes testes possuem desenvolvimento custoso, e as ferramentas também não possuem adoção ampla, tornando a opção humana e manual mais eficiente em alguns casos.

<br>

3. Construindo estruturas de automação para times DevOps:

Não existe solução única para automação de testes, ao desenvolver um plano de automação alguns pontos chaves devem ser levados em consideração:

- Frequencia de Lançamento:
  Produtos de software que são lançados em intervalos fixos, como mensalmente ou semanalmente, podem encaixar-se melhor com a modalidade manual. Produtos com lançamentos mais rápidos em muito se beneficiam dos testes automatizados uma vez que o CI e CD dependendem de uma testagem automática.

- Ferramentas Disponíveis e Ecosistema:  
  Cada linguagem de programação possui seu próprio ecosistema de ferrmentas complementares e utilidades. E cada tipo de padrão automatizado de testes detém um  grupo de ferramentas próprio, que pode ou não estar disponível no ecosistema de certas linguagens. Implementar com sucesso um padrão de testes automáticos irá requerer uma interseção da linguagem e suporte de ferramentas.

- Ajuste ao mercado do produto e maturidade da base de código:  
  Caso o time esteja construindo um novo produto que não recebeu validação de público alvo e modelo de negócios, pode não fazer sentido investir em testes automatizados, considerando que estes atuam como um mecanismo de garantia que restringe regressões inexperadas de código. Considerando que a  equipe trabalhe em alta velocidade pode ser frustrantemente custoso atualizar e manter testes automatizados quando o código muda drástica e rapidamente.

  <br>
  <br>

# **Pirâmide de Automação**

Esta categoria de estrutura pode auxiliar tanto desenvolvedores quanto QAs a criarem softwares de alta qualidade, reduzindo o tempo que desenvolvedores levam para se a mudança introduzida quebra o código e contribuindo para o desenvolvimento de uma bateria de testes mais confiável.

Essencialmente, a pirâmide de testes, também conhecida como pirâmide de automação, estabelece os tipos de teste que devem ser inclusos em uma bateria automatizada. Também delimitando a sequência e frequência destes testes.

O principal objetivo é oferecer feedback imediato, garantindo que mudanças no código não afetem negativamente features já existentes.

<br>

## *Os Diferentes Níveis da Pirâmide*

Esta estrutura opera em três níveis:

<br>

<img src="https://browserstack.wpenginepowered.com/wp-content/uploads/2020/01/test-automation-pyramid-640x586.jpg" alt="Estrutura de Níveis">

<br>

### *Nível 1) Testes Unitários*

Testes unitários formam a base da pirâmide, validando componentes e funcionalidades individuais para validar que funcionem corretamente sob condições isoladas. Portanto, é essencial executar diversos cenários em testes unitários.

- Sendo o subgrupo mais significativo, a bateria de testes unitários deve ser escrita de forma a ser executada o mais rápido quanto o possível.
- Lembre-se de que o número de testes unitários irá aumentar conforme novas features são adicionadas.
- Esta bateria de testes deve ser executadas sempre que uma nova funcionalidade é implementada.
- Consequentemente, desenvolvedores recebem feedback imediato sobre se as features individuais funcionam em sua forma atual.

Uma bateria de testes unitários eficiente e de execução rápida incentiva desenvolvedores a aplicarem-na com frequência.

A aplicação do TDD (Test-driven-development) contribui para a criação de uma bateria robusta, uma vez que a técnica requer a escrita dos testes antes que qualquer código seja estabelecido, tornando-o mais direto, transparente e livre de bugs.

<br>

### *Nível 2) Testes de Integração*

Enquanto testes unitários verificam pequenas peças do código, os testes de integração devem ser executadas para verificar como as diferentes partes do software interagem entre si. Essencialmente, são testes que validam como uma parte do código interagem com componentes externos, podendo variar de databases até serviços externos (APIs)

- Testes de Integração constituem a segunda camada da pirâmide, isto  significa que não devem ser executados com a mesma frequència dos testes unitários.
- Fundamentalmente, testam como uma feature comunica-se com dependências externas.
- Seja uma chamada no banco de dados ou serviço web, o software deve comunicar-se eficientemente e buscar as informações corretar para funcionar conforme o esperado.

É importante ressaltar que esta técnica envolve interação com serviços externos, logo, sua execução será mais lenta do que a de testes unitários. Além disso, requerem um ambiente de pré-produção para poderem ser aplicados.

<br>

### *Nível 3) Testes ponta-a-ponta*

O nível mais alto da pirâmide, garantem que toda a aplicação funcione como deveria ao testa-la do começo ao fim.

- Esta técnica encontra-se no topo da pirâmide uma vez que leva mais tempo para ser executada.
- Ao desenvolver estes testes, é essencial pensar a partir da perspectiva de um usuário.
- Como um usuário utilizaria este aplicativo? Como os testes podem ser escritos para replicar estas interações?

Eles também podem ser  frágeis já que precisam testar diversos cenários de uso.

Assim como testes de integração, podem exigir que a aplicação comunique-se com elementos externos, o que possivelmente contribui com gargalos na conclusão.

Uma aula exemplificativa acerca da estratégia por trás dos testes ponta-a-ponta pode ser encontrada [aqui](https://youtu.be/kh-5UeQVlY0).

<br>

## *Por que times Ágil deveriam usar a Pirâmide de Automação?*

Os processos Ágil priorizam velocidade e eficiência, elementos oferecidos pela pirâmide através ao organizar o processo de testes em uma progressão lógica e clara, promovendo uma conclusão eficiente do trabalho.

Uma vez que a estrutura é feita de forma a executar testes mais acessíveis no início, testers podem melhor administrar seu tempo, obtendo melhores resultados e melhorando o trabalho de todos os envolvidos ao fornecer as prioridades certas para o time de testes.

Se scripts de testes são escritos com um foco maior na UI, chances são de que  a lógica de negócios central e as funcionalidades back-end não foram suficientemente verificadas. Isto afeta a qualidade de produto e leva a um aumento no fluxo de trabalho das equipes.

Além disso o tempo de resposta dos testes de UI é alto, o que leva a uma menor cobertura geral de testes. Ao implementar a pirâmide de automação tais situações são completamente solucionadas.

Na automação de testes, ferramentas e estruturas como Selenium executam testes scriptados em uma aplicação de software ou componentes para garantir que funcionem como esperado. Seu único objetivo é reduzir o esforço e erro humanos, mas para que a máquina provenha os resultados corretos, deve ser apropriadamente direcionada.

A pirâmide de automação procura atingir esta necessidade ao organizar e estruturar o ciclo de testes, racionalizando todo o processo e trazendo um gerenciamento de tempo eficiente, de forma a prover testers com modelos já validados com os quais moldar seus projetos.
