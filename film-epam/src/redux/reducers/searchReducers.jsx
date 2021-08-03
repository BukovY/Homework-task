import { SET_SEARCH_PAGE, API_KEY } from "../constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  searchPage: 1,
  searchMaxPage: 1,
  isFetchingSearch: false,
};

export const getSearchData = createAsyncThunk(
  "search/getSearchData",
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

const search = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchData.pending, (state, action) => {
        state.isFetchingSearch = true;
      })
      .addCase(getSearchData.fulfilled, (state, action) => {
        state.searchResults = action.payload.data;
        state.searchMaxPage = action.payload.searchMaxPage;
        state.isFetchingSearch = false;
      })
      .addCase(SET_SEARCH_PAGE, (state, action) => {
        state.searchPage = action.payload;
      });
  },
});

export default search.reducer;
