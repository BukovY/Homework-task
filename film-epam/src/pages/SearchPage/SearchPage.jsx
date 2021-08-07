import React, { useEffect } from "react";
import styles from "./SearchPage.module.sass";
import { FilmCard } from "../../components/FilmCard";
import { Paginations } from "../../components/Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchPage } from "../../redux/actions/searchAction";
import { getSearchData } from "../../redux/reducers/searchReducers";
import { LoaderPlaceholder } from "../../components/LoarerPlaceholder";
import { searchTranslation } from "../../static/Translation";
import { getIndexLanguage } from "../../utils/functrions";
import { useParams } from "react-router";
import { setSearchValue } from "../../redux/actions/appAction";

const SearchPage = () => {
  const { languageSelected, search } = useSelector((state) => state.app);
  const { searchResults, searchPage, searchMaxPage, isFetchingSearch } =
    useSelector((state) => state.search);
  const dispatch = useDispatch();
  const changeSearchPaginationPage = (num) => {
    dispatch(setSearchPage(num));
  };
  const indexLang = getIndexLanguage(languageSelected);
  const { id } = useParams();
  useEffect(() => {
    const input = {
      search: id,
      searchPage,
      languageSelected,
    };
    dispatch(getSearchData(input));
    const searchInput = id.split("%20");
    if (searchInput !== search) {
      dispatch(setSearchValue(searchInput));
    }
  }, [id, searchPage, languageSelected]);

  return (
    <div>
      {!isFetchingSearch ? (
        <div>
          {!searchResults?.length && (
            <h1 className={styles.h1}>
              {searchTranslation.searchWarning[indexLang]}
            </h1>
          )}
          <div className={styles.card_grid}>
            {searchResults &&
              searchResults.map((el) => <FilmCard key={el.id} el={el} />)}
          </div>
          {searchResults && (
            <Paginations
              selected={searchPage}
              max={searchMaxPage}
              handler={changeSearchPaginationPage}
            />
          )}
        </div>
      ) : (
        <LoaderPlaceholder />
      )}
    </div>
  );
};

export default SearchPage;
