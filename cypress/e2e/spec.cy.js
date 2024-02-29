import { LoginMethods } from "./pages/login/login.methods";

import { Logger } from "./utils/logger";

describe("template spec", () => {
  it("login", () => {
    const username = "botija";
    const password = "123456";

    Logger.stepNumber(1);
    Logger.step("Navegar to Demoblaze");
    cy.visit("https://www.demoblaze.com/");

    Logger.stepNumber(2);
    Logger.step("Click on 'Login' link");
    cy.get('a[data-target="#logInModal"]').click();

    Logger.stepNumber(3);
    Logger.step(`Login with this credentials: "${username}/${password}"`);
    LoginMethods.login(username, password);
    Logger.verification("Check success login");
    cy.get("a#nameofuser").contains("Welcome botija");
  });

  /* it("Signup", () => {
    const username = "newUser1";
    const password = "esteesmipassword";
    cy.visit("https://www.demoblaze.com/");
    cy.get('a[data-target="#signInModal"]').click();
    SignupMethods.signup(username, password);
  });

  it("products", () => {
    cy.visit("https://www.demoblaze.com/");

    HomeMethods.clickOnPhonesOption();
    HomeMethods.clickOnProductLink(HomeData.phone.iphone6);
  });*/

  /*it("delete element", () => {
    HomeMethods.clickOnPhonesOption();
    HomeMethods.clickOnProductLink("Nokia lumia 1520");
    ProductDetailsMethods.clickOnAddToCart();


    CartMethods.clickOnDeleteLink("Nokia lumia 1520");
  });*/
});
