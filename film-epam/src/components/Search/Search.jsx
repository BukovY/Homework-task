import React from "react";
import search from "../../static/img/search.png";
import s from  "./Search.module.sass";

const Search = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Movies, person, movie, theaters"
        className={s.search}
      />
      <img src={search} alt="search" className={s.search_icon} />
    </form>
  );
};

export default Search;
