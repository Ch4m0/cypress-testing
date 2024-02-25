import { LoginMethods } from "./pages/login/login.methods";
import { SignupData } from "./pages/signUp/signUp.data";
import { SignupMethods } from "./pages/signUp/signup.methods";

describe("template spec", () => {
  it("login", () => {
    const username = "botija";
    const password = "123456";
    cy.visit("https://www.demoblaze.com/");
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethods.login(username, password);
    cy.get("a#nameofuser").contains("Welcome botija");
  });

  it("Signup", () => {
    const username = "newUser1";
    const password = "esteesmipassword";
    cy.visit("https://www.demoblaze.com/");
    cy.get('a[data-target="#signInModal"]').click();
    SignupMethods.signup(username, password);
  });
});
