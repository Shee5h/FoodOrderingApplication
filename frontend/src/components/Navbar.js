import React from "react";
import "./Navbar.css"
import mainLogo from "../images/Cibus_logo.png"

export default function Navbar() {



    return (
        <>
            <div className="topnav">
                <a href="#"><img src={mainLogo} alt="cibus logo" className="logo_navbar" /></a>
                <input type="text" placeholder="Search.." className="col-4" />
            </div>
        </>
    )
}