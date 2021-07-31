import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { useDispatch, useSelector } from "react-redux";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import { getActorInfo } from "./redux/actions/actorAction";
import ActorPage from "./pages/ActorPage/ActorPage";
import { getSearchData } from "./redux/actions/searchAction";
import SearchPage from "./pages/SearchPage/SearchPage";
import { getGenresMap, getFilmsData } from "./redux/reducers/appReducers";
import {getFilm} from "./redux/reducers/movieReducers";

const App = () => {
  const dispatch = useDispatch();

  const {
    activeFilter,
    languageSelected,
    paginationPage,
    page,
    search,
    isFetching,
  } = useSelector((state) => state.appReducer);

  const { selectedMovie, fetchingFilm } = useSelector((state) => state.movieReducers);

  const { actorId } = useSelector((state) => state.actorReducers);

  const { searchPage, needUpdate } = useSelector(
    (state) => state.searchReducers
  );

  useEffect(() => {
    if (selectedMovie !== "") {
      const input = {
        selectedMovie: selectedMovie,
        languageSelected: languageSelected,
      };
      dispatch(getFilm(input));
    }
  }, [selectedMovie, languageSelected]);

  useEffect(() => {
    if (actorId !== "") {
      dispatch(getActorInfo(actorId, languageSelected));
    }
  }, [languageSelected, actorId]);

  useEffect(() => {
    dispatch(getGenresMap(languageSelected));
  }, [languageSelected]);

  useEffect(() => {
    const inputs = {
      activeFilter: activeFilter,
      languageSelected: languageSelected,
      paginationPage: paginationPage,
    };
    dispatch(getFilmsData(inputs));
  }, [activeFilter, languageSelected, paginationPage]);

  useEffect(() => {
    if (needUpdate) {
      dispatch(getSearchData(search, searchPage, languageSelected));
    }
  }, [searchPage, needUpdate, languageSelected]);

  return (
    <div>
      <Header />

      {isFetching || fetchingFilm ? <p>Get data</p> : ""}
      {page === "search" && !isFetching ? (
        <ErrorBoundary>
          <SearchPage />
        </ErrorBoundary>
      ) : (
        ""
      )}
      {page === "main" && !isFetching ? (
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      ) : (
        ""
      )}

      {page === "movie" && !fetchingFilm? (
        <ErrorBoundary>
          <MoviePage />
        </ErrorBoundary>
      ) : (
        ""
      )}

      {page === "actor" ? (
        <ErrorBoundary>
          <ActorPage />
        </ErrorBoundary>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
