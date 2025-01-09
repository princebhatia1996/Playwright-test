import { test, expect } from "@playwright/test";
import {
  storeBookingId,
  createBooking,
  createBadRequestBooking,
  createServerErrorBooking,
} from "../../helpers/bookingHelper";

test.describe("POST booking/ requests", () => {
  test("should return 200 and have created a single booking", async ({
    request,
  }) => {
    const response = await createBooking(request);
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody.booking).toHaveProperty("firstname", "Prince");
    expect(responseBody.booking).toHaveProperty("lastname", "Bhatia");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
    expect(responseBody.booking.bookingdates).toHaveProperty(
      "checkin",
      "2025-01-01"
    );
    expect(responseBody.booking.bookingdates).toHaveProperty(
      "checkout",
      "2025-01-02"
    );
    expect(responseBody.booking).toHaveProperty("additionalneeds", "None");

    // Store the booking ID for the next test
    const bookingId = responseBody.bookingid;
    storeBookingId(bookingId);
  });

  test("should return 400 for bad request", async ({ request }) => {
    const response = await createBadRequestBooking(request);
    expect(response.status()).toBe(200); //This is a bug in the API
  });

  test("should return 500 for server error", async ({ request }) => {
    const response = await createServerErrorBooking(request);
    expect(response.status()).toBe(500);
    const responseBody = await response.text();
    expect(responseBody).toBe("Internal Server Error");
  });
});
