/// <reference types="cypress"/>


import ClassTelaInicial from '../support/DesenvTelaInicial'

describe('Testando a Tela inicial do Site', () => {

    beforeEach(function () {
        cy.visit('/')
    })

    context('Validação de Elementos na Página Inicial', () => {

        it('Validação de Elementos na Página Inicial', () => {

            // cy.ValidaH1() CUSTOM COMMANDS
            // ClassTelaInicial.ValidaH1() /*PAGE OBJECT - VALIDAH1 */
            // ClassTelaInicial.ValidaBtn()
            ClassTelaInicial.ValidaCampos()

        })

        // it('Validar Checkbox', () => {

        //     cy.get('input[id="rdoMasculino"]')
        //         .should('have.value', 'male')

        //     cy.get('input[id="rdoFeminino"]')
        //         .should('have.value', 'female')

        // })

        // it('Validar Tabela', () => {

        //     cy.get('h2')
        //         .contains('Tabela').should('have.text', 'Tabela')

        //     cy.get('tr').find('th').eq(0)
        //         .should('have.text', 'Id')


        //     cy.get('tr').find('th').eq(1)
        //         .should('have.text', 'Nome')


        //     cy.get('tr').find('th').eq(2)
        //         .should('have.text', 'Telefone')


        //     cy.get('tr').find('th').eq(3)
        //         .should('have.text', 'Nascimento')


        //     cy.get('tr').find('th').eq(4)
        //         .should('have.text', 'Sexo')


        //     cy.get('tr').find('th').eq(5)
        //         .should('have.text', 'Ultima Atualização')

        // })


    })

    context('Cadastrando Usuario', () => {

        it('Cadastrando um Novo Usuário', () => {

            cy.CadastraUser()
            // cy.get(inicial.CampoNome)
            //     .type(randomName)

            // cy.get(inicial.CampoTelefone)
            //     .type(randomNumber)

            // cy.get('input[type="date"]')
            //     .click().type('2023-04-26')

            // cy.get('input[id="rdoMasculino"]')
            //     .check()

            // cy.get('input[id="btnCadastrarSalvar"]')
            //     .click()

            // cy.get(inicial.BtnExcluir)
            //    .should('be.visible')

            // cy.get('button')
            //     .contains('Alterar').should('be.visible')

            // cy.get('button')
            //     .contains('Excluir').click()


            // /*Cadastrar um novo Usuario - Para testar o BTN ALterar */

            // cy.get('input[id="txtNome"]')
            //     .type('Gustavo Automatizador')

            // cy.get('input[id="numero"]')
            //     .type('4899999999')

            // cy.get('input[type="date"]')
            //     .click().type('2023-04-26')

            // cy.get('input[id="rdoMasculino"]')
            //     .check()

            // cy.get('input[id="btnCadastrarSalvar"]')
            //     .click()

            // cy.get('button')
            //     .contains('Alterar').click()    

            // cy.get('input[id="numero"]')
            //     .clear() 
                
            // cy.get('input[id="btnCadastrarSalvar"]')
            //     .click()    
                
                
        })




    })

    context('Validar Dados na Tabela', () => {

        it('Validar Dados da Tabela', () => {
            cy.get('input[id="txtNome"]')
                .type('Gustavo Automatizador')

            cy.get('input[id="numero"]')
                .type('4899999999')

            cy.get('input[type="date"]')
                .click().type('2023-04-26')

            cy.get('input[id="rdoMasculino"]')
                .check()

            cy.get('input[id="btnCadastrarSalvar"]')
                .click()

            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0).invoke('text').then((PegaId)=>{
                cy.wrap(PegaId).as('Id da Tabela')
                cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(0)
                    .should('have.text', PegaId)
        
            })   
            
            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(1) 
                .should('have.text', 'Gustavo Automatizador')

            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(2) 
                .should('have.text', '4899999999')

            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(3) 
                .should('have.text', '26/04/2023')

            cy.get('tbody[id="tbodyResultados"]').find('tr').find('td').eq(4) 
                .should('have.text', 'M')


                
        })




    })


})