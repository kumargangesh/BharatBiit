import React, { useState } from 'react';
import "./buysell.css";
import "../TabsDesign.css";

export default function CryptoBuy(props) {

  const [quantity, setQuantity] = useState("");

  const handleQuantity =(event) => {
    setQuantity(event.target.value);
  }

  const buyCrypto =() => {
    alert(quantity);
  }

  return (
    <div className="cryptoBuy">
      <div className="cryptoInfo">
        <div className="container ownedCrypto">
          <div className="rankandsymbol d-flex justify-content-between">
            <p>{props.cryptoData.rank}</p>
            <p>{props.cryptoData.symbol}</p>
          </div>

          <div className="nameandicon d-flex justify-content-between">
            <h3>{props.cryptoData.name}</h3>
            <img src="https://i.ibb.co/N6Q0xyf9/bitcoin.png" />
          </div>

          <div className="amount">

            <div className="price d-flex justify-content-between">
              <p>Current Price: </p>
              <p>{props.cryptoData.currentPrice}</p>
            </div>

            <div className="price d-flex justify-content-between">
              <p>Buying Price: </p>
              <p>{props.cryptoData.buyingPrice}</p>
            </div>

            <div className="open d-flex justify-content-between">
              <p>Quantity: </p>
              <p>{props.cryptoData.quantity}</p>
            </div>

            <div className="open d-flex justify-content-between">
              <p>Amount Invested: </p>
              <p>{props.cryptoData.investedAmount}</p>
            </div>

            <div className="close d-flex justify-content-between">
              <p>Current Value :</p>
              <p>{props.cryptoData.currentValue}</p>
            </div>

            <div className="high d-flex justify-content-between">
              <p>P/L :</p>
              <p>{props.cryptoData.PL}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buysell">
        <h3>Buy Crypto</h3>

        <div className="price d-flex justify-content-between">
          <p>Current Price: </p>
          <p>{props.cryptoData.currentPrice}</p>
        </div>
        <div className="cryptoForm">
          <input type="number" placeholder={"quantity to buy"} value={quantity} onChange={handleQuantity} />
          <div className="feesForm">
            <div className="d-flex justify-content-between">
              <p>Amount Before Fees</p>
              <p>100000</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>Platform Fees (0.2%)</p>
              <p>200</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>GST on Fees (18%)</p>
              <p>36</p>
            </div>

            <div className="d-flex justify-content-between">
              <p>Net Payable Amount</p>
              <p>100236</p>
            </div>
          </div>

          <button className="buybutton" onClick={buyCrypto}>Buy</button>
        </div>
      </div>
    </div>
  )
}
