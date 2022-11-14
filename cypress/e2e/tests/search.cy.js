import headerPage from "../../pages/headerPage"

/*Test Case
1) Open main page
2) Type to Search - Printed Summer Dress
3) Hit button
4) Check: text 3 results have been found.
*/

// describe('Search',() =>{
//     it('Check search result', () => {
//         cy.visit('/');
//         cy.get('#search_query_top').type('Printed Summer Dress');
//         cy.get('#searchbox [type="submit"]').click();
//         cy.get('.heading-counter').contains('3 results have been found')
//     })
// })

describe('Search',() =>{
    it('Check search result', () => {
        cy.visit('/');
        headerPage.typeTextToSearchInput('Printed Summer Dress');
        headerPage.clickOnElement(headerPage.selectors.submitButton);
        cy.get(headerPage.selectors.headingCounter).contains('3 results have been found')
        
    })

})