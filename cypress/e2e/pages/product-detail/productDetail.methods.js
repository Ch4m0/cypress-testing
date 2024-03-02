import { CommonPageMethods } from "../common-page/common-page.methods.js";
import { ProductDetailElements } from "./productDetail.elements.js";

export class ProductDetailsMethods {
  static clickOnAddToCart() {
    ProductDetailElements.buttons.addToCart.click();
  }

  static verifyProductDetailsPageDisplayed() {
    ProductDetailElements.buttons.addToCart.should("be.visible");
  }

  static verifyProductAdded() {
    CommonPageMethods.alertInfo("Product added.");
  }
}
