import React from "react";
import { Link } from "react-router-dom";
import "../UI/css/home.css";

const Header = () => {
  return (
    <header>
      <h1>
        <i className="logo-icon"></i>
        <Link to="/" className="logo">
          Realtime Lecturing
        </Link>
      </h1>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign-Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
