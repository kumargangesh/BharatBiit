import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './UserAuth/LandingPage';
import Login from './UserAuth/Login';
import Signup from './UserAuth/Signup';
import NavbarDesign from './Navbar/NavbarDesign';
import Cryptos from "./Navbar/Tabs/Cryptos";
import CryptoWallet from "./Navbar/Tabs/CryptoWallet";
import Portfolio from "./Navbar/Tabs/Portfolio";
import ProofOfConcept from "./Navbar/Tabs/ProofOfConcept";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar" element={<NavbarDesign />} >
          <Route path="cryptos" element={<Cryptos /> } />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="cryptowallet" element={<CryptoWallet />} />
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
