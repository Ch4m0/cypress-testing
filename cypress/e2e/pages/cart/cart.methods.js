import { CartElement } from "./cart.elements.cy";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElement.links.delete(productName).click();
  }
}
