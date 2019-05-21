import { 
    BookmarkState,
    BookmarkActionTypes,
    REPOSITORIES_BOOKMARK,
    REPOSITORIES_BOOKMARKED_FETCH,
    REPOSITORIES_BOOKMARKED_FETCH_SUCCESS,
    REPOSITORIES_BOOKMARKED_FETCH_ERROR,
} from "./types";

const initialState: BookmarkState = {
    errorMessage: null,
    isFetching: false,
    lastUpdated: new Date(),
    repositories: [],
};

export function bookmarkReducer(state = initialState, action: BookmarkActionTypes): BookmarkState {
    switch (action.type) {
        case REPOSITORIES_BOOKMARK:
            return {
                ...state,
                repositories: [...state.repositories, action.repository],
            }
        case REPOSITORIES_BOOKMARKED_FETCH:
            return {
                ...state,
                repositories: [],
                isFetching: true,
            }
        case REPOSITORIES_BOOKMARKED_FETCH_SUCCESS:
            return {
                ...state,
                repositories: action.repositories,
                isFetching: false,
                errorMessage: "",
            }
        case REPOSITORIES_BOOKMARKED_FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.errorMessage,
            }
        default:
            return state
    }
};
