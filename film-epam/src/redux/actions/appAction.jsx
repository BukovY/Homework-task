import { createAction } from "@reduxjs/toolkit";
import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  TOOLTIP_OPEN_CHANGE,
  RESET_FILTERS,
  SET_PAGE,
  HOMEPAGE_NEED_UPDATE,
} from "../constants";

export const setLanguage = createAction(LANGUAGE_TOOLTIP_CHANGE);
export const setFilter = createAction(FILTER_CHANGE);
export const setPaginationPage = createAction(PAGINATION_CHANGE);
export const setSearchValue = createAction(SEARCH_CHANGE);
export const isTooltipOpen = createAction(TOOLTIP_OPEN_CHANGE);
export const resetFilters = createAction(RESET_FILTERS);
export const setPage = createAction(SET_PAGE);
export const isHomepageNeedUpdate = createAction(HOMEPAGE_NEED_UPDATE);
