import { useState, PropsWithChildren, useCallback, useMemo } from "react";
import { Item } from "../../../types";
import ItemsContext from "./ItemsContext";
import ItemsContextStructure from "./types";
import useItemsApi from "../../../hooks/useItemsApi";

const ItemsContextProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>([]);

  const { getItemsApi, getItemApiById, toggleItemSelected } = useItemsApi();

  const loadItems = useCallback(async () => {
    const apiItems = await getItemsApi();
    setItems([...apiItems]);
  }, [getItemsApi]);

  const getItemById = useCallback(
    async (itemId: number) => {
      const apiItem = await getItemApiById(itemId);
      return apiItem;
    },
    [getItemApiById],
  );

  const togglePropertyIsSelected = useCallback(
    async (itemId: number, isSelected: boolean) => {
      await toggleItemSelected(itemId, {
        isSelected,
      });

      const updatedItems = items.map((item) =>
        item.id === itemId ? { ...item, isSelected: !item.isSelected } : item,
      );

      setItems(updatedItems);
    },
    [toggleItemSelected, items],
  );

  const resetAllItems = useCallback(async () => {
    const restartItems = items.map((item) => {
      return toggleItemSelected(item.id, {
        isSelected: false,
      });
    });

    await Promise.all(restartItems);

    const updatedItems = items.map((item) => ({
      ...item,
      isSelected: false,
    }));
    setItems(updatedItems);
  }, [items, toggleItemSelected]);

  const itemsMemoValue = useMemo(
    (): ItemsContextStructure => ({
      items,
      loadItems,
      getItemById,
      togglePropertyIsSelected,
      resetAllItems,
    }),
    [items, loadItems, getItemById, togglePropertyIsSelected, resetAllItems],
  );

  return (
    <ItemsContext.Provider value={itemsMemoValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
