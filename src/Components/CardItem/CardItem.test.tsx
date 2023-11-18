import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ItemsContextProvider from "../../store/items/context/ItemsContextProvider";
import CardItem from "./CardItem";
import { phoneMock } from "../../mocks/phoneMock";

describe("Given a CardItem component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with alt text 'Samsung Galaxy A70 6/128GB'", () => {
      const altTextCard = "Samsung Galaxy A70 6/128GB";

      render(
        <BrowserRouter>
          <ItemsContextProvider>
            <CardItem item={phoneMock[0]} />
          </ItemsContextProvider>
        </BrowserRouter>,
      );

      const cardImage = screen.getByAltText(altTextCard);

      expect(cardImage).toBeInTheDocument();
    });

    test("Then it should show an image with name 'Apple iPhone 14 128GB'", () => {
      const name = "Apple iPhone 14 128GB";

      render(
        <BrowserRouter>
          <ItemsContextProvider>
            <CardItem item={phoneMock[1]} />
          </ItemsContextProvider>
        </BrowserRouter>,
      );

      const cardName = screen.getByText(name);

      expect(cardName).toBeInTheDocument();
    });
  });
});
