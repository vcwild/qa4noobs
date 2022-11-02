# Abordagens de Teste

A testagem possue duas técnicas:
 - Proativa: onde o processo de design do teste é iniciado tão cedo quanto o possível para encontrar e corrigir erros antes que a build seja criada.
 - Reativos: abprdagem em que o teste não se inicia até após o design e desenvolvimento sejam completos.

<br><br>

## Tipos de Teste:    

### -  **Teste de Caixa Branca**

Técnica em que a estrutra interna, design e código são testados para verificar o fluxo input-output e melhorar o design, usabilidade e segurança.  

Aqui, o código é visivel aos testers, também podendo ser chamado de teste da Caixa Transparente, Caixa Aberta, Caixa de vidro etc.  

  Objetivos:
>- Buracos na segurança interna
>- Paths quebrados ou mal estruturados no processo de coding
>- O fluxo de inputs especificos pelo código
>- Output esperado
>- A funcionalidade de loops condicionais
>- Testagem de cada statement, objeto e função individualmente 

### - **Teste de Caixa Cinza**

O teste de Caixa Cinza é uma técnica que testa aplicação ou produto com conhecimento parcial da estrutura interna da aplicação. O propósito do teste caixa cinza é procurar e identificar os defeitos devido a código impróprio ou uso impróprio de aplicações