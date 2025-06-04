import React, { useState } from 'react';
import BBIcon from "../Navbar/bharatbitIcon.png";
import "./UserStyle.css";
import {Link} from "react-router-dom";

export default function Signup() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, changeMessage] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const createUser = () => {
    if (userName === "" && email === "" && password === "") {
      changeMessage("enter username and password");
    } else if (userName === "") {
      changeMessage("enter username");
    } else if (email === "") {
      changeMessage("enter email");
    } else if (password === "") {
      changeMessage("enter password");
    } else if (confirmPassword === "") {
      changeMessage("enter confirm password");
    } else {
      if (confirmPassword !== password) {
        changeMessage("password does't match");
      }
    }
  }

  return (
    <div className="nameandlogosignup">

      <div className="logoandtagline">
        <img src={BBIcon} />
        <h1>BharatBit</h1>
        <p>Trade Kar Befikar, <br /> Kyoki Crypto wallet hai idhar !!!</p>

      </div>


      <div className="name">
        <h1>Create Account</h1>
        <div className="signup">
          <input type="text" placeholder="username" onChange={handleUserName} value={userName} />
          <input type="email" placeholder="email" onChange={handleEmail} value={email} />
          <input type="password" placeholder="password" onChange={handlePassword} value={password} />
          <input type="password" placeholder="confirm password" onChange={handleConfirmPassword} value={confirmPassword} />
        </div>

        <p >{message}</p>

        <button onClick={createUser}>Create Account</button>

        <p> Already have an account, <Link to="/login">Login here</Link> </p>

      </div>
    </div>
  )
}
