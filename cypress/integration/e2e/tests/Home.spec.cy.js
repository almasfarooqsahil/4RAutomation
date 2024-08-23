import HomePage from '../../../pageobjects/homePage'

const HomePageObj = new HomePage();

describe('Home Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://4r.hashe.com/');
        cy.wait(3000);
        HomePageObj.EnterUserEmail('8X2KSpTniE@example.com')
        HomePageObj.EnterUserPassword('12345678')
        HomePageObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

//CLICK ON ON SIDE MENU
it('Click Home Tab Test Case', () => {
    //HomePageObj.ClickJDManagementMenu()
    //cy.wait(5000);
    //HomePageObj.ClickBulkExportJobsMenu()
    //HomePageObj.SelectFileType()
    //HomePageObj.SelectFrequency()
    //HomePageObj.ClickBulkExportJbButton()
 })








})