export class PlaceOrderElements {
  static get textboxes() {
    return {
      get inputName() {
        return cy.get("input#name");
      },
      get inputCountry() {
        return cy.get("input#country");
      },
      get inputCity() {
        return cy.get("input#city");
      },
      get inputCreditCard() {
        return cy.get("input#card");
      },
      get inputMonth() {
        return cy.get("input#month");
      },
      get inputYear() {
        return cy.get("input#year");
      },
    };
  }

  static get buttons() {
    return {
      get close() {
        return cy.get('div[id="orderModal"] button').eq(1);
      },
      get purchase() {
        return cy.contains("button", "Purchase");
      },
    };
  }
}
