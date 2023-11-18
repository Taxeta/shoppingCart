import { render, screen } from "@testing-library/react";
import ShopPage from "./ShopPage";
import { BrowserRouter } from "react-router-dom";
import ItemsContextProvider from "../store/items/context/ItemsContextProvider";

describe("Given a ShopPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a header like 'Click on the phone to add on the shopping cart!'", async () => {
      const leftHeader = "Click on the phone to add on the shopping cart!";
      render(
        <BrowserRouter>
          <ItemsContextProvider>
            <ShopPage />
          </ItemsContextProvider>
        </BrowserRouter>,
      );
      const leftTitle = await screen.getByRole("heading", {
        name: leftHeader,
      });

      expect(leftTitle).toBeInTheDocument();
    });

    test("Then it should show a header like 'Select how many phones you will buy!'", async () => {
      const rightHeader = "Select how many phones you will buy!";
      render(
        <BrowserRouter>
          <ItemsContextProvider>
            <ShopPage />
          </ItemsContextProvider>
        </BrowserRouter>,
      );
      const rightTitle = await screen.getByRole("heading", {
        name: rightHeader,
      });

      expect(rightTitle).toBeInTheDocument();
    });
  });
});
