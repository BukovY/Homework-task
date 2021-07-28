import {SET_FILM, API_KEY, SET_FILM_DATA} from "../constants";
import {setFilmsData, setIsFetching} from "./appAction";

export const setSelectedMovie = (selectedMovie) => ({
    type: SET_FILM,
    payload: selectedMovie
})

export const setFilmData = (obj) => ({
    type: SET_FILM_DATA,
    payload: obj
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
        // получим инфо о фильме
        const urlGetFilmInfo = `https://api.themoviedb.org/3/movie/${index}?api_key=${API_KEY}&language=${languageIn}`
        const info = await fetch(urlGetFilmInfo)
        const filmInfo = await info.json()
        console.log(filmInfo)

        // получим инфо о группе
        const urlGetPeople = `
https://api.themoviedb.org/3/movie/${index}/credits?api_key=${API_KEY}&language=${languageIn}`
        const people = await fetch(urlGetPeople)
        const peopleInfo = await people.json()
        console.log(peopleInfo)

        // получим рекомендации
        const urlGetRecomendations = `https://api.themoviedb.org/3/movie/${index}/recommendations?api_key=${API_KEY}&language=${languageIn}&page=1`
        const recomendations = await fetch(urlGetRecomendations)
        const recomendationsData = await recomendations.json()
        console.log(recomendationsData)

        dispatch(setFilmData(obj))
    }
}