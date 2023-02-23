import React from 'react';
import reactLogo from "../image/react-icon-small.png";
import "./Navbar.css";


export default function Navbar() {

    return (

        <nav>

            <img src={reactLogo} className="nav--icon" />

            <h3 className="nav--logo_text"> ReactFact</h3>
            <h4 className="nav--title"> React Course - Project1</h4>
        </nav>
    )
}

 

