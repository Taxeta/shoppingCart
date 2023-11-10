import { useState, useContext } from "react";
import { Item } from "../../types";
import UiContext from "../../store/UiProvider/UiContext";
import paperbin from "../../assets/paperbin.svg";
import "./ShoppingList.css";
import ItemsContext from "../../store/items/context/ItemsContext";
interface shoppCartItem {
  item: Item;
}

const ShoppingList = ({ item }: shoppCartItem): React.ReactElement => {
  const [quantity, setQuantity] = useState(1);
  const { updateQuantity } = useContext(UiContext);
  const { togglePropertyIsSelected } = useContext(ItemsContext);

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

  const handleDeleteItem = () => {
    togglePropertyIsSelected(item.id, item.isSelected);
  };

  const decimalPrice = (item.price * quantity).toFixed(2);

  return (
    <article className="cart-container">
      <ul className="cart__items">
        <li className="cart__delete-icon">
          <button onClick={handleDeleteItem}>
            <img
              src={paperbin}
              alt="delete item icon"
              width="20px"
              height="20px"
            />
          </button>
        </li>
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
