# Teste de Stress

É um tipo de testagem que verifica a estabilidade e confiabilidade de uma aplicação.

O objetivo é medir a robustez e capacidade de solução de erros de um software sob condições de carga extremas, garantindo que a aplicação não crashe em situações de stress. Aqui, testa-se além de pontos de operação usuais.

Em engenharia de Software, teste de stress também é conhecido como teste de resistência, teste sob stress, sobrecarregando o sistema por um período curto de tempo para validar sua capacidade de trabalho.

O uso mais proeminente da técnica é para determinar o limite, após o qual, um software ou sistema quebra, verificando também se o sistema demonstra solução de erros adequada sob condições extremas.

## Importância do Teste de Stress

Considere as situações de vida real que se seguem para verificar a necessidade do Teste de Stress:

- Durante um evento, um site de compras online pode experienciar um pico súbito no tráfego, ou quando anuncia uma promoção;
- Quando um blog é mencionado em um jornal famoso, observa aumento súbito de acessos;

É imperativo que o teste de stress seja aplicado para acomodar estas situações anormais de tráfego, a falha na acomodação pode resultar na perda de renda e reputação.

Esta técnica também é extremamente importante pelas seguintes razões:

1. Checar se o sistema funciona em condições anormais;
2. Exibir uma mensagem de erro apropriada quando o sistema esta sob stress;
3. Falha do sistema em condições extremas pode resultar em lucros cessantes expressivos;
4. É melhor estar preparado para as situações de tráfego anormais;

## Objetivos do Teste de Stress

Analisar o comportamento do sistema após uma falha, para obter sucesso, o sistema deve exibir uma mensagem de erro condizente com as condições de uso extremas.

Para conduzir um teste de stress, por vezes, enormes grupos de dados podem ser usados, e perdidos, durante a testagem. Testers não devem perder estes dados sigilosos durante o processo.

O principal propósito é  garantir que o sistema recupere-se após uma falha, o que é chamado de recuperabilidade

## **Tipos de Teste de Stress**

Os testes de stress podem ser classificados em:

### Teste de Stress Distribuído

Nesta modalidade o teste é feito através de todos os clientes do servidor.

A função do servidor de stress é distribuir um grupo de testes de stress por todos os clientes e rastrear os status de cada um. Após o cliente contatar o servidor, este adicionará o nome do cliente e enviará dados para teste.

Enquanto isso, as máquinas dos clientes enviam sinais de que estão conectadas com o servidor. Caso o servidor não receba quaisquer sinais das máquinas, ele precisar ser verificado para demais processos de debug.

<img src="https://www.guru99.com/images/s4.png" alt="Fluxograma Stress Distribuído">

Como verifica-se na imagem, o teste pode ser apenas em users específicos, ou de maneira geral, entre todos os clientes conectadas.

Integrações norturnas são a melhor opção para a execução destes cenários. Grupos de servidores grandes precisam de um metódo mais eficiente para determinar quais computadores tiveram falhas de stress que precisam de verificação..

### Teste de Stress Aplicacional

Aqui, nos concentramos em localiza defeitos relacionados a trava e bloqueio de dados, problemas de rede e gargalos de performance em uma aplicação.

### Teste de Stress Transacional

Aplica o teste em uma ou mais transações entre duas ou mais aplicações. É utilizado para regulagem e otimização do sistema. É importante notar que uma transaction é expressivamente mais complexa do que uma request.

### Teste de Stress Sistêmico

É o teste de stress integrado que pode ser aplicado em múltiplos sistemas rodando no mesmo servidor, utilizado para localizar defeitos em que uma aplicação gera bloqueio de dados na outra.

### Teste de Stress Exploratório

Aplicado para verificar o sistema em parâmetros não usuais ou condições que são improváveis de ocorrer em um cenário real.
Utilizado para encontrar defeitos inesperados como:

- Grande número de usuários logados ao mesmo tempo;
- Se verificações de vírus são iniciados em todas as máquinas simultâneamente;
- Se o banco dados ficou offline quando acessado a partir de um site;
- Quando um vasto volume de dados é inserido na database de uma vez;

## Como aplicar o Teste de Stress

1. Planejamento do Teste de Stress: Coleta os dados, analisa o sistema e define os objetivos;
2. Criação dos Scripts de Automação: Nesta fase, cria-se os scripts de automação e são gerados os dados de teste para os cenários de stress;
3. Execução do Script e Armazenamento dos Resultados;
4. Análise dos Resultados;
5. Ajustes e Otimização: Nesta etapa, realizamos os ajustes finais no sistema, alteramos configurações e otimizamos o código com  o objetivo de atingir a benchmark desejada

Por fim, reaplique o ciclo ajustado para verificar se estes produziram os resultados desejados. Por exemplo, não é incomum ter de aplicar 3 ou 4 ciclos do teste de stress para atingir a performance desejada.

## Métricas para Teste de Stress

- Medindo Escalabilidade e Performance:
  - Páginas/s: Mede quantas páginas tiveram request/s
  - Taxa de Transferência: Métrica básica, volume de dados em Resposta/s
  - Cenários: Número de cenários de teste planejados vs número de vezes que um cliente foi executado
- Resposta da Aplicação:
  - Número de Acertos: Tempo médio para busca de uma imagem ou página
  - Tempo até o Primeiro Byte: Período dispendido para o returno do primeiro byte de dados ou informação
  - Tempo de Página: Lapso temporal para dar retrieve em todas as informações da página
- Falhas:
  - Falha em Conexões: Número de conexões falhas recusadas pelo cliente (weak signal)
  - Falha em Cenários: Número de cenários que falharam
  - Falha em Hits: Número de tentativas falhas feitas por um sistema (conexões quebradas ou imagens não vistas)
