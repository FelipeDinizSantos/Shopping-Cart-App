import React, { useContext, useEffect, useState } from "react";
import "./Products.scss";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCart";
import { ProductType } from "../../globalTypes";
import Loading from "../Loading";
import AppContext from "../../context/AppContext";

const Products = () => {
    const {products, setProducts, loading, setLoading} = useContext(AppContext);

    useEffect(() => {
        fetchProducts('iphone')
            .then((response) => {
                setProducts(response);
                setLoading(false)
            });
    }, [])

    return (

        (
            loading ? <Loading /> :
                <section className="products container">
                    {
                        products.map((product: ProductType) => (
                            <ProductCard
                                key={product.id}
                                data={{
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                    thumbnail: product.thumbnail,
                                }}
                            />
                        ))
                    }
                </section>
        )
    )
}

export default Products;