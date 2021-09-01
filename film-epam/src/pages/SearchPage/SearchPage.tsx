import React, { FC, useEffect } from "react";
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
import { RootState } from "../../redux/store";
import { QuizParams } from "../../types/useParams";
import { MovieDetailsInterface } from "../../types/movie";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridGap: "10px",
    "@media screen and (max-width: 1300px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media screen and (max-width: 850px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));

const SearchPage: FC = () => {
  const classes = useStyles();
  const { languageSelected, search } = useSelector(
    (state: RootState) => state.app
  );
  const { searchResults, searchPage, searchMaxPage, isFetchingSearch } =
    useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const changeSearchPaginationPage = (num: number) => {
    dispatch(setSearchPage(num));
  };
  const indexLang = getIndexLanguage(languageSelected);
  const texts = {
    warning: searchTranslation.searchWarning[indexLang],
  };
  const { id } = useParams<QuizParams>();
  useEffect(() => {
    const input = {
      search: id,
      searchPage,
      languageSelected,
    };
    dispatch(getSearchData(input));
    const searchInput = id.split("%20").join("");
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
          <Box className={classes.root}>
            {searchResults &&
              searchResults.map((el: MovieDetailsInterface) => (
                <FilmCard key={el.id} el={el} />
              ))}
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
