import { test, expect } from "@playwright/test";
import { getStoredBookingId, getBooking } from "../../helpers/bookingHelper";

test.describe("GET booking/ requests", () => {
  test("should return 200 and retrieve the previously created booking", async ({
    request,
  }) => {
    const bookingId = getStoredBookingId();
    const response = await getBooking(request, bookingId);
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("firstname", "Prince");
    expect(responseBody).toHaveProperty("lastname", "Bhatia");
    expect(responseBody).toHaveProperty("totalprice", 111);
    expect(responseBody).toHaveProperty("depositpaid", true);
    expect(responseBody.bookingdates).toHaveProperty("checkin", "2025-01-01");
    expect(responseBody.bookingdates).toHaveProperty("checkout", "2025-01-02");
    expect(responseBody).toHaveProperty("additionalneeds", "None");
  });

  test("should return 404 for non-existent booking", async ({ request }) => {
    const response = await request.get(
      "https://restful-booker.herokuapp.com/booking/999999"
    );
    expect(response.status()).toBe(404);
  });
});
