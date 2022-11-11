import {Given,When,Then, And} from "@badeball/cypress-cucumber-preprocessor";
import authorizationPage from "../../pages/loginPage"

Given('Open product', () => {
    cy.visit('/');
})

When('Select authorization in the header', () => {
    authorizationPage.openLoginPage();
})

When('Log in form with email {string}, pass {string} and click on the login button', (email, pass) => {
    authorizationPage.fillAuthorizationForm(email, pass);
})

Then('The error message {string} is displayed', (messege) => {
    cy.get(authorizationPage.selectors.errorAlertDescription).contains(messege)
})