import React, { useEffect, useState } from 'react';
import "./TabsDesign.css";
import IndividualCrypto from './IndividualCrypto';
import { loadAllCryptos } from '../../../Backend/FirebaseMethods';
import TradableAmount from '../../TradableAmount';

export default function Cryptos(props) {

  const [allCrypto, setAllCryptos] = useState([]);

  const getAllCryptos =async() => {
    const cryptos = await loadAllCryptos();
    setAllCryptos(cryptos);
  }

  useEffect(() => {
    getAllCryptos();
  });

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
      }}>All Crypto</h3>
      <div className="cryptos container">
        <div className="row">
          {
            allCrypto.length > 0 ?
              allCrypto.map((crypto) => {
                return (
                  <div className="col-md-4">
                    <IndividualCrypto cryptoData={crypto} setCryptoData={props.setCryptoData} />
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
