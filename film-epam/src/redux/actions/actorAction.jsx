import { API_KEY, SET_ACTOR, SET_ACTOR_DATA } from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const setActor = createAction(SET_ACTOR);

export const setActorData = createAction(SET_ACTOR_DATA);

export const getActorInfo = (index, language) => {
  let languageIn = language;
  languageIn = languageIn.toLowerCase();
  return async (dispatch) => {
    const obj = {
      info: {},
      photo: [],
      knownBy: [],
    };
    const urlActorInfo = `https://api.themoviedb.org/3/person/${index}?api_key=${API_KEY}&language=${languageIn}`;
    const info = await fetch(urlActorInfo);
    const actorInfo = await info.json();
    const urlGetPhotoActor = `https://api.themoviedb.org/3/person/${index}/images?api_key=${API_KEY}`;
    const photo = await fetch(urlGetPhotoActor);
    const actorPhoto = await photo.json();
    const getKnownBy = `
https://api.themoviedb.org/3/person/${index}/movie_credits?api_key=${API_KEY}&language=${languageIn}`;
    const knownBy = await fetch(getKnownBy);
    const actorKnown = await knownBy.json();
    obj.info = actorInfo;
    obj.photo = actorPhoto.profiles;
    obj.knownBy = actorKnown.cast;
    dispatch(setActorData(obj));
  };
};
