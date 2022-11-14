class modal {
    selector ={
    cookiesClose:()=> cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll.CybotCookiebotDialogBodyButton",{timeout:1500}),
    };

    cookieWindowClose(){
        this.selector.cookiesClose().should('be.visible').click();
    }
    
}module.exports = new modal();