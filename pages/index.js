import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import hero from "../styles/Home.Hero.module.css";
import styles from "../styles/home.body.module.css";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import HotDeals from "../components/HotDeals";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <article className={hero.article}>
        <div className={hero.text__container}>
          <span>
            <h2>
              <div>UP TO</div>60% OFF
            </h2>
            <p>
              Un-leash a world of possibilites with Samsung Galaxy S22 | S22+
            </p>
            <button>
              Shop Now{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </span>
        </div>
        <div className={hero.image__container}>
          <div className={hero.image__limit}>
            <Image
              src="http://localhost:3000/images/71HUnJvHsbL.__SL1500__.png"
              layout="fill"
              alt="hero-product"
            />
          </div>
        </div>
      </article>
      <HotDeals />      
      <article className={styles.body}>
        <div>
          <h2>BEST SELLING</h2>
          <hr />
        </div>
        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
      </article>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2022</p>
      </footer>
    </React.Fragment>
  );
}
