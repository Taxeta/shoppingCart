import { useContext, useState } from "react";
import ItemsContext from "../../store/items/context/ItemsContext";
import ShoppingList from "../ShoppingList/ShoppingList";
import UiContext from "../../store/UiProvider/UiContext";
import "./ShoppingCartList.css";
import Feedback from "../Feedback/Feedback";

const ShoppingCartList = (): React.ReactElement => {
  const { items, resetAllItems } = useContext(ItemsContext);
  const { quantities, selectItemsOrder } = useContext(UiContext);
  const [showToast, setShowToast] = useState("");

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

  const sortedSelectedItems = items.slice().sort((a, b) => {
    const indexA = selectItemsOrder.indexOf(a.id);
    const indexB = selectItemsOrder.indexOf(b.id);

    return indexA - indexB;
  });

  return (
    <>
      <ul className="cart-list">
        {priceSelectedItems.length === 0 && (
          <span className="cart__empty">
            Actually you have 0 phones on the Cart.
          </span>
        )}
        {sortedSelectedItems.map((item) =>
          item.isSelected ? (
            <li key={item.id}>{<ShoppingList item={item} />}</li>
          ) : null,
        )}
        {priceSelectedItems.length > 0 && (
          <li className="cart__total-price">
            <span>TOTAL</span>
            <span>{decimalPrice} €</span>
          </li>
        )}
        {priceSelectedItems.length !== 0 && (
          <button onClick={handleClickFeedback} className="cart__buy-button">
            Buy All
          </button>
        )}
      </ul>
      {showToast && <Feedback message={showToast} />}
    </>
  );
};

export default ShoppingCartList;
