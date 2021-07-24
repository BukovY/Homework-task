import React from "react";
import "./App.css";
import { store } from "./redux/store";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";
import ActorPage from "./pages/ActorPage/ActorPage";
import {ErrorBoundary} from "./components/ErrorBoundary/Error Boundary";

const App = () => {
  const page = store.selectPage;
  return (
    <div>
      <Header />
      {page === "main" ? <ErrorBoundary><HomePage /></ErrorBoundary> : ""}
      {page === "actor" ? <ErrorBoundary><ActorPage/></ErrorBoundary> : ""}
      {page === "movie" ? <ErrorBoundary><MoviePage /></ErrorBoundary> : ""}
    </div>
  );
};

export default App;
