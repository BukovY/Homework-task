import React from "react";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useSelector } from "react-redux";
import { genresIndexToString } from "../../utils/functrions";
import styles from "./SearchPage.module.sass";
import Paginations from "../../components/Pagination/Paginations";
import { useDispatch } from "react-redux";
import {
  isNeedUpdateSearch,
  setSearchPage,
} from "../../redux/actions/searchAction";
import { setTooltipOpenStatus } from "../../redux/actions/appAction";
import {getSearchData} from "../../redux/reducers/searchReducers";

const SearchPage = () => {
  const { genresMap } = useSelector((state) => state.appReducer);
  const { searchResults, searchPage, searchMaxPage } = useSelector(
    (state) => state.searchReducers
  );
    const {
        languageSelected,
        search,
    } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const changeSearchPaginationPage = (num) => {
    dispatch(setSearchPage(num));
    dispatch(setTooltipOpenStatus(false));
  };
  return (
    <div>
      {searchResults.length > 0 ? (
        ""
      ) : (
        <h1>No results, pleace change your search question</h1>
      )}
      <div className={styles.card_grid}>
        {searchResults.length > 0
          ? searchResults.map((el) => (
              <FilmCard
                key={el.id}
                id={el.id}
                img={el.poster_path}
                rating={el.vote_average}
                title={el.title}
                genres={genresIndexToString(el.genre_ids, genresMap)}
              />
            ))
          : ""}
      </div>

      <Paginations
        selected={searchPage}
        max={searchMaxPage}
        handler={changeSearchPaginationPage}
      />
    </div>
  );
};
/*

 */

export default SearchPage;
