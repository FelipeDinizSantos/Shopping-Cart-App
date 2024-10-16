import React, { useEffect, useState } from "react";

import "./Products.scss";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "./ProductCard";
import { ProductType } from "./types";

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetchProducts('iphone')
            .then((response) => {
                setProducts(response);
            });

        console.log(products);
    }, [])

    return (
        <section className="products container">
            {
                products.map(({title, thumbnail, price}:ProductType) => (
                    <ProductCard 
                        key={title} 
                        price={price}
                        title={title}
                        thumbnail={thumbnail}
                    />
                ))
           }
        </section>
    )
}

export default Products;