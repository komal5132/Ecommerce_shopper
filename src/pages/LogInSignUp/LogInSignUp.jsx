import React, { useState } from "react";
import "./LoginSignup.css";

const LogInSignUp = () => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div className="login">
      <div className="LogInSignUp">
        {isLogin ? <h1>Sign Up</h1> : <h1>Login</h1>}
        <div className="input-div">
          {isLogin ? <input type="text" placeholder="Your Name" /> :<></> }          
          <input type="email" placeholder="Email adress" />
          <input type="password" placeholder="password" />
          <button className="continue-btn">Continue</button>
        </div>
        <div className="login-info">
          <div className="already-account">
            <p>
              Already have an account?<span onClick={()=>setLogin(!isLogin)}>{isLogin ? "Login here" : "sign up"}</span>
            </p>
          </div>
          <div className="policy">
            <input type="checkbox" name="" id="" />
           <p> By continuing , I agree to the terms of use & privacy policy .</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInSignUp;
