import React, { useEffect } from "react";
import styles from "./SearchPage.module.sass";
import { FilmCard } from "../../components/FilmCard";
import { PaginationList } from "../../components/PaginationList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchPage } from "../../redux/actions/searchAction";
import { getSearchData } from "../../redux/reducers/searchReducers";
import { LoaderPlaceholder } from "../../components/LoaderPlaceholder";
import { searchTranslation } from "../../static/Translation";
import { getIndexLanguage } from "../../utils/functrions";
import { useParams } from "react-router";
import { setSearchValue } from "../../redux/actions/appAction";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const SearchPage = () => {
  const { languageSelected, search } = useSelector((state) => state.app);
  const { searchResults, searchPage, searchMaxPage, isFetchingSearch } =
    useSelector((state) => state.search);
  const dispatch = useDispatch();
  const changeSearchPaginationPage = (num) => {
    dispatch(setSearchPage(num));
  };
  const indexLang = getIndexLanguage(languageSelected);
  const texts = {
    warning: searchTranslation.searchWarning[indexLang],
  };
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
    <Container>
      {!isFetchingSearch ? (
        <Box>
          {!searchResults?.length && (
            <Typography variant="h2">{texts.warning}</Typography>
          )}
          <Box className={styles.card_grid}>
            {searchResults &&
              searchResults.map((el) => <FilmCard key={el.id} el={el} />)}
          </Box>
          {searchResults && (
            <PaginationList
              selected={searchPage}
              max={searchMaxPage}
              handler={changeSearchPaginationPage}
            />
          )}
        </Box>
      ) : (
        <LoaderPlaceholder />
      )}
    </Container>
  );
};

export default SearchPage;
