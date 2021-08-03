import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  RESET_FILTERS,
  SET_PAGE,
  API_KEY,
  HOMEPAGE_NEED_UPDATE,
} from "../constants";

const initialState = {
  page: "main",
  paginationPage: 1,
  paginationMax: 5,
  homepageNeedUpdate: true,
  search: "",
  languageSelected: "EN",
  languages: ["EN", "RU", "FR"],
  filter: ["Popular", "Top rated", "Upcoming"],
  activeFilter: "Popular",
  filmData: [],
  genresMap: [],
};

export const getGenresMap = createAsyncThunk(
  "app/getGenresMap",
  async (languageSelected) => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=${languageSelected}&api_key=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => response.genres);
  }
);

export const getFilmsData = createAsyncThunk(
  "app/getFilmsData",
  async (inputs) => {
    let languageIn = inputs.languageSelected;
    let categoryIn = inputs.activeFilter;
    return fetch(
      `https://api.themoviedb.org/3/movie/${categoryIn
        .split(" ")
        .map((el) => el.toLowerCase())
        .join(
          "_"
        )}?api_key=${API_KEY}&language=${languageIn.toLowerCase()}&page=${
        inputs.paginationPage
      }`
    )
      .then((response) => response.json())
      .then((response) => response.results);
  }
);

const app = createSlice({
  name: "app",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFilmsData.fulfilled, (state, action) => {
        state.filmData = action.payload;
        state.homepageNeedUpdate = false;
      })
      .addCase(getGenresMap.fulfilled, (state, action) => {
        state.genresMap = action.payload;
      })
      .addCase(SEARCH_CHANGE, (state, action) => {
        state.search = action.payload;
      })
      .addCase(LANGUAGE_TOOLTIP_CHANGE, (state, action) => {
        state.languageSelected = action.payload;
      })
      .addCase(FILTER_CHANGE, (state, action) => {
        state.activeFilter = action.payload;
      })
      .addCase(PAGINATION_CHANGE, (state, action) => {
        state.paginationPage = action.payload;
        state.homepageNeedUpdate = true;
      })
      .addCase(SET_PAGE, (state, action) => {
        state.page = action.payload;
      })
      .addCase(HOMEPAGE_NEED_UPDATE, (state, action) => {
        state.homepageNeedUpdate = action.payload;
      })
      .addCase(RESET_FILTERS, (state, action) => {
        state.paginationPage = 1;
        state.activeFilter = "Popular";
        state.search = "";
        state.page = "main";
        state.homepageNeedUpdate = true;
      });
  },
});

export default app.reducer;
