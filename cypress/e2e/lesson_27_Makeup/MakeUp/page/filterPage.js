const { result } = require("cypress/types/lodash");

class filter {
    selectors = {
        sortCategory: '.catalog-sort-list>li>label',
        allResultsFilter:'[class="simple-slider-list"]>li',
        all:'[class="simple-slider-list"] li:nth-child(2)>div>div>a',
        popularText:'.simple-slider-list>li>div>div>div>a'
    }

    clickOnSortCategory (sortCategory) {
        cy.get(this.selectors.sortCategory,{timeout:3000}).should('be.visible').contains(sortCategory).click();
    }

    // choiceBlokOfSort(numberResult) {
    //     cy.get(this.selectors.allResultsFilter).eq(numberResult).should('be.visible')
    // }
    
    // checkSortForName(numberResult,expectFirstSymbol) {
    //     this.choiceBlokOfSort(numberResult).invoke('attr', 'data-brand')
    //     .then(($element) => {
    //         const productText = $element[0]
    //         expect(productText).equal(expectFirstSymbol)
    //     })
    // }

    checkSortForName(numberResult,expectFirstSymbol) {
        cy.get(this.selectors.allResultsFilter).eq(numberResult).should('be.visible').invoke('attr', 'data-brand')
             .then(($element) => {
                 const productText = $element[0]
                 expect(productText).equal(expectFirstSymbol)
             })
         }

         
    checkSortForPopular(numberResult1,numberResult2){
        let result
        cy.get(this.selectors.popularText).eq(numberResult1).should('be.visible').invoke('text')
        .then(($text)=>{
            const popular1 = parseFloat($text)
        cy.get(this.selectors.popularText).eq(numberResult2).should('be.visible').invoke('text')
        .then(($text)=>{
            const popular2 = parseFloat($text)
        if(popular1>popular2){
                 result = true
            }else {
                 result = false
             }
             expect(result).to.be.true
        })
    })
    }

}module.exports = new filter