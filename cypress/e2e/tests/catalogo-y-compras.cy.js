import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductDetailsMethods } from "../pages/product-detail/productDetail.methods";
import { ThankYouForYourPurchaseMethods } from "../pages/thank-you-for-your-purchase/thank-you-for-your-purchase.methods";
import { Logger } from "../utils/logger";

const { username, password } = LoginData.validCredentials;

describe(CommonPageData.testSuites.catalogoYCompras, () => {
  it("Navegación por categorías", () => {
    Logger.stepNumber(1);
    Logger.step("Iniciar sesión como usuario registrado");

    Logger.subStep("Navegar demoblaze");
    CommonPageMethods.navigateToDemoPlaze();

    Logger.subStep("Iniciar sesion");
    CommonPageMethods.clickOnLoginOption();

    LoginMethods.login(username, password);

    Logger.stepNumber(2);
    Logger.step("Navegar a la página de inicio");
    CommonPageMethods.clickOnHomeOption();

    Logger.stepNumber(3);
    Logger.step(
      "Seleccionar una categoría de productos en el menú de navegación."
    );
    HomeMethods.clickOnLaptopsOption();

    Logger.stepNumber(4);
    Logger.step(
      "Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada."
    );

    HomeMethods.verifyProductDisplayed("Apple monitor 24");
    HomeMethods.verifyProductDisplayed("ASUS Full HD");
  });

  it("Agregar producto al carrito", () => {
    {
      Logger.stepNumber(1);
      Logger.step("Iniciar sesión como usuario registrado");

      Logger.subStep("Navegar demoblaze");
      CommonPageMethods.navigateToDemoPlaze();

      Logger.subStep("Iniciar sesion");
      CommonPageMethods.clickOnLoginOption();

      LoginMethods.login(username, password);

      Logger.stepNumber(2);
      Logger.step("Navegar a la página de inicio");
      CommonPageMethods.clickOnHomeOption();

      Logger.stepNumber(3);
      Logger.step(
        "Seleccionar una categoría de productos en el menú de navegación"
      );
      HomeMethods.clickOnLaptopsOption();

      Logger.stepNumber(4);
      Logger.step("Hacer clic en un producto específico");

      HomeMethods.clickOnProductLink("ASUS Full HD");

      Logger.stepNumber(5);
      Logger.verification(
        "Verificar que se muestra la página de detalles del producto."
      );
      ProductDetailsMethods.verifyProductDetailsPageDisplayed();

      Logger.stepNumber(6);
      Logger.step("Hacer clic en el botón 'Add to cart'");
      ProductDetailsMethods.clickOnAddToCart();

      Logger.stepNumber(7);
      Logger.verification(
        "Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito"
      );
      ProductDetailsMethods.verifyProductAdded();
      CommonPageMethods.clickOnCartOption();
      CartMethods.verifyProductIsDisplayed("ASUS Full HD");
    }
  });

  it("Realizar una compra", () => {
    Logger.stepNumber(1);
    Logger.step("Iniciar sesión como usuario registrado");

    Logger.subStep("Navegar demoblaze");
    CommonPageMethods.navigateToDemoPlaze();

    Logger.subStep("Iniciar sesion");
    CommonPageMethods.clickOnLoginOption();

    LoginMethods.login(username, password);

    Logger.stepNumber(2);
    Logger.step("Navegar a la página de inicio");
    CommonPageMethods.clickOnHomeOption();

    Logger.stepNumber(3);
    Logger.step(
      "Seleccionar una categoría de productos en el menú de navegación"
    );
    HomeMethods.clickOnLaptopsOption();

    Logger.stepNumber(4);
    Logger.step("Hacer clic en un producto específico");

    HomeMethods.clickOnProductLink("ASUS Full HD");

    Logger.stepNumber(5);
    Logger.verification(
      "Verificar que se muestra la página de detalles del producto."
    );
    ProductDetailsMethods.verifyProductDetailsPageDisplayed();

    Logger.stepNumber(6);
    Logger.step("Hacer clic en el botón 'Add to cart'");
    ProductDetailsMethods.clickOnAddToCart();

    Logger.stepNumber(7);
    Logger.verification(
      "Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito"
    );
    ProductDetailsMethods.verifyProductAdded();

    Logger.stepNumber(8);
    Logger.verification("Clic en la opcion 'Cart' de la barra de navegación");
    CommonPageMethods.clickOnCartOption();

    Logger.stepNumber(9);
    Logger.verification(
      "Verificar que estes dentro de la vista de carrito de compra"
    );
    CartMethods.verifyCartPage();

    Logger.stepNumber(10);
    Logger.verification("Hacer clic en el boton 'place order'");
    CartMethods.clickOnPlacerOrder();

    Logger.stepNumber(11);
    Logger.verification(
      "Completar los campos obligatorios en la página de información de envío"
    );
    const data = PlaceOrderData.testData;
    PlaceOrderMethods.setDataForm(data);

    Logger.stepNumber(12);
    Logger.verification("Clic en el boton 'purchase'");
    PlaceOrderMethods.clickOnPurchaseButton();

    Logger.stepNumber(13);
    Logger.verification("Verificar mensaje de confirmacion");
    ThankYouForYourPurchaseMethods.verifyGreenCheckIcon();
    cy.wait(3000);
    ThankYouForYourPurchaseMethods.clickOnOkButton();

    Logger.stepNumber(14);
    Logger.verification("Verificar que estamos en el home");
    HomeMethods.verifyHomePage();
  });
});
