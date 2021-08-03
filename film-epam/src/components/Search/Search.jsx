import React from "react";
import searchIcon from "../../static/img/search.png";
import styles from "./Search.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setPage, setSearchValue } from "../../redux/actions/appAction";
import {
  isNeedUpdateSearch,
  setSearchPage,
} from "../../redux/actions/searchAction";

const Search = () => {
  const { search } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const goToSearch = (e) => {
    e.preventDefault();
    console.log(e)
    if(search.length !== 0){
        dispatch(setSearchPage(1));
        dispatch(isNeedUpdateSearch(true));
        dispatch(setPage("search"));
    } else{
        alert('Введите поисковой элемент')
    }

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
