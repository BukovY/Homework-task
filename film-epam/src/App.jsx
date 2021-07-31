import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsData, getGenresMap } from "./redux/actions/appAction";
import { getFilm } from "./redux/actions/movieAction";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import { getActorInfo } from "./redux/actions/actorAction";
import ActorPage from "./pages/ActorPage/ActorPage";
import { getSearchData } from "./redux/actions/searchAction";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  const dispatch = useDispatch();

  const { activeFilter, languageSelected, paginationPage, page, search } =
    useSelector((state) => state.appReducer);

  const { selectedMovie } = useSelector((state) => state.movieReducers);

  const { actorId } = useSelector((state) => state.actorReducers)

  const { searchPage,  needUpdate } = useSelector(
    (state) => state.searchReducers
  );

  useEffect(() => {
    if (selectedMovie !== "") {
      dispatch(getFilm(selectedMovie, languageSelected));
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
    dispatch(getFilmsData(activeFilter, languageSelected, paginationPage));
  }, [activeFilter, languageSelected, paginationPage]);

  useEffect(() => {
    if (needUpdate) {
      dispatch(getSearchData(search, searchPage, languageSelected));
    }
  }, [ searchPage, needUpdate, languageSelected]);

  return (
    <div>
      <Header />

      {page === "search" ? (
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

      {page === "movie" ? (
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
