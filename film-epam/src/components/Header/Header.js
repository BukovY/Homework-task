import React from "react";
import logo from '../../src/img/logo.png'
import Language from "./Language/Language";

function Header() {
    return (
        <header>
            <img src={logo} alt='logoservice' height='70px' width='auto'/>
            <input type="text" placeholder='Movies, person, movie, theaters' />
            <Language/>
        </header>
    );
}

export default Header;
