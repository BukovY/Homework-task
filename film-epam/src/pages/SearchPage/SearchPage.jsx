import React, { useEffect } from "react";
import styles from "./SearchPage.module.sass";
import FilmCard from "../../components/FilmCard/FilmCard";
import Paginations from "../../components/Pagination/Paginations";
import { useSelector } from "react-redux";
import { genresIndexToString } from "../../utils/functrions";
import { useDispatch } from "react-redux";
import { setSearchPage } from "../../redux/actions/searchAction";
import { isTooltipOpen } from "../../redux/actions/appAction";
import { getSearchData } from "../../redux/reducers/searchReducers";

const SearchPage = () => {
  const { genresMap, search, languageSelected } = useSelector(
    (state) => state.app
  );
  const { searchResults, searchPage, searchMaxPage, searchNeedUpdate } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const changeSearchPaginationPage = (num) => {
    dispatch(setSearchPage(num));
    dispatch(isTooltipOpen(false));
  };
  useEffect(() => {
    if (searchNeedUpdate) {
      const input = {
        search,
        searchPage,
        languageSelected,
      };
      dispatch(getSearchData(input));
    }
  }, [searchPage, searchNeedUpdate]);
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

export default SearchPage;
