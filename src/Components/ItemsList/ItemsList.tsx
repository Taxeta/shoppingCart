import React, { useContext } from "react";
import ItemsContext from "../../store/items/context/ItemsContext";
import CardItem from "../CardItem/CardItem";

const ItemsList = (): React.ReactElement => {
  const { items } = useContext(ItemsContext);
  return (
    <>
      <ul className="shop-items">
        {items.map((item) => (
          <li key={item.id}>
            <CardItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemsList;
