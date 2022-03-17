import HomePage from "../../support/PageObjects/HomePage";


describe("Login into herokuapp and Verify scenarios", function(){


before("Herokuapp Suite", function(){
   
    cy.fixture("example").then(function(data){
        this.data= data;
        cy.visit(this.data.url)
    })
    

})


it("Herokuapp Test" , function(){  
   
    //Creating object of home page class
    const homePage= new HomePage()

    //Login into application
    cy.LoginIntoApplication(this.data.username, this.data.password)


    //Verify the title of the application after login
    cy.title().should('eq', 'The Internet')

    //verify the current url after login
    cy.url().should('contain', 'https://the-internet.herokuapp.com/secure')

    //Verify the success message after login
    homePage.loginSuccessMessage().should('contain', 'You logged into a secure area!')
    
    //Verify that header is shown as 'Secure Area'
    homePage.secureAreaHeader().should('contain', ' Secure Area')

    //Verify the footer message 'Elemental Selenium' is displayed
    homePage.footerMessage().should('contain', 'Elemental Selenium')

     //Logout from the application
     homePage.logoutButton().click();
 
     
})




})