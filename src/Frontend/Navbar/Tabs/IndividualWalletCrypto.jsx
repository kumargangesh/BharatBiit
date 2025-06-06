import React from 'react';
import "./TabsDesign.css";

export default function IndividualWalletCrypto(props) {
    return (

        <div className="container walletCrypto">
            <div className="rankandsymbol d-flex justify-content-between">
                <p>{props.walletCrypto.rank}</p>
                <p>{props.walletCrypto.symbol}</p>
            </div>

            <div className="nameandicon d-flex justify-content-between">
                <h3>{props.walletCrypto.name}</h3>
                <img src="https://i.ibb.co/N6Q0xyf9/bitcoin.png" />
            </div>

            <div className="amount">
                <div className="price d-flex justify-content-between">
                    <p>Buying Price: </p>
                    <p>{props.walletCrypto.price}</p>
                </div>

                <div className="open d-flex justify-content-between">
                    <p>Amount Invested: </p>
                    <p>{props.walletCrypto.investedAmount}</p>
                </div>

                <div className="close d-flex justify-content-between">
                    <p>Current Value :</p>
                    <p>{props.walletCrypto.currentValue}</p>
                </div>

                <div className="high d-flex justify-content-between">
                    <p>P/L :</p>
                    <p>{props.walletCrypto.PL}</p>
                </div>

                <button className="redeem">Redeem Crypto</button>
            </div>
        </div>

        // <div className="container walletCrypto">
        //     <div className="rankandsymbol d-flex justify-content-between">
        //         <p>{props.walletCrypto.rank}</p>
        //         <p>{props.walletCrypto.symbol}</p>
        //     </div>
        //     <div className="nameandicon d-flex justify-content-between">
        //         <h3>{props.walletCrypto.name}</h3>
        //         <img src="https://i.ibb.co/N6Q0xyf9/bitcoin.png" />
        //     </div>
        // </div>
    )
}
