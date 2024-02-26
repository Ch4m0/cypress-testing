import { CartMethods } from "./pages/cart/cart.methods.cy";
import { HomeData } from "./pages/home/home.data";
import { HomeMethods } from "./pages/home/home.methods";
import { LoginMethods } from "./pages/login/login.methods";
import { ProductDetailsMethods } from "./pages/product-detail/productDetail.methods.cy";
import { SignupData } from "./pages/signUp/signUp.data";
import { SignupMethods } from "./pages/signUp/signup.methods";

describe("template spec", () => {
  it.only("probe", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.wait(15000);
    CartMethods.clickOnDeleteLink("Nokia lumia 1520");
  });

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

  it("products", () => {
    cy.visit("https://www.demoblaze.com/");

    HomeMethods.clickOnPhonesOption();
    HomeMethods.clickOnProductLink(HomeData.phone.iphone6);
  });

  /*it("delete element", () => {
    HomeMethods.clickOnPhonesOption();
    HomeMethods.clickOnProductLink("Nokia lumia 1520");
    ProductDetailsMethods.clickOnAddToCart();


    CartMethods.clickOnDeleteLink("Nokia lumia 1520");
  });*/
});
