import React from "react";
import "./Sidebar.css";
import product_cart from "../../assets/assets/Product_Cart.svg";
import product_list from "../../assets/assets/Product_list_icon.svg";

const Sidebar = ({ show, setShow }) => {
  return (
    <>
      <div className="sidebarsection">
        <div className="Sidebar">
          <div onClick={()=>setShow(true)} className="sidebar-btn add-product">
            <img src={product_cart} alt="" />
            <p>Add Product</p>
          </div>
          <div onClick={()=>setShow(false)} className="sidebar-btn product-list">
            <img src={product_list} alt="" />
            <p>Product List</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
