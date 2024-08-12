describe('Testando com Intercept', ()=>{
    it('Testando com Intercept', ()=>{

        cy.visit('www.google.com.br')

        cy.intercept('POST', '/log?format=json&authuser=0').as('IconeCamera')
        cy.get('.nDcEnd').click().wait('@IconeCamera')



    })

})