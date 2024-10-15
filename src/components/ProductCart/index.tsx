import React from "react";
import "./ProductCard.scss";
import { BsFillCartPlusFill } from "react-icons/bs";
import formatCurrency from "../../utils/formatCurrency";

interface ProductCardProps {
    data: {
        price: number,
        title: string,
        thumbnail: string,
    }
}

const ProductCard = ({data} : ProductCardProps) => {
  return(
    <section className="product-card">

        <img 
            src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
            className="card-image" />

        <div className="card-infos">
            <h2 className="card-price">{formatCurrency(data.price, 'BRL')}</h2>
            <h2 className="card-title">{data.title}</h2>
        </div>

        <button type="button" className="button-add-cart">
            <BsFillCartPlusFill />
        </button>

    </section>
  )
}

export default ProductCard;