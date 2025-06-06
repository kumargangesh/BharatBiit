import React from 'react';
import "./buysell.css";

export default function CryptoToWallet(props) {
  return (
    <div className="cryptoWallet">
      <h1>crypto wallet</h1>
      <h3>{props.cryptoData.name}</h3>
    </div>
  )
}
