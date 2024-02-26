export class ThankYouForYourPurchaseElements {
  static get icons() {
    return {
      get success() {
        return cy.get("div.sa-placeholder");
      },
    };
  }

  static get buttons() {
    return {
      get ok() {
        return cy.contains("button", "OK");
      },
    };
  }
}
