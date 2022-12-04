class Filter {

get filtersMenu () {
    return cy.get('.filter-options-item')
}

get filtersSubMenu () {
    return cy.get('.filter-options-item>div a')
}

/**
 * Click on filter menu or submenu
 * @param filterMainMenu Sequential number filter menu button. starting from 0 (total 0-12)
 * Category-0, Style-1, Size-2, ...
 * @param filterSubMenu Sequential number filter submenu button. starting from 0 (total 0-64)
 * Category (Pants-0, Shorts-1)
 * Style (2 - 8)
 * Size (9 - 12)
 * ........
 */

clickOnFilter (filterMainMenu, filterSubMenu) {
        this.filtersMenu.eq(filterMainMenu).click()
        this.filtersSubMenu.eq(filterSubMenu).click()
    }

}module.exports = new Filter