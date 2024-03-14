import { HomeElements } from "./home.elements";

export class HomeMethods {
  static clickOnPhonesOption() {
    HomeElements.categories.phones.click();
  }
  static clickOnLatopsOption() {
    HomeElements.categories.laptops.click();
  }

  static clickOnLaptopsOption() {
    HomeElements.categories.monitors.click();
  }

  static clickOnProductLink(productName) {
    HomeElements.product(productName).click();
  }

  static verifyProductDisplayed(productName) {
    HomeElements.product(productName).should("be.visible");
  }

  static verifyHomePage() {
    cy.url().should("include", "/index.html");
  }
}
