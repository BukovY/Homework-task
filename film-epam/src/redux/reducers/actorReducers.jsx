import {SET_ACTOR, SET_ACTOR_DATA} from "../constants";

const initialState = {
    actorId: '',
    data: {
        info: {},
        photo: [],
        knownBy: []
    }
}

const actorReducers = (state = initialState, action) => {
    switch (action.type){
        case SET_ACTOR:
            return{
                ...state,
                actorId: action.payload
            }
        case SET_ACTOR_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default actorReducers;