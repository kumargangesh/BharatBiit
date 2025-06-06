import React, { useState } from 'react';
import BBIcon from "../Navbar/bharatbitIcon.png";
import "./UserStyle.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(props) {

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, changeMessage] = useState("");
  const [show, setShow] = useState(0);

  const handleUserName = (event) => {
    setShow(0);
    changeMessage("");
    setUserName(event.target.value);
  }

  const handleEmail = (event) => {
    setShow(0);
    changeMessage("");
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setShow(0);
    changeMessage("");
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setShow(0);
    changeMessage("");
    setConfirmPassword(event.target.value);
  }

  const createUser = () => {
    if (userName === "" && email === "" && password === "") {
      setShow(1);
      changeMessage("enter username and password");
    } else if (userName === "") {
      setShow(1);
      changeMessage("enter username");
    } else if (email === "") {
      setShow(1);
      changeMessage("enter email");
    } else if (password === "") {
      setShow(1);
      changeMessage("enter password");
    } else if (confirmPassword === "") {
      setShow(1);
      changeMessage("enter confirm password");
    } else {
      if (confirmPassword !== password) {
        changeMessage("password does't match");
      }else{
        setShow(0);
        changeMessage("User created successfully");
        props.setEmail(email);
        props.setPassword(password);
        setTimeout(() => {
          navigate("/navbar/cryptos");
        }, 3000);
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

        <p style={{
          color : "red",
          visibility : show === 1 ? "visible" : "initial"
        }}>{message}</p>

        <button onClick={createUser}>Create Account</button>

        <p> Already have an account, <Link to="/login">Login here</Link> </p>

      </div>
    </div>
  )
}
