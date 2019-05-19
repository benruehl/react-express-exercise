import { GithubState, GithubActionTypes, REPOSITORIES_FETCH, REPOSITORIES_FETCH_SUCCESS, REPOSITORIES_FETCH_ERROR } from "./types";

const initialState: GithubState = {
    errorMessage: null,
    repositories: [{
        id: 1,
        name: "lorem"
    },
    {
        id: 2,
        name: "ipsum"
    }],
};
  
export function githubReducer(state = initialState, action: GithubActionTypes): GithubState {
    switch (action.type) {
        case REPOSITORIES_FETCH:
            return {
                ...state,
                repositories: []
            }
        case REPOSITORIES_FETCH_SUCCESS:
            return {
                ...state,
                repositories: action.repositories
            }
        case REPOSITORIES_FETCH_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
};
