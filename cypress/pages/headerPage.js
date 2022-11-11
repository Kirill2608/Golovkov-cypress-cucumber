class headerPage {
  
    selectors = {
        searchBox : '#search_query_top',
        submitButton : '#searchbox [type="submit"]',
        headingCounter: '.heading-counter'
    }

    typeToSearchField(textToType) {
      cy.get(this.selectors.searchBox).type(textToType, {timeout: 2000});
    }

    clickOnElement(element) {
      cy.get(element).click();
    }

} module.exports = new headerPage();