
/// <reference types= 'cypress' />
describe('Click options', () => {
    it('simple click', () => {
        // Visit a webpage
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()



    })

    it.only('click force true', () => {
        // Visit a webpage
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click({ force: true })



    })

    it.only('click por coordenadas X, Y', () => {
        // Visit a webpage
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get('.oxd-button').should('be.visible').click()
        cy.get('.oxd-topbar-header-title').should('be.visible').click(50,5)




    })


})