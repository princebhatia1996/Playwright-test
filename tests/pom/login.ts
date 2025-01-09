import { expect, Locator, Page } from "@playwright/test";
export class LoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.locator('[data-test="username"]');
    this.password = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
    this.errorMessage = this.page.locator('[data-test="error"]');
  }

  async login(username: string, password: string) {
    await this.page.goto("/");
    await expect(this.userName).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async loginWithInvalidUsername() {
    await this.login("invalid_user", "secret_sauce");
    await expect(this.errorMessage).toBeVisible();
  }

  async loginWithInvalidPassword() {
    await this.login("standard_user", "invalid_password");
    await expect(this.errorMessage).toBeVisible();
  }

  async loginWithInvalidUsernameAndPassword() {
    await this.login("invalid_user", "invalid_password");
    await expect(this.errorMessage).toBeVisible();
  }

  async loginWithEmptyFields() {
    await this.login("", "");
    await expect(this.errorMessage).toBeVisible();
  }
}
