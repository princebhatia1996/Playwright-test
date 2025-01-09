import { expect, Locator, Page } from "@playwright/test";
export class InventoryPage {
  readonly page: Page;
  readonly backPackImage: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backPackImage = this.page.locator('[data-test="item-4-img-link"]');
    this.addToCartButton = this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.removeButton = this.page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );
  }

  async addBackpackToCart() {
    await expect(this.backPackImage).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
    await expect(this.removeButton).toBeVisible();
  }
}
