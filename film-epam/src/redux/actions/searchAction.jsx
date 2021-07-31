import {
  API_KEY,
  SET_SEARCH_RESULT,
  SET_SEARCH_PAGE,
  SET_SEARCH_MAX_PAGE,
  SEARCH_NEED_UPDATE,
} from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const setSearchRezult = createAction(SET_SEARCH_RESULT);
export const setSearchMaxPage = createAction(SET_SEARCH_MAX_PAGE);
export const setSearchPage = createAction(SET_SEARCH_PAGE);
export const isNeedUpdateSearch = createAction(SEARCH_NEED_UPDATE);

export const getSearchData = (searchString, page, language, needUpdate) => {
  let search = searchString;
  search = search.split(" ").join("%20");
  return async (dispatch) => {
    const urlGetFilmInfo = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${search}&page=${page}&include_adult=false`;
    const info = await fetch(urlGetFilmInfo);
    const searchRezult = await info.json();
    dispatch(
      setSearchMaxPage(
        searchRezult.total_pages >= 5 ? 5 : searchRezult.total_pages
      )
    );
    dispatch(setSearchRezult(searchRezult.results));
    dispatch(isNeedUpdateSearch(false));
  };
};
