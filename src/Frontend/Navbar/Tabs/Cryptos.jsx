import React from 'react';
import "./TabsDesign.css";
import IndividualCrypto from './IndividualCrypto';

export default function Cryptos(props) {
  return (
    <div className="cryptos container">
      <div className="row">
        {/* <IndividualCrypto cryptoData = {props.cryptos[0]} /> */}
        {
          props.cryptos.length > 0 ?
            props.cryptos.map((crypto) => {
                return(
                  <div className="col-md-4">
                    <IndividualCrypto cryptoData = {crypto} />
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
