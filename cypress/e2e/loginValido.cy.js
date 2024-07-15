describe('Fluxo de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
   
    it('Verifica mensagem de texto', () =>{
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('juliabispo@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Bispo@1234');
      cy.get('[data-test="submit-button"]').click();  

    })
       
 });