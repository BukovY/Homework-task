import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary/Error Boundary";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import ActorPage from "./pages/ActorPage/ActorPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { Route, Switch } from "react-router-dom";

import { useSelector } from "react-redux";

const App = () => {
  const { page } = useSelector((state) => state.app);

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <ErrorBoundary>
            <HomePage />
          </ErrorBoundary>
        </Route>
        <Route path="/movie/:id">
          <ErrorBoundary>
            <MoviePage />
          </ErrorBoundary>
        </Route>
        <Route path="/actor/:id">
          <ErrorBoundary>
            <ActorPage />
          </ErrorBoundary>
        </Route>
        <Route path="/search">
          <ErrorBoundary>
            <SearchPage />
          </ErrorBoundary>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
