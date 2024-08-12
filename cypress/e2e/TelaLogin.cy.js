describe('Testar a Página de login', () => {

    it('Testar a tela de login', () => {
        cy.visit('/login.html')

        cy.get('span[class="login-form-tittle"]')
            .contains('Faça o Login').should('contain', 'Faça o Login')  

        cy.get('input[id="login"]')
            .should('be.visible')

        cy.get('input[id="login"]')
            .click().type('admin').should('have.value', 'admin')

        cy.get('input[id="senha"]')
            .should('be.visible')

        cy.get('input[id="senha"]')
            .click().type('admin').should('have.value', 'admin')

        /*VERIFICAR QUE A IMAGEM DO PROJETO EXISTE */

        cy.get('img[src="./images/login.png"]')
            .should('be.visible')

        cy.get('img[class="margin-left-50"]')
            .should('be.visible')

        /*VERIFICAR SE O BOTÃO DE LOGIN EXISTE */

        cy.get('button[class="login-form-btn"]').contains('Login')
            .should('be.visible').click()




    })





})