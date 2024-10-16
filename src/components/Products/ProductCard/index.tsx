import React from "react";

import "./ProductCard.scss";
import { BsFillCartPlusFill } from "react-icons/bs";
import formatCurrency from "../../../utils/formatCurrency";
import { ProductType } from "../types";

const ProductCard = ({title, price, thumbnail}: ProductType) => {
    return (
        <section className="product-card">

            <img
                src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                className="card-image"
            />

            <div className="card-infos">
                <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
                <h2 className="card-title">{title}</h2>
            </div>

            <button type="button" className="button-add-cart">
                <BsFillCartPlusFill />
            </button>

        </section>
    )
}

export default ProductCard;