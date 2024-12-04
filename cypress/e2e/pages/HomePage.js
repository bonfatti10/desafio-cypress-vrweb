class HomePage {
  visit() {
    cy.visit('/')
  }

  clickCompreOnline() {
    cy.get('#buttonCompreOnline')
      .click({ force: true })
      .then(() => {
        cy.wait(1000);
        cy.visit('https://loja.vr.com.br')

      });

  }

}

export default new HomePage()
