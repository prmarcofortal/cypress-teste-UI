/// <reference types="cypress"/>

describe('Testar Tela da Imagem', ()=>{

    beforeEach(function (){
        cy.visit('/')
    })


    it('Testar Botão da Imagem', ()=>{

        cy.get('a[href="imagem.html"]')
            .should('be.visible').click()

        /*Verificar que o botão de voltar esta vísivel na tela */    

        cy.get('a[href="./index.html"]')
            .should('be.visible')

        /*Verificar o Tìtulo da Página */
        
        cy.get('h1[class="title"]')
            .should('have.text', 'Curso Automação de Testes Bàsico')

         /*Verificar se a Imagem existe na tela */
         
         cy.get('img[src="images/curso.png"]')
            .should('be.visible')

    })

})