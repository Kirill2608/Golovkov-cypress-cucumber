import modal from "../page/modalPage"
import header from "../page/headerMainPage"
import changePlan from "../page/bayPage"
import bayPlan from "../page/reviewBagPage"
import news from "../page/newsPage"


describe('HomePage',()=>{
    before('',()=>{
        cy.viewport(1920,1080);
        cy.visit('https://www.maxon.net/ru/');
    })
    it('Bay first plan',()=>{
        modal.cookieWindowClose();
        header.clickOnElement(header.selector.buttonBuy);
        changePlan.pageChangePlanLoad();
        changePlan.changeFirstPlanForBuy(1);
        bayPlan.elementLoad(formBay)
        bayPlan.checkElementText('Total Incl. VAT1.351,77 €')
        //header.clickOnElement(bayPlan.selector.addQuantity)
        bayPlan.typeQuantityInField('2')
        bayPlan.checkElementText('Total Incl. VAT2.703,54 €')

    })

    it.only('Check load blogs', () => {
        modal.cookieWindowClose();
        header.clickOnElement(header.selector.buttonNews);
        header.clickOnSubMenuNews('Заголовки');
        bayPlan.elementLoad(news.selectors.firstImgInHeadersContainer);
        news.checkElementLength(news.selectors.quantityHeadersInContainer, '24')        
    })
});