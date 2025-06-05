import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from "./Frontend/Routing.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LandingPage /> */}
    {/* <Signup /> */}
    {/* <Login /> */}
    <Routing />
    {/* <NavbarDesign /> */}
  </StrictMode>,
)
