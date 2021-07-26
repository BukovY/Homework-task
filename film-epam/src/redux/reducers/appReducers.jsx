import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  TOOLTIP_OPEN_CHANGE,
} from "../constants";


const initialState = {
  paginationPage: 1,
  paginationMax: 5,
  search: "",
  languageSelected: "EN",
  languages: ["EN", "RU", "FR"],
  filter: ["Popular", "Top rated", "Upcoming"],
  activeFilter: 'Popular',
  isTooltipLanguageOpen: false,
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
    default:
      return state;
  }
};

export default appReducer;
