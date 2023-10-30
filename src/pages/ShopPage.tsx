import "./ShopPage.css";

const ShopPage = (): React.ReactElement => {
  return (
    <section className="page">
      <div className="page__leftSide">
        <h1>Here you can take an item to buy</h1>
      </div>
      <div className="page__rightSide">
        <h2>Here you can select how many items you want buy</h2>
      </div>
    </section>
  );
};

export default ShopPage;
