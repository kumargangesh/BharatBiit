import React from 'react';
import "./TabsDesign.css";
import IndividualOwnedCrypto from './IndividualOwnedCrypto';
import { loadAllCryptos } from '../../../Backend/FirebaseMethods';
import TradableAmount from '../../TradableAmount';

export default function Portfolio(props) {
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
      }}>User Portfolio</h3>
      <div className="portfolio container">
        <div className="row">
          {
            props.ownedCrypto.length > 0 ?
              props.ownedCrypto.map((crypto) => {
                return (
                  <div className="col-md-4">
                    <IndividualOwnedCrypto ownedCrypto={crypto} setCryptoData={props.setCryptoData} />
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
