import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './UserAuth/LandingPage';
import Login from './UserAuth/Login';
import Signup from './UserAuth/Signup';
import NavbarLinks from './Navbar/NavbarLinks';
// import NavbarDesign from './Navbar/NavbarDesign';
import Cryptos from "./Navbar/Tabs/Cryptos";
import CryptoWallet from "./Navbar/Tabs/CryptoWallet";
import Portfolio from "./Navbar/Tabs/Portfolio";
import ProofOfConcept from "./Navbar/Tabs/ProofOfConcept";

export default function Routing() {

  const crypto = [
    {
      "name" : "Bitcoin",
      "symbol" : "BTC",
      "rank" : 1,
      "price" : 950000,
      "open" : 9400000,
      "close" : 9600000,
      "high" : 9450000
    },
    {
      "name" : "Ethereum",
      "symbol" : "ETM",
      "rank" : 2,
      "price" : 230000,
      "open" : 220000,
      "close" : 240000,
      "high" : 2350000
    },
    {
      "name" : "Degen",
      "symbol" : "DEGEN",
      "rank" : 123,
      "price" : 0.38,
      "open" : 0.37,
      "close" : 0.39,
      "high" : 0.4
    },
    {
      "name" : "JasmyCoin",
      "symbol" : "JSM",
      "rank" : 120,
      "price" : 1.5,
      "open" : 1.45,
      "close" : 1.56,
      "high" : 1.6
    }
  ];

  const ownedCrypto = [
    {
      "name" : "Bitcoin",
      "symbol" : "BTC",
      "rank" : 1,
      "price" : 950000,
      "investedAmount" : 20000,
      "currentValue" : 25000,
      "PL" : 5
    },
    {
      "name" : "Ethereum",
      "symbol" : "ETM",
      "rank" : 2,
      "price" : 230000,
      "investedAmount" : 25000,
      "currentValue" : 20000,
      "PL" : 5
    },
    {
      "name" : "Degen",
      "symbol" : "DEGEN",
      "rank" : 123,
      "price" : 0.38,
      "investedAmount" : 100000,
      "currentValue" : 150000,
      "PL" : 50
    },
    {
      "name" : "JasmyCoin",
      "symbol" : "JSM",
      "rank" : 120,
      "price" : 1.5,
      "investedAmount" : 90000,
      "currentValue" : 45000,
      "PL" : 50
    }
  ];

  const walletCrypto = [
    {
      "name" : "Bitcoin",
      "symbol" : "BTC",
      "rank" : 1,
      "price" : 950000,
      "investedAmount" : 20000,
      "currentValue" : 25000,
      "PL" : 5
    },
    {
      "name" : "JasmyCoin",
      "symbol" : "JSM",
      "rank" : 120,
      "price" : 1.5,
      "investedAmount" : 90000,
      "currentValue" : 45000,
      "PL" : 50
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar" element={<NavbarLinks />} >
          <Route path="cryptos" element={<Cryptos cryptos = {crypto} /> } />
          <Route path="portfolio" element={<Portfolio ownedCrypto = {ownedCrypto} />} />
          <Route path="cryptowallet" element={<CryptoWallet walletCrypto = {walletCrypto} />} />
          <Route path="poc" element={<ProofOfConcept />} />
        </Route>

        {/* <Route element={<NavbarLinks />} path="/navbar" >

          <Route element={<Home
          // tabName="About Me"
          // tabData={"this is the About Me "+"\n"+data}
          />} path="home" />

          <Route element={<About
          // tabName="Contact Me"
          // tabData={"this is the Contact Me "+"\n"+data}
          />} path="about" />

          <Route element={<Cryptos
            email={email}
          // tabName="Education"
          // tabData={"this is the Education "+"\n"+data}
          />} path="cryptos" />

          <Route element={<Portfolio
            email={email}
          // tabName="Projects"
          // tabData={"this is the Projects "+"\n"+data}
          />} path="portfolio" />

          <Route element={<Wallet
          // tabName="Skills"
          // tabData={"this is the Skills "+"\n"+data}
          />} path="wallet" />

        </Route> */}
      </Routes>
    </Router>
  )
}
