interface UiContextStructure {
  quantities: { [itemId: number]: number };
  updateQuantity: (itemId: number, quantity: number) => void;
  selectItemsOrder: number[];
  updateSelectItemsOrder: (order: number[]) => void;
}
