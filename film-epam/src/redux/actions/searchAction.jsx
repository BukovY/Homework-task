import {
  API_KEY,
  SET_SEARCH_RESULT,
  SET_SEARCH_PAGE,
  SET_SEARCH_RENDER,
  SET_SEARCH_MAX_PAGE,
} from "../constants";

export const setSearchRezult = (data) => ({
  type: SET_SEARCH_RESULT,
  payload: data,
});
export const setSearchMaxPage = (num) => ({
  type: SET_SEARCH_MAX_PAGE,
  payload: num,
});

export const setSearchPage = (num) => ({
  type: SET_SEARCH_PAGE,
  payload: num,
});
export const setSearchRender = (act) => ({
  type: SET_SEARCH_RENDER,
  payload: act,
});
export const getSearchData = (searchString, page, language) => {
  let search = searchString;
  search = search.split(" ").join("%20");
  return async (dispatch) => {
    const urlGetFilmInfo = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${search}&page=${page}&include_adult=false`;
    const info = await fetch(urlGetFilmInfo);
    const searchRezult = await info.json();
    console.log(searchRezult);
    dispatch(setSearchMaxPage(searchRezult.total_pages));
    dispatch(setSearchRezult(searchRezult.results));
  };
};
