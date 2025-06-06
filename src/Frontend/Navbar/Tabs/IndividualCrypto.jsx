import React from 'react';
import "./TabsDesign.css";
import {useNavigate} from "react-router-dom";

export default function IndividualCrypto(props) {

  const navigate = useNavigate();

  const buyCrypto =() => {
    props.setCryptoData(props.cryptoData);
    navigate("/navbar/buycrypto");
  }

  return (
    <div className="indiCrypto container">
      <div className="rankandsymbol d-flex justify-content-between">
        <p>{props.cryptoData.rank}</p>
        <p>{props.cryptoData.symbol}</p>
      </div>
      <div className="nameandicon d-flex justify-content-between">
        <h3>{props.cryptoData.name}</h3>
        <img src="https://i.ibb.co/N6Q0xyf9/bitcoin.png" />
      </div>
      <div className="prices">
        <div className="price d-flex justify-content-between">
          <p>Price : </p>
          <p>{props.cryptoData.currentPrice}</p>
        </div>

        <div className="open d-flex justify-content-between">
          <p>Open :</p>
          <p>{props.cryptoData.open}</p>
        </div>

        <div className="close d-flex justify-content-between">
          <p>Close :</p>
          <p>{props.cryptoData.close}</p>
        </div>

        <div className="high d-flex justify-content-between">
          <p>High :</p>
          <p>{props.cryptoData.high}</p>
        </div>
      </div>

      <button onClick={buyCrypto}>Buy Now</button>

    </div>
  )
}


// <a href="https://ibb.co/99zxnrBb"><img src="https://i.ibb.co/N6Q0xyf9/bitcoin.png" alt="bitcoin" border="0"></a>