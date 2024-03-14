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
}
