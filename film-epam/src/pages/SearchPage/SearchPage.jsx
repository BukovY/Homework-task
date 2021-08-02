import React, { useEffect } from "react";
import styles from "./SearchPage.module.sass";
import FilmCard from "../../components/FilmCard/FilmCard";
import Paginations from "../../components/Pagination/Paginations";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchPage } from "../../redux/actions/searchAction";
import { isTooltipOpen } from "../../redux/actions/appAction";
import { getSearchData } from "../../redux/reducers/searchReducers";
import LoaderPlaceholder from "../../components/LoarerPlaceholder/LoaderPlaceholder";

const SearchPage = () => {
  const { genresMap, search, languageSelected } = useSelector(
    (state) => state.app
  );
  const { searchResults, searchPage, searchMaxPage, searchNeedUpdate } =
    useSelector((state) => state.search);
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
  }, [searchNeedUpdate]);
  return (
    <div>
      {!searchNeedUpdate ? (
        <div>
          {searchResults.length > 0 ? (
            ""
          ) : (
            <h1>No results, pleace change your search question</h1>
          )}
          <div className={styles.card_grid}>
            {searchResults &&
              searchResults.map((el) => <FilmCard key={el.id} el={el} />)}
          </div>
          <Paginations
            selected={searchPage}
            max={searchMaxPage}
            handler={changeSearchPaginationPage}
          />
        </div>
      ) : (
        <LoaderPlaceholder />
      )}
    </div>
  );
};

export default SearchPage;
