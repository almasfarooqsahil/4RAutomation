import loginPage from '../../../pageobjects/loginPage'

describe('Login Test Suite', () => {

 beforeEach(function() {
   //Clear Cache and Cookies
   cy.clearCookies();
   cy.clearLocalStorage();
   cy.reload()
   cy.visit('https://4r.hashe.com/');
   cy.wait(5000)
})

 it('Correct Username and Correct Password Test Case', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('8X2KSpTniE@example.com')
   loginObj.enterPassword('12345678')
   loginObj.clickSubmit();
   
 })

 it('Incorrect Username and Incorrect Password Test Case', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('selenium')
   loginObj.enterPassword('qa@123')
   loginObj.clickSubmit();
 })

 it('Incorrect Username and Correct Password Test Case', () => {
  const loginObj = new loginPage();
  loginObj.enterUsername('test@test.com')
  loginObj.enterPassword('N0tF0rEv$ry0ne!@')
  loginObj.clickSubmit();
  
})

it('Correct Username and Incorrect Password Test Case', () => {
  const loginObj = new loginPage();
  loginObj.enterUsername('noman.akram+15@hashehouse.com')
  loginObj.enterPassword('N0tF0rEv$ry0ne!@asdadasddas')
  loginObj.clickSubmit();
  
})

it('Empty Username and Empty Password Test Case', () => {
  const loginObj = new loginPage();
  loginObj.enterUsername(' ')
  loginObj.enterPassword(' ')
  loginObj.clickSubmit();
  
})

})