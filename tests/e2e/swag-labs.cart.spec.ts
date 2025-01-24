import test from "../lib/base-test";
import dotenv from "dotenv";

dotenv.config();
const { SWAG_LABS_USERNAME, SWAG_LABS_PASSWORD } = process.env;

if (!SWAG_LABS_USERNAME || !SWAG_LABS_PASSWORD) {
  throw new Error(
    "Missing required environment variables: SWAG_LABS_USERNAME and/or SWAG_LABS_PASSWORD"
  );
}

test.describe("swag labs checkout functionality - trying to checkout", () => {
  test("with an empty cart", async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.login(SWAG_LABS_USERNAME, SWAG_LABS_PASSWORD);
    await inventoryPage.addBackpackToCart();
    await cartPage.viewCart();
    await cartPage.removeBackPackInCart();
    await checkoutPage.checkoutWithEmptyCart();
    await checkoutPage.checkOutComplete();
  });
  test("with an empty cart and no details", async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.login(SWAG_LABS_USERNAME, SWAG_LABS_PASSWORD);
    await inventoryPage.addBackpackToCart();
    await cartPage.viewCart();
    await cartPage.removeBackPackInCart();
    await checkoutPage.checkoutWithNoDetails();
  });
});
