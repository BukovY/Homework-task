import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducers";
import movieReducers from "./reducers/movieReducers";
import actorReducers from "./reducers/actorReducers";
import searchReducers from "./reducers/searchReducers";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  actorReducers,
  appReducer,
  movieReducers,
  searchReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
