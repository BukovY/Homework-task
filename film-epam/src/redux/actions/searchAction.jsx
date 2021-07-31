import { createAction } from "@reduxjs/toolkit";
import { SET_SEARCH_PAGE, SEARCH_NEED_UPDATE } from "../constants";

export const setSearchPage = createAction(SET_SEARCH_PAGE);
export const isNeedUpdateSearch = createAction(SEARCH_NEED_UPDATE);
