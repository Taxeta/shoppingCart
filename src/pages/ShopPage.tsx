import { useContext, useEffect } from "react";
import ItemsList from "../Components/ItemsList/ItemsList";
import ItemsContext from "../store/items/context/ItemsContext";
import ShoppingCartList from "../Components/ShoppingCartList/ShoppingCartList";
import "./ShopPage.css";

const ShopPage = (): React.ReactElement => {
  const { loadItems } = useContext(ItemsContext);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <section className="page">
      <div className="page__left-side">
        <h1 className="page__left-title">
          Click on the phone to add on the shopping cart!
        </h1>
        <ItemsList />
      </div>
      <div className="page__right-side">
        <h2 className="page__right-title">
          Select how many phones you will buy!
        </h2>
        <div className="shopping-cart-container">
          <ShoppingCartList />
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
