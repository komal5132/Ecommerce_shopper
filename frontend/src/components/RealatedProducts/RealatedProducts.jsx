import React, { useContext } from "react";
import "./RealatedProducts.css";
import { shopContext } from "../../context/ShopContext";
import Item from "../Item/Item";

const RealatedProducts = () => {
  const { data_product } = useContext(shopContext);
  return (
    <div className="RealatedProducts">
      <div className="heading-realted">
        <h1>Related Products</h1>
        <hr />
      </div>
      <div className="rel-produts">
      {data_product.map((item, i) => {
        return (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        );
      })}
      </div>
    </div>
  );
};

export default RealatedProducts;
