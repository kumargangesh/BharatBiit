import React from 'react';
import "./buysell.css";

export default function CryptoSell(props) {
  return (
    <div className="cryptoSell">
      <h1>cryptosell</h1>
      <h3>{props.cryptoData.name}</h3>
    </div>
  )
}
