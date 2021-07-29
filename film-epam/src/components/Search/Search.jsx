import React from "react";
import searchIcon from "../../static/img/search.png";
import styles from "./Search.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/actions/appAction";
import {
  isNeedUpdateSearch,
  setSearchPage,
  setSearchRender,
} from "../../redux/actions/searchAction";

const Search = () => {
  const { search } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const goToSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchPage(1));
    dispatch(setSearchRender(true));
    dispatch(isNeedUpdateSearch(true));
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Movies, person, movie, theaters"
        className={styles.search}
        value={search}
        onChange={(el) => dispatch(setSearchValue(el.target.value))}
      />
      <button onClick={(e) => goToSearch(e)}>
        <img src={searchIcon} alt="search" className={styles.search_icon} />
      </button>
    </form>
  );
};

export default Search;
