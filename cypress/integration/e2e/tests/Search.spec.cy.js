import SearchPage from '../../../pageobjects/searchPage'

const SearchPageObj = new SearchPage();

describe('Search Test Suite', () => {

    beforeEach(function() {

        //Clear Cache and Cookies
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload()
        cy.visit('https://4r.hashe.com/');
        cy.wait(3000);
        SearchPageObj.EnterUserEmail('abc@test.com')
        SearchPageObj.EnterUserPassword('asvsdere3')
        SearchPageObj.ClickSubmitButton()
        cy.viewport(1540, 1000);
        cy.wait(3000);
    
    })

//CLICK ON ON SIDE MENU
it('Search Test Case', () => {
    //BulkExportJobsPageObj.ClickJDManagementMenu()
    //cy.wait(5000);
    //BulkExportJobsPageObj.ClickBulkExportJobsMenu()
    //BulkExportJobsPageObj.SelectFileType()
    //BulkExportJobsPageObj.SelectFrequency()
    //BulkExportJobsPageObj.ClickBulkExportJbButton()
 })








})