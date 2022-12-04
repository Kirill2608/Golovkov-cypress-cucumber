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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getPopularValue', (selector, numberFilterResult) => {
    let textPopular
    cy.get(selector).eq(numberFilterResult).should('be.visible').invoke('text')
        .then(($text)=>{
            textPopular = parseInt($text)
        }).then(()=>{
        cy.wrap(textPopular)
})
})

Cypress.Commands.add('clickOnElement', (element) => {
    cy.get(element).should('be.visible').click()
})

Cypress.Commands.add('getCommentsCount', (selector, elementIndex) => {
    cy.get(selector).eq(elementIndex).invoke("val")
    .then((result) => {
        commentCount = parseInt(result);
  })
});