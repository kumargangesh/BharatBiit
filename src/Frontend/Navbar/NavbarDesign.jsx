import React from 'react';
import "./NavbarStyle.css";
import {Link, Outlet} from "react-router-dom";

export default function NavbarDesign() {
  return (
    <div className="navBar">
        <h1>BharatBit</h1>
        <div className="tabs">
            <Link to="/navbar/cryptos"><button>Cryptos</button></Link>
            <Link to="/navbar/portfolio"><button>Portfolio</button></Link>
            <Link to="/navbar/cryptowallet"><button>Crypto Wallet</button></Link>
            <Link to="/navbar/poc"><button>Proof-of-Concept</button></Link>
        </div>
        <button className="user">K</button>
        <Outlet />
    </div>
  )
}
