import { useContext, useEffect } from "react";
import ItemsList from "../Components/ItemsList/ItemsList";
import ItemsContext from "../store/items/context/ItemsContext";
import "./ShopPage.css";

const ShopPage = (): React.ReactElement => {
  const { loadItems } = useContext(ItemsContext);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <section className="page">
      <div className="page__left-side">
        <h1>Here you can take an item to buy</h1>
        <ItemsList />
      </div>
      <div className="page__right-side">
        <h2>Here you can select how many items you want buy</h2>
      </div>
    </section>
  );
};

export default ShopPage;
