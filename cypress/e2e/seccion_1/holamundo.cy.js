/// <reference types= 'cypress' />


describe ('welcome to the course Cypress section 1', () =>{
    it('Mi primer test -> Hello World', () =>{
        cy.log('Hello world');
        cy.visit('https://rodrigovillanueva.com.mx/form/contact')

        cy.get('#edit-name').type('Rodrigo')
        cy.get('#edit-email').type('jsaldaza@gmail.com')
        cy.get('#edit-subject').type('First automation')
        cy.get('#edit-message').type('this is my first automation, it looks good!')
        cy.get('#edit-actions-submit').click


        cy.wait(3000)
    })

})//cierre de describe