import { GithubState, GithubActionTypes, REPOSITORIES_FETCH, REPOSITORIES_FETCH_SUCCESS, REPOSITORIES_FETCH_ERROR } from "./types";

const initialState: GithubState = {
    errorMessage: null,
    isFetching: false,
    lastUpdated: new Date(),
    repositories: [],
};
  
export function githubReducer(state = initialState, action: GithubActionTypes): GithubState {
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
        default:
            return state
    }
};
