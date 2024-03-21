export default class MainPage {

    constructor() {
        this.url = "https://www.saucedemo.com/v1/";
        this.userName1 = "standard_user"
        this.userName2 = "locked_out_user"
        this.userName3 = "problem_user"
        this.userName4 = "performance_glitch_user"
        this.password = "secret_sauce"

    }


    goToMainPage(url) {
        cy.visit(this.url)
    }

    verifyThatLogoIsVisible(){
        cy.get('.login_logo').should('be.visible')
    }
    verifyThatLoginIsDisplayed(){
        cy.get('#login_button_container').should('be.visible')
    }

    login(username, password){
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('#login-button').click()
    }
    verifyThatLoginErrorDisplaysCorrectly(){
        cy.get('[data-test="error"]').should('be.visible')
    }

}   