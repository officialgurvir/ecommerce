import React from "react";
import Image from "next/image";
import styles from "../styles/product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { add_product } from "../redux/slices/cart";

export default function Product({ hotDeals }) {
	const [oldPrice, setOldPrice] = React.useState(250);
	const [newPrice, setNewPrice] = React.useState(50);
	const [link, setLink] = React.useState("#");

	React.useEffect(function () {
		setNewPrice(Math.round(Math.random() * (100 - 75)) + 75);
		setOldPrice(Math.round((Math.random() * (250 - 150)) + 150));
		setLink(v4());
	}, []);

	const dispatch = useDispatch();
	const addProduct = () => dispatch(add_product({
		id: link,
	}))

	return (
		<div className={styles["product-card"]}>
			{hotDeals && <div className={styles["badge"]}>Hot Deal</div>}
			<div className={styles["product-tumb"]}>
				<Image src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/9154/1655441194954/front-left-side-47.jpg?tr=w-375" width={380} height={300} />
			</div>
			<div className={styles["product-details"]}>
				<span className={styles["product-catagory"]}>Category</span>
				<h4><Link href={"/product/" + link}>Product Title</Link></h4>
				<p>Lorem ipsum dolor sit		 amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
				<div className={styles["product-bottom-details"]}>
					<div className={styles["product-price"]}><small>${oldPrice}</small>${newPrice}</div>
					<div className={styles["product-links"]}>
						<a href="#" onClick={e => e.preventDefault()}><FontAwesomeIcon className={styles.heart} icon={faHeart} /></a>
						<a href="#" onClick={e => e.preventDefault()}><FontAwesomeIcon icon={faShoppingBag} onClick={addProduct} /></a>
					</div>
				</div>
			</div>
		</div>
	);
}