import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UI/css/header.css";
import { logout } from "../utils/auth";

const DashboardNavigation = ({ isClicked }) => {
  return (
    <div className="navigation">
      <ul className={isClicked ? "navUl-active" : "navUl"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavigation;
