///<reference types= "Cypress"/>
import Menu from "../magento/page/headerMenu" 
import Filter from "../magento/page/filter"
import ResultArea from "../magento/page/resultArea"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('check filter and sort', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('/');
    });
    it('sort quantity per page', () => {
        Menu.clickOnMenu('3','1')
        cy.wait(3000)
        Filter.clickOnFilter('1','2')
        ResultArea.loadResult(12)
        ResultArea.clickOnElement(ResultArea.selectors.itemsButton1_10,'0')
        ResultArea.clickOnElement(ResultArea.selectors.itemsButton1_10,'0')
        cy.wait(3000)
        ResultArea.loadResult(10)
    })    

    it.only('sort by name', () => {
        Menu.clickOnMenu('3','1')
        cy.wait(3000)
        ResultArea.clickOnSortBy('Product Name')
        ResultArea.getProductName(ResultArea.selectors.nameProduct, '0').should('have.value', 'A')
    })
})
