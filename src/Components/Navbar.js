import React from "react"

export default function Navbar(){
    return (
        <nav>

            <img 
            className="nav--logo"
            src={ require("../images/tj-logo.jpg") } 
            alt="Logo-Image"
            />
            {/* <p className="nav--p">TRAVEL JOURNAL</p> */}
        </nav>
    )
}
