# **Teste de Performance**

Teste de performance é um subgrupo da Engenharia de Performance, é um processo de avaliar o comportamento de um sistema sob diversas condições extremas.

O principal objetivo é monitorer e melhorar indicadores chave de performance, como tempo de resposta, taxa de transferência, memória, uso de CPU e mais.

Os três objetivos são:

- Velocidade: Tempo de resposta a requests;
- Escalabilidade: Carga de usuários máxima que a aplicação aguenta;
- Estabilidade: Determina se a API é estável sob diversas cargas;

## Por Que Aplicar o Teste de Performance?

Features e Funcionalidades suportadas por um software não são as únicas preocupações. A performance de  uma API, como o seu tempo de resposta, confiabilidade, uso de recursos e escalabilidade, também importam.

O objetivo não é localizar bugs mas sim eliminar gargalos de performance.

O teste é aplicado para prover os investidores com informações sobre suas aplicações, acerca dos fatores de performance. E, mais importante, o teste revela o que precisa ser melhorado antes do produto ir a mercado.

Sem este teste, o software provavelmente sofreria de problemas como, baixo desempenho sob stress, inconsistências entre diferentes sistemas operacionais e baixa usabilidade.

O teste determinará se o software atinge parâmetros de performance sob cargas de trabalho previstas. Aplicações enviadas ao mercados com baixas métricas de performance devido a testagem inexistente ou inadequada irão, provavelmente, adquirir uma má reputação, e não atingir seus objetivos de vendas.

Além disso,aplicações críticas como programas de lançamento espacial, equipamentos médicos e etc devem ser testados para performance a fim de garantir funcionalidade plena.

### Tipos de Teste de Performance

 1. Teste de Carga: Checa a capacidade da aplicação de performar sob cargas de usuários **previsíveis**, para identificar gargalos antes que a aplicação seja lançada;

 2. Teste de Stress: Envolve tester a aplicação sob cargas **extremas**, para auferir como o sistema lida com o tráfego e processamento de dados. O objetivo é identificar o ponto de ruptura da aplicação;

 3. Teste de Spike: Testa a reação do software frente a um pico súbito na carga gerada por usuários;

 4. Teste de Resistência: É feito para garantir que o software consiga lidar com a carga prevista durante um longo período de tempo;

 5. Teste de Volume: Vasta quantidade de dados é inserida no database e o comportamento geral do sistema é monitorado. O objetivo é checar a performance em níveis diferentes de volumes na database;

 6. Teste de Escalabilidade: Determina a efetividade do software sob cargas crescentes, de forma a comportar um aumento no número de usuários. Isto ajuda a planejar melhorias de capacidade para o sistema;
 7. Teste de Capacidade

## Problemas de Performance Comuns

A maioria dos problemas de performance giram em torno de velocidade, tempo de resposta, tempo de load e baixa escalabilidade. A velocidade, é um dos atributos mais importante, uma aplicação lenta vai perder potenciais usuários. O teste de performance garante que um aplicativo seja executado rápido o suficiente para manter a atenção e interesse de um usuário. Na seguinte lista  verificamos como a velocidade é um problema constante.

- Alto Tempo de Carregamento: Tempo de load é normalmente o período que uma aplicação leva para iniciar, ele deveria, geralmente, ser o menor possível. Enquanto algumas aplicações são impossíveis de serem iniciadas em menos de um minuto, o tempo de carregamento deveria ficar abaixo de alguns segundos se possível;
- Tempo de Resposta Inadequado: Aqui tratamos do tempo que leva entre um input do usuário e o output da aplicação para este input. Geralmente deveria ser muito rápido, pois novamente, se a espera for longa, o usuário perde interesse;
- Baixa Escalabilidade: Um produto software sofre de baixa escalabilidade quando ele não suporta o número previsto de usuário ou quando não acomoda um espectro satisfatório de usuários;
- Gargalo: São obstruções em um sistema que degradam a performance geral. Acontecem quando erros de código ou hardware causam uma diminuição na taxa de transferência sob certas cargas. A chave para localizar um problema de gargalo é encontrar a seção de código que gera a lentidão, e corrigí-la. O gargalo é comumente solucionado ao corrigir as linhas de código ou adicionar hardware. Alguns comuns são:
  - Uso de CPU;
  - Uso de Memória;
  - Uso de Network;
  - Limitações do Sistema Operacional;
  - Uso de Disco;

## Como Aplicar o Teste de Performance

A metodologia adota para testes de performance podem variar, mas objetivo permanece.

Fluxograma genérico do teste de performance:

<img src="https://www.guru99.com/images/performance_testing_process.png" alt="Fluxograma Performance">

1. Identificar o Ambiente de Testes:
   Conheça o seu ambiente físico de testes, de produção e quais ferramentes de testes estão disponíveis. Entenda detalhes do hardware, software e configurações de networks usadas durante a testagem, antes de inicia-la. Este processo promove uma maior eficiência.
2. Identifique os Critérios de Aceite da Performance:
   Isto inclui objetivos e restrições da taxa de transferência, tempos de resposta e aloção de recuros. Também é necessário para identificar os critérios de sucesso do projeto além destes objetivos e restrições. Testers tambem devem estar empoderados para definir os critérios de performance e objetivos, uma vez que, geralmente, as especificações do projeto não incluirão uma variedade ampla o suficiente de benchmarks para performance. Quando possível encontrar uma aplicação similar para de fins de comparação pode auxiliar na definição dos objetivos de performance.
3. Planejamento e Design dos Testes de Performance:
   Determine o quanto a usabilidade irá variar entre os usuários finais para identificar cenários chave de testes para todos os casos de uso possíveis. É necessário simular uma variedade de usuários finais, planejar os dados para testes de performance e delimitar quais métricas serão coletadas.
4. Configuração do Ambiente de Testes:
   Prepare o ambiente de testes antes de sua execução, além disso, organize ferramentas e demais recursos.
5. Implemente o Design de Testes:
   Crie os testes de performance de acordo com o seu design original.
6. Execute os Testes
7. Analise, Ajuste e Reteste:
   Consolide, analise e compartilhe os resultados dos testes. Então, ajuste de forma específica e retestes para observar se existem melhorias ou declínios na performance. Uma vez que melhorias geralmente diminuem a cada teste, pare quando o gargalo é causado pela CPU. Para então poder considerar a opção de aumento do poder da CPU.

## Métricas do Teste de Performance: Parâmetros Monitorados

- Uso do Processador: A quantidade de tempo que um processador gasta executando threads ativas;
- Uso de Memória: Espaço físico disponível em memória para processos no computador;
- Tempo de Disco: Período em que o disco ocupa-se para executar uma request de leitura ou escrita (read/write);
- Bytes Privados: número de bytes que um processo alocou que não podem ser compartilhados entre demais processos. Estes são utilizados para medir vazamentos e uso de memória.
- Memória Dedicada: quantidade de memória virtual utilizada;
- Memory pages por segundo: Número de páginas escritas ou lidas a partir do disco com o objetivo de resolver falhas graves na página. Falhas graves identificam-se quando um código que não do grupo atualmente sob teste recebe um call de algum outro lugar e é buscado de um disco;
- Falhas na Página por Segundo: A taxa geral em que falhas são processadas pelo processador. Novamente, ocorrem quando um processo requer código de fora do grupo sob teste;
- Interrupções da CPU por Segundos: Número médio de interrupções no hardware que um processador esta recebendo e processando a cada segundo;
- Comprimenta da Fila do Disco: Número médio de requests para read e writes na fila para o disco selecionado durante uma amostragem de tempo;
- Comprimento da Fila do Output na Network: Comprimento da fila dos pacotes de output. Qualquer coisa superior a 2 significa um delay, e o gargalo precisa ser solucionado
- Total de Bytes na Network por Segundo: Taxa em que bytes são enviados e recebidos na interface, incluindo caracteres de enquadramento;
- Tempo de Resposta: Tempo entre a request do usuário e o recebimento do primeiro caracter da resposta;
- Taxa de Transferência: Taxa em que um computador ou rede recebe requests por segundo;
- Quantidade do Pool de Conexões: Número de requests de usuários que são atentidas por um pool de conexões. Quanto mais requests são atendidos por conexões na pool, melhor é a performance;
- Máximo de Sessões Ativas;
- Taxas de Acerto: Tem a ver com o número de statements SQL processados por dados em cache ao invez de operações I/O caras. Aqui é um bom ponto de partida para soluções de gargalo
- Acertos por Segundo: O número de acertos um servidor web durante cada segundo de um teste de carga;
- Segmento de Reversão: Quantidade de dados que podem ser revertidos a qualquer momento;
- Travas da Database: O trancamento de tables e databases precisão ser monitorados e ajustados com cuidado;
- Maiores Esperas: São monitoradas para determinar quais tempos de espera podem ser diminuídos ao lidas com o quão rápido os dados são buscados na memória;
- Contagem de Threads: A saúde de uma aplicação pode ser medida pelo número de threads que estão ativas e em execução;
- Coleta de Lixo: Refere-se ao retorno de memória não utilizada de volta ao sistema. A coleta de lixo precisa ser monitorada para eficiência;

## Exemplos de Casos de Teste

1. Verifique que o tempo de resposta é de não mais que 4 segundos quando 1000 usuários acessarem o site simultâneamente;
2. Verifique se o tempo de resposta da aplicação sob carga esta dentro dos parâmetros aceitáveis quando a conectivade da rede está baixa;
3. Cheque qual o número máximo de usuários que a aplicação aguenta antes de crashar;
4. Verifique o tempo de execução do banco de dados quando 500 registros são lidos/escritos simultâneamente;
5. Verifique a CPU e uso de memória da aplicação e database em condições de pico da carga;
6. Valide o tempo de resposta da aplicação sob condições de carga baixas, normais, moderadas e excessivas;

## Ferramentas para Teste de Performance

Algumas das ferramentas mais populares para teste de performance são:

- [LoadNinja](https://bit.ly/3knoPpQ)
- [HeadSpin](https://bit.ly/3D8p93N)
- [BlazeMeter](https://guru99.live/vVYFyu)
- [HPLoadRunner](https://www.guru99.com/loadrunner-v12-tutorials.html)
- [JMeter](https://www.guru99.com/jmeter-tutorials.html)
