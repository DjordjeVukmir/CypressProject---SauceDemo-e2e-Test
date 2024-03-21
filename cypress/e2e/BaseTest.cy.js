/// <reference types="Cypress" />
import MainPage from "./Pages/MainPage"
import InventoryPage  from "./Pages/InventoryPage";

var mainPage = new MainPage();
var inventoryPage = new InventoryPage();

describe('Main Page Testing', () => {
  beforeEach(() =>{
    mainPage.goToMainPage()
  })
  it('Verify that user is on the correct website', () => {
    mainPage.verifyThatLoginIsDisplayed()
    mainPage.verifyThatLogoIsVisible()
  })
  it('Login as "standard_user"', () =>{
    mainPage.login(mainPage.userName1, mainPage.password)
    inventoryPage.verifyThatUserIsLoggedIn()
  })
  it('Verify that "locked_out_user" cannot login', () =>{
    mainPage.login(mainPage.userName2, mainPage.password)
    mainPage.verifyThatLoginIsDisplayed()
    mainPage.verifyThatLogoIsVisible()
    mainPage.verifyThatLoginErrorDisplaysCorrectly()
  })
  it('Login as "problem_user"', () =>{
    mainPage.login(mainPage.userName3, mainPage.password)
    inventoryPage.verifyThatUserIsLoggedIn()
  })
  it('Login as "performance_glitch_user"', () =>{

    const minimumTime = 1500; // 1,5 seconds in milliseconds

    // Log in with performance glitch user
    const startTime = new Date().getTime();
    mainPage.login(mainPage.userName4, mainPage.password);

    // Verify that user is logged in
    inventoryPage.verifyThatUserIsLoggedIn();

    // Calculate the elapsed time
    const elapsedTime = new Date().getTime() - startTime;

    // Assert that the min time is greater than or equal to the elapsed time
    expect(minimumTime).to.be.at.least(elapsedTime);
  })
})
