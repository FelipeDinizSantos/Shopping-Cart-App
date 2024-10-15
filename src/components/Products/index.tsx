import React, { useEffect, useState } from "react";
import "./Products.scss";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCart";

const Products = () => {
    const [products, setProducts] = useState([]);

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
                products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        data={{
                            title: product.title,
                            price: product.price,
                            thumbnail: product.thumbnail,
                        }}
                    />
                ))
           }
        </section>
    )
}

export default Products;