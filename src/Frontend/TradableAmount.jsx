import{ React,useEffect,useState} from 'react';
import "./TradableAmount.css";
import { getTradableAmount } from '../Backend/FirebaseMethods';

export default function TradableAmount(props) {

  // const [cName, setCName] = useState("fa-solid fa-eye");
  // const [type, setType] = useState("text");
  const [amount, setAmount] = useState();

  useEffect(() => {
    const getAmount = getTradableAmount(props.email);
    setAmount(getAmount);
  });

  // const changeClassName =() => {
  //   if(cName === "fa-solid fa-eye"){
  //     setCName("fa-solid fa-eye-slash");
  //     setType("password");
  //   }else if(cName === "fa-solid fa-eye-slash") {
  //     setCName("fa-solid fa-eye");
  //     setType("text");
  //   }
  // }

  return (
    <div className="tamount d-flex justify-content-between">
        <h3>Tradable Amount: </h3>
        <p>{amount}</p>
    </div>
  )
}
