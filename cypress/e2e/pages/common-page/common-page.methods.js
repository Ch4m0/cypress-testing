import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements.js";

export class CommonPageMethods {
  static navigateToDemoPlaze() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(CommonPageData.url);
    CommonPageMethods.clickOnHomeOption();
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

  static alertInfo(textToCompare) {
    cy.on("window:alert", (text) => {
      expect(text).to.equal(textToCompare);
    });
  }

  static checkSignedUser(username) {
    CommonPageElements.signedUser.should("have.text", `Welcome ${username}`);
  }

  static logout() {
    cy.get("body").then(($body) => {
      if ($body.find("#logout2").length > 0) {
        CommonPageElements.topMenu.logout.click();
      }
    });
  }
}
