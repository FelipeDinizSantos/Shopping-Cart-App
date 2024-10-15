import React from "react";
import "./CartButton.scss";

import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {


  return(
    <button className="cart-button">
      <AiOutlineShoppingCart />
      <span className="cart-status">1</span>
    </button>
  )
}

export default CartButton;