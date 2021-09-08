import { createAction } from "@reduxjs/toolkit";
import { SET_SEARCH_PAGE } from "../constants";

export const setSearchPage = createAction<number>(SET_SEARCH_PAGE);
