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

export const getSearchData = (searchString, page, language) => {
  let search = searchString;
  return async (dispatch) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${search
        .split(" ")
        .join("%20")}&page=${page}&include_adult=false`
    )
      .then((data) => data.json())
      .then((data) => {
        dispatch(
          setSearchMaxPage(data.total_pages >= 5 ? 5 : data.total_pages)
        );
        dispatch(setSearchRezult(data.results));
        dispatch(isNeedUpdateSearch(false));
      });
  };
};
