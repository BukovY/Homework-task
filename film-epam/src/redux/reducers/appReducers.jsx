import {
  SEARCH_CHANGE,
  LANGUAGE_TOOLTIP_CHANGE,
  FILTER_CHANGE,
  PAGINATION_CHANGE,
  TOOLTIP_OPEN_CHANGE,
  SET_GENRES_MAP,
  SET_FILMS,
  RESET_FILTERS,
  SET_PAGE,
  API_KEY,
} from "../constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setGenresMap } from "../actions/appAction";
import {useSelector} from "react-redux";

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

const getGenresMap = createAsyncThunk(
    'appReducer/getGenresMap',
    async () => {
      const {languageSelected} = useSelector(state => state.appReducer);
      return fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=${languageSelected}&api_key=${API_KEY}`
      )
          .then((response) => {
            return response.json();
          })
          .then((response) => response.genres);
    }
)

const appReducer = createSlice({
  name: "appReducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGenresMap.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getGenresMap.fulfilled,((state, action) => {
        state.isFetching = false;
        state.genresMap = action.payload
      }))
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
      .addCase(SET_GENRES_MAP, (state, action) => {
        state.genresMap = action.payload;
      })
      .addCase(SET_FILMS, (state, action) => {
        state.filmData = action.payload;
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

export default appReducer.reducer;
