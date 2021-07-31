import { SET_FILM, SET_FILM_DATA, CREW_OPEN_CHANGE } from "../constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMovie: "",
  isCrewOpen: false,
  data: {
    info: {},
    people: [],
    known: [],
    images: [],
  },
};

const movieReducers = createSlice({
  name: "movieReducers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SET_FILM, (state, action) => {
        state.selectedMovie = action.payload;
      })
      .addCase(SET_FILM_DATA, (state, action) => {
        state.data = action.payload;
      })
      .addCase(CREW_OPEN_CHANGE, (state, action) => {
        state.isCrewOpen = action.payload;
      });
  },
});

export default movieReducers.reducer;
