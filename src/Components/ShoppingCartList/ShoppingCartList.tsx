import { useContext } from "react";
import ItemsContext from "../../store/items/context/ItemsContext";
import ShoppingList from "../ShoppingList/ShoppingList";
import UiContext from "../../store/UiProvider/UiContext";

const ShoppingCartList = (): React.ReactElement => {
  const { items } = useContext(ItemsContext);
  const { quantities } = useContext(UiContext);

  let itemPosition = 1;

  const priceSelectedItems = items.filter((item) => item.isSelected);

  const totalPrice = priceSelectedItems.reduce((accumulator, currentPrice) => {
    const quantity = quantities[currentPrice.id] || 1;
    return accumulator + currentPrice.price * quantity;
  }, 0);

  const decimalPrice = totalPrice.toFixed(2);

  return (
    <>
      <ul>
        {priceSelectedItems.length === 0 && (
          <span>Select phones on the left</span>
        )}
        {items.map((item) =>
          item.isSelected ? (
            <li key={item.id}>
              <span>{itemPosition++}</span>
              {<ShoppingList item={item} />}
            </li>
          ) : null,
        )}
        {priceSelectedItems.length > 0 && (
          <li>
            <span>TOTAL</span>
            <span>{decimalPrice} €</span>
          </li>
        )}
      </ul>
    </>
  );
};

export default ShoppingCartList;
