import { createStore, combineReducers } from "redux";
import { githubReducer } from "./github/reducers";

const store = createStore(githubReducer);

const rootReducer = combineReducers({
    github: githubReducer,
})
  
export type AppState = ReturnType<typeof rootReducer>

export default store;
