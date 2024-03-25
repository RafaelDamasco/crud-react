/// <reference types="cypress" />

describe('SignOut', () => {
  it('should signed in successfully', () => {
    cy.login('ana@ana.com', 'ana123')

    cy.contains('Welcome').click()
    cy.contains('Logout').click()
    cy.url().should('eq', 'http://localhost:5173/sign-in')
  })
})
