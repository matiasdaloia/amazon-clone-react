import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <Link className="router_links" to="/login">
          <div className="header__rightAccInfo">
            {user ? <p>{`Hello, ${user.email}`}</p> : <p>Hello,Sign In</p>}
            {/* <p>Hello, Matias</p>
            <p>
              <span>Account & Lists</span>
            </p> */}
          </div>
        </Link>
        <div className="header__rightOrders">
          <p>Returns</p>
          <p>
            <span>& Orders</span>
          </p>
        </div>
        <Link className="router_links" to="/checkout">
          <div className="header__rightCart">
            <ShoppingBasketIcon />
            <h2>{basket.length}</h2>
          </div>
        </Link>
        <div className="header__cartCount"></div>
      </div>
    </div>
  );
}

export default Header;
