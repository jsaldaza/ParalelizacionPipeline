
/// <reference types= 'cypress' />
describe('ejemplo de type pageUp pageDown', () => {
    it('Type pageUP', () => {
        // Visit a webpage
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')
        cy.title().should('eq', 'Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)
        cy.get('#edit-message').type('Cypress io {pageup}')
        cy.wait(3000)
    })

        it.only('Type pageUP', () => {
            // Visit a webpage
            cy.visit('https://rodrigovillanueva.com.mx/form/contact')
            cy.title().should('eq', 'Contact | RodrigoVillanueva.com.mx')
            cy.wait(1000)
            cy.get('#edit-message').type('Cypress io {pagedown}')
            cy.wait(3000)


    })
})