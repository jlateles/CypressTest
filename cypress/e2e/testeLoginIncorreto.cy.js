describe( 'Página de login' , () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.wait(2000); // Pausa de 2 segundos
        cy.get('[data-test="login-button"]').click();
      })

      it( 'Deve preencher incorretamente os campos de login e mostrar mensagem de erro' , () => {
        cy.get('[data-test="input-loginEmail"]').type('juliabispo@gmail');
        cy.wait(2000); // Pausa de 2 segundos
        cy.get('[data-test="input-loginPassword"]').type('bispo');
        cy.wait(2000); // Pausa de 2 segundos
        cy.get('[data-test="submit-button"]').click();
      })
})
