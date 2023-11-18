import { setupServer } from "msw/node";
import { errorHandlers, handlers } from "./handlers";

export const server = setupServer(...handlers, ...errorHandlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
