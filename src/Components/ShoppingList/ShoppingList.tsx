import { useState, useContext } from "react";
import { Item } from "../../types";
import UiContext from "../../store/UiProvider/UiContext";

interface shoppCartItem {
  item: Item;
}

const ShoppingList = ({ item }: shoppCartItem): React.ReactElement => {
  const [quantity, setQuantity] = useState(1);
  const { updateQuantity } = useContext(UiContext);

  const incrementProduct = () => {
    if (quantity < 2) {
      setQuantity(quantity + 1);
      updateQuantity(item.id, quantity + 1);
    }
  };

  const decrementProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(item.id, quantity - 1);
    }
  };

  const decimalPrice = (item.price * quantity).toFixed(2);

  return (
    <article>
      <ul>
        <li>{item.name}</li>
        <li>{decimalPrice} €</li>
        <button onClick={decrementProduct}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementProduct}>+</button>
      </ul>
    </article>
  );
};

export default ShoppingList;
