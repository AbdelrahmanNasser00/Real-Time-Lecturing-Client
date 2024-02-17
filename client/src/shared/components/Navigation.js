import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UI/css/header.css";

const Navigation = ({ isClicked }) => {
  return (
    <div className="navigation">
      <ul className={isClicked ? "navUl-active" : "navUl"}>
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
  );
};

export default Navigation;
