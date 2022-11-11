class authorizationPage {
    selectors = {
      signHeader: '.header_user_info',
      titleLoginPage: '.page-heading',
      inputLoginEmail: '#email',
      inputLoginPass: '#passwd',
      buttonSignIn: '#SubmitLogin',
      errorAlertDescription: '.alert li'
  }
 
  /**
   * Open login page
   */
   openLoginPage() {
      cy.get(this.selectors.signHeader).click();
  }
 
  /**
   * Fill in the authorization form and click button.
   * @param userEmail Input email authorization form.
   * @param userPass Input pass authorization form.
   */
  fillAuthorizationForm(userEmail,userPass) {
      cy.get(this.selectors.inputLoginEmail).type(userEmail);
      cy.get(this.selectors.inputLoginPass).type(userPass);
      cy.get(this.selectors.buttonSignIn).click();    
  }
}
module.exports = new authorizationPage();