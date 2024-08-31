import React, { useContext, useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { shopContext } from "../../context/ShopContext";
import {useNavigate } from "react-router-dom";

const LogInSignUp = () => {
  const navigate=useNavigate()
  const { setToken } = useContext(shopContext);
  const url = "http://127.0.0.1:5000";
  const [currentState, setCurrentState] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cartdata:{}
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newUrl = `${url}/api/user/${
      currentState === "login" ? "login" : "register"
    }`;

    try {
      const response = await axios.post(newUrl, data);
      console.log(response.data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        alert("user updated");
      }
      else{
        alert("user not identified")
      }

      setData({
        name: "",
        email: "",
        password: "",
        cartdata:{}
      });
      navigate('/')
    } catch (error) {
      console.log(error);
      alert("problem");
    }
  };

  return (
    <div className="login">
      <form className="LogInSignUp" onSubmit={handleSubmit}>
       <h1>{currentState==="login"?"login":"sign up"}</h1>
        <div className="input-div">
          {currentState === "signup" && (
            <input
              onChange={handleChange}
              name="name"
              value={data.name}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            onChange={handleChange}
            name="email"
            value={data.email}
            type="email"
            placeholder="Email adress"
          />
          <input
            onChange={handleChange}
            name="password"
            value={data.password}
            type="password"
            placeholder="password"
          />
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </div>
        <div className="login-info">
          <div className="already-account">
            <p>
              Already have an account?
              <span
                onClick={() =>
                  setCurrentState(currentState === "login" ? "signup" : "login")
                }
              >
                {currentState === "signup" ? "Login here" : "sign up"}
              </span>
            </p>
          </div>
          <div className="policy">
            <input type="checkbox" name="" id="" />
            <p>
              {" "}
              By continuing , I agree to the terms of use & privacy policy .
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogInSignUp;
