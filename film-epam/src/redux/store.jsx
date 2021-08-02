import { createStore, combineReducers, applyMiddleware } from "redux";
import app from "./reducers/appReducers";
import movie from "./reducers/movieReducers";
import actor from "./reducers/actorReducers";
import search from "./reducers/searchReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  actor,
  app,
  movie,
  search,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
