import { Item } from "../../../types";

interface ItemsContextStructure {
  items: Item[];
  loadItems: () => Promise<void>;
  getItemById: (itemId: number) => Promise<Item>;
  togglePropertyIsSelected: (
    itemId: number,
    isSelected: boolean,
  ) => Promise<void>;
  resetAllItems: () => Promise<void>;
}

export default ItemsContextStructure;
