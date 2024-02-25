import { LoginMethods } from "./pages/login/login.methods";

describe("template spec", () => {
  it("passes", () => {
    const username = "botija";
    const password = "123456";
    cy.visit("https://www.demoblaze.com/");
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethods.login(username, password);

    cy.get("a#nameofuser").contains("Welcome botija");
  });
});
