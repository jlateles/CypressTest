describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadatsrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('[data-test="register-button]').click();
    cy.get('[data-test="input-name"]').type('Julia Teles da Silva Bispo');
    cy.get ('[data-test="input-email"]').type('juliabispo@gmail.com');
    cy.get('[data-test="input-password"]').type('Bispo@1234');
    cy.get('[data-test="input-confirm_password"]').type('Bispo@12345');
    cy.wait(2000); // Pausa de 2 segundos
    cy.contains('[data-test="submit-button]').click();
    cy.wait(2000); // Pausa de 2 segundos

  })
})