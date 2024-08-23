import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import whatsappLogo from "../assets/whatsapp_icon.png"
import instaLogo from "../assets/instagram_icon.png"
import pintester_logo from "../assets/pintester_icon.png"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>SHOPPER</h1>
      </div>
      <ul className="footerList">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="appList">
        <img src={instaLogo} alt="" />
        <img src={pintester_logo} alt="" />
        <img src={whatsappLogo} alt="" />
      </ul>
      <hr />
      <p>Copyright@2023-All Right Reserved</p>
    </div>
  );
};

export default Footer;
