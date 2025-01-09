import test from "../lib/base-test";
test.describe("swag labs checkout functionality - trying to checkout", () => {
  test("with an empty cart", async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.login("standard_user", "secret_sauce");
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
    await loginPage.login("standard_user", "secret_sauce");
    await inventoryPage.addBackpackToCart();
    await cartPage.viewCart();
    await cartPage.removeBackPackInCart();
    await checkoutPage.checkoutWithNoDetails();
  });
});
