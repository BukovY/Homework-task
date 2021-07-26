import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import HomePage from "./pages/HomePage/HomePage.jsx";
/*

import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import ActorPage from "./pages/ActorPage/ActorPage";

 */

const App = () => {
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
