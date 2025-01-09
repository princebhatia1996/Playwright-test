import { request, APIRequestContext } from "@playwright/test";

export async function getToken(requestContext: APIRequestContext) {
  const response = await requestContext.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: {
        username: "admin",
        password: "password123",
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
        password: "password123",
      },
    }
  );
  return response;
}
