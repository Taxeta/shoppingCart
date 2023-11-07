interface UiContextStructure {
  quantities: { [itemId: number]: number };
  updateQuantity: (itemId: number, quantity: number) => void;
}
