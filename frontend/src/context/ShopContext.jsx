import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [all_products, setAll_products] = useState([]);
  const [new_collections, setNew_collections] = useState([]);
  const [data_product, setData_product] = useState([]);
  const [data, setdata] = useState([]);
  const url = "http://127.0.0.1:5000";
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const getAllProducts = async () => {
    const response = await axios.post(`${url}/api/shop/get`);
    if (response.data.success) {
      setAll_products(response.data.data);
    }
  };

  const getAllNewCollections = async () => {
    const response = await axios.post(`${url}/api/shop/newCollection`);
    if (response.data.success) {
      setNew_collections(response.data.data);
    }
  };

  const getpopularInWomen = async () => {
    const response = await axios.post(`${url}/api/shop/popular`);
    if (response.data.success) {
      setdata(response.data.data);
    }
  };

  const getAllrelatedProducts = async () => {
    const response = await axios.post(`${url}/api/shop/related`);
    if (response.data.success) {
      setData_product(response.data.data);
    }
  };

  const showCart = async () => {
    if (token) {
      try {
        const response = await axios.post(
          `${url}/api/cart/fetchProduct`,
          {},
          { headers: { token } }
        );
        if (response.data.success) {
          const cartItems = Object.entries(response.data.data || {})
            // .filter(([itemId]) => itemId !== "undefined") // Filter out invalid itemIds
            .map(([itemId, quantity]) => {
              const product = all_products.find((item) => item._id === itemId);
              return product ? { ...product, quantity } : null;
            })
            .filter(item => item !== null);
  
          setCart(cartItems);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }
  };
  

  
  useEffect(() => {
    // Fetch initial data
    getAllProducts();
    getAllNewCollections();
    getpopularInWomen();
    getAllrelatedProducts();

    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    // Set token from localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      showCart();
    }
  }, [token, all_products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const AddToCart = async (id) => {
    const product = all_products.find((item) => item._id === id);
    if (!product) {
      return console.log("error, product not found");
    }
    const productExists = cart.find((item) => item._id === id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }

    if (token) {
      await axios.post(
        `${url}/api/cart/addProduct`,
        { itemId: id },
        { headers: { token } }
      );
    }
  };

  const removeProduct = async (id) => {
    const productExists = cart.find((item) => item._id === id);
    if (!productExists) {
      console.log("error, product not found in cart");
      return;
    }
    if (productExists.quantity === 1) {
      setCart(cart.filter((item) => item._id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
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

  const cartTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity * item.new_price;
    }, 0);
  };

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
    new_collections,
    data,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
