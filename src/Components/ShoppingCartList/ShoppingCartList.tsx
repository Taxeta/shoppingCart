import { useContext, useState } from "react";
import ItemsContext from "../../store/items/context/ItemsContext";
import ShoppingList from "../ShoppingList/ShoppingList";
import UiContext from "../../store/UiProvider/UiContext";
import "./ShoppingCartList.css";
import Feedback from "../Feedback/Feedback";

const ShoppingCartList = (): React.ReactElement => {
  const { items } = useContext(ItemsContext);
  const { quantities } = useContext(UiContext);
  const [showToast, setShowToast] = useState("");
  const { resetAllItems } = useContext(ItemsContext);

  let itemPosition = 1;

  const priceSelectedItems = items.filter((item) => item.isSelected);

  const totalPrice = priceSelectedItems.reduce((accumulator, currentPrice) => {
    const quantity = quantities[currentPrice.id] || 1;
    return accumulator + currentPrice.price * quantity;
  }, 0);

  const decimalPrice = totalPrice.toFixed(2);

  const handleClickFeedback = () => {
    setShowToast("Succefully buyed!");

    resetAllItems();

    setTimeout(() => {
      setShowToast("");
    }, 4000);
  };

  return (
    <>
      <ul className="cart-list">
        {priceSelectedItems.length === 0 && (
          <span>Select phones on the left</span>
        )}
        {items.map((item) =>
          item.isSelected ? (
            <li key={item.id}>
              <span className="cart__item-position">{itemPosition++}.</span>
              {<ShoppingList item={item} />}
            </li>
          ) : null,
        )}
        {priceSelectedItems.length > 0 && (
          <li className="cart__total-price">
            <span>TOTAL</span>
            <span>{decimalPrice} €</span>
          </li>
        )}
        <button onClick={handleClickFeedback} className="cart__buy-button">
          Buy All
        </button>
      </ul>
      {showToast && <Feedback message={showToast} />}
    </>
  );
};

export default ShoppingCartList;
