export default class InventoryPage {

    constructor() {
        this.url = "https://www.saucedemo.com/v1/inventory.html"
    }

    verifyThatUserIsLoggedIn() {
        cy.url().should('eq', this.url);
    }
    inventoryIsDisplayedAndShowsCorrectText() {
        cy.get('.inventory_list').should('be.visible');
        cy.get('.header_secondary_container').contains('Product');
        


    }
}

