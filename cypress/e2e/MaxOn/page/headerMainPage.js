class header {
    selector ={
    //buttonBuy:()=>cy.get("[aria-label='Navigation'] a[href='/ru/buy']"),
    buttonBuy:"[aria-label='Navigation'] a[href='/ru/buy']",
    buttonNews:"#desktop-nav-dropdown-control-1336349",
    buttonsSubMenuNews:"#desktop-nav-submenu-1336349 a"

    };
    
    clickOnElement(element){
        cy.get(element).should('be.visible').click();
    }

    clickOnSubMenuNews(subMenuName) {
        cy.get(this.selector.buttonsSubMenuNews).contains(subMenuName).should('be.visible').click()
    }
    
}module.exports = new header();







