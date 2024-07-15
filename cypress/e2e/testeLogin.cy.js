describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos do login corretamente ae autenticar o usuário na página', () => {
    cy.login('juliabispo@gmail.com', 'Bispo@1234')
  })

}) 