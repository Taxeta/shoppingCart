import { BrowserRouter } from "react-router-dom";
import ItemsContextProvider from "../store/items/context/ItemsContextProvider";
import useItemsApi from "./useItemsApi";
import { renderHook } from "@testing-library/react";
import { phoneMock } from "../mocks/phoneMock";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a function getItems from useItemsApi hook", () => {
  describe("When the function is called", () => {
    test("Then it should recieve a list of items", async () => {
      const wrapper = ({ children }: React.PropsWithChildren<{}>) => (
        <BrowserRouter>
          <ItemsContextProvider>{children}</ItemsContextProvider>
        </BrowserRouter>
      );

      const {
        result: {
          current: { getItemsApi },
        },
      } = renderHook(() => useItemsApi(), { wrapper });

      const items = await getItemsApi();
      expect(items).toStrictEqual([phoneMock]);
    });
  });
});
