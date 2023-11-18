import { http, HttpResponse } from "msw";
import { phoneMock } from "./phoneMock";

export const handlers = [
  http.get(`https://phone-api-55ce.onrender.com/phones`, () => {
    return HttpResponse.json([phoneMock]);
  }),
];

export const errorHandlers = [
  http.get(`https://phone-api-55ce.onrender.com/phones`, () => {
    return HttpResponse.json(
      { error: "Can't recieve the phone" },
      { status: 404 },
    );
  }),
];
