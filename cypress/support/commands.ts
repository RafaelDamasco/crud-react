/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): void
    createUsers(sername: string, email: string, password: string): void
  }
}

Cypress.Commands.add('login', (username, password) => {
  cy.visit('http://localhost:5173/sign-in')
  cy.get('label').contains('Your e-mail').type(username)
  cy.get('label').contains('Your password').type(password)
  cy.contains('Enter').click()
  cy.url().should('eq', 'http://localhost:5173/')
  cy.contains('User signed in successfully!')
})

Cypress.Commands.add('createUsers', (username, email, password) => {
  cy.contains('Users').click()
  cy.contains('Add User').click()
  cy.get('label').contains('Name').type(username)
  cy.get('label').contains('E-mail').type(email)
  cy.get('label').contains('Password').type(password)
  cy.contains('Finish Sign Up').click()
})
