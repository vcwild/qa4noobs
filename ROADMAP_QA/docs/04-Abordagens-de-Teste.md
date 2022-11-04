# Abordagens de Teste

A testagem possue duas técnicas:
 - Proativa: onde o processo de design do teste é iniciado tão cedo quanto o possível para encontrar e corrigir erros antes que a build seja criada.
 - Reativos: abprdagem em que o teste não se inicia até após o design e desenvolvimento sejam completos.

<br><br>

## - Caixa Preta vs Caixa Branca:

 - **Caixa-Preta:**
  
     - Foco principal na validação de regras de negócio **funcionais**.
     - Provém abstração ao código e foca no comportamento do sistema.
     - Facilita a comunicação de testes entre módulos.
  
<br>

- **Caixa-Branca:**

     - Valida estrutura **interna** e funcionamento de um código.
     - Conhecimento da linguagem de programação utilizada é essencial.
     - Não facilita comunicação  de testes entre módulos.

