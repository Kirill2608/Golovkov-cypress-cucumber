class filter {
    selectors = {
        filterCategoryAll:'.category-list a',
        filterCategoryBags:'.category-list li:nth-child(2)',
        loadResultCategory:'#products > div',
        buttonScrollMin:'.ng5-slider > span:nth-child(5)',
        buttonScrollMax:'.ng5-slider > span:nth-child(6)',
        buttonScrollMin1:'.ng5-slider > span:nth-child(9)',
        buttonScrollMax1:'.ng5-slider > span:nth-child(10)',
    } 

    openFilterCategory(nameCategory) {
        cy.get(this.selectors.filterCategoryAll).should('be.visible').contains(nameCategory).click()

    }

    loadFilterCategory() {
        cy.get(this.selectors.loadResultCategory).should('be.visible')
    }

    changeScrollPrice(minPrice, maxPrice) {
        cy.get(this.selectors.buttonScrollMin1)
        .invoke('text', minPrice)
        .should('text', minPrice)
        cy.get(this.selectors.buttonScrollMin)
        .invoke('attr', 'aria-valuenow', minPrice)
        .should('have.attr','aria-valuenow', minPrice)
        .invoke('attr', 'aria-valuetext', minPrice)
        .should('have.attr','aria-valuetext', minPrice)
        //cy.get(this.selectors.buttonScrollMax).invoke('attr', 'aria-valuenow', maxPrice).should('have.attr','aria-valuetext', maxPrice)

    }

} module.exports = new filter