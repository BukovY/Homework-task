import { ErrorBoundary } from "./components/ErrorBoundary";
import "./App.css";
import { Header } from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import ActorPage from "./pages/ActorPage/ActorPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { Route, Switch } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import React, { FC } from "react";

const App: FC = () => {
  return (
    <>
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
        <Route path="/search/:id">
          <ErrorBoundary>
            <SearchPage />
          </ErrorBoundary>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
