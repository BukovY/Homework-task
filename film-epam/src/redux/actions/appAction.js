import { createAction } from "@reduxjs/toolkit";
import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  RESET_FILTERS,
} from "../constants";

export const setLanguage = createAction(LANGUAGE_TOOLTIP_CHANGE);
export const setFilter = createAction(FILTER_CHANGE);
export const setPaginationPage = createAction(PAGINATION_CHANGE);
export const setSearchValue = createAction(SEARCH_CHANGE);
export const resetFilters = createAction(RESET_FILTERS);