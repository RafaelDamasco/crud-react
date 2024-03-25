/// <reference types="cypress" />

describe('Create User', () => {
  it('should create an user', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.createUsers('Rafael', 'rafael@rafael.com', 'rafael123')
    cy.contains('User registered successfully!')
  })

  it('should not create an user because the email is already in use', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.createUsers('Rafael', 'rafael@rafael.com', 'rafael123')
    cy.contains('Email already in use')
  })
})
