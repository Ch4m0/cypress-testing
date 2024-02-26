import { CartElement } from "./cart.element.cy";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElement.links.delete(productName).click();
  }
}
