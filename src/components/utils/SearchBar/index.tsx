import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.scss";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <form className="search-bar">
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