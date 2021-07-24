import React from "react";
import logo from '../../static/img/logo.png'
import Language from "../Language/Language";
import './Header.css';
import Search from "../Search/Search";
import {store} from "../../redux/store";
import {rerender} from "../../index";

const Header = () => {
    const goHomepage = () => {
        store.paginationPage = 1;
        store.selectPage = 'main';
        store.tabs = [["Popular", 'active'], ["Top rated"], ["Upcoming"]]
        store.isTooltipLanguageOpen = false
        rerender()
    }
    return (
        <header>
            <img src={logo} alt='logoservice' height='40px' width='auto' onClick={() => goHomepage()}/>
            <Search/>
            <Language/>
        </header>
    );
}

export default Header;
