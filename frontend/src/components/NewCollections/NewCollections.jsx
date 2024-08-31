import React, { useContext } from "react";
import "./NewCollections.css";
import new_collections from "../assets/new_collections";
import Item from "../Item/Item";
import { shopContext } from "../../context/ShopContext";


const NewCollections = () => {
  const {new_collections,url}=useContext(shopContext)
  return (
    <section className="new-Collection-section">
      <div className="NewCollections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, i) => {
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
    </section>
  );
};

export default NewCollections;
