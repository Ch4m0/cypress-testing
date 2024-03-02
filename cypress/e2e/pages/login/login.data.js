export class LoginData {
  static get invalidCredentials() {
    return {
      username: "abc",
      password: "abc",
    };
  }
  static get validCredentials() {
    return {
      username: "botija",
      password: "123456",
    };
  }
}
