import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../utils/userContext";

import OnlineStatus from "../utils/onlineStatus";

const Header = () => {
  const onlineStatus = OnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>Cart</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
