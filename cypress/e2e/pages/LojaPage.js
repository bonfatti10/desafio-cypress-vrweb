class LojaPage {
  selectCartoesVR() {
    cy.get('[data-testid="terms-consent"]').click()

    cy.get('#btn-selecionar-modalidade-avulso')
      .should('be.visible')
      .click()
  }

  selectProdutoAuto() {
    const quantidade = Math.floor(Math.random() * 10) + 1
    cy.get('#produto-auto-quantidade').clear().type(quantidade)
  }

  setQuantidadeAleatoria() {
    const randomValue = (Math.random() * 1000).toFixed(2)
    cy.get('#produto-auto-valor')
      .click()
      .clear()
      .type(randomValue.toString())
  }

  clickAdicionarAoCarrinho() {
    cy.get('#btn-adicionar-carrinho-auto').click()
  }
}

export default new LojaPage()
