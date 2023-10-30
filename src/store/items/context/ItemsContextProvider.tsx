import { useState, PropsWithChildren, useCallback, useMemo } from "react";
import { Item } from "../../../types";
import ItemsContext from "./ItemsContext";
import ItemsContextStructure from "./types";
import useItemsApi from "../../../hooks/useItemsApi";

const ItemsContextProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>([]);

  const { getItemsApi } = useItemsApi();

  const loadItems = useCallback(async () => {
    const apiItems = await getItemsApi();
    setItems([...apiItems]);
  }, [getItemsApi]);

  const itemsMemoValue = useMemo(
    (): ItemsContextStructure => ({
      items,
      loadItems,
    }),
    [items, loadItems],
  );

  return (
    <ItemsContext.Provider value={itemsMemoValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
