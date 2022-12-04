class Menu {

    selectors = {
        allHeaderMenu:'.navigation>ul>li'
    }

    /**
     * Click on main menu or submenu
     * @param  menuNumber Sequential number menu button starting from 1
     * @param subMenuNumber Sequential number submenu button starting from 0
     */

    clickOnMenu (menuNumber, subMenuNumber) {
        if(menuNumber!==undefined & subMenuNumber!==undefined) {
            cy.get(`.navigation>ul>li:nth-child(${menuNumber})>ul`).invoke('show')
            cy.get(`.navigation>ul>li:nth-child(${menuNumber})>ul>li`).eq(subMenuNumber).click()
        }if (menuNumber!==undefined & subMenuNumber==undefined) {
            cy.get(`.navigation>ul>li:nth-child(${menuNumber})`).click()
        }
    }

}module.exports = new Menu