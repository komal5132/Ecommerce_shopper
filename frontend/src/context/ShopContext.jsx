import { createContext, useState } from "react";
import all_products from "../Assets/Frontend_Assets/all_product.js";
import data_product from "../components/assets/data.js";

export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const AddToCart = (id) => {
    const product = all_products.find((item) => item.id === id);
    if (!product) {
      console.log("error, product not found");
      return;
    }
    const productExists = cart.find((item) => item.id === id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (id) => {
    const product = all_products.find((item) => item.id === id);
    if (!product) {
      console.log("error, product not found");
      return;
    }
    const productExists = cart.find((item) => item.id === id);
    if (productExists.quantity==1) {
     setCart(cart.filter((item)=>item.id!==id))
    }
    else{
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };  

  const contextValue = {
    all_products,
    data_product,
    cart,
    setCart,
    AddToCart,
    removeProduct
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
