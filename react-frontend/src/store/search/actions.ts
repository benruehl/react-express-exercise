import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import store, { AppState } from "..";
import { 
    SearchActionTypes,
    SearchResultRepository,
    REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_ERROR,
} from "./types";

export function fetchRepositories(searchTerm: string): any {
    return function(dispatch: ThunkDispatch<AppState, void, SearchActionTypes>, getState: () => AppState) {
        dispatch(requestRepositories());
    
        return axios.get(`${process.env.REACT_APP_BACKEND_URL}/repos?q=${searchTerm}`)
            .then(
                response => dispatch(fetchRepositoriesSuccess(response.data, getState().bookmark.repositories.map(r => r.id))),
                error => dispatch(fetchRepositoriesError(error.message))
            );
      }
}

function requestRepositories(): SearchActionTypes {
    return {
        type: REPOSITORIES_FETCH,
    }
}

export function fetchRepositoriesSuccess(fetchedRepos: SearchResultRepository[], bookmarkedRepoIds: number[]): SearchActionTypes {
    return {
        type: REPOSITORIES_FETCH_SUCCESS,
        repositories: fetchedRepos,
        bookmarkedRepositoryIds: bookmarkedRepoIds,
    }
}

export function fetchRepositoriesError(errorMessage: string): SearchActionTypes {
    return {
        type: REPOSITORIES_FETCH_ERROR,
        errorMessage: errorMessage,
    }
}
