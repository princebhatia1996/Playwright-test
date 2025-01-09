import test from "../lib/base-test";
test.describe("swag labs login page - ", () => {
  test("should login with valid credentials", async ({ loginPage }) => {
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("should show error for incorrect username", async ({ loginPage }) => {
    await loginPage.loginWithInvalidUsername();
  });

  test("should show error for incorrect password", async ({ loginPage }) => {
    await loginPage.loginWithInvalidPassword();
  });

  test("should show error for incorrect username and password", async ({
    loginPage,
  }) => {
    await loginPage.loginWithInvalidUsernameAndPassword();
  });

  test("should show error for empty username and password fields", async ({
    loginPage,
  }) => {
    await loginPage.loginWithEmptyFields();
  });
});
