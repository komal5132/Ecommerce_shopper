import React, { useState } from "react";
import "./Hero.css";
import ProductList from "../ProductList/ProductList";
import AddProduct from "../AddProduct/AddProduct";

const Hero = ({show}) => {  
  return <div className="Hero">{show ? <AddProduct /> : <ProductList />}</div>;
};

export default Hero;
