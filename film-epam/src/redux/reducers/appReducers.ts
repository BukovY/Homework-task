import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  RESET_FILTERS,
  API_KEY,
} from "../constants";

const initialState = {
  paginationPage: 1,
  paginationMax: 5,
  search: "",
  languageSelected: "EN",
  languages: ["EN", "RU", "FR"],
  filter: ["Popular", "Top rated", "Upcoming"],
  activeFilter: "Popular",
  filmData: [],
  genresMap: [],
  isFetching: false,
};

export const getGenresMap = createAsyncThunk(
  "app/getGenresMap",
  async (languageSelected:string) => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=${languageSelected}&api_key=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => response.genres);
  }
);

interface InputsType {
  languageSelected: String;
  activeFilter: String;
  paginationPage: number;
}
export const getFilmsData = createAsyncThunk(
  "app/getFilmsData",
  async (inputs: InputsType) => {
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
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(getFilmsData.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getFilmsData.fulfilled, (state, action) => {
        state.isFetching = false;
        state.filmData = action.payload;
      })
      .addCase(getGenresMap.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getGenresMap.fulfilled, (state, action) => {
        state.isFetching = false;
        state.genresMap = action.payload;
      })
      .addCase(SEARCH_CHANGE, (state, action:any) => {
        state.search = action.payload;
      })
      .addCase(LANGUAGE_TOOLTIP_CHANGE, (state, action: any) => {
        state.languageSelected = action.payload;
      })
      .addCase(FILTER_CHANGE, (state, action: any) => {
        state.activeFilter = action.payload;
      })
      .addCase(PAGINATION_CHANGE, (state, action: any) => {
        state.paginationPage = action.payload;
      })
      .addCase(RESET_FILTERS, (state, action) => {
        state.paginationPage = 1;
        state.activeFilter = "Popular";
        state.search = "";
      });
  },
});
export default app.reducer;