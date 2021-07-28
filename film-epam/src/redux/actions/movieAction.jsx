import {SET_FILM, API_KEY, SET_FILM_DATA, CREW_OPEN_CHANGE} from "../constants";
import {setFilmsData, setIsFetching} from "./appAction";

export const setSelectedMovie = (selectedMovie) => ({
    type: SET_FILM,
    payload: selectedMovie
})

export const setFilmData = (obj) => ({
    type: SET_FILM_DATA,
    payload: obj
})

export const crewOpenChange = (arg) => ({
    type: CREW_OPEN_CHANGE,
    payload: arg
})

export const getFilm = (index, language) => {
    let languageIn = language
    languageIn = languageIn.toLowerCase();
    return async (dispatch) => {
        const obj = {
            info: {},
            people: [],
            known: []
        }
        const urlGetFilmInfo = `https://api.themoviedb.org/3/movie/${index}?api_key=${API_KEY}&language=${languageIn}`
        const info = await fetch(urlGetFilmInfo)
        const filmInfo = await info.json()
        const urlGetPeople = `
https://api.themoviedb.org/3/movie/${index}/credits?api_key=${API_KEY}&language=${languageIn}`
        const people = await fetch(urlGetPeople)
        const peopleInfo = await people.json()
        const urlGetRecomendations = `https://api.themoviedb.org/3/movie/${index}/recommendations?api_key=${API_KEY}&language=${languageIn}&page=1`
        const recomendations = await fetch(urlGetRecomendations)
        const recomendationsData = await recomendations.json()
        obj.info = filmInfo
        obj.people = peopleInfo.cast
        obj.known = recomendationsData.results
        dispatch(setFilmData(obj))
        dispatch(setSelectedMovie(index))
    }
}