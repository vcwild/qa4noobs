# Teste de Acessibilidade

É definido como um tipo de testagem aplicado para garantir que a aplicação em voga é usável por pessoas com condições como surdez, daltonismo, idade avançada, etc.

É um subgrupo do Teste de Usabilidade.

Estas pessoas fazem uso de assistentes, que os auxiliam a operar um produto de software, tais como:

1. Reconhecimento de Voz: Converte a língua falada em texto, que funciona como input para o computador;
2. Software de Leitura de Tela: Utilizado para ler o texto em exposição na tela;
3. Software de Aumento de Tela: Utilizado para aumentar o monitor, e deixar a leitura mais confortável para usuários com deficiência visual;
4. Teclado Adaptado: Feito para usuários com problemas motores, de forma a tornar seu uso mais fácil;

## Motivos para Aplicar o Teste de Acessibilidade

- Atender ao Mercado:
Com um quantidade expressiva de usuários com condições limitantes, o teste é aplicado para solucionar quaisquer impedividos de acessibilidade, sendo uma boa prática a inclusão desda técnica como parte normal do ciclo de desenvolvimento;

- Conformidade com a Legislação Pertinente:
Institutos governamentais do mundo todo produziram legislação no sentido de determinar que produtos em TI sejam acessíveis ao máximo de usuários possível.

Isto torna o teste de acessibilidade parte fundamental do processo, também por requerimentos legais.

- Evitar POtenciais Litígios:

No passado, empresas do Fortune 500 foram processadas por seus produtos não serem acessíveis ao mercado.

Resta como melhor interesse da empresa que seus produtos sejam acessíveis como maneira de evitar processos no futuro.

## Como Aplicar o Teste de Acessibilidade?

Podendo ser manual, ou automatizado, a aplicação pode ser desafiadora para testers devido a não familiaridade com as possíveis deficiências.

É vantajoso trabalhar lado a lado com pessoas portadoras de deficiência, de forma que estas exponham necessidades específicas, promovendo um melhor entendimento de seus desafios.

Temos formas diferentes de testar, a depender de cada deficiência, tais como:

### 1. Deficiência Visual

Aqui utiliza-se Softwares de Leitura de Tela, que narra o conteúdo em exibição para o osuário, tais como conteúdo, links, botões, iamgens, vídeos etc.

Em resumo, ao iniciar um destes softwares e acessar um website, ele irá narrar todo o conteúdo, tornando a navegação possível a pessoas com deficiência visual.

Um site mal desenvolvido, pode gerar conflitos com estes softwares, impedindo a narração correta e completa, e portanto, gerando inacessibilidade.

Por exemplo, devido a erro estrutural, o software não anuncia um link como tal, descrevendo-o apenas como texto e tornando impossível que o usuário o reconheça.

Importante ressaltar que nesta categoria também temos outras modalidades de deficiência visual, tais como baixa visão ou daltonismo.

No daltonismo a pessoa não é cega, mas não é capaz de visualizar algumas cores específicas. Vermelho e azul são casos comuns, tornando o acesso complexo caso o site seja baseado em uma dessas cores.

O design de um site deve levar isto em consideração, tomando por exemplo um botão em vermelho, que pode ser mais acessível ao possuir uma moldura em preto.

Já na baixa visão, o usuário também não é completamente cego, mas possui dificuldades ao enxergar.

A melhor coisa a se fazer é evitar textos muito pequenos, estruturar o site de tal forma que o usuário possa aplicar o zoom sem quebrar o layout, promovendo uma melhor experiência.

### 2. Demais Deficiências

Um ponto extremamente imporante é considerar o acesso ao site sem o uso do mouse.

Um usuário deve poder ter completo acesso aos links, botões, pop-ups, dropdowns etc inteiramente a partir de atalhos no teclado.

O foco deve ser completamente visível, de forma que ao pressionar tab, o usuário possa observar para onde o controle se move, com foco visível tornamos o acesso possível para indivíduos  com  baixa visão ou daltonismo, permitindo a identificação do fluxo no site e promovendo facilidade de uso.

Por fim, é importante a observação de usuários com deficiências auditivas, como surdez ou baixa audição.

Aqui o usuário pode acessar o site e ver o seu conteúdo, mas encontra problema em audios e vídeos, tornando imperativo o alt text. O texto alternativo é o suplemento de um vídeo, ou seja, se o site apresenta um tutorial em vídeo para compra de passagens, também deve oferecer alternativa em texto, de forma que o usuário entenda o conteúdo do vídeo.

## Exemplos de Casos de Teste

Vejamos alguns exemplos de casos de teste para acessibilidade:

1. A aplicação provê equivalência no teclado para todas as operações do mouse?
2. Instruções são providenciadas como parte de documentações ou manuais? E são estas de fácil compreensão e aplicação ao operar o software?
3. As abas são ordenadas lógicamente de forma a garantir uma navegação suave?
4. Teclas de atalho estão disponíveis ao operar menus?
5. O produto suporta todos os sistemas operacionais?
6. O tempo de resposta para cada janela ou página é claramente mencionado de forma que os usuários saibam quanto tempo esperar?
7. Todas as labels estão escritas corretamente?
8. A palheta de cores da aplicação é flexível a todos os usuários?
9. Imagens e ícones são usados apropriadamente para que sejam de fácil compreensão?
10. O aplicativo possui alertas de audio? Ou controles de vídeo?
11. Um usuário pode alterar a fonte padrão para impressão e exibição de texto?
12. O usuario pode ajustar o desabilitar flashes, rotações ou displays em movimento?
13. Garante que uma codificação por cores não seja a unica forma de passar informação ou indicar ações.
14. Teste as cores da aplicação alterando o contraste.
15. Conteúdo de áudio e vídeo é claro para pessoas com deficiência? Teste todas as páginas multimedia sem alto falantes.
16. Treinamento é oferecido a usuários com deficiência que promovam familiaridade com o software?

### Ferramentas para Teste de Acessibilidade

Algumas das ferramentas mais utilizadas para testes de acessibilidade são:

- Wave
- TAW
- Acessibility Developer Tools
- Quick Acessibility Page Tester
- aDesigner
- WebAnywhere
- Web Acessibility Toolbar
