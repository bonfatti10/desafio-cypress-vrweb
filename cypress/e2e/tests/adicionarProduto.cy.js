import HomePage from '../pages/HomePage'
import LojaPage from '../pages/LojaPage'
import CarrinhoPage from '../pages/CarrinhoPage'

describe('Teste de Adicionar Produto ao Carrinho', () => {
  beforeEach(() => {
    cy.intercept('https://px.ads.linkedin.com/*', { forceNetworkError: true })
    cy.window().then((win) => {
      win.lintrk = () => {}
    });

    cy.viewport(1280, 1024)
  });
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    HomePage.visit()
    HomePage.clickCompreOnline()
    LojaPage.selectCartoesVR()
    LojaPage.selectProdutoAuto()
    LojaPage.setQuantidadeAleatoria()
    LojaPage.clickAdicionarAoCarrinho()
    CarrinhoPage.validateProdutoAdicionado()
  });
});
