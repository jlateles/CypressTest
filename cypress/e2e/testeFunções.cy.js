describe('template spec', () => {
  it('Testando as funcionalidades do site', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.wait(2000); // Pausa de 2 segundos
        cy.get('.button').click();   
        cy.wait(2000); // Pausa de 2 segundos
        cy.get('.header__home').click();
        cy.wait(2000); // Pausa de 2 segundos
        cy.contains('a', 'Fazer login').click();
        cy.wait(2000); // Pausa de 2 segundos
        cy.get('.header__home').click();
        cy.wait(2000); // Pausa de 2 segundos
        cy.get('.header__message').click();
  })
})