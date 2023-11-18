import { MemoryRouter } from "react-router-dom";
import ItemsContextProvider from "../../store/items/context/ItemsContextProvider";
import App from "./App";
import { render, screen } from "@testing-library/react";
import paths from "../../paths/paths";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a title 'Click on the phone to add on the shopping cart!'", () => {
      const mainTitle = "Click on the phone to add on the shopping cart!";
      const pathHome = paths.phones;

      render(
        <MemoryRouter initialEntries={[pathHome]}>
          <ItemsContextProvider>
            <App />
          </ItemsContextProvider>
        </MemoryRouter>,
      );

      const pageTitle = screen.getByRole("heading", { name: mainTitle });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show a title 'Select how many phones you will buy!'", () => {
      const secondTitle = "Select how many phones you will buy!";
      const pathHome = paths.phones;

      render(
        <MemoryRouter initialEntries={[pathHome]}>
          <ItemsContextProvider>
            <App />
          </ItemsContextProvider>
        </MemoryRouter>,
      );

      const secondTitlePage = screen.getByRole("heading", {
        name: secondTitle,
      });

      expect(secondTitlePage).toBeInTheDocument();
    });
  });
});
