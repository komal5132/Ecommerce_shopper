import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { IoIosArrowDropdown } from "react-icons/io";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { shopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { cart } = useContext(shopContext);
  const [menu, setMenu] = useState("shop");
  const navigate = useNavigate();

  const handleMenuChange = (event) => {
    const selectedValue = event.target.value;
    setMenu(selectedValue);

    switch (selectedValue) {
      case "shop":
        navigate("/");
        break;
      case "men":
        navigate("/men");
        break;
      case "women":
        navigate("/women");
        break;
      case "kid":
        navigate("/kid");
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div className="Navbar">
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <select
        name="menu"
        id="menu"
        value={menu}
        onChange={handleMenuChange}
        className="selection-menu active-select"
      >
        <option value="select category">select category</option>
        <option value="shop">shop</option>
        <option value="men">men</option>
        <option value="women">women</option>
        <option value="kid">kids</option>
      </select>
      <ul className="nav-menu active-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kid">
            Kids
          </Link>
          {menu === "kid" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("token") ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/loginsignup">
            <button>Login</button>
          </Link>
        )}

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cartIcon} alt="cart" />
        </Link>

        <div className="nav-cart-count">{cart.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
