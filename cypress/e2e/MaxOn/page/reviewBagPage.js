class bayPlan {
    selector ={
    formBay:"[method='post']",
    totalUnitPrice:"#cartTotalsTable > div:nth-child(2) strong",
    //addQuantity:'div.dr_updatableQty > span:nth-child(4)'
    fieldQuantity:'div.dr_updatableQty [name^="quantity"]'
    };
    
    elementLoad(elementName){
        cy.get(elementName,{timeout:5000}).should('be.visible')
    }


    checkElementText(textElement) {
        cy.get(this.selector.totalUnitPrice).should('have.text', textElement)
    }

    typeQuantityInField(quantity) {
        cy.get(this.selector.fieldQuantity).clear().type(`${quantity}{enter}`)
    }

}module.exports = new bayPlan();







