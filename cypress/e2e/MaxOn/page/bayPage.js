class changePlan {
    selector ={
    buyButtonFirstPlan:(numberPlan)=> cy.get(`#annual .package-wrapper li:nth-child(${numberPlan}) a:nth-child(1)`,{timeout:3000}),
    buyButtonOtherPlan:(numberPlan)=> cy.get(`#annual .package-wrapper li:nth-child(${numberPlan}) .buy-btn`,{timeout:3000}),

    allPlanOnPage:'#annual .package-wrapper'
    };
    
    changeFirstPlanForBuy(numberPlan){
        this.selector.buyButtonFirstPlan(numberPlan).should('be.visible').click();
    }

    changOtherPlanForBuy(numberPlan){
        this.selector.buyButtonOtherPlan(numberPlan).should('be.visible').click();
    }

    pageChangePlanLoad() {
        cy.get(this.selector.allPlanOnPage).should('be.visible')
    }

}module.exports = new changePlan();







