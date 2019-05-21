import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./search/reducers";
import { bookmarkReducer } from "./bookmark/reducers";

const rootReducer = combineReducers({
    search: searchReducer,
    bookmark: bookmarkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
  
export type AppState = ReturnType<typeof rootReducer>

export default store;
