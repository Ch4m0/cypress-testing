export class ProductDetailElements {
  static get buttons() {
    return {
      get AddToCart() {
        return cy.contains("a", "Add to cart");
      },
    };
  }
}
