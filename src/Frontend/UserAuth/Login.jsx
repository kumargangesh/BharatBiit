import React, { useEffect, useState } from 'react';
import BBIcon from "../Navbar/bharatbitIcon.png";
import "./UserStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { getTradableAmount, userLogin, loadAllCryptos } from '../../Backend/FirebaseMethods';

export default function Login(props) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("gk@mail.com");
  const [password, setPassword] = useState("1234");
  const [message, changeMessage] = useState("");
  const [show, setShow] = useState(0);

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

  const loginUser = async () => {
    if (email === "" && password === "") {
      changeMessage("enter email and password");
      setShow(1);
    } else if (email === "") {
      changeMessage("enter email");
      setShow(1);
    } else if (password === "") {
      changeMessage("enter password");
      setShow(1);
    } else {
      props.setEmail(email);
      props.setPassword(password);
      setShow(1);

      const userMessage = await userLogin(email, password);

      changeMessage(userMessage);

      // const amount = await getTradableAmount(email, password);

      // alert("in loginUser : "+amount);

      if (userMessage === "User found successfully") {
        setTimeout(() => {
          navigate("/navbar/cryptos");
        }, 1500);
      }
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

        <p style={{
          color: "red",
          visibility: show === 1 ? "visible" : "initial"
        }}>{message}</p>

        <button onClick={loginUser}>Login</button>

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
