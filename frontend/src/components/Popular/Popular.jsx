import React, { useContext } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { shopContext } from "../../context/ShopContext";

const Popular = () => {
  const {data,url}=useContext(shopContext)
  return (
    <div className="Popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.productId}
              name={item.name}
              image={`${url}/images/${item.image}`}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
