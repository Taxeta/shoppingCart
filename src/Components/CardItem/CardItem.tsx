import { Item } from "../../types";
import "./CardItem.css";

interface ItemCardProps {
  item: Item;
}

const CardItem = ({ item }: ItemCardProps): React.ReactElement => {
  return (
    <article className="item-card">
      <img
        className="item__image"
        src={item.image}
        alt={item.name}
        width={58}
        height={58}
      />
      <ul className="item__text-container">
        <li className="item__title">{item.name}</li>
        <li className="item__price">{item.price} €</li>
      </ul>
    </article>
  );
};

export default CardItem;
