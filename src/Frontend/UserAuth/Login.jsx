import React, { useState } from 'react';
import BBIcon from "../Navbar/bharatbitIcon.png";
import "./UserStyle.css";
import {Link} from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, changeMessage] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const createUser = () => {
    if (email === "" && password === "") {
      changeMessage("enter username and password");
    } else if (email === "") {
      changeMessage("enter email");
    } else if (password === "") {
      changeMessage("enter password");
    } else {
      
    }
  }

  return (
    <div className="nameandlogologin">

      <div className="name">
        <h1>Login</h1>
        <div className="signup">
          <input type="email" placeholder="email" onChange={handleEmail} value={email} />
          <input type="password" placeholder="password" onChange={handlePassword} value={password} />
        </div>

        <p >{message}</p>

        <button onClick={createUser}>Login</button>

        <p> Create account, <Link to="/signup">Create Account</Link> </p>

      </div>

      <div className="logoandtagline">
        <img src={BBIcon} />
        <h1>BharatBit</h1>
        <p>Trade Kar Befikar, <br /> Kyoki Crypto wallet hai idhar !!!</p>

      </div>
    </div>
  )
}
