import React from "react";
import logo from "../../static/img/logo.png";


import Language from "../Language/Language";
import Search from "../Search/Search";
import s from "./Header.module.css.sass";
import { useDispatch} from "react-redux";
import {
    setFilter,
    setPaginationPage, setSearchValue,
    setTooltipOpenStatus,
} from "../../redux/actions/appAction";


const Header = () => {
  const dispatch = useDispatch();
  const goHomepage = () => {
    dispatch(setPaginationPage(1));
    dispatch(setTooltipOpenStatus(false));
    dispatch(setFilter("Popular"));
    dispatch(setSearchValue(''))
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
