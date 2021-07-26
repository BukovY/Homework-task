import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
    TOOLTIP_OPEN_CHANGE
} from "../constants";

export const languageChange = (language) => ({
  type: LANGUAGE_TOOLTIP_CHANGE,
  payload: language,
});

export const filterChange = (filter) => ({
  type: FILTER_CHANGE,
  payload: filter,
});

export const paginationChange = (num) => ({
  type: PAGINATION_CHANGE,
  payload: num,
});

export const searchChange = (searchString) => ({
  type: SEARCH_CHANGE,
  payload: searchString,
});

export const tooltipOpenChange = (isOpen) => ({
  type: TOOLTIP_OPEN_CHANGE,
  payload: isOpen
})