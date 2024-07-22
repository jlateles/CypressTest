describe('Pagina de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
         // Intercepta a rota antes de qualquer coisa
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost')
        })
   
    it('Verifica mensagem de falha no login', () =>{
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('juliabispo@gmail.com', 'Bispo@1234')
        cy.wait('@stubPost', { timeout: 20000 }); // Espera até 10 segundos pela requisição
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
       
 });