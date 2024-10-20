import React, { useContext } from "react";
import "./CartButton.scss";

import { AiOutlineShoppingCart } from "react-icons/ai";
import AppContext from "../../context/AppContext";

const CartButton = () => {

  const {cartItems, setIsCartVisible, isCartVisible} = useContext(AppContext);

  return(
    <button className="cart-button" onClick={
      () => setIsCartVisible(!isCartVisible)
    }>
      <AiOutlineShoppingCart />

      {
        cartItems.length > 0 &&
        <span className="cart-status">{cartItems.length}</span>
      }

    </button>
  )
}

export default CartButton;