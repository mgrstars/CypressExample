class LoginPage {


    userName() {
        return cy.get("#username");
    }


    password() {
        return cy.get("#password")
    }


    loginButton() {
        return cy.get("button[class='radius']")
    }


  


}


export default LoginPage