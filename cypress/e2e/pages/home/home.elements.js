export class HomeElements {
  static get categories() {
    return {
      get phones() {
        return cy.contains("a", "Phones");
      },
      get laptops() {
        return cy.contains("a", "Laptops");
      },

      get monitors() {
        return cy.contains("a", "Monitors");
      },
    };
  }

  static product(selector) {
    return cy.contains("a", selector);
  }
}
