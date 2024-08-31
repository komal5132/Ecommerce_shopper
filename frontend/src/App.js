import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ShopCategory from "./pages/shopCategory/ShopCategory";
import Product from "./pages/Product/Product";
import LogInSignUp from "./pages/LogInSignUp/LogInSignUp";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";
import ShopContextProvider from "./context/ShopContext";

function App() {
  // const [category,setCategory]=useState("")
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route
              path="/men"
              element={<ShopCategory banner={men_banner} category="men" />}
            ></Route>
            <Route
              path="/women"
              element={<ShopCategory banner={women_banner} category="women" />}
            ></Route>
            <Route
              path="/kid"
              element={<ShopCategory banner={kids_banner} category="kid" />}
            ></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
            <Route path="/loginsignup" element={<LogInSignUp />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
