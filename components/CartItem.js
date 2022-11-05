import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={faRemove} />
      </td>
      <td>
        <Image
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/9154/1655441194954/front-left-side-47.jpg?tr=w-375"
          width={380}
          height={300}
          alt={"product"}
        />
      </td>
      <td>Product Title</td>
      <td>$100</td>
      <td>1.00</td>
      <td>$100</td>
    </tr>
  );
};

export default CartItem;
