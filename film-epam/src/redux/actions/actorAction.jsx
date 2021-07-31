import { API_KEY, SET_ACTOR, SET_ACTOR_DATA } from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const setActor = createAction(SET_ACTOR);

export const setActorData = createAction(SET_ACTOR_DATA);

export const getActorInfo = (index, language) => {
  let languageIn = language;
  return async (dispatch) => {
    const obj = {};
    await fetch(
      `https://api.themoviedb.org/3/person/${index}?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`
    )
      .then((data) => data.json())
      .then((info) => (obj.info = info));
    await fetch(
      `https://api.themoviedb.org/3/person/${index}/images?api_key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((info) => (obj.photo = info.profiles));
    await fetch(`
https://api.themoviedb.org/3/person/${index}/movie_credits?api_key=${API_KEY}&language=${languageIn.toLowerCase()}`)
      .then((data) => data.json())
      .then((info) => (obj.knownBy = info.cast));
    dispatch(setActorData(obj));
  };
};
