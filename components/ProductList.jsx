import styles from "../styles/product.list.module.css";

export default function ProductList({ children }) {
  return (
    <div className={styles.product__list}>
      {children}
    </div>
  );
}