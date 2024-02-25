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
}
