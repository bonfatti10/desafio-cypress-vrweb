class CarrinhoPage {
    validateProdutoAdicionado() {
      cy.get('.cart-button__badge').then(($badge) => {
        expect($badge).to.have.length.greaterThan(0)
      });
      
    }
  }
  
  export default new CarrinhoPage()
  