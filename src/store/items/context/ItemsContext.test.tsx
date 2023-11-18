import { render } from "@testing-library/react";
import { phoneMock } from "../../../mocks/phoneMock";
import loadItems from "./ItemsContextProvider";
import { BrowserRouter } from "react-router-dom";
import ItemsContext from "./ItemsContext";
import ItemsContextStructure from "./types";
import { Item } from "../../../types";

describe("Given a ItemsContext provider", () => {
  describe("When it receives a loadItems function and items", () => {
    test("Then it should show a new context with the items", async () => {
      const getItemsApiMock = vi.fn<Item[]>(async () => phoneMock);

      const partialContext: Partial<ItemsContextStructure> = {
        items: phoneMock,
        loadItems: getItemsApiMock,
      };

      render(
        <BrowserRouter>
          <ItemsContext.Provider
            value={partialContext as ItemsContextStructure}
          ></ItemsContext.Provider>
        </BrowserRouter>,
      );

      const phones = await loadItems(getItemsApiMock as any);

      expect(phones).toHaveBeenCalled();
    });
  });
});
