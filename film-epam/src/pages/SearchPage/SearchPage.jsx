import React, { useEffect } from "react";
import styles from "./SearchPage.module.sass";
import FilmCard from "../../components/FilmCard/FilmCard";
import Paginations from "../../components/Pagination/Paginations";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchPage } from "../../redux/actions/searchAction";
import { getSearchData } from "../../redux/reducers/searchReducers";
import LoaderPlaceholder from "../../components/LoarerPlaceholder/LoaderPlaceholder";
import { searchTranslation } from "../../static/Translation";
import { getIndexLanguage } from "../../utils/functrions";
import { useParams } from "react-router";

const SearchPage = () => {
  const { languageSelected } = useSelector((state) => state.app);
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
  }, [id, searchPage, languageSelected]);

  console.log(searchResults);
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
