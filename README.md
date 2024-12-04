# Projeto de Testes Automatizados - Loja Virtual VR

Este projeto tem como objetivo validar a funcionalidade de adicionar um produto ao carrinho em uma loja virtual, utilizando testes automatizados com **Cypress**. O teste cobre o processo de navegação no site e a verificação de que o produto foi adicionado corretamente ao carrinho.

## Funcionalidade

O teste automatizado cobre os seguintes passos:

1. **Acessar a página inicial** do portal web: [www.vr.com.br](https://www.vr.com.br).
2. **Navegar para a loja virtual** clicando no botão "Compre online".
3. **Selecionar a opção "Cartões VR"** na loja.
4. **Adicionar uma quantidade aleatória** de cartões do produto "Auto".
5. **Digitar um valor de crédito aleatório** para o produto "Auto".
6. **Clicar no botão "Adicionar ao carrinho"**.
7. **Validar se o produto foi adicionado ao carrinho** com sucesso.

## Requisitos

- Node.js (versão 18)
- Cypress (versão mais recente)
- GitHub Actions para CI/CD (opcional)

## Como rodar os testes localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   cd SEU_REPOSITORIO
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Para rodar os testes no Cypress localmente, use o seguinte comando:

   ```bash
   npx cypress run
   ```

## CI/CD com GitHub Actions

O projeto está configurado para rodar testes automatizados de forma contínua através de **GitHub Actions**. Abaixo está o processo de como a integração contínua (CI) é realizada:

### Workflow do GitHub Actions

O workflow de CI é configurado no arquivo `.github/workflows/cypress.yml`, que realiza os seguintes passos:

1. **Configura o ambiente de Node.js 18**.
2. **Instala as dependências** do projeto.
3. **Roda os testes do Cypress** utilizando o comando `npx cypress run`.

### Estrutura do arquivo `.github/workflows/cypress.yml`:

```yaml
name: Run Cypress Tests

on:
  push:
    branches:
      - main  # Executa os testes quando houver push para a branch main
  pull_request:
    branches:
      - main  # Executa os testes quando houver um PR para a branch main

jobs:
  cypress-tests:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Install dependencies
      run: |
        npm install

    - name: Run Cypress tests
      run: |
        npx cypress run
```

### Como o CI/CD funciona:

1. **Push para o repositório**: Sempre que um código é enviado para a branch `main` ou um PR é aberto, o workflow de CI/CD é acionado.
2. **Instalação de dependências**: O GitHub Actions irá configurar o Node.js, instalar as dependências do projeto e o Cypress.
3. **Execução dos testes Cypress**: O comando `npx cypress run` será executado, rodando os testes de forma automática.
4. **Resultados**: O status da execução dos testes será mostrado diretamente na interface do GitHub Actions, permitindo acompanhar se os testes passaram ou falharam.

### Vantagens da Automação com CI/CD:

- **Qualidade e consistência**: Testes automatizados garantem que os fluxos principais do site sejam validados de forma consistente e sem falhas.
- **Feedback rápido**: A integração contínua permite identificar problemas rapidamente, garantindo que mudanças no código não quebrem funcionalidades existentes.
- **Eficiência**: A automação elimina a necessidade de testes manuais repetitivos, economizando tempo e recursos.

## Autor

**Carlos Bonfatti**  
*QA Manager | Desenvolvedor de Testes Automatizados | Especialista em CI/CD*

## Conclusão

Este projeto de testes automatizados oferece uma validação eficaz e contínua da funcionalidade de adicionar produtos ao carrinho na loja virtual VR. A utilização de **Cypress** e **GitHub Actions** para automação de testes e CI/CD assegura que a qualidade do sistema seja mantida durante o ciclo de desenvolvimento.
