import { faRepeat, faShield, faStar, faStarHalfStroke, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import millify from "millify";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import HotDeals from "../../components/HotDeals";
import styles from "../../styles/home.body.module.css";
import React from "react";

export default function ProductDetails() {
  const { query: { id } } = useRouter();
  const [product, setProduct] = React.useState({
    rating: millify(20543),
    questions: millify(10000),
    o: 100,
    n: 80,
  });

  React.useEffect(function () {
    let rating = millify(Math.round(Math.random() * 99999));
    let questions = millify(Math.round(Math.random() * 49999));

    let n = Math.round(Math.random() * 49999)
    let o = Math.round(Math.random() * (69999 - 39999)) + 39999

    setProduct({
      rating, questions, o, n
    })
  }, [id]);

  return (
    <>
      <Header />
      <div className={styles.body}>
        <article className={styles.grid}>
          <div className={styles.grid__col}>
            <div className={styles.full}>
              <Image
                src="http://localhost:3000/images/71HUnJvHsbL.__SL1500__.png"
                layout="fill"
                alt="product"
              />
            </div>
            <div className={styles.flex}>
              <button className={styles.buy__now}>Buy Now</button>
              <button className={styles.add__to__basket}>Add To Basket</button>
            </div>
          </div>
          <div className={styles.grid__col}>
            <span>
              <h2>Samsung Galaxy S22+</h2>
              <p>By Samsung</p>
            </span>
            <span className={styles.rating}>
              <span>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </span>
              <span>{product.rating} Ratings | {product.questions}+ Answered Questions</span>
            </span>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>Price:</td>
                  <td>&nbsp;&nbsp;<stroke>₹{millify(product.o)}</stroke></td>
                </tr>
                <tr>
                  <td>Deal Price:</td>
                  <td>&nbsp;&nbsp;<strong>₹{millify(product.n)}</strong>&nbsp;Inclusive all taxes</td>
                </tr>
                <tr>
                  <td>You Save:</td>
                  <td>&nbsp;&nbsp;₹{millify(product.o - product.n)}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.flex} style={{ alignItems: "flex-start", marginTop: 20, marginBottom: 20, gap: "5em" }}>
              <div>
                <div>
                  <FontAwesomeIcon icon={faRepeat} />
                </div>
                <span>
                  10 Days <br /> Replacement
                </span>
              </div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faTruck} />
                </div>
                <span>
                  Free Delivery
                </span>
              </div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faShield} />
                </div>
                <span>1 Year Warrenty</span>
              </div>
            </div>
            <hr />
            <div className={styles.ft}>
              <div>
                <p>Delivery by Mar 29 - Apr 1</p>
                <p>Sold by <span className={styles.link}><a href="#">SamanJal Official</a></span></p>
              </div>
              <div>
                <h4>Colors</h4>
                <div>
                  <div style={{ backgroundColor: "#545bc4" }} className={styles.color}></div>
                  <div style={{ backgroundColor: "#545bc4" }} className={styles.color}></div>
                </div>
              </div>
              <div>
                <h4>Size</h4>
                <div>
                  <button>4GB RAM</button>
                  <button>6GB RAM</button>
                  <button>8GB RAM</button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article style={{ marginTop: 80, marginBottom: 80 }}>
          <h2>Product Description</h2>
          <hr style={{ marginBottom: 15, marginTop: -5 }} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam fuga dolor incidunt architecto natus, voluptas eveniet eaque sequi atque, tempora eum corrupti optio saepe explicabo voluptate aperiam ea tempore earum ut ratione. Cumque similique maxime quam dicta ex saepe ipsa recusandae. Quia consequatur vero dolorum modi incidunt quos voluptatem repudiandae corporis ipsa, iste dolores non sed veritatis, dolore sint esse provident, iure eos.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia modi temporibus ipsam deserunt facere. Esse voluptates molestias modi similique dolores nemo asperiores, eius molestiae eaque tempore voluptate ducimus sit quod obcaecati sapiente minus blanditiis hic debitis voluptas, illo dolorem, eos eum. Minus minima, natus in, eveniet nobis optio quidem numquam ullam explicabo reiciendis, dolore repudiandae voluptatibus odio.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae deserunt nihil delectus pariatur ipsa totam error excepturi corrupti odit! Error cupiditate aliquid beatae velit, illum atque deleniti quo voluptatem voluptas nisi facere facilis sapiente architecto molestiae repellendus perferendis ab laudantium voluptatum! Aliquid nisi laborum, cumque amet reiciendis dicta maiores fuga excepturi! Rem aliquid numquam velit, nisi, ex repudiandae obcaecati, voluptates a optio itaque tenetur unde iste? Aperiam, pariatur inventore!</p>
        </article>
        <HotDeals notContainer />
      </div>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2022</p>
      </footer>
    </>
  );
}