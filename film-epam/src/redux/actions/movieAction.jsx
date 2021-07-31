import {
  SET_FILM,
  API_KEY,
  SET_FILM_DATA,
  CREW_OPEN_CHANGE,
} from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const setSelectedMovie = createAction(SET_FILM);
export const setFilmData = createAction(SET_FILM_DATA);
export const crewOpenChange = createAction(CREW_OPEN_CHANGE);

export const getFilm = (index, language) => {
  let languageIn = language;
  return async (dispatch) => {
    const obj = {};
    await fetch(
      `https://api.themoviedb.org/3/movie/${index}?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`
    )
      .then((data) => data.json())
      .then((data) => (obj.info = data));
    await fetch(`
https://api.themoviedb.org/3/movie/${index}/credits?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`)
      .then((data) => data.json())
      .then((data) => (obj.people = data.cast));
    await fetch(
      `https://api.themoviedb.org/3/movie/${index}/recommendations?api_key=${API_KEY}&language=${languageIn.toLowerCase()}&page=1`
    )
      .then((data) => data.json())
      .then((data) => (obj.known = data.results));
    await fetch(
      `https://api.themoviedb.org/3/movie/${index}/images?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`
    )
      .then((data) => data.json())
      .then((data) => (obj.images = data.backdrops));
    dispatch(setFilmData(obj));
    dispatch(setSelectedMovie(index));
  };
};
