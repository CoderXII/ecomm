import React from "react";
import "./Header.css";
import "./Search.css";
import Logo from "../../Assets/xii-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Link } from "react-router-dom";
import {  Badge, MenuItem, Menu, IconButton } from "@material-ui/core"
import { useStateValue } from "../../StateProvider";


function Header() {
  
  const [{cart}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img className="header__logo" src={Logo} alt="website logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="header__option">
            <span className="header__optionLineOne"> Home </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne"> Music </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne"> Store </span>
        </div>
        <Link to="/contact" style ={{ textDecoration: "none" }}>
          <div className="header__option">
            <span className="header__optionLineOne"> Contact </span>
          </div>
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <div className="header__optionBasket">
            <div className="button" aria-aria-label="Show cart items" color="inherit">
              <Badge badgeContent={cart?.length} color="secondary">
                <LocalMallIcon />
              </Badge>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
