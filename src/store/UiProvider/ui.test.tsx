import { useContext } from "react";
import { phoneMock } from "../../mocks/phoneMock";
import UiContext from "./UiContext";
import { vi } from "vitest";

vi.mock("react", () => ({
  ...vi.importActual("react"),
  createContext: vi.fn(() => ({ Provider: vi.fn(), Consumer: vi.fn() })),
  useContext: vi.fn(() => ({ updateQuantity: vi.fn() })),
}));

describe("Given a UiContextProvider", () => {
  describe("When it's called with a updateQuantity function, initialState(1) and quantity + 1", () => {
    test("Then it should return a new state with quantity property value on 2", () => {
      const itemId = phoneMock[0].id;
      const initialQuantity = 1;

      const uiContextValue = useContext(UiContext);

      uiContextValue.updateQuantity(itemId, initialQuantity + 1);

      expect(uiContextValue.updateQuantity).toBeCalledWith(itemId, 2);
    });
  });
});
