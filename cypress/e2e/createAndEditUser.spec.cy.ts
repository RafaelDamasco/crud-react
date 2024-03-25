/// <reference types="cypress" />

describe('Create User and edit', () => {
  it('should create an user', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.createUsers('Rafael', 'rafael@rafael.com', 'rafael123')
    cy.contains('User registered successfully!')
  })

  it('Should not create an user because the email is already in use', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.createUsers('Rafael', 'rafael@rafael.com', 'rafael123')
    cy.contains('Email already in use')
  })

  it('Create user for editing', () => {
    cy.login('ana@ana.com', 'ana123')
    cy.createUsers('Rafael Teste', 'rafael@subuser.com', 'rafael123')
  })

  it('Search User and not find', () => {
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
