import React, { useEffect, useState } from 'react';
import "./buysell.css";
import "../TabsDesign.css";
import { deductTradableAmount, getTradableAmount } from '../../../../Backend/FirebaseMethods';
import TradableAmount from '../../../TradableAmount';

export default function CryptoBuy(props) {

  const [tAmount, setTAmount] = useState();
  const [quantity, setQuantity] = useState("");
  const [netAmount, setNetAmount] = useState(0);
  const [pFees, setPFees] = useState(0);
  const [GST, setGST] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);
  const [message, setMessage] = useState("");

  const loadTradableAmount =async() => {
    const totalTradableAmount = await getTradableAmount(props.email);
    setTAmount(totalTradableAmount);
  }

  useEffect(() => {
    loadTradableAmount();
  });

  const calculateAmount = (quantity) => {
    let totalAmount = parseFloat(quantity) * parseFloat(props.cryptoData.currentPrice);
    setNetAmount(totalAmount);

    let platformFees = (totalAmount * 0.2) / 100.0;
    setPFees(platformFees);

    let gst = (platformFees * 18) / 100.0;
    setGST(gst);

    let totalPayableAmount = totalAmount + platformFees + gst;
    setPayableAmount(totalPayableAmount);
  }

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
    calculateAmount(event.target.value);
  }

  const buyCrypto = async () => {
    if (parseFloat(tAmount) >= parseFloat(payableAmount)) {
      setMessage("Crypto bought successfully");
      deductTradableAmount(props.email, payableAmount);
      setTimeout(() => {
        setQuantity(0);
        setNetAmount(0);
        setPFees(0);
        setGST(0);
        setPayableAmount(0);
      }, 1500);
    } else {
      setMessage("Insuffeceint amount, load more funds");
    }
  }

  return (
    <>
    <TradableAmount email = {props.email} />
      <div className="cryptoBuy">
        <div className="cryptoInfo">
          <div className="container ownedCrypto">
            <div className="rankandsymbol d-flex justify-content-between">
              <p>{props.cryptoData.symbol}</p>
            </div>

            <div className="nameandicon d-flex justify-content-between">
              <h3>{props.cryptoData.name}</h3>
              <img src={props.cryptoData.icon} />
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
                <p>{netAmount}</p>
              </div>

              <div className="d-flex justify-content-between">
                <p>Platform Fees (0.2%)</p>
                <p>{pFees}</p>
              </div>

              <div className="d-flex justify-content-between">
                <p>GST on Fees (18%)</p>
                <p>{GST}</p>
              </div>

              <div className="d-flex justify-content-between">
                <p>Net Payable Amount</p>
                <p>{payableAmount}</p>
              </div>
            </div>

            <p>{message}</p>

            <button className="buybutton" onClick={buyCrypto}>Buy</button>
          </div>
        </div>
      </div>
    </>
  )
}
