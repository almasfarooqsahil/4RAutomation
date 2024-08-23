class AwardPage{

    elements = { 

    // Login Locators
    usernameInput : () => cy.xpath('//input[@placeholder="Username or Email"]'),      
    passwordInput : () => cy.xpath('//input[@placeholder="Password"]'),    
    loginBtn : () => cy.xpath('//button[contains(text(),"Sign In")]'),

        
    }


    //LOGIN USER
    EnterUserEmail(UserEmailValue)
    {
        this.elements.usernameInput().type(UserEmailValue)
    }
   
    EnterUserPassword(UserPasswordValue)
    {
        this.elements.passwordInput().type(UserPasswordValue)
    }
   
    ClickSubmitButton()
    {
        this.elements.loginBtn().click()
    }

 
 }
 
 export default AwardPage;