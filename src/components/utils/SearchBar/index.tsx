import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.scss";
import fetchProducts from "../../../api/fetchProducts";
import AppContext from "../../../context/AppContext";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const {setProducts, setLoading} = useContext(AppContext);

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setLoading(true);
      const products = await fetchProducts(searchValue);

      setProducts(products);
      setLoading(false);
      setSearchValue('');
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="buscar produtos"
                className="search-input"
                onChange={(event)=>{
                    setSearchValue(event.target.value);
                }}
                value={searchValue}
                required
            />
            <button type="submit" className="search-button">
                <BsSearch />
            </button>
        </form>
    )
}

export default SearchBar;