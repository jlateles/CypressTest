describe('template spec', () => {
  it('Visite a página de /login do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.wait(2000); // Pausa de 2 segundos
    cy.contains('a', "Fazer login").click();
    cy.wait(2000); // Pausa de 2 segundos
  })
})