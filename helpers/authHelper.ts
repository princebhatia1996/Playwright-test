import { request, APIRequestContext } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();
const { AUTH_USERNAME, AUTH_PASSWORD } = process.env;

export async function getToken(requestContext: APIRequestContext) {
  const response = await requestContext.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: AUTH_USERNAME,
        password: AUTH_PASSWORD,
      },
    }
  );
  return response;
}

export async function getInvalidToken(requestContext: APIRequestContext) {
  const response = await requestContext.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "test",
        password: AUTH_PASSWORD,
      },
    }
  );
  return response;
}
