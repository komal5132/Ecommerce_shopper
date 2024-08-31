import React, { useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import uplaod_image from "../../assets/assets/upload_area.svg";

const AddProduct = () => {
  const port = "http://127.0.0.1:5000";

  const [productData, setProductData] = useState({
    name: "",
    image: "",
    old_price: "",
    new_price: "",
    category: "",
  });
  
  const [imagePreview, setImagePreview] = useState(uplaod_image)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductData((prev) => ({ ...prev, [name]: value }));
  }; 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };


  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }

    const response = await axios.post(`${port}/api/shop/add`, formData);
    if (response.data.success) {
      alert("data updated");
    } else {
      alert("something went wrong");
    }
    setProductData({
      name: "",
      image: "",
      old_price: "",
      new_price: "",
      category: "",
    })
    setImagePreview(uplaod_image)
  };

  return (
    <div className="AddProduct">
      <h1>Upload Product Data</h1>
      <form onSubmit={handlesubmit}>
        <div className="addproduct-itemfield">
          <p>Product image</p>
          <label htmlFor="file-input">
            <img
              className="addproduct-thumbnail-img"
              src={imagePreview}
              alt="upload"
            />
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            name="image"
            id="file-input"
            accept="image/*"
            hidden
          />
        </div>
        <div className="titlediv form-div">
          <p>Product Title</p>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={productData.name}
          />
        </div>
        <div className="pricediv">
          <div className="oldPrice form-div">
            <p>Old Price</p>
            <input
              onChange={handleChange}
              type="text"
              name="old_price"
              value={productData.old_price}
              id=""
            />
          </div>
          <div className="newPrice form-div">
            <p>New Price</p>
            <input
              onChange={handleChange}
              type="text"
              name="new_price"
              value={productData.new_price}
              id=""
            />
          </div>
        </div>
        <div className="categorydiv form-div">
          <p>Product Category</p>
          <select
            onChange={handleChange}
            name="category"
            value={productData.category}
            id=""
          >
            <option value="select">select</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kid">kid</option>
          </select>
        </div>
        <button className="add-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
