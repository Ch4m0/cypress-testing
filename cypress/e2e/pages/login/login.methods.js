import { Logger } from "../../utils/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods {
  static insertUsername(username) {
    LoginElements.textBoxes.username.invoke("val", username);
  }

  static insertPassword(password) {
    LoginElements.textBoxes.password.invoke("val", password);
  }

  static clickOnLoginButton() {
    LoginElements.buttons.logIn.click();
  }

  static login(username, password) {
    Logger.subStep("set username");
    this.insertUsername(username);
    Logger.subStep("set password");
    this.insertPassword(password);
    Logger.subStep("Click on 'Login' button");
    this.clickOnLoginButton();
  }

  static loginFail() {
    CommonPageMethods.alertInfo("Wrong password.");
  }
}
