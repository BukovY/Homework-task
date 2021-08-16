import React, { useEffect } from "react";
import styles from "./HomePage.module.sass";
import { FilmCard } from "../../components/FilmCard";
import { useSelector, useDispatch } from "react-redux";
import { setPaginationPage } from "../../redux/actions/appAction";
import { Tabs } from "../../components/Tabs";
import { LoaderPlaceholder } from "../../components/LoaderPlaceholder";
import { getFilmsData } from "../../redux/reducers/appReducers";
import Container from "@material-ui/core/Container";
import { PaginationList } from "../../components/PaginationList";
import Box from "@material-ui/core/Box";
import { RootState } from "../../redux/store";
import { movieDetails } from "../../types/movie";

const HomePage = () => {
  const {
    filmData,
    paginationPage,
    paginationMax,
    activeFilter,
    languageSelected,
    isFetching,
  } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const selectPaginationPage = (num: number) => {
    dispatch(setPaginationPage(num));
  };

  useEffect(() => {
    const inputs = {
      activeFilter,
      languageSelected,
      paginationPage,
    };
    dispatch(getFilmsData(inputs));
  }, [paginationPage, languageSelected, activeFilter]);
  return (
    <Container>
      <Tabs />
      {!isFetching ? (
        <Box>
          <Box className={styles.film_card_grid}>
            {filmData.map((el: movieDetails) => (
              <FilmCard key={el.id} el={el} />
            ))}
          </Box>
          <PaginationList
            max={paginationMax}
            selected={paginationPage}
            handler={selectPaginationPage}
          />
        </Box>
      ) : (
        <LoaderPlaceholder />
      )}
    </Container>
  );
};

export default HomePage;
