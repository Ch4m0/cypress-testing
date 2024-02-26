import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements.cy";

export class ThankYouForYourPurchaseMethods {
  static clickOnOkButton() {
    ThankYouForYourPurchaseElements.buttons.ok.click();
  }

  static verifyGreenCheckIcon() {
    ThankYouForYourPurchaseElements.icons.success();
  }
}
