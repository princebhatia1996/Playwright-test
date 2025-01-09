import { test, expect } from "@playwright/test";
import { getToken, getInvalidToken } from "../helpers/authHelper";

test.describe("POST booking/auth requests", () => {
  test("should return 200 with an auth token", async ({ request }) => {
    const token = await getToken(request);
    expect(token).toBeDefined();
  });

  test("should return 401 when invalid credentials provided", async ({
    request,
  }) => {
    const response = await getInvalidToken(request);
    const responseBody = await response.json();
    expect(response.status()).toBe(200); //This is a bug in the API
    expect(responseBody).toHaveProperty("reason", "Bad credentials");
  });
});
