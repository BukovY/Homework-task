import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  TOOLTIP_OPEN_CHANGE,
  SET_FILMS,
  SET_GENRES_MAP,
  API_KEY,
  SET_FETCHING,
} from "../constants";

export const setLanguage = (language) => ({
  type: LANGUAGE_TOOLTIP_CHANGE,
  payload: language,
});

export const setFilter = (filter) => ({
  type: FILTER_CHANGE,
  payload: filter,
});

export const setPaginationPage = (num) => ({
  type: PAGINATION_CHANGE,
  payload: num,
});

export const setSearchValue = (searchString) => ({
  type: SEARCH_CHANGE,
  payload: searchString,
});

export const setTooltipOpenStatus = (isOpen) => ({
  type: TOOLTIP_OPEN_CHANGE,
  payload: isOpen,
});

export const setGenresMap = (map) => ({
  type: SET_GENRES_MAP,
  payload: map,
});

export const setFilmData = (data) => ({
  type: SET_FILMS,
  payload: data,
});
export const setIsFetching = (status) => ({
  type: SET_FETCHING,
  payload: status,
});

export const getFilmsData = (category, language, page) => {
  language = language.toLowerCase();
  category = category
    .split(" ")
    .map((el) => el.toLowerCase())
    .join("_");
  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=${language}&page=${page}`;
  return async (dispatch) => {
    const response = await fetch(url);
    const filmData = await response.json();
    console.log(filmData.results);
    dispatch(setFilmData(filmData.results));
    dispatch(setIsFetching(false));
  };
};
