import { createContext, useEffect, useState } from "react";
import data_product from "../components/assets/data.js";
import axios from "axios";

export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [all_products, setAll_products] = useState([]);
  const url = "http://127.0.0.1:5000";
  const [token, setToken] = useState("");

  const getAllProducts = async () => {
    const response = await axios.post(`${url}/api/shop/get`);
    if (response.data.success) {
      return setAll_products(response.data.data);
    }
    return all_products;
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const AddToCart = async (id) => {
    console.log("id to check==", id);
    const product = all_products.find((item) => item._id === id);
    if (!product) {
      return console.log("error, product not found");
    }
    const productExists = cart.find((item) => item._id === id);
    // if (!productExists) {
    //   return console.log("error, product not exists in the cart",cart);
    // }
    if (productExists) {
      setCart(
        cart.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      console.log("product is already in cart now this is updated")
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
      console.log("product added to cart")
    }

    if (token) {
      await axios.post(
        `${url}/api/cart/addProduct`,
        { id },
        { headers: { token } }
      );
      console.log("id which is passed to server",id)
    } 
  };

  const removeProduct = async (id) => {
    const product = all_products.find((item) => item.id === id);
    if (!product) {
      console.log("error, product not found");
      return;
    }
    const productExists = cart.find((item) => item.id === id);
    if (productExists.quantity == 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
    if (token) {
      await axios.post(
        `${url}/api/cart/removeProduct`,
        { id },
        { headers: { token } }
      );
    }
  };

  const showCart = async () => {
    if (token) {
      const response = await axios.post(`${url}/api/cart/fetchProduct`, {
        headers: { token },
      });
      if (response.data.success) {
        return setCart(response.data.data);
      }
    }
    return cart;
  };
  console.log(cart);

  const cartTotal = () => {
    let total = 0;
    for (const item of cart) {
      if (item.quantity > 0) {
        total += item.quantity * item.new_price;
      }
    }
    return total;
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token", token);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const contextValue = {
    data_product,
    cart,
    setCart,
    AddToCart,
    removeProduct,
    cartTotal,
    setToken,
    token,
    all_products,
    url,
    showCart,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
