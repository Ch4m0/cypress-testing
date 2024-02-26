import { CommonPageData } from "./common-page.data.cy";
import { CommonPageElements } from "./common-page.elements.cy";

export class CommonPageMethods {
  static navigateToDemoPlaze() {
    cy.visit(CommonPageData.url);
  }

  static clickOnHomeOption() {
    CommonPageElements.topMenu.home.click();
  }

  static clickOnContactOption() {
    CommonPageElements.topMenu.contact.click();
  }

  static clickOnAboutOption() {
    CommonPageElements.topMenu.aboutUs.click();
  }

  static clickOnCartOption() {
    CommonPageElements.topMenu.cart.click();
  }

  static clickOnLoginOption() {
    CommonPageElements.topMenu.login.click();
  }

  static clickOnSignupOption() {
    CommonPageElements.topMenu.signup.click();
  }
}