import { ProductType } from "../components/Products/types";

const fetchProducts = async (query:string):Promise<ProductType[]> => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();

    const products:ProductType[] = data.results;

    return products;
};

export default fetchProducts;