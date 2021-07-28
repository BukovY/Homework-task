import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  TOOLTIP_OPEN_CHANGE,
  SET_GENRES_MAP,
  SET_FILMS,
  RESET_FILTERS,
  SET_PAGE,
} from "../constants";

const initialState = {
  page: "main",
  paginationPage: 1,
  paginationMax: 5,
  search: "",
  languageSelected: "EN",
  languages: ["EN", "RU", "FR"],
  filter: ["Popular", "Top rated", "Upcoming"],
  activeFilter: "Popular",
  isTooltipLanguageOpen: false,
  isFetching: true,
  filmData: [],
  genresMap: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHANGE:
      return {
        ...state,
        search: action.payload,
      };
    case LANGUAGE_TOOLTIP_CHANGE:
      return {
        ...state,
        languageSelected: action.payload,
      };
    case FILTER_CHANGE:
      return {
        ...state,
        activeFilter: action.payload,
      };
    case PAGINATION_CHANGE:
      return {
        ...state,
        paginationPage: action.payload,
      };
    case TOOLTIP_OPEN_CHANGE:
      return {
        ...state,
        isTooltipLanguageOpen: action.payload,
      };
    case SET_GENRES_MAP:
      return {
        ...state,
        genresMap: action.payload,
      };
    case SET_FILMS:
      return {
        ...state,
        filmData: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case RESET_FILTERS:
      return {
        ...state,
        paginationPage: 1,
        isTooltipLanguageOpen: false,
        activeFilter: "Popular",
        search: "",
        page: "main",
      };
    default:
      return state;
  }
};

export default appReducer;
