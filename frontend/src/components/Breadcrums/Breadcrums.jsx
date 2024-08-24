import React from "react";
import "./Breadcrums.css";
import arrowIcon from "../assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="Breadcrums">
      <Link style={{ textDecoration: "none" }} to={"/"}>
        HOME{" "}
      </Link>
      <img src={arrowIcon} alt="" />
      <Link style={{ textDecoration: "none" }} to={"/"}>
        SHOP
      </Link>
      <img src={arrowIcon} alt="" />
      <Link style={{ textDecoration: "none" }} to={"/kid"}>
        {" "}
        {product.category}
      </Link>{" "}
      <img src={arrowIcon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
