describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZjY4NzFiOC02MzcwLTQwYTEtYWVjZi05YmY3OTFkNDVjNzgiLCJhZG9wdGVyTmFtZSI6IlBlZHJvIEJlbGNoaW9yIiwiaWF0IjoxNzIxNjczMjY5LCJleHAiOjE3MjE5MzI0Njl9.g_Cqv8NbhtSBkXAjrJwtu6--Ycj3-zaOwoUTxc16NdY`

    it('Mensagem da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-frontend-cypress.vercel.app/static/css/main.5213b5d4.css',
            headers: {authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})