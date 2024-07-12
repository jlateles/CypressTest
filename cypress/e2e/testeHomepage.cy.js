describe('template spec', () => {
  it('Visite a página de principal do AdoPet e clicar no botão ‘Ver pets disponíveis para adoção”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
  })
})