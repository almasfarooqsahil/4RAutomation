import AwardPage from '../../../pageobjects/awardPage'

const AwardPageObj = new AwardPage();

describe('Award Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://4r.hashe.com/');
        cy.wait(3000);
        AwardPageObj.EnterUserEmail('sdfgstw@example.com')
        AwardPageObj.EnterUserPassword('sdfsdg')
        AwardPageObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

//CLICK ON ON SIDE MENU
it('Award Test Case', () => {
    //AwardPageObj.ClickJDManagementMenu()
    //cy.wait(5000);
    //AwardPageObj.ClickBulkExportJobsMenu()
    //AwardPageObj.SelectFileType()
    //AwardPageObj.SelectFrequency()
    //AwardPageObj.ClickBulkExportJbButton()
 })








})