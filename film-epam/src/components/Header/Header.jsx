import React from "react";
import logo from "../../static/img/logo.png";
import Language from "../Language/Language";
import Search from "../Search/Search";
import { store } from "../../redux/store";
import { rerender } from "../../index";
import s from "./Header.module.css.sass";

const Header = () => {
  const goHomepage = () => {
    store.paginationPage = 1;
    store.selectPage = "main";
    store.tabs = [["Popular", "active"], ["Top rated"], ["Upcoming"]];
    store.isTooltipLanguageOpen = false;
    rerender();
  };
  return (
    <header className={s}>
      <img src={logo} alt="logo" onClick={() => goHomepage()} />
      <Search />
      <Language />
    </header>
  );
};

export default Header;
