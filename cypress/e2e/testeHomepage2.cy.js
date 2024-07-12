describe('template spec', () => {
  it('Visite a página de home do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.wait(2000); // Pausa de 2 segundos
    cy.contains('a', 'Fazer login').click();
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('input[name="loginEmail"]').type('isadoraisa@gmail.com');
    cy.get('input[name="loginPassword"]').type('Isa@12345');
    cy.wait(2000); // Pausa de 2 segundos
    cy.contains('button', 'Entrar').click();
  })
})