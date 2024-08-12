
/// <reference types= 'cypress' />

Cypress.on('uncaught:exception', (err, runnable) => {
  // esto previene que Cypress falle la prueba
  return false
})


describe('buscador', () => {
  it('', () => {
    // Visit a webpage
    cy.visit('https://demoqa.com/webtables')
    cy.title().should('eq', 'DEMOQA')
    cy.wait(1000)
    cy.get('#searchBox').type('cierra{pageup}')
    cy.get('#searchBox').clear()
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('cierra')
    cy.get('#lastName').type('Saldarriaga')
    cy.get('#userEmail').type('test@test.com')
    cy.get('#age').type('25')
    cy.get('#salary').type('1000')
    cy.get('#department').type('QA')
    cy.get('#submit').click()
    cy.wait(3000)

    //editar un registro


    cy.get('#edit-record-4 > svg > path').click()
    cy.wait(5000)
    cy.get('#age').clear().type('29')
    cy.get('#salary').clear().type('2000')
    cy.get('#department').clear()
    cy.get('#department').type('QA con cambios')
    cy.get('#submit').click()
    cy.wait(3000)
    cy.get('#delete-record-4').should('be.visible').click()





  })
})