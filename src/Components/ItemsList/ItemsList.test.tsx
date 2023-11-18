import { BrowserRouter } from "react-router-dom";
import ItemsList from "./ItemsList";
import { render, screen } from "@testing-library/react";
import { phoneMock } from "../../mocks/phoneMock";
import ItemsContext from "../../store/items/context/ItemsContext";
import { Item } from "../../types";
import ItemsContextStructure from "../../store/items/context/types";

describe("Given a ItemsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with the alternative text 'Samsung Galaxy A70 6/128GB'", async () => {
      const getItemsApiMock = vi.fn<Item[]>(async () => phoneMock);

      const partialContext: Partial<ItemsContextStructure> = {
        items: phoneMock,
        loadItems: getItemsApiMock,
      };

      render(
        <BrowserRouter>
          <ItemsContext.Provider
            value={partialContext as ItemsContextStructure}
          >
            <ItemsList />
          </ItemsContext.Provider>
        </BrowserRouter>,
      );

      const phoneName = screen.getByAltText("Samsung Galaxy A70 6/128GB");
      expect(phoneName).toBeInTheDocument();
    });
  });
});
