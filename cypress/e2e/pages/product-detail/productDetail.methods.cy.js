import { ProductDetailElements } from "./productDetail.elements.cy";

export class ProductDetailsMethods {
  static clickOnAddToCart() {
    ProductDetailElements.buttons.click();
  }
}
