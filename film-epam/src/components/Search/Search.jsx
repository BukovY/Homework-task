import React from "react";
import searchIcon from "../../static/img/search.png";
import styles from "./Search.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/actions/appAction";
import { setSearchPage } from "../../redux/actions/searchAction";
import { headerTranslation } from "../../static/Translation";
import { getSearchData } from "../../redux/reducers/searchReducers";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const { search, languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const history = useHistory();

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
      history.push(`/search/${search.split(" ").join("%20")}`);
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
        <img src={searchIcon} alt="search" className={styles.search_icon} />
      </button>
    </form>
  );
};
