class ResultArea {
    selectors = {
        ikonsResult:'.item.product',
        itemsButton1_10:'.modes-mode.mode-list',
        sortByButton:'#sorter',
        sortByAllList:'#sorter>option',
        pricesProduct:'.price-wrapper',
        nameProduct: '.product-item-link'
    }

    loadResult(amountResult) {
        cy.get('.item.product').should(($p) => {
            expect($p).to.have.length(amountResult)
    })
}

    clickOnElement(element, numberElement) {
        cy.get(element).eq(numberElement).should('be.visible').click()
}

    clickOnSortBy(sortName) {
        cy.get(this.selectors.sortByButton).select(sortName)
    }

    getProductPrice(selector, elementIndex) {
         return cy.get(selector).eq(elementIndex).should('be.visible').invoke('attr','data-price-amount')
        .then((result) => {
            return result
      })
    }

    getProductName (selector, elementIndex) {
        return cy.get(selector).eq(elementIndex).invoke("text")
        .then((result) => {
            return result[0];
      })
    
    }
}module.exports = new ResultArea