import {SET_FILM, GET_FILM} from "../constants";

export const setFilm = (index) => ({
    type: SET_FILM,
    payload: index
})