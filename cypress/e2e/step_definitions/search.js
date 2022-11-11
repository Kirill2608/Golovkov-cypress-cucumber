import {Given,When,Then, And} from "@badeball/cypress-cucumber-preprocessor";
import headerPage from "../../pages/headerPage"

Given('Open main page', () =>{
    cy.visit('/');
})

When('Type to search box {string}', (searchText) => {
    headerPage.typeToSearchField(searchText);
})

When ('click submit', () => {
    headerPage.clickOnElement(headerPage.selectors.submitButton);
})

Then('Display message {string}', (messageText) => {
    cy.get(headerPage.selectors.headingCounter).contains(messageText)
})