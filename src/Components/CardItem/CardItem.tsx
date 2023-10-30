import { Item } from "../../types";

interface ItemCardProps {
  item: Item;
}

const CardItem = ({ item }: ItemCardProps): React.ReactElement => {
  return (
    <article className="item">
      <img src={item.image} alt={item.name} />
      <ul>
        <li>{item.name}</li>
        <li>{item.price} €</li>
      </ul>
    </article>
  );
};

export default CardItem;
