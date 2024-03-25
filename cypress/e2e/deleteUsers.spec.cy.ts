/// <reference types="cypress" />

describe('Delete user', () => {
  it('should delete an user', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.contains('Users').click()
    cy.contains('Filters:').type('Rafael Euclides Damasco{enter}').wait(300)
    cy.contains('Delete').click()

    cy.contains('Users').click()
    cy.contains('Filters:')
      .type('{selectall}{backspace}Rafael{enter}')
      .wait(300)
    cy.contains('Delete').click()
  })
})
