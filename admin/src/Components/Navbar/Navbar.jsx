import React from "react";
import "./Navbar.css";
import navbar_logo from "../../assets/assets/nav-logo.svg";
import nav_profile from "../../assets/assets/nav-profile.svg";

const Navbar = () => {
  return (
    <>
    <div className="navbar-section">
      <div className="Navbar">
        <div className="nav-logo">
          <img src={navbar_logo} alt="" />
        </div>
        <div className="admin-profile">
          <img src={nav_profile} alt="" />
        </div>
      </div>
      <hr />
      </div>
    </>
  );
};

export default Navbar;
