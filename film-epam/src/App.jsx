import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import ActorPage from "./pages/ActorPage/ActorPage";
import SearchPage from "./pages/SearchPage/SearchPage";

import { useSelector } from "react-redux";

const App = () => {
  const { page } = useSelector((state) => state.app);

  return (
    <div>
      <Header />

      {page === "search" && (
        <ErrorBoundary>
          <SearchPage />
        </ErrorBoundary>
      )}

      {page === "main" && (
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      )}

      {page === "movie" && (
        <ErrorBoundary>
          <MoviePage />
        </ErrorBoundary>
      )}

      {page === "actor" && (
        <ErrorBoundary>
          <ActorPage />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default App;
