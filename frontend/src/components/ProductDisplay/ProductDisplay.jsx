import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import stardull_icon from "../assets/star_dull_icon.png";
import { shopContext } from "../../context/ShopContext";

const ProductDisplay = (props) =>  {
  const {AddToCart,url}=useContext(shopContext)
  const handleClick=(id)=>{
    AddToCart(id)
    alert("product added to cart")
  }
  const { product } = props;  
  return (
    <section className="display">
      <div className="ProductDisplay">
        <div className="product-display-left">
          <div className="grp-images">
            <img src={`${url}/images/${product.image}`} alt="" />
            <img src={`${url}/images/${product.image}`} alt="" />
            <img src={`${url}/images/${product.image}`} alt="" />
            <img src={`${url}/images/${product.image}`} alt="" />
          </div>
          <div className="single-large-img">
            <img src={`${url}/images/${product.image}`} alt="" />
          </div>
        </div>
        <div className="product-display-right">
          <h1>{product.name}</h1>
          <div className="star-div">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={stardull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="price-div">
            <p className="old_price">${product.old_price}</p>
            <p className="new_price">${product.new_price}</p>
          </div>
          <div className="description">
            <p>
              A lightweight, usually khitted, pullover shirt,close fitting and a
              round neckline and short sleeves,worn as an undershirt or outer
              garment
            </p>
          </div>
          <div className="size-div">
            <h4>Select Size</h4>
            <div className="size-button-div">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
            <button className="add-to-cart-btn" onClick={()=>handleClick(product._id)}>ADD TO CART</button>
          </div>
          <div className="category-div">
            <p>
              <span>Category:</span>
              {product.category}
            </p>
            <p>
              <span>Tags:</span>Modern,Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
