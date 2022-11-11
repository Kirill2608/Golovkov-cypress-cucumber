import authorizationPage from "../../pages/loginPage"

describe('Login', () => {
    it('Login my user', () => {
        cy.visit('/');
        authorizationPage.openLoginPage();
        authorizationPage.fillAuthorizationForm('email@yopmail.com','userPass');
        cy.get(authorizationPage.selectors.errorAlertDescription).contains('Authentication failed.')
    })
})



// describe('Login ', () => {
//     it('login my user', () => {
//         cy.visit('/');
//         cy.get('.header_user_info').click();
//         cy.get('#email').type('email@yopmail.com');
//         cy.get('#passwd').type('password');
//         cy.get('#SubmitLogin').click();
//         cy.get('.alert li').contains('Authentication failed.');
//         })
    
//     })
