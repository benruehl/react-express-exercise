import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { githubReducer } from "./github/reducers";
import { bookmarkReducer } from "./bookmark/reducers";

const rootReducer = combineReducers({
    github: githubReducer,
    bookmark: bookmarkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
  
export type AppState = ReturnType<typeof rootReducer>

export default store;
