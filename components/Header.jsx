import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faAngleUp, faBars, faEnvelopeSquare, faHeart, faPhoneSquareAlt, faSearch, faShoppingBag, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { products } from "../redux/slices/cart";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";

const CartItems = dynamic(() => import("../components/CartItems"), { ssr: false });


export default function Header() {
  const cart_product_count = products()?.length;
  const [show, setShow] = React.useState(false);


  return (
    <header className={styles.header}>
      <div className={styles["header-content-top"]}>
        <div className={styles["content"]}>
          <span>
            <FontAwesomeIcon className={styles.fas} icon={faPhoneSquareAlt} />
            (00)0000-0000
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelopeSquare} className={styles.fas} />
            officialgurvir2007@gmail.com
          </span>
        </div>
      </div>
      <div className={styles["container"]}>
        <label className={styles["open-search"]} htmlFor="open-search">
          <input className={styles["input-open-search"]} id="open-search" type="checkbox" name="menu" />
          <div className={styles["search"]}>
            <button className={styles["button-search"]}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input type="text" placeholder="What are you looking for?" className={styles["input-search"]} />
          </div>
        </label>
        <nav className={styles["nav-content"]}>
          <ul className={styles["nav-content-list"]}>
            <li className={styles["nav-content-item account-login"]}>
              <label className={styles["open-menu-login-account"]} htmlFor="open-menu-login-account">
                <input className={styles["input-menu"]} id="open-menu-login-account" type="checkbox" name="menu" />
                <FontAwesomeIcon icon={faUserCircle} />
                <span className={styles["login-text"]}>Sign In</span>
              </label>
            </li>
            <li>
              <ul className={styles["login-list"]}>
                <li className={styles["login-list-item"]}><a href="#">My account</a></li>
                <li className={styles["login-list-item"]}><a href="#">Create account</a></li>
                <li className={styles["login-list-item"]}><a href="#">logout</a></li>
              </ul>
            </li>
            <li className={styles["nav-content-item"]}>
              <a className={styles["nav-content-link"]} data-items-count={"0"} href="#">
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
            <li className={styles["nav-content-item"]}>
              <a className={styles["nav-content-link"]} data-items-count={cart_product_count} href="#" onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faShoppingBag} />
                
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["nav-container"]}>
        <nav className={styles["all-category-nav"]}>
          <label className={styles["open-menu-all"]} htmlFor="open-menu-all">
            <input className={styles["input-menu-all"]} id="open-menu-all" type="checkbox" name="menu-open" />
            <span className={styles["all-navigator"]}>
              <FontAwesomeIcon icon={faBars} />
              <span>All category</span>
              <FontAwesomeIcon icon={faAngleDown} className={styles["down-svg"]} />
              <FontAwesomeIcon icon={faAngleUp} className={styles["up-svg"]} />
            </span>
            <ul className={styles["all-category-list"]}>
              <li className={styles["all-category-list-item"]}><a href="#" className={styles["all-category-list-link"]}>Smartphones
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
                <div className={styles["category-second-list"]}>
                  <ul className={styles["category-second-list-ul"]}>
                    <li className={styles["category-second-item"]}><a href="#">Iphone 10</a></li>
                    <li className={styles["category-second-item"]}><a href="#">Galaxy Note 10</a></li>
                    <li className={styles["category-second-item"]}><a href="#">Motorola One </a></li>
                    <li className={styles["category-second-item"]}><a href="#">Galaxy A80 </a></li>
                    <li className={styles["category-second-item"]}><a href="#">Galaxy M </a></li>
                    <li className={styles["category-second-item"]}><a href="#">Huaway P30 </a></li>
                  </ul>
                  <div className={styles["img-product-menu"]}><Image src="https://i.ibb.co/Vvndkmy/banner.jpg" /></div>
                </div>
              </li>
              <li className={styles["all-category-list-item"]}><a href="#" className={styles["all-category-list-link"]}>Furniture
                <FontAwesomeIcon icon={faAngleRight} />
              </a></li>
              <li className={styles["all-category-list-item"]}><a href="#" className={styles["all-category-list-link"]}>Toys
                <FontAwesomeIcon icon={faAngleRight} />
              </a></li>
              <li className={styles["all-category-list-item"]}><a href="#" className={styles["all-category-list-link"]}>Computing
                <FontAwesomeIcon icon={faAngleRight} />
              </a></li>
              <li className={styles["all-category-list-item"]}><a href="#" className={styles["all-category-list-link"]}>Games
                <FontAwesomeIcon icon={faAngleRight} />
              </a></li>
              <li className={styles["all-category-list-item"]}><a href="" className={styles["all-category-list-link"]}>Automotive
                <FontAwesomeIcon icon={faAngleRight} />
              </a></li>
            </ul>
          </label>
        </nav>
        <nav className={styles["featured-category"]}>
          <ul className={styles["nav-row"]}>
            <li className={styles["nav-row-list"]}><a href="#" className={styles["nav-row-list-link"]}>Smartphones</a></li>
            <li className={styles["nav-row-list"]}><a href="#" className={styles["nav-row-list-link"]}>furniture</a></li>
            <li className={styles["nav-row-list"]}><a href="#" className={styles["nav-row-list-link"]}>Toys</a></li>
            <li className={styles["nav-row-list"]}><a href="#" className={styles["nav-row-list-link"]}>Computing</a></li>
            <li className={styles["nav-row-list"]}><a href="#" className={styles["nav-row-list-link"]}>Games</a></li>
            <li className={styles["nav-row-list"]}><a href="#" className={styles["nav-row-list-link"]}>Automotive</a></li>
          </ul>
        </nav>
      </div>
      <CartItems show={show} setShow={setShow} />

    </header >
  );
}