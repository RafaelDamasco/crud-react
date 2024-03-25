/// <reference types="cypress" />
describe('SignIn', () => {
  it('should signed in successfully', () => {
    cy.login('ana@ana.com', 'ana123')
  })

  it('not should signed in with wrong e-mail or password incorrect', () => {
    cy.visit('http://localhost:5173/sign-in')
    cy.get('label').contains('Your e-mail').type('ana@ana.com')
    cy.get('label').contains('Your password').type('AAAAAAAA')
    cy.contains('Enter').click()
    cy.url().should('eq', 'http://localhost:5173/sign-in')
    cy.contains('E-mail or password incorrect!')
  })
})
