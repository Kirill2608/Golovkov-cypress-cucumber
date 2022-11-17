///<reference types= "Cypress"/>

import filter from "../page/filterPage"
import menu from "../../MakeUp/page/menuPage";

describe('sortingFeature', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://makeup.com.ua/ua/');
    });
    it('sectionGifts', () => {
        menu.clickOnElement(menu.selectors.giftsCategory);
        filter.clickOnSortCategory('назвою');
        cy.wait(3000)
        filter.checkSortForName('1','A')
            });        


    it.only('sectionGifts1', () => {
            menu.clickOnElement(menu.selectors.giftsCategory);
            filter.clickOnSortCategory('популярністю');
            cy.wait(3000)
            filter.checkSortForPopular('0','2')
        });
    })
