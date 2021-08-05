import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
