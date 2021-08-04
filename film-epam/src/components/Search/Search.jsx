import React from "react";
import searchIcon from "../../static/img/search.png";
import styles from "./Search.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/actions/appAction";
import { setSearchPage } from "../../redux/actions/searchAction";
import { headerTranslation } from "../../static/Translation";
import { getSearchData } from "../../redux/reducers/searchReducers";
import { Link } from "react-router-dom";

const Search = () => {
  const { search, languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const goToSearch = (e) => {
    e.preventDefault();
    if (search.length !== 0) {
      dispatch(setSearchPage(1));
      const input = {
        search,
        searchPage: 1,
        languageSelected,
      };
      dispatch(getSearchData(input));
    } else {
      alert("Введите поисковой элемент");
    }
  };

  return (
      <form>
        <input
          type="text"
          placeholder={headerTranslation.search[languageSelected]}
          className={styles.search}
          value={search}
          onChange={(el) => dispatch(setSearchValue(el.target.value))}
        />
        <button onClick={(e) => goToSearch(e)}>
          <Link to='/search'>
          <img src={searchIcon} alt="search" className={styles.search_icon} />
          </Link>
        </button>
      </form>
  );
};

export default Search;
