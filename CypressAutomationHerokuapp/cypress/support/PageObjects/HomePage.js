class HomePage {

    loginSuccessMessage() {
        return cy.get("#flash")
    }

    logoutButton() {
        return cy.get("a[href*='logout']")
    }

    footerMessage() {
        return cy.get("#page-footer>div>div>a")
    }

    secureAreaHeader() {
        return cy.get("#content>div>h2")
    }

    

  
    
}


export default HomePage