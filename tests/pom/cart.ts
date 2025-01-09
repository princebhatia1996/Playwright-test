import { expect, Locator, Page } from "@playwright/test";
export class CartPage {
  readonly page: Page;
  readonly ShoppingCart: Locator;
  readonly backPackLink: Locator;
  readonly removeItemButton: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ShoppingCart = this.page.locator('[data-test="shopping-cart-link"]');
    this.backPackLink = this.page.locator('[data-test="item-4-title-link"]');
    this.removeItemButton = this.page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
    this.continueShoppingButton = this.page.locator(
      '[data-test="continue-shopping"]'
    );
  }

  async viewCart() {
    await this.ShoppingCart.click();
    await expect(this.checkoutButton).toBeVisible();
    await expect(this.continueShoppingButton).toBeVisible();
  }

  async removeBackPackInCart() {
    await expect(this.backPackLink).toBeVisible();
    await expect(this.removeItemButton).toBeVisible();
    await this.removeItemButton.click();
    await expect(this.backPackLink).not.toBeVisible();
    await expect(this.removeItemButton).not.toBeVisible();
  }
}
