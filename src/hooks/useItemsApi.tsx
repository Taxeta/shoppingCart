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

  return { getItemsApi };
};

export default useItemsApi;
