import {SET_FILM, SET_FILM_DATA, CREW_OPEN_CHANGE} from "../constants";
import appReducer from "./appReducers";

const initialState = {
    selectedMovie: '',
    isCrewOpen: false,
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
        case CREW_OPEN_CHANGE:
            return{
                ...state,
                isCrewOpen: action.payload
            }
        default:
            return state;
    }
}
export default movieReducers;