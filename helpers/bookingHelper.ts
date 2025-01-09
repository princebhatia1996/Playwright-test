import fs from "fs";
import path from "path";
import { request, APIRequestContext } from "@playwright/test";

const bookingIdFilePath = path.resolve(__dirname, "../bookingId.txt");

export function storeBookingId(bookingId: number) {
  fs.writeFileSync(bookingIdFilePath, bookingId.toString());
}

export function getStoredBookingId(): number | null {
  if (fs.existsSync(bookingIdFilePath)) {
    const bookingId = fs.readFileSync(bookingIdFilePath, "utf-8");
    return parseInt(bookingId, 10);
  }
  return null;
}

export async function createBooking(requestContext: APIRequestContext) {
  const response = await requestContext.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "Prince",
        lastname: "Bhatia",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2025-01-01",
          checkout: "2025-01-02",
        },
        additionalneeds: "None",
      },
    }
  );
  return response;
}

export async function getBooking(
  requestContext: APIRequestContext,
  bookingId: number | null
) {
  const response = await requestContext.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );
  return response;
}

export async function createBadRequestBooking(
  requestContext: APIRequestContext
) {
  const response = await requestContext.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "", // Invalid data to trigger a 400 Bad Request
        lastname: "",
        totalprice: -1, // Invalid price
        depositpaid: true,
        bookingdates: {
          checkin: "invalid-date", // Invalid date format
          checkout: "invalid-date",
        },
      },
    }
  );
  return response;
}

export async function createServerErrorBooking(
  requestContext: APIRequestContext
) {
  const response = await requestContext.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: "invalid data",
    }
  );
  return response;
}
