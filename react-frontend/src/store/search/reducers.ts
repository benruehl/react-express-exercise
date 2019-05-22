import { 
    SearchState,
    SearchActionTypes,
    REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_ERROR,
} from "./types";
import { REPOSITORIES_BOOKMARK, BookmarkActionTypes } from "../bookmark/types";

const initialState: SearchState = {
    errorMessage: null,
    isFetching: false,
    lastUpdated: new Date(),
    repositories: [],
    bookmarkedRepositories: [],
};
  
export function searchReducer(state = initialState, action: SearchActionTypes | BookmarkActionTypes): SearchState {
    switch (action.type) {
        case REPOSITORIES_FETCH:
            return {
                ...state,
                repositories: [],
                isFetching: true,
            }
        case REPOSITORIES_FETCH_SUCCESS:
            return {
                ...state,
                repositories: action.repositories.map(r => action.bookmarkedRepositoryIds.includes(r.id) ? {...r, isBookmarked: true} : r),
                isFetching: false,
                errorMessage: "",
            }
        case REPOSITORIES_FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.errorMessage,
            }
        case REPOSITORIES_BOOKMARK:
            return {
                ...state,
                repositories: state.repositories.map(r => r.id !== action.repository.id ? r : {...r, isBookmarked: true}),
            }
        default:
            return state
    }
};
