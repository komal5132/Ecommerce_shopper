import React, { useContext, useState,useEffect } from "react";
import "./CartDisplay.css";
import { shopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png"

const CartDisplay = (props) => {
  const { cart, setCart,removeProduct,showCart,url } = useContext(shopContext);
  useEffect(() => {
    showCart().then(data => {
      if (data) {
        setCart(data);
      }
    });
  }, []);
  return (
    <div className="CartDisplay">
      <div className="cart-display-parts upper-part">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cart.map((item, i) => {
        return <div className="cart-display-parts lower-part">
            <div className="cart-img" key={item.productId}>
                <img src={`${url}/images/${item.image}`} alt="" />
            </div>
            <div className="cart-description">
                <p>{item.name}</p>
            </div>
            <div className="price">${item.new_price}</div>
            <div className="quantity-div">{item.quantity}</div>
            <div className="total-div">${item.new_price*item.quantity}</div>
            <div onClick={()=>removeProduct(item.id)} className="remove-div"><img src={remove_icon} alt="" /></div>
        </div>;
      })}
      <hr />
    </div>
  );
};

export default CartDisplay;
