import React from 'react';
import "./TabsDesign.css";
import IndividualOwnedCrypto from './IndividualOwnedCrypto';

export default function Portfolio(props) {
  return (
    <div className="portfolio container">
      <div className="row">
        {/* <IndividualOwnedCrypto ownedCrypto = {props.ownedCrypto[0]} /> */}
        {
          props.ownedCrypto.length > 0 ?
            props.ownedCrypto.map((crypto) => {
              return(
                <div className="col-md-4">
                  <IndividualOwnedCrypto ownedCrypto = {crypto} />
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
