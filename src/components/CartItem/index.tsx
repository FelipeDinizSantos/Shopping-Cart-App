import { BsCartDashFill } from "react-icons/bs";
import "./CartItem.scss";
import { ProductType } from "../../globalTypes";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const CartItem = ({ data }) => {

    const { id, price, thumbnail, title } = data;

    const { cartItems, setCartItems } = useContext(AppContext);

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    }

    return (
        <section className="cart-item">
            <img src={thumbnail} alt="imagem do produto" className="cart-item-image" />
            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

                <button type="button" className="button-remove-item" onClick={handleRemoveItem}>
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    )
}

export default CartItem;