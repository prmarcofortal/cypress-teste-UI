/// <reference types="cypress"/>

describe('Encontrar HTML de Páginas', ()=>{
    it('Acessar Site Demonstração', ()=>{

        cy.visit('https://www.google.com/')


        cy.get('textarea[class="gLFyf"]') /*SEgunda forma de Encontrar Elementos - De forma Manual */


        cy.get('input[class="gNO89b"]') /*Segunda forma de encontrar o btn pesquisar - de Forma manual */
        
    })
})