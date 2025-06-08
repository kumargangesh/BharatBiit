import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './UserAuth/LandingPage';
import Login from './UserAuth/Login';
import Signup from './UserAuth/Signup';
import NavbarLinks from './Navbar/NavbarLinks';
import Cryptos from "./Navbar/Tabs/Cryptos";
import CryptoWallet from "./Navbar/Tabs/CryptoWallet";
import Portfolio from "./Navbar/Tabs/Portfolio";
import ProofOfConcept from "./Navbar/Tabs/ProofOfConcept";
import CryptoBuy from './Navbar/Tabs/BuySell/CryptoBuy';
import CryptoSell from './Navbar/Tabs/BuySell/CryptoSell';
import CryptoToWallet from './Navbar/Tabs/BuySell/CryptoToWallet';
import RedeemCrypto from "./Navbar/Tabs/BuySell/RedeemCrypto";
import NavbarDesign from './Navbar/NavbarDesign';
import UserProfile from './Navbar/UserProfile';

export default function Routing() {

  const [cryptoData, setCryptoData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const crypto = [
    {
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": 1,
      "open": 9400000,
      "close": 9600000,
      "high": 9450000,
      "currentPrice" : 900000,
      "buyingPrice": 950000,
      "investedAmount": 20000,
      "quantity": "10",
      "currentValue": 25000,
      "PL": 5
    },
    {
      "name": "Ethereum",
      "symbol": "ETM",
      "rank": 2,
      "open": 220000,
      "close": 240000,
      "high": 2350000,
      "currentPrice" : 200000,
      "buyingPrice": 230000,
      "investedAmount": 25000,
      "quantity": "123",
      "currentValue": 20000,
      "PL": 5
    },
    {
      "name": "Degen",
      "symbol": "DEGEN",
      "rank": 123,
      "open": 0.37,
      "close": 0.39,
      "high": 0.4,
      "currentPrice" : 0.4,
      "buyingPrice": 0.38,
      "investedAmount": 100000,
      "quantity": "1345",
      "currentValue": 150000,
      "PL": 50
    },
    {
      "name": "JasmyCoin",
      "symbol": "JSM",
      "rank": 120,
      "open": 1.45,
      "close": 1.56,
      "high": 1.6,
      "currentPrice" : 1.38,
      "buyingPrice": 1.5,
      "investedAmount": 90000,
      "quantity": "1567",
      "currentValue": 45000,
      "PL": 50
    }
  ];

  const ownedCrypto = [
    {
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": 1,
      "currentPrice" : 900000,
      "buyingPrice": 950000,
      "investedAmount": 20000,
      "quantity": "10",
      "currentValue": 25000,
      "PL": 5
    },
    {
      "name": "Ethereum",
      "symbol": "ETM",
      "rank": 2,
      "currentPrice" : 200000,
      "buyingPrice": 230000,
      "investedAmount": 25000,
      "quantity": "123",
      "currentValue": 20000,
      "PL": 5
    },
    {
      "name": "Degen",
      "symbol": "DEGEN",
      "rank": 123,
      "currentPrice" : 0.4,
      "buyingPrice": 0.38,
      "investedAmount": 100000,
      "quantity": "1345",
      "currentValue": 150000,
      "PL": 50
    },
    {
      "name": "JasmyCoin",
      "symbol": "JSM",
      "rank": 120,
      "currentPrice" : 1.38,
      "buyingPrice": 1.5,
      "investedAmount": 90000,
      "quantity": "1567",
      "currentValue": 45000,
      "PL": 50
    }
  ];

  const walletCrypto = [
    {
      "name": "Bitcoin",
      "symbol": "BTC",
      "rank": 1,
      "currentPrice" : 900000,
      "buyingPrice": 950000,
      "investedAmount": 20000,
      "quantity": "10",
      "currentValue": 25000,
      "PL": 5
    },
    {
      "name": "JasmyCoin",
      "symbol": "JSM",
      "rank" : 120,
      "currentPrice" : 1.38,
      "buyingPrice": 1.5,
      "investedAmount": 90000,
      "quantity": "1567",
      "currentValue": 45000,
      "PL": 50
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setEmail = {setEmail} setPassword = {setPassword} />} />
        <Route path="/signup" element={<Signup setEmail = {setEmail} setPassword = {setPassword} />} />
        <Route path="/userprofile" element={<UserProfile user = {{email, password}}/>} />
        <Route path="/navbar" element={<NavbarDesign email = {email} />} >
          <Route path="cryptos" element={<Cryptos cryptos={crypto} setCryptoData={setCryptoData} email = {email} />} />
          <Route path="portfolio" element={<Portfolio ownedCrypto={ownedCrypto} setCryptoData={setCryptoData} email = {email} />} />
          <Route path="cryptowallet" element={<CryptoWallet walletCrypto={walletCrypto} setCryptoData={setCryptoData} email = {email} />} />
          <Route path="poc" element={<ProofOfConcept />} />
          <Route path="buycrypto" element={<CryptoBuy cryptoData={cryptoData} email = { email } />} />
          <Route path="sellcrypto" element={<CryptoSell cryptoData={cryptoData} email = { email } />} />
          <Route path="walletcryptoadd" element={<CryptoToWallet cryptoData={cryptoData} email = { email } />} />
          <Route path="walletcryptoredeem" element={<RedeemCrypto cryptoData={cryptoData} email = { email } />} />
        </Route>
      </Routes>
    </Router>
  )
}
