import React, { useContext } from "react";
import "./ShopCategory.css";
import { shopContext } from "../../context/ShopContext";
import dropDown from "../../components/assets/dropdown_icon.png"
import Item from "../../components/Item/Item";

const ShopCategory = (props) => {
  const { all_products ,url} = useContext(shopContext);
  console.log("check data",all_products)
  return (
    <div className="ShopCategory">
      <img className="bannerImage" src={props.banner} alt="" />
      <div className="shopCategory-full">
      <div className="shopategory-indexSort">
        <p><span>Showing 1-12</span> out of 36 products</p>
        <div className="shopCategory-sort">
          Sort by <img src={dropDown} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_products.map((item,i)=>{
          if(props.category==item.category){
            return <Item
            key={i}
            id={item.productId}
            name={item.name}
            image={`${url}/images/${item.image}`}
            new_price={item.new_price}
            old_price={item.old_price}
          />
          }
          else{
            return null
          }
        })}
      </div>
      <div className="loadMore-btn">
        <button>Explore more</button>
      </div>
      </div>
    </div>
  );
};

export default ShopCategory;
