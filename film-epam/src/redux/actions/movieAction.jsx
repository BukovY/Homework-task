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
  languageIn = languageIn.toLowerCase();
  return async (dispatch) => {
    const obj = {
      info: {},
      people: [],
      known: [],
      images: [],
    };
    const urlGetFilmInfo = `https://api.themoviedb.org/3/movie/${index}?api_key=${API_KEY}&language=${languageIn}`;
    const info = await fetch(urlGetFilmInfo);
    const filmInfo = await info.json();
    const urlGetPeople = `
https://api.themoviedb.org/3/movie/${index}/credits?api_key=${API_KEY}&language=${languageIn}`;
    const people = await fetch(urlGetPeople);
    const peopleInfo = await people.json();
    const urlGetRecomendations = `https://api.themoviedb.org/3/movie/${index}/recommendations?api_key=${API_KEY}&language=${languageIn}&page=1`;
    const recomendations = await fetch(urlGetRecomendations);
    const recomendationsData = await recomendations.json();
    const urlImages = `https://api.themoviedb.org/3/movie/${index}/images?api_key=${API_KEY}&language=${languageIn}`;
    const getImages = await fetch(urlImages);
    const images = await getImages.json();
    obj.info = filmInfo;
    obj.people = peopleInfo.cast;
    obj.known = recomendationsData.results;
    obj.images = images.backdrops;
    dispatch(setFilmData(obj));
    dispatch(setSelectedMovie(index));
  };
};
