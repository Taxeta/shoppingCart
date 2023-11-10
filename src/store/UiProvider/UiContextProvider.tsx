import { PropsWithChildren, useState, useCallback, useMemo } from "react";
import UiContext from "./UiContext";

const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [quantities, setQuantities] = useState({});
  const [selectItemsOrder, setSelectedItemsOrder] = useState<number[]>([]);

  const updateQuantity = useCallback((itemId: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  }, []);

  const updateSelectItemsOrder = useCallback((order: number[]) => {
    setSelectedItemsOrder(order);
  }, []);

  const contextValue = useMemo(
    () => ({
      quantities,
      updateQuantity,
      selectItemsOrder,
      updateSelectItemsOrder,
    }),
    [quantities, updateQuantity],
  );

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
