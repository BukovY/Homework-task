import {SET_FILM, SET_FILM_DATA} from "../constants";
import appReducer from "./appReducers";

const initialState = {
    selectedMovie: '',
    data: {
        info: {},
        people: [],
        known: []
    }
}

const movieReducers = (state = initialState, action) => {
    switch (action.type){
        case SET_FILM:
            return{
                ...state,
                selectedMovie: action.payload
            }
        case SET_FILM_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default movieReducers;