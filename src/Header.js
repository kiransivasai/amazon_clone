import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* Search Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionBasketIcon" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
