import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducers";
import movieReducers from "./reducers/movieReducers";
import actorReducers from "./reducers/actorReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  appReducer,
  movieReducers,
  actorReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
