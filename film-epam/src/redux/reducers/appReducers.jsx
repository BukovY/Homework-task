import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  TOOLTIP_OPEN_CHANGE,
  RESET_FILTERS,
  SET_PAGE,
  API_KEY,
} from "../constants";

const initialState = {
  page: "main",
  paginationPage: 1,
  paginationMax: 5,
  search: "",
  languageSelected: "EN",
  languages: ["EN", "RU", "FR"],
  filter: ["Popular", "Top rated", "Upcoming"],
  activeFilter: "Popular",
  isTooltipLanguageOpen: false,
  isFetching: true,
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
      .addCase(getFilmsData.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getFilmsData.fulfilled, (state, action) => {
        state.isFetching = false;
        state.filmData = action.payload;
      })
      .addCase(getGenresMap.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getGenresMap.fulfilled, (state, action) => {
        state.isFetching = false;
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
      })
      .addCase(TOOLTIP_OPEN_CHANGE, (state, action) => {
        state.isTooltipLanguageOpen = action.payload;
      })
      .addCase(SET_PAGE, (state, action) => {
        state.page = action.payload;
      })
      .addCase(RESET_FILTERS, (state, action) => {
        state.paginationPage = 1;
        state.isTooltipLanguageOpen = false;
        state.activeFilter = "Popular";
        state.search = "";
        state.page = "main";
      });
  },
});

export default app.reducer;
