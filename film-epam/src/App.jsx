import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsData, getGenresMap } from "./redux/actions/appAction";
/*

import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import ActorPage from "./pages/ActorPage/ActorPage";

 */

const App = () => {
  const dispatch = useDispatch();

  const { activeFilter, languageSelected, paginationPage } = useSelector(
    (state) => state.appReducer
  );

  useEffect(() => {
    dispatch(getGenresMap(languageSelected));
  }, [languageSelected]);

  useEffect(() => {
    dispatch(getFilmsData(activeFilter, languageSelected, paginationPage));
  }, [activeFilter, languageSelected, paginationPage]);
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
  );
};

export default App;
/*

      {page === "actor" ? (
        <ErrorBoundary>
          <ActorPage />
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
 */
