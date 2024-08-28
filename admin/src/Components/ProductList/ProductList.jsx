import React, { useState } from "react";
import "./ProductList.css";
import axios from "axios";
import { useEffect } from "react";
import cross_icon from "../../assets/assets/cross_icon.png";

const ProductList = () => {
  const port = "http://127.0.0.1:5000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.post(`${port}/api/shop/get`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      console.log("errror");
    }
  };

  const removeProduct=async(id)=>{
    try {
      const response=await axios.post(`${port}/api/shop/delete`,{id})
    if(response.data.success){
      alert("product deleted")
      fetchList()
    } 
    else{
      alert("product not deleted")
    }   
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="ProductList">
      <h1>All Products List</h1>
      <div className="product-list-div heading">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {list.map((ele, index) => {
          return (
            <div className="product-list-div product-div" key={index}>
              <img className="product-image" src={`${port}/images/${ele.image}`} alt="image" />
              <p>{ele.name}</p>
              <p>${ele.old_price}</p>
              <p>${ele.new_price}</p>
              <p>{ele.category}</p>
              <img onClick={()=>removeProduct(ele._id)} className="cross_icon" src={cross_icon} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
