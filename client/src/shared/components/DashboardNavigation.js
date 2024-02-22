import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../UI/css/header.css";
import { logout } from "../utils/auth";

const DashboardNavigation = ({ isClicked, setIsClicked }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isClicked && !e.target.closest(".navUl")) {
        setIsClicked(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isClicked, setIsClicked]);

  return (
    <div className="navigation">
      <ul className={isClicked ? "navUl-active" : "navUl"}>
        <li>
          <Link className="a" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="a" to="/" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavigation;
