import React from 'react';
import "./TabsDesign.css";
import IndividualWalletCrypto from './IndividualWalletCrypto';
import TradableAmount from '../../TradableAmount';

export default function CryptoWallet(props) {
  return (
    <>
      <TradableAmount email = {props.email} />
      <h3 style={{
        fontSize : "45px",
        fontWeight : "bolder",
        color : "yellowgreen",
        marginLeft : "6%",
        marginTop : "2%",
        marginBottom : "-1%"
      }}>User's Crypto Wallet</h3>
      <div className="wallet container">
        <div className="row">
          {
            props.walletCrypto.length > 0 ?
              props.walletCrypto.map((crypto) => {
                return (
                  <div className="col-md-4">
                    <IndividualWalletCrypto walletCrypto={crypto} setCryptoData={props.setCryptoData} />
                  </div>
                )
              })
              :
              <></>
          }
        </div>
      </div>
    </>
  )
}
