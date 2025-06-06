import React from 'react';
import "./FeesStyle.css";

export default function CryptoFees(props) {
  return (
    <div className="buyfees">
        <h3>{props.feesMessage}</h3>
        <div className="fees">
          
        </div>
    </div>
  )
}
