import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  TOOLTIP_OPEN_CHANGE,
  SET_FILMS,
  SET_GENRES_MAP,
  API_KEY,
  RESET_FILTERS,
  SET_PAGE,
} from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const setLanguage = createAction(LANGUAGE_TOOLTIP_CHANGE);
export const setFilter = createAction(FILTER_CHANGE);
export const setPaginationPage = createAction(PAGINATION_CHANGE);
export const setSearchValue = createAction(SEARCH_CHANGE);
export const setTooltipOpenStatus = createAction(TOOLTIP_OPEN_CHANGE);
export const setGenresMap = createAction(SET_GENRES_MAP);
export const setFilmsData = createAction(SET_FILMS);
export const resetFilters = createAction(RESET_FILTERS);
export const setPage = createAction(SET_PAGE);

export const getFilmsData = (category, language, page) => {
  let languageIn = language;
  let categoryIn = category;
  return async (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${categoryIn
        .split(" ")
        .map((el) => el.toLowerCase())
        .join(
          "_"
        )}?api_key=${API_KEY}&language=${languageIn.toLowerCase()}&page=${page}`
    )
      .then((response) => response.json())
      .then((response) => dispatch(setFilmsData(response.results)));
  };
};

export const getGenresMap = (languageSelected) => {
  return async (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=${languageSelected}&api_key=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => dispatch(setGenresMap(response.genres)));
  };
};
