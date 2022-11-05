import styles from "../styles/home.body.module.css";
import Product from "./Product";
import ProductList from "./ProductList";

export default function HotDeals({notContainer}) {
  return (
    <section className={notContainer ? '' : styles.body}>
      <div>
        <h2>HOT DEALS</h2>
        <hr />
      </div>
      <ProductList>
        <Product hotDeals />
        <Product hotDeals />
        <Product hotDeals />
      </ProductList>
    </section>
  );
}