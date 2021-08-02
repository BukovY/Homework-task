import React, { useEffect } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import ActorPage from "./pages/ActorPage/ActorPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import LoaderPlaceholder from "./components/LoarerPlaceholder/LoaderPlaceholder";
import { useDispatch, useSelector } from "react-redux";
import { getGenresMap, getFilmsData } from "./redux/reducers/appReducers";
import { getFilm } from "./redux/reducers/movieReducers";
import { getActorInfo } from "./redux/reducers/actorReducers";
import { getSearchData } from "./redux/reducers/searchReducers";

const App = () => {
  const dispatch = useDispatch();

  const { activeFilter, languageSelected, paginationPage, page} =
    useSelector((state) => state.app);
  const { selectedMovie, fetchingFilm } = useSelector(
    (state) => state.movie
  );
  const { actorId, fetchingActor } = useSelector(
    (state) => state.actor
  );
  const { fetchingSearch } = useSelector(
    (state) => state.search
  );

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


  return (
    <div>
      <Header />

      {fetchingFilm || fetchingActor || fetchingSearch ? (
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

      {page === "main" ? (
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
