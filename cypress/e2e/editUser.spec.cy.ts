/// <reference types="cypress" />

describe('User edit', () => {
  it('User not find', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.contains('Users').click()
    cy.contains('Filters:').type('Lost{enter}')

    cy.contains('Total of 0 item(s)').should('be.visible')
  })

  it('Find user and Edit', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.contains('Users').click()
    cy.contains('Filters:').type('Rafael Teste{enter}').wait(300)

    cy.contains('Edit').click().wait(300)
    cy.get('input')
      .filter(':visible')
      .eq(1)
      .type('{selectall}{backspace}Rafael Euclides Damasco')
    cy.get('input')
      .filter(':visible')
      .eq(2)
      .type('{selectall}{backspace}rafael.euclides@damasco.com.br')
    cy.get('input')
      .filter(':visible')
      .eq(3)
      .type('{selectall}{backspace}rafa123rafa{enter}')
      .wait(300)
  })
})
