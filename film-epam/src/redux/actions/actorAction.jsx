import {API_KEY, SET_ACTOR, SET_ACTOR_DATA} from "../constants";
import {setFilmData, setSelectedMovie} from "./movieAction";

export const setActor = (actorId) => ({
    type: SET_ACTOR,
    payload: actorId
})

export const setActorData = (data) => ({
    type: SET_ACTOR_DATA,
    payload: data
})

/*
data: {

    }
 */
export const getActorInfo = (index, language) => {
    let languageIn = language
    languageIn = languageIn.toLowerCase();
    return async (dispatch) => {
        const obj = {
            info: {},
            photo: [],
            knownBy: []
        }
    }
}

/*
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
        console.log(obj)
        dispatch(setFilmData(obj))
        dispatch(setSelectedMovie(index))
 */