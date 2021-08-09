import React from "react";
import logo from "../../static/img/logo.png";
import styles from "./Header.module.css.sass";
import { Language } from "../Language";
import { Search } from "../Search";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/actions/appAction";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const goHomepage = () => {
    dispatch(resetFilters());
  };
  return (
    <header className={styles}>
      <Link to="/">
        <img src={logo} alt="logo" onClick={goHomepage} />
      </Link>
      <Search />
      <Language />
    </header>
  );
};
