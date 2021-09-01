import React, { FC, useEffect } from "react";
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
import { MovieDetailsInterface } from "../../types/movie";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "10px",
    "@media screen and (max-width: 1300px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media screen and (max-width: 850px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));

const HomePage: FC = () => {
  const classes = useStyles();
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
          <Box className={classes.root}>
            {filmData.map((el: MovieDetailsInterface) => (
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
