import React from "react";
import logo from '../../src/img/logo.png'
import Language from "../Language/Language";
import './Header.css';
import Search from "../Search/Search";

const Header = () => {
    return (
        <header>
            <img src={logo} alt='logoservice' height='40px' width='auto'/>
            <Search/>
            <Language/>
        </header>
    );
}

export default Header;
