import React from 'react';
import "./TabsDesign.css";
import IndividualWalletCrypto from './IndividualWalletCrypto';

export default function CryptoWallet(props) {
  return (
    <div className="wallet container">
      <div className="row">
        {/* <IndividualWalletCrypto walletCrypto = {props.walletCrypto[0]} /> */}
        {
          props.walletCrypto.length > 0 ?
            props.walletCrypto.map((crypto) => {
              return(
                <div className="col-md-4">
                  <IndividualWalletCrypto walletCrypto = {crypto} />
                </div>
              )
            })
          :
            <></>
        }
      </div>
    </div>
  )
}
