import React from "react";
import Logo from "../media/airbnb-logo.svg"


export default function Header() {
    return (
        <nav className="header">
            <img src={Logo} alt="Airbnb logo" className="logo" />
        </nav>
    )
}