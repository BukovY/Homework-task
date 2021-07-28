import {SEARCH_CHANGE, SET_SEARCH_RESULT, SET_SEARCH_PAGE, SET_SEARCH_RENDER} from "../constants";

const initialState = {
    searchResults: [],
    searchPage: 1,
    isSearchRender: false
}

const searchReducers = (state = initialState, action) => {
    switch (action.type){
        case SET_SEARCH_RESULT:
            return{
                ...state,
                searchResults: action.payload
            }
        case SET_SEARCH_PAGE:
            return {
                ...state,
                searchPage: action.payload
            }
        case SET_SEARCH_RENDER:
            return{
                ...state,
                isSearchRender: action.payload
            }
        default:
            return state;
    }
}
export default searchReducers;