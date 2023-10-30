import { Item } from "../../../types";

interface ItemsContextStructure {
  items: Item[];
  loadItems: () => Promise<void>;
}

export default ItemsContextStructure;
