# Teste de Carga

É um tipo de teste de performance para o sistema ou produto de software sob condições de carga baseadas na vida real.

Aqui, determinamos o comportamento do sistema quando diversos usuários utilizam a aplicação ao mesmo tempo. É a resposta do sistema medida sob condições de carga variáveis.

## Objetivos do Teste de Carga

- Maximizar a capacidade de operação da aplicação;
- Determinar se a mais recente infraestrutura é capaz de operar a aplicação, ou não;
- Determinar a sustentabilidade da aplicação em face de carga extrema de usuários;
- Descobrir a contagem total de usuários que podem acessar a aplicação ao mesmo tempo;
- Determinar a escalabildiade da aplicação;
- Permitir que mais usuários acessem a aplicação

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20190515173252/999.jpg" alt="Fluxograma Teste de Carga">

1. Configuração do Ambiente de Testes: Primeiro, crie um ambiente dedicado a executar o teste de carga, isso garante que ele sera feito de forma apropriada;
2. Cenário de Teste de Carga: Aqui, os cenários são elaborados, e então, as transações de teste de carga são determinadas para a aplicação, e os dados são preparados para cada transação;
3. Execução dos Cenários de Teste: Diferentes medições e métricas são agrupados para coletar informação;
4. Análise dos Resultados;
5. Re-Testes: Caso um teste falhe, ele é realizado novamente para conseguir o resultado da forma correta.

## Métricas do Teste de Carga

As métricas são utilizas para conhecer a performance dos teste de carga sob circunstâncias diferentes. Isto nos diz o quão preciso o teste é em cada cenário diferente.

Existem muitas métricas, tais como:

1. Tempo de Resposta Médio: Mede o tempo que leva para resposta a partir de uma requisição gerada pelo cliente ou usuário. Também mostra a velocidade da aplicação dependendo de quanto tempo a resposta leva para todas as requisições feitas;
2. Taxa de Erro: É mencionado em termos de porcentagem e denota o numero de erros ocorridos durante as requisições para o total de requisições. Estes erros geralmente surgem quando o aplicativo não mais consegue suportar as requests no tempo dado, ou por demais problemas técnicos. Isto torna a aplicação menos eficiente quando a taxa de erros sobe;
3. Taxa de Transferência: Utilizada para auferir a quantidade de largura de banda consumida durante os scripts de carga ou testes, também usada para determinar a quantidade de datos que são usados para checar as requests que fluem entre o servidor do usuário e servidor principal da aplicação. É medido em kilobytes por segundo.
4. Resquests por Segundo: Nos diz quantas requests são geradas para o servidor do aplicativo por segundo. As requests podem ser qualquer coisa, desde requisições por imagens, documentos, paginas web, artigos ou quaisquer outras.
5. Usuários Simultâneos: Esta métrica é usada para determinar a quantidade de usuários que estejam ativamente presentes em um determinado, ou qualquer, horário. Isto apenas mantém registro da contagem daqueles que visitam a aplicação a qualquer momento, sem levantar request alguma dentro do aplicativo. A partir disto, podemos facilmente saber os horários de pico.
6. Pico de Tempo de Resposta: Mede o tempo levado para lidar com a request. Também auxilia a encontrar a duração do período de pico(o tempo mais longo) em que o ciclo request/resposta está levando mais tempo.

### Ferramentas de Teste de Carga

Algumas das ferramentas de teste de carga são:

1. Apache Jmeter
2. WebLoad
3. NeoLoad
4. LoadNinja
5. HP Performance Tester
6. LoadUI Pro
7. LoadView

## Vantagens do Teste de Carga

- Melhora a sustentabilidade do sistema;
- Melhora a escalabilidade do sistema;
- Ajuda na minimização dos riscos relacionados ao downtime do sistema;
- Reduz os custos de falha no sistema;
- Aumenta a satisfação do usuário;

## Desvantagens do Teste de Carga

- Para aplicar um Teste de Carga, é preciso ter conhecimento em programação;
- As ferramentas para teste podem ser caras;
