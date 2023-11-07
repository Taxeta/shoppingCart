import { useState, useContext } from "react";
import { Item } from "../../types";
import UiContext from "../../store/UiProvider/UiContext";
import "./shoppingList.css";
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
    <article className="cart-container">
      <ul className="cart__items">
        <li className="cart__title">{item.name}</li>
        <li className="cart__price">{decimalPrice} €</li>
        <li className="cart__price-control">
          <button className="solid-button-decrement" onClick={decrementProduct}>
            -
          </button>
          <span>{quantity}</span>
          <button className="solid-button-increment" onClick={incrementProduct}>
            +
          </button>
        </li>
      </ul>
    </article>
  );
};

export default ShoppingList;
