import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { useDispatch, useSelector } from "react-redux";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import ActorPage from "./pages/ActorPage/ActorPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { getGenresMap, getFilmsData } from "./redux/reducers/appReducers";
import { getFilm } from "./redux/reducers/movieReducers";
import { getActorInfo } from "./redux/reducers/actorReducers";
import { getSearchData } from "./redux/reducers/searchReducers";
import LoaderPlaceholder from "./components/LoarerPlaceholder/LoaderPlaceholder";

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

  const { selectedMovie, fetchingFilm } = useSelector(
    (state) => state.movieReducers
  );

  const { actorId, fetchingActor } = useSelector(
    (state) => state.actorReducers
  );

  const { searchPage, needUpdate, fetchingSearch } = useSelector(
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
      const inputs = {
        actorId: actorId,
        languageSelected: languageSelected,
      };
      dispatch(getActorInfo(inputs));
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
      const input = {
        search,
        searchPage,
        languageSelected,
      };
      dispatch(getSearchData(input));
    }
  }, [searchPage, needUpdate, languageSelected]);

  return (
    <div>
      <Header />

      {isFetching || fetchingFilm || fetchingActor || fetchingSearch ? (
        <LoaderPlaceholder />
      ) : (
        ""
      )}
      {page === "search" && !fetchingSearch ? (
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

      {page === "movie" && !fetchingFilm ? (
        <ErrorBoundary>
          <MoviePage />
        </ErrorBoundary>
      ) : (
        ""
      )}

      {page === "actor" && !fetchingActor ? (
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
