// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

const { BasePage } = require("./pages/basePage")


// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


let header = new BasePage()
Cypress.Commands.add('confirmCookis', () => {
   {
      cy.session([], () => {
         cy.visit('/', { timeout: 15000 })
         header.logoMouseHover()
            .confirmCookiesBtn({ timeout: 15000 }).should('be.visible')
         header.confirmCookiesBtnClick()
            .confirmCookiesBtn().should('not.be.visible')
      })
   }
})