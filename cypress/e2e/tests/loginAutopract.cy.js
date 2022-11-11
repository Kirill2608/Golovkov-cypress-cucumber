import headers from "../../pages/loginPageAutopract"

describe('open menu', () => {
    it('open section', () => {
        cy.viewport(1200, 1024)
        cy.visit('/');
        cy.get(headers.selectors.closeButtonStartModal).click();
        headers.openShopMenu('no sidebar')
        headers.loadPageShop('fashion')
    })
})