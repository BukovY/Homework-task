import React from "react";
import "./App.css";
import { store } from "./redux/store";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviePage from "./pages/MoviePage/MoviePage.jsx";

const App = () => {
  const page = store.selectPage;
  return (
    <div>
      <Header />
      {page === "main" ? <HomePage /> : ""}
      {page === "actor" ? "" : ""}
      {page === "movie" ? <MoviePage /> : ""}
    </div>
  );
};

export default App;
