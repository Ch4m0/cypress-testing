import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods {
  static insertName(name) {
    PlaceOrderElements.textboxes.inputName.invoke("val", name);
  }

  static insertCountry(country) {
    PlaceOrderElements.textboxes.inputCountry.invoke("val", country);
  }

  static insertCity(city) {
    PlaceOrderElements.textboxes.inputCity.invoke("val", city);
  }

  static insertCreditCard(creditCard) {
    PlaceOrderElements.textboxes.inputCreditCard.invoke("val", creditCard);
  }

  static insertMonth(month) {
    PlaceOrderElements.textboxes.inputMonth.invoke("val", month);
  }

  static insertYear(year) {
    PlaceOrderElements.textboxes.inputYear.invoke("val", year);
  }

  static clickOnCloseButton() {
    PlaceOrderElements.buttons.close.click();
  }

  static clickOnPurchaseButton() {
    PlaceOrderElements.buttons.purchase.click();
  }

  static setDataForm({ name, country, city, creditCard, month, year }) {
    this.insertName(name);
    this.insertCountry(country);
    this.insertCity(city);
    this.insertCreditCard(creditCard);
    this.insertMonth(month);
    this.insertYear(year);
  }
}
