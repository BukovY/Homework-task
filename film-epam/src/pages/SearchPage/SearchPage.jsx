import React, { useEffect } from "react";
import styles from "./SearchPage.module.sass";
import FilmCard from "../../components/FilmCard/FilmCard";
import Paginations from "../../components/Pagination/Paginations";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchPage } from "../../redux/actions/searchAction";
import { getSearchData } from "../../redux/reducers/searchReducers";
import LoaderPlaceholder from "../../components/LoarerPlaceholder/LoaderPlaceholder";

const SearchPage = () => {
  const { search, languageSelected } = useSelector((state) => state.app);
  const { searchResults, searchPage, searchMaxPage, isFetchingSearch } =
    useSelector((state) => state.search);
  const dispatch = useDispatch();
  const changeSearchPaginationPage = (num) => {
    dispatch(setSearchPage(num));
  };
  useEffect(() => {
    const input = {
      search,
      searchPage,
      languageSelected,
    };
    dispatch(getSearchData(input));
  }, [searchPage, languageSelected]);
  return (
    <div>
      {!isFetchingSearch ? (
        <div>
          {!searchResults.length && (
            <h1>No results, change your search question</h1>
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
