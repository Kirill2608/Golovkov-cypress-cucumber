import filterPage from "../../pages/filterPage"
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

    it.only('Check search result', () => {
        cy.viewport(1900, 1524)
        cy.visit('/');
        cy.get(headers.selectors.closeButtonStartModal).click();
        headers.openShopMenu('left sidebar')
        headers.loadPageShop('fashion')
        cy.wait(3000)
        filterPage.changeScrollPrice(400,500)
        cy.wait(4000)
})
})