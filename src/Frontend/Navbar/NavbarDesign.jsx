import React from 'react';
import "./NavbarStyle.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function NavbarDesign(props) {

  const navigate = useNavigate();

  const userprofile =() => {
    navigate("/userprofile");
  }

  return (
    <div>
      <div className="navBar">
        <h1>BharatBit</h1>
        <div className="tabs">
          <Link to="/navbar/cryptos"><button>Cryptos</button></Link>
          <Link to="/navbar/portfolio"><button>Portfolio</button></Link>
          <Link to="/navbar/cryptowallet"><button>Crypto Wallet</button></Link>
          <Link to="/navbar/poc"><button>Proof-of-Concept</button></Link>
        </div>
        <button className="user" onClick={userprofile}>{(((props.email).toString()).charAt(0)).toUpperCase()}</button>
      </div>
      <Outlet />
    </div>
  )
}
