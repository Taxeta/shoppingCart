import { useCallback } from "react";
import { Item } from "../types";

const useItemsApi = () => {
  const apiUrl = `https://phone-api-55ce.onrender.com/phones`;

  const getItemsApi = useCallback(async () => {
    try {
      const apiItems = await fetch(apiUrl);
      const getItems = (await apiItems.json()) as Item[];

      return getItems;
    } catch (error) {
      throw new Error("Can't get items");
    }
  }, [apiUrl]);

  const getItemApiById = useCallback(
    async (itemId: number) => {
      try {
        const selectedItem = await fetch(`${apiUrl}/${itemId}`);
        const getItemId = (await selectedItem.json()) as Item;

        return getItemId;
      } catch (error) {
        throw new Error("Can't select the item");
      }
    },
    [apiUrl],
  );

  const toggleItemSelected = useCallback(
    async (itemId: number, selectedProperty: Partial<Item>) => {
      try {
        const changeProperty = await fetch(`${apiUrl}/${itemId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedProperty),
        });

        return changeProperty;
      } catch (error) {
        throw new Error("Can't change the property");
      }
    },
    [apiUrl],
  );
  return { getItemsApi, getItemApiById, toggleItemSelected };
};

export default useItemsApi;
