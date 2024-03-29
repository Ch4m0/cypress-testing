import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../utils/logger";

describe(CommonPageData.testSuites.autenticacion, () => {
  it.only("Inicio de sesión válido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    CommonPageMethods.navigateToDemoPlaze();

    Logger.stepNumber(2);
    Logger.step("Hacer clic en 'Log in' en la barra de navegación.");
    CommonPageMethods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.step("Ingresar un nombre de usuario y contraseña válidos");

    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(4);
    Logger.step("Hacer clic en 'Log in' para iniciar sesión.");
    LoginMethods.clickOnLoginButton();

    Logger.stepNumber(5);
    Logger.verification("validar Inicio de sesion exitoso");

    CommonPageMethods.checkSignedUser(LoginData.validCredentials.username);

    Logger.postCondition("Hacer Logout");

    CommonPageMethods.logout();
  });

  it("Inicio de sesión Invalido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    CommonPageMethods.navigateToDemoPlaze();

    Logger.stepNumber(2);
    Logger.step("Hacer clic en 'Log in' en la barra de navegación.");
    CommonPageMethods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.step("Ingresar un nombre de usuario y contraseña válidos");

    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword("contrasenaInvalida");

    Logger.stepNumber(4);
    Logger.step("Hacer clic en 'Log in' para iniciar sesión");
    LoginMethods.clickOnLoginButton();

    Logger.stepNumber(5);
    Logger.verification(
      "Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado"
    );
    LoginMethods.loginFail();
  });
});
