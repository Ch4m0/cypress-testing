import { CommonPageMethods } from "../common-page/common-page.methods.js";
import { LoginMethods } from "../login/login.methods.js";
import { CartElement } from "./cart.elements.js";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElement.links.delete(productName).click();
  }

  static verifyProductIsDisplayed(productName) {
    CartElement.links.delete(productName).should("be.visible");
  }

  static verifyCartPage() {
    cy.url().should("include", "/cart.html");
  }

  static clickOnPlacerOrder() {
    CartElement.buttons.placeOrder.click();
  }

  static deleteProducts() {
    cy.get('a[onclick*="deleteItem"]').each((link) => {
      link.click();
      cy.wait(1000);
    });
  }

  static clearCart(username, password) {
    CommonPageMethods.clickOnHomeOption();
    CommonPageMethods.clickOnLoginOption();
    LoginMethods.login(username, password);
    CommonPageMethods.clickOnCartOption();
    this.deleteProducts();
  }
}
