class news {
    selectors = {
        containerWithAllHeaders:"div.bg-gray-200>div:nth-child(3)>div:nth-child(2)",
        firstImgInHeadersContainer:"div.bg-gray-200>div:nth-child(3)>div:nth-child(2) article:nth-child(1) img",
        quantityHeadersInContainer:'div.bg-gray-200>div:nth-child(3)>div:nth-child(2)>div article'
    }

checkElementLength(elementName, expectLength) {
        cy.get(elementName).should('have.length', expectLength)
    }

}module.exports = new news