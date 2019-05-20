import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { githubReducer } from "./github/reducers";

const rootReducer = combineReducers({
    github: githubReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
  
export type AppState = ReturnType<typeof rootReducer>

export default store;
