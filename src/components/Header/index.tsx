import React from "react";
import "./Header.scss";
import SearchBar from "../utils/SearchBar";
import CartButton from "../CartButton";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <SearchBar />
                <CartButton />
            </div>
        </header>
    );
}

export default Header;