import { LoginPage } from "../pom/login";
import { InventoryPage } from "../pom/inventory";
import { CartPage } from "../pom/cart";
import { CheckoutPage } from "../pom/checkout";
import { test as baseTest } from "@playwright/test";

const test = baseTest.extend<{
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});
export default test;
