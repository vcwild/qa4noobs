# Abordagens de Teste

A testagem de uma aplicação é um processo que deve ser feito com bastante atenção, pois é através dela que podemos garantir que o software está funcionando corretamente, e que não há nenhum tipo de defeito que possa prejudicar o usuário. Porém, criar testes não é uma tarefa fácil. Existem duas maneiras que podem ser utilizadas para criar testes, cada uma com suas vantagens e desvantagens. São elas:

- Proativa: onde o processo de design do teste é iniciado tão cedo quanto o possível para encontrar e corrigir erros antes que a build seja criada.
- Reativos: abprdagem em que o teste não se inicia até após o design e desenvolvimento sejam completos.

Dadas essas duas maneiras, podemos dizer que a abordagem proativa é a mais recomendada, pois ela permite que os testes sejam criados antes do código, e assim, o desenvolvedor pode corrigir os erros antes que o código seja implementado. Por outro lado, a abordagem reativa é mais utilizada em projetos que possuem um cronograma apertado, pois ela permite que o desenvolvimento seja feito primeiro e depois os testes.

## Caixa Preta vs Caixa Branca

As abordagens de teste podem ser divididas em duas categorias, a **caixa-preta** e a **caixa-branca**. A diferença entre elas é que a caixa-preta foca no comportamento do sistema, enquanto a caixa-branca foca na estrutura interna do código.

### **Caixa-Preta:**

Os testes de caixa-preta são os mais utilizados, pois eles são mais fáceis de serem implementados e não exigem conhecimento da linguagem de programação utilizada. Além disso, eles são mais fáceis de serem entendidos por pessoas que não possuem conhecimento técnico, e também são mais fáceis de serem implementados em diferentes linguagens de programação.

Os principais aspectos dos testes de caixa-preta são:

- Foco principal na validação de regras de negócio **funcionais**.
- Provém abstração ao código e foca no comportamento do sistema.
- Facilita a comunicação de testes entre módulos.

### **Caixa-Branca:**

Testes de caixa-branca são mais difíceis de serem implementados, pois eles exigem conhecimento da linguagem de programação utilizada. Além disso, eles são mais difíceis de serem entendidos por pessoas que não possuem conhecimento técnico, e também são mais difíceis de serem implementados em diferentes linguagens de programação.

Alguns dos principais aspectos dos testes de caixa-branca são:

- Valida estrutura **interna** e funcionamento de um código.
- Conhecimento da linguagem de programação utilizada é essencial.
- Não facilita comunicação  de testes entre módulos.
