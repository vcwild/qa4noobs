# **Teste de Caixa Preta**

O teste de caixa preta tem como objetivo verificar se o sistema sob verificação está funcionando corretamente, ou seja, se ele está de acordo com as regras de negócio e especificações do sistema.

Os testes de caixa-preta tem as seguintes características:

- Teste em que as funcionalidades internas do código não estão disponíveis ao *tester*.
- Feito da perspectiva do usuário.
- Inteiramente focado nas regras de negócio e especificações da aplicação, também conhecido como teste Comportamental.

## Como aplicar o teste Caixa-Preta

Para aplicar o teste de caixa-preta, o *tester* deve seguir os seguintes passos:

1. Inicialmente as regras de negócio e especificações são examinadas.
2. O *tester* escolhe *inputs* válidos (teste de cenário positivo) para checar se o sistema sob verificação processa-os corretamente. Também testando alguns *inputs* **ínvalidos** (teste de cenário negativo) para verificar se o sistema detecta-os.
3. *Tester* determina os *outputs* esperados para cada um dos *inputs* selecionados.
4. *Tester* constrói casos de teste com os *inputs* selecionados.
5. Casos de teste são executados.
6. *Tester* compara os *outputs* factuais com os *outputs* ideais.
7. Defeitos, caso existam, são corrigidos e retestados.

### Tipos de Teste Caixa-Preta

Os testes de caixa-preta podem ser classificados em:

- Teste Funcional: relacionado as regras de negócio de um sistema; é realizado pelos *testers*.

- Teste Não-Funcional: **não é relacionado** com a testagem de qualquer *feature* específica, mas sim regras de negócio não-funcionais como performance, escalabilidade e usabilidade.

- Teste de Regressão: esta modalidade é aplicada após quaisquer concertos, upgrades ou manutenções no código para verificar se estas não afetaram *features* previamente testadas com êxito.

## Técnicas de Testagem Caixa-Preta

As seguintes técnicas são usadas para testar um sistema:

- Teste de Equivalencia de Classe: é usado para minimizar o número de possíveis casos de teste para um nível otimizado enquanto mantém razoável cobertura.

- Análise do Valor-Limite: é focado nos valores em limites. Esta técnica determina se um certo escopo de valores é aceitável pelo sistema ou não, muito útil para reduzir o número de casos de teste. É mais apropriado para sistemas onde um *input* está dentro de determinados escopos.

- Teste de Tabela de Decisão: uma tabela de decisões insere causas e seus efeitos em uma matriz, com uma combinação única em cada coluna.
