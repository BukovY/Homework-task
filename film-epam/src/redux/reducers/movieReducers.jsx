import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREW_OPEN_CHANGE, API_KEY } from "../constants";

const initialState = {
  isCrewOpen: false,
  fetchingFilm: false,
  data: {
    info: {},
    people: [],
    known: [],
    images: [],
  },
};
export const getFilm = createAsyncThunk("movie/getFilm", async (input) => {
  const index = input.selectedMovie;
  const languageIn = input.languageSelected;
  const obj = {
    data: {},
  };
  await fetch(
    `https://api.themoviedb.org/3/movie/${index}?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`
  )
    .then((data) => data.json())
    .then((data) => (obj.data.info = data));
  await fetch(`
https://api.themoviedb.org/3/movie/${index}/credits?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`)
    .then((data) => data.json())
    .then((data) => (obj.data.people = data.cast));
  await fetch(
    `https://api.themoviedb.org/3/movie/${index}/recommendations?api_key=${API_KEY}&language=${languageIn.toLowerCase()}&page=1`
  )
    .then((data) => data.json())
    .then((data) => (obj.data.known = data.results));
  await fetch(
    `https://api.themoviedb.org/3/movie/${index}/images?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`
  )
    .then((data) => data.json())
    .then((data) => (obj.data.images = data.backdrops));
  obj.index = index;
  return obj;
});

const movie = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFilm.pending, (state, action) => {
        state.fetchingFilm = true;
      })
      .addCase(getFilm.fulfilled, (state, action) => {
        state.fetchingFilm = false;
        state.data = action.payload.data;
      })
      .addCase(CREW_OPEN_CHANGE, (state, action) => {
        state.isCrewOpen = action.payload;
      })
  },
});

export default movie.reducer;
