import React, { useState } from 'react';
import "./TabsDesign.css";
import CryptoBuy from './BuySell/CryptoBuy';
import CryptoSell from './BuySell/CryptoSell';
import CryptoToWallet from './BuySell/CryptoToWallet';
import {useNavigate} from "react-router-dom";


export default function IndividualOwnedCrypto(props) {

    const navigate = useNavigate();

    const cryptoBuy =() => {
        props.setCryptoData(props.ownedCrypto);
        navigate("/navbar/buycrypto");
    }

    const cryptoSell =() => {
        props.setCryptoData(props.ownedCrypto);
        navigate("/navbar/sellcrypto");
    }

    const cryptoWallet =() => {
        props.setCryptoData(props.ownedCrypto);
        navigate("/navbar/walletcryptoadd");
    }

    return (
        <div className="container ownedCrypto">
            <div className="rankandsymbol d-flex justify-content-between">
                <p>{props.ownedCrypto.rank}</p>
                <p>{props.ownedCrypto.symbol}</p>
            </div>

            <div className="nameandicon d-flex justify-content-between">
                <h3>{props.ownedCrypto.name}</h3>
                <img src="https://i.ibb.co/N6Q0xyf9/bitcoin.png" />
            </div>

            <div className="amount">
                <div className="price d-flex justify-content-between">
                    <p>Current Price: </p>
                    <p>{props.ownedCrypto.currentPrice}</p>
                </div>

                <div className="price d-flex justify-content-between">
                    <p>Buying Price: </p>
                    <p>{props.ownedCrypto.buyingPrice}</p>
                </div>

                <div className="open d-flex justify-content-between">
                    <p>Quantity: </p>
                    <p>{props.ownedCrypto.quantity}</p>
                </div>

                <div className="open d-flex justify-content-between">
                    <p>Amount Invested: </p>
                    <p>{props.ownedCrypto.investedAmount}</p>
                </div>

                <div className="close d-flex justify-content-between">
                    <p>Current Value :</p>
                    <p>{props.ownedCrypto.currentValue}</p>
                </div>

                <div className="high d-flex justify-content-between">
                    <p>P/L :</p>
                    <p>{props.ownedCrypto.PL}</p>
                </div>

                <div className="buttons d-flex justify-content-between">
                    <button className="buyNow" onClick={cryptoBuy}>Buy Now</button>
                    <button className="sellNow" onClick={cryptoSell}>Sell Now</button>
                    <button className="addtowallet" onClick={cryptoWallet}>Add To Wallet</button>
                </div>
            </div>
        </div>
    )
}
