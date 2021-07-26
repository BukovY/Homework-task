import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
