import React from "react";
import search from "../../static/img/search.png";
import "./Search.css";

const Search = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Movies, person, movie, theaters"
        className="search"
      />
      <img src={search} alt="search" className="search_icon" />
    </form>
  );
};

export default Search;
