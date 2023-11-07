import { PropsWithChildren, useState, useCallback, useMemo } from "react";
import UiContext from "./UiContext";

const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = useCallback((itemId: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  }, []);

  const contextValue = useMemo(
    () => ({
      quantities,
      updateQuantity,
    }),
    [quantities, updateQuantity],
  );

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
