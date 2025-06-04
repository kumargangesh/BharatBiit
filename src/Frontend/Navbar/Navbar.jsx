import React from 'react';
import "./NavbarStyle.css";
import BBIcon from "./bharatbitIcon.png";

export default function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={BBIcon} />
                        <span>BharatBit</span>
                </a>
            </div>
        </nav>
    )
}

