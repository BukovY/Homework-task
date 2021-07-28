import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsData, getGenresMap } from "./redux/actions/appAction";
import {getFilm} from "./redux/actions/movieAction";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import {getActorInfo} from "./redux/actions/actorAction";
import ActorPage from "./pages/ActorPage/ActorPage";


const App = () => {
  const dispatch = useDispatch();

  const { activeFilter, languageSelected, paginationPage, page } = useSelector(
      (state) => state.appReducer
  );

  const {selectedMovie} = useSelector((state)=> state.movieReducers)
  useEffect(() => {
    if(selectedMovie !== ''){
      dispatch(getFilm(selectedMovie, languageSelected));
    }
  }, [selectedMovie, languageSelected]);

  const {actorId} = useSelector((state)=> state.actorReducers)
  useEffect(() => {
    if(actorId !== ''){
      dispatch(getActorInfo(actorId, languageSelected));
    }
  }, [languageSelected, actorId]);

  useEffect(() => {
    dispatch(getGenresMap(languageSelected));
  }, [languageSelected]);

  useEffect(() => {
    dispatch(getFilmsData(activeFilter, languageSelected, paginationPage));
  }, [activeFilter, languageSelected, paginationPage]);
  return (
    <div>
      <Header />


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
/*


      {page === "movie" ? (
        <ErrorBoundary>
          <MoviePage />
        </ErrorBoundary>
      ) : (
        ""
      )}
 */
