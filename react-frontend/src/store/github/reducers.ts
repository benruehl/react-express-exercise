import { 
    GithubState,
    GithubActionTypes,
    REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_ERROR,
} from "./types";
import { REPOSITORIES_BOOKMARK, BookmarkActionTypes } from "../bookmark/types";

const initialState: GithubState = {
    errorMessage: null,
    isFetching: false,
    lastUpdated: new Date(),
    repositories: [],
    bookmarkedRepositories: [],
};
  
export function githubReducer(state = initialState, action: GithubActionTypes | BookmarkActionTypes): GithubState {
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
                repositories: action.repositories,
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
