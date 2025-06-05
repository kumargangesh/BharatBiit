import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import LandingPage from './UserAuth/LandingPage';
import Login from './UserAuth/Login';
import Signup from './UserAuth/Signup';

export default function Routing() {
  return (
    <Router>
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
  )
}
