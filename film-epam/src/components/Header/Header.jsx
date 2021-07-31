import React from "react";
import logo from "../../static/img/logo.png";
import styles from "./Header.module.css.sass";
import Language from "../Language/Language";
import Search from "../Search/Search";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/actions/appAction";

const Header = () => {
  const dispatch = useDispatch();
  const goHomepage = () => {
    dispatch(resetFilters());
  };
  return (
    <header className={styles}>
      <img src={logo} alt="logo" onClick={goHomepage} />
      <Search />
      <Language />
    </header>
  );
};

export default Header;
