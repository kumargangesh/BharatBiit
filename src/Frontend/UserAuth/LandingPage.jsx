import React from 'react';
import "./UserStyle.css";
import Navbar from "../Navbar/Navbar";
import BBIcon from "../Navbar/bharatbitIcon.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="nameandlogolandingpage">
      <div className="name">
        <h1>BharatBit</h1>
        <p>Trade Kar Befikar, <br /> Kyoki Crypto wallet hai idhar !!!</p>
        <div className="buttons">
          <Link to="/signup"><button>Create Account</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
      <img src={BBIcon} />
    </div>
  )
}
