import CapabilityPage from '../../../pageobjects/capabilityPage'

const CapabilityPageObj = new CapabilityPage();

describe('Capability Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://4r.hashe.com/');
        cy.wait(3000);
        CapabilityPageObj.EnterUserEmail('dsrwe34@example.com')
        CapabilityPageObj.EnterUserPassword('fsdfsdwe3')
        CapabilityPageObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

//CLICK ON ON SIDE MENU
it('Search Test Case', () => {
    //CapabilityPageObj.ClickJDManagementMenu()
    //cy.wait(5000);
    //CapabilityPageObj.ClickBulkExportJobsMenu()
    //CapabilityPageObj.SelectFileType()
    //CapabilityPageObj.SelectFrequency()
    //CapabilityPageObj.ClickBulkExportJbButton()
 })








})