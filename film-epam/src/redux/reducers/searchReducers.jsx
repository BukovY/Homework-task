import {
  SET_SEARCH_RESULT,
  SET_SEARCH_PAGE,
  SET_SEARCH_MAX_PAGE,
  SEARCH_NEED_UPDATE,
    API_KEY,
} from "../constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  searchPage: 1,
  searchMaxPage: 1,
  needUpdate: false,
};

export const getSearchData = createAsyncThunk(
  "searchReducers/getSearchData",
  async (input) => {
    const obj = {};
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${
        input.languageSelected
      }&query=${input.search.split(" ").join("%20")}&page=${
        input.searchPage
      }&include_adult=false`
    )
      .then((data) => data.json())
      .then((data) => {
        obj.data = data.results;
        obj.searchMaxPage = data.total_pages >= 5 ? 5 : data.total_pages;
      });
    return obj;
  }
);

const searchReducers = createSlice({
  name: "searchReducers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchData.pending, (state) => {
        state.fetchingSearch = true;
      })
      .addCase(getSearchData.fulfilled, (state, action) => {
        state.fetchingSearch = false;
        state.searchResults = action.payload.data;
        state.searchMaxPage =  action.payload.searchMaxPage
      })
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
