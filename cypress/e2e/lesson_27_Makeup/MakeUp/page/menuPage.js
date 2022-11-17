class menu {
    selectors = {
        giftsCategory: '.menu-list>li:nth-child(11)',
    }

    clickOnElement (elementSelector) {
        cy.get(elementSelector).click();
    };
}

module.exports = new menu(); 