
class headers {
    selectors = {
        headerMenuPage:"#mainnav > ul > li:nth-child(3) > ul",
        selectorSectionShopMenu:"#mainnav > ul > li:nth-child(3) > ul > li > a",
        closeButtonStartModal:"[aria-label='Close']",
        headerPageShopMenu:".top-banner-content > h4"
    }

    openShopMenu(nameSection) {
        cy.get(this.selectors.headerMenuPage).invoke('show'),
        cy.get(this.selectors.selectorSectionShopMenu).contains(nameSection).click()
    }

    loadPageShop(textPageHeader) {
        cy.get(this.selectors.headerPageShopMenu).should('be.be.visible').and('have.text', textPageHeader)
    }
}module.exports = new headers();