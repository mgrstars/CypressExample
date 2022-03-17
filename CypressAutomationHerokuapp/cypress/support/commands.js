import LoginPage from "./PageObjects/LoginPage";


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

 Cypress.Commands.add("LoginIntoApplication", (UserName, Password) => { 
  
  const loginPage= new LoginPage
  loginPage.userName().clear()
  loginPage.userName().type(UserName)
  loginPage.password().clear()
  loginPage.password().type(Password)
  loginPage.loginButton().click();
  
})


//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
