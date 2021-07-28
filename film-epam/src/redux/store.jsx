import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducers";
import movieReducers from "./reducers/movieReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  appReducer,
  movieReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
