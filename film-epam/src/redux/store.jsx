import {createStore, combineReducers} from "redux";
import appReducer from "./reducers/appReducers";

const rootReducer = combineReducers({
    appReducer
})

const store = createStore(
    rootReducer
)

export default store