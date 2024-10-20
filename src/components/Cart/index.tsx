import { useContext } from "react";
import CartItem from "../CartItem";
import "./Cart.scss";
import AppContext from "../../context/AppContext";
import { ProductType } from "../../globalTypes";
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible?'active':''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem: ProductType) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>
      <div className="cart-resume">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  )
}

export default Cart; 