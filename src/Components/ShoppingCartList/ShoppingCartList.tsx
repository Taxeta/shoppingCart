import { useContext, useState } from "react";
import ItemsContext from "../../store/items/context/ItemsContext";
import ShoppingList from "../ShoppingList/ShoppingList";
import paperbin from "../../assets/paperbin.svg";
import UiContext from "../../store/UiProvider/UiContext";
import Feedback from "../Feedback/Feedback";
import "./ShoppingCartList.css";

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

  const comasPrice = decimalPrice.replace(/\./g, ",");

  const totalItemsCart = items
    .filter((item) => item.isSelected)
    .reduce((total, item) => {
      const quantity = quantities[item.id] || 1;
      return total + quantity;
    }, 0);

  const handleClickBuyFeedback = () => {
    setShowToast("Succefully buyed!");

    resetAllItems();

    setTimeout(() => {
      setShowToast("");
    }, 4000);
  };

  const handleClickCleanCart = () => {
    setShowToast("Cart successfully deleted!");

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
        {priceSelectedItems.length > 0 && (
          <>
            <button className="cart-delete" onClick={handleClickCleanCart}>
              <img
                src={paperbin}
                alt="delete icon"
                width="30px"
                height="30px"
              />
            </button>
            {sortedSelectedItems.map((item) =>
              item.isSelected ? (
                <li key={item.id}>{<ShoppingList item={item} />}</li>
              ) : null,
            )}
            <span>Total cart: {totalItemsCart}</span>
            <li className="cart__total-price">
              <span>TOTAL</span>
              <span>{comasPrice} €</span>
            </li>
          </>
        )}
        {priceSelectedItems.length !== 0 && (
          <button onClick={handleClickBuyFeedback} className="cart__buy-button">
            Buy All
          </button>
        )}
      </ul>
      {showToast && <Feedback message={showToast} />}
    </>
  );
};

export default ShoppingCartList;
