const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import headers from "../../pages/loginPageAutopract"
import filter from "../../pages/filterPage"



Given('Open product autopract.com', () => {
    cy.viewport(1500,1024)
    cy.visit('/')
})

When('Close modal window letter', () => {
    cy.get(headers.selectors.closeButtonStartModal).click()
})

When('Open shop section {string} in header', (section) => {
    headers.openShopMenu(section)
})

Then('Pages have header {string}', (pageHeader) => {
    headers.loadPageShop(pageHeader)
})

When('Open section {string} in filter category', (section) => {
    filter.openFilterCategory(section)
})

Then('Page open', () => {
    filter.loadFilterCategory
})