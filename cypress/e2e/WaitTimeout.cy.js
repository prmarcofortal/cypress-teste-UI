/// <reference types="cypress"/>

describe('Testes Utilizando Wait e Timeout', ()=>{

    it('Utilizando o Wait e Timeout', ()=>{

        cy.intercept('POST', 'https://play.google.com/log?format=json&hasfast=true').as('EsperaCarregamento')
        cy.visit('https://www.google.com.br').wait('@EsperaCarregamento')


        cy.get('.FPdoLc > center > .gNO89b',{timeout:10000})

        cy.log('Site carregado com Sucesso!')
            
            


    })
})

