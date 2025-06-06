import React, { useState } from 'react';
import "./TabsDesign.css";
import CryptoFees from './Fees/CryptoFees';

export default function IndividualOwnedCrypto(props) {

    const [buy, changeBuy] = useState(0);
    const [sell, changeSell] = useState(0);
    const [toWallet, changeToWallet] = useState(0);

    const cryptoBuy = () => {

    }

    const cryptoSell = () => {
        
    }

    const cryptoToWallet = () => {
        
    }

    // const buyFees = () => {
    //     if(feesShow === 0){
    //         changeFeesShow(1);
    //         setFeesMessage("Buy Fees");
    //     }else{
    //         changeFeesShow(0);
    //         setFeesMessage("");
    //     }
    // }

    // const sellFees = () => {
    //     if(feesShow === 0){
    //         changeFeesShow(1);
    //         setFeesMessage("Sell Fees");
    //     }else{
    //         changeFeesShow(0);
    //         setFeesMessage("");
    //     }
    // }

    // const addToWallet = () => {
    //     if(feesShow === 0){
    //         changeFeesShow(1);
    //         setFeesMessage("Crypto Wallet");
    //     }else{
    //         changeFeesShow(0);
    //         setFeesMessage("");
    //     }
    // }

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
                    <p>Buying Price: </p>
                    <p>{props.ownedCrypto.price}</p>
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
                    <button className="addtowallet" onClick={cryptoToWallet}>Add To Wallet</button>
                </div>

                {
                    feesShow === 1 ?
                        <CryptoFees
                            feesMessage={feesMessage}
                        />
                        :
                        <></>
                }
            </div>
        </div>
    )
}
