import {Given,When,Then, And} from "@badeball/cypress-cucumber-preprocessor";
import authorizationPage from "../../pages/loginPage"
import headers from "../../pages/loginPageAutopract"
import headerPage from "../../pages/headerPage"


Given("Open product autopract", () => {
    cy.viewport(1500,1024)
    cy.visit('/');
})

When("Close modal letter", () => {
    cy.get(headers.selectors.closeButtonStartModal).click();
})

When ('Open section {string} in shop header', (section) => {
    headers.openShopMenu(section)
})

Then ("Page have header {string}", (header) => {
    headers.loadPageShop(header)
})