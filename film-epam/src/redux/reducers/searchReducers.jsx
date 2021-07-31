import {
  SET_SEARCH_RESULT,
  SET_SEARCH_PAGE,
  SET_SEARCH_MAX_PAGE,
  SEARCH_NEED_UPDATE,
} from "../constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  searchPage: 1,
  searchMaxPage: 1,
  needUpdate: false,
};

const searchReducers = createSlice({
  name: "searchReducers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SET_SEARCH_RESULT, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(SET_SEARCH_PAGE, (state, action) => {
        state.searchPage = action.payload;
      })
      .addCase(SET_SEARCH_MAX_PAGE, (state, action) => {
        state.searchMaxPage = action.payload;
      })
      .addCase(SEARCH_NEED_UPDATE, (state, action) => {
        state.needUpdate = action.payload;
      });
  },
});

export default searchReducers.reducer;
