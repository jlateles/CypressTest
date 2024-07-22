describe('Page-exemplo de teste', () => {
    it('Teste de clique no botão Secundary', () => {
        // Visita a página HTML do site onde está o botão
        cy.visit('path/test/page.html');
        
        // Seleciona o botão pelo ID e clica nele
        cy.get('#btnSecondary').click();
        
        // Verifica se a mensagem é exibida
        cy.get('#message').should('be.visible').and('contain', 
        'Clique aqui para saber mais!');
    });
});


