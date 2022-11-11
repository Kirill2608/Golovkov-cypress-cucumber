import filter from "../../pages/filterPage"
import headers from "../../pages/loginPageAutopract"


describe('Filter', () => {
    it('Filter category', () => {
        cy.viewport(1900, 1524)
        cy.visit('/');
        cy.get(headers.selectors.closeButtonStartModal).click();
        headers.openShopMenu('left sidebar')
        headers.loadPageShop('fashion')
        filter.openFilterCategory('bags')
        filter.loadFilterCategory()
    })
})