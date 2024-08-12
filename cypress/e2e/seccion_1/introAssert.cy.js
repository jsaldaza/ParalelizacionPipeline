
/// <reference types= 'cypress' />
describe('introduction to asserts', () => {
    it('asserts demo', () => {
        // Visit a webpage
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq', 'Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)

        cy.get('#edit-name').should('be.visible').type('Juan Saldarriaga')
        cy.get('#edit-email').should('be.visible').should("be.enabled").type("juan@test.com")

        cy.get('#edit-subject').should('be.visible').type('Test subject')

        cy.get('#edit-message').should('be.visible').type('Test messagege')

    })
})

