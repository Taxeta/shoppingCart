import { Item } from "../../types";
import { useState, useEffect } from "react";
import "./CardItem.css";

interface ItemCardProps {
  item: Item;
}

const CardItem = ({ item }: ItemCardProps): React.ReactElement => {
  const [isSelected, setIsSelected] = useState(item.isSelected);

  useEffect(() => {
    setIsSelected(item.isSelected);
  }, [item.isSelected]);

  const decimalPrice = item.price.toFixed(2);

  return (
    <article
      className={isSelected ? "item-card-selected" : "item-card-unselected"}
    >
      <img
        className="item__image"
        src={item.image}
        alt={item.name}
        width={58}
        height={58}
      />
      <ul className="item__list-container">
        <li className="item__title">{item.name}</li>
        <li className="item__price">{decimalPrice} €</li>
      </ul>
    </article>
  );
};

export default CardItem;
