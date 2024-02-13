import React from "react";
import { Link } from "react-router-dom";
import "../UI/css/home.css";
import DropdownMenu from "../../Dashboard/AppBar/DropdownMenu";

const DashboardHeader = () => {
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
        </ul>
        <DropdownMenu />
      </div>
    </header>
  );
};

export default DashboardHeader;
