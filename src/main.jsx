import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './Frontend/UserAuth/LandingPage.jsx'
import Signup from './Frontend/UserAuth/Signup.jsx'
import Login from './Frontend/UserAuth/Login.jsx'
import Routing from "./Frontend/Routing.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LandingPage /> */}
    {/* <Signup /> */}
    {/* <Login /> */}
    <Routing />
  </StrictMode>,
)
