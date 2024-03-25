/// <reference types="cypress" />

describe('Delete user', () => {
  it('should delete an user', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.contains('Users').click()
    cy.contains('Delete').click()
  })
})
