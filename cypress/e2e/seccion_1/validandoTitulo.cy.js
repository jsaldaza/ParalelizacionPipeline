/// <reference types= 'cypress' />

describe('Title Validation', () => {
    it('Should validate the title', () => {
        cy.visit('https://rodrigovillanueva.com.mx/form/contact') // Replace with your URL
        cy.title().should('eq', 'Contact | RodrigoVillanueva.com.mx') // Replace with your expected title

        cy.log('The title is correct')
    })
})