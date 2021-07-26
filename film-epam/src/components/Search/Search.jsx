import React from "react";
import searchIcon from "../../static/img/search.png";
import s from "./Search.module.sass";
import {useSelector, useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/actions/appAction";

const Search = () => {
    const {search} = useSelector((state) => state.appReducer)
    const dispatch = useDispatch()
  return (
    <form>
      <input
        type="text"
        placeholder="Movies, person, movie, theaters"
        className={s.search}
        value={search}
        onChange={(el) => dispatch(setSearchValue(el.target.value))}
      />
      <img src={searchIcon} alt="search" className={s.search_icon} />
    </form>
  );
};

export default Search;
