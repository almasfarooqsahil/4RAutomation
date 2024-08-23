class loginPage{

    elements = { 
        usernameInput : () => cy.xpath('//input[@placeholder="Username or Email"]'),      
        passwordInput : () => cy.xpath('//input[@placeholder="Password"]'),    
        loginBtn : () => cy.xpath('//button[contains(text(),"Sign In")]')

    }
 
    enterUsername(username)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }
 
    enterPassword(password)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
   
    clickSubmit() {
        this.elements.loginBtn().click();
    }
 
 }
 
 export default loginPage;