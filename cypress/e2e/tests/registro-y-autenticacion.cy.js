import { Logger } from "../utils/logger";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/signUp/signup.methods";

describe(CommonPageData.testSuites.registroYAutenticacion, () => {
  it("Registro de usuario valido", () => {
    const username = "dsafsdfsdfd";
    const password = "dsfasdfsd";
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    CommonPageMethods.navigateToDemoPlaze();

    Logger.stepNumber(2);
    Logger.step("Hacer clic en 'Sign up' en la barra de navegación");
    CommonPageMethods.clickOnSignupOption();

    Logger.stepNumber(3);
    Logger.step(
      "Completar todos los campos obligatorios con información válida"
    );
    SignupMethods.insertUsername(username);
    SignupMethods.insertPassword(password);

    Logger.stepNumber(4);
    Logger.step("Hacer clic en 'Sign up' para registrar el usuario");
    SignupMethods.clickOnSignupButton();

    Logger.stepNumber(5);
    Logger.verification("Validate user created succeful");
    SignupMethods.signupSuccesful();
  });
});
