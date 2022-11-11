class filter {
    selectors = {
        filterCategoryAll:'.category-list a',
        filterCategoryBags:'.category-list li:nth-child(2)',
        loadResultCategory:'#products > div'
    } 

    openFilterCategory(nameCategory) {
        cy.get(this.selectors.filterCategoryAll).should('be.visible').contains(nameCategory).click()

    }

    loadFilterCategory() {
        cy.get(this.selectors.loadResultCategory).should('be.visible')
    }

} module.exports = new filter