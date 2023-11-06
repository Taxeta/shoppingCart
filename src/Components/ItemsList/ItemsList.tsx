import React, { useContext } from "react";
import ItemsContext from "../../store/items/context/ItemsContext";
import CardItem from "../CardItem/CardItem";
import "./ItemsList.css";

const ItemsList = (): React.ReactElement => {
  const { items, getItemById, togglePropertyIsSelected } =
    useContext(ItemsContext);

  const handlePhoneClick = async (itemId: number) => {
    try {
      const selectedPhone = await getItemById(itemId);
      if (selectedPhone) {
        togglePropertyIsSelected(itemId, !selectedPhone.isSelected);
        console.log(items);
      }
    } catch (error) {
      throw new Error("Can't selected item");
    }
  };

  return (
    <ul className="shop-items">
      {items.map((item) => (
        <li key={item.id} onClick={() => handlePhoneClick(item.id)}>
          <CardItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
