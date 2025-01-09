import { expect, Locator, Page } from "@playwright/test";
export class CheckoutPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;
  readonly finishButton: Locator;
  readonly OrderCompleteText: Locator;
  readonly backHomeButton: Locator;
  readonly OrderCompleteSubText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
    this.firstName = this.page.locator('[data-test="firstName"]');
    this.lastName = this.page.locator('[data-test="lastName"]');
    this.zipCode = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.errorMessage = this.page
      .locator('[data-test="checkout-info-container"] div')
      .filter({ hasText: "Error: First Name is required" })
      .nth(2);
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.OrderCompleteText = this.page.locator('[data-test="complete-header"]');
    this.backHomeButton = this.page.locator('[data-test="back-to-products"]');
    this.OrderCompleteSubText = this.page.locator(
      '[data-test="complete-text"]'
    );
  }

  async checkoutWithNoDetails() {
    await this.checkoutButton.click();
    await expect(this.firstName).toBeVisible();
    await expect(this.lastName).toBeVisible();
    await expect(this.zipCode).toBeVisible();
    await this.continueButton.click();
    await expect(this.errorMessage).toBeVisible();
  }
  async checkoutWithEmptyCart() {
    await this.checkoutButton.click();
    await expect(this.firstName).toBeVisible();
    await expect(this.lastName).toBeVisible();
    await expect(this.zipCode).toBeVisible();
    await this.firstName.fill("John");
    await this.lastName.fill("Doe");
    await this.zipCode.fill("12345");
    await this.continueButton.click();
  }
  async checkOutComplete() {
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
    await expect(this.OrderCompleteText).toBeVisible();
    await expect(this.backHomeButton).toBeVisible();
    await expect(this.OrderCompleteSubText).toBeVisible();
  }
}
