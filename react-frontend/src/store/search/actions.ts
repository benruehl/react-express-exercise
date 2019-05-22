import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "..";
import { 
    SearchActionTypes,
    SearchResultRepository,
    REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_ERROR,
} from "./types";

export function fetchRepositories(searchTerm: string): any {
    return function(dispatch: ThunkDispatch<AppState, void, SearchActionTypes>) {
        dispatch(requestRepositories())
    
        return axios.get(`${process.env.REACT_APP_BACKEND_URL}/repos?q=${searchTerm}`)
            .then(
                response => dispatch(fetchRepositoriesSuccess(response.data)),
                error => dispatch(fetchRepositoriesError(error.message))
            );
      }
}

function requestRepositories(): SearchActionTypes {
    return {
        type: REPOSITORIES_FETCH,
    }
}

export function fetchRepositoriesSuccess(fetchedRepos: SearchResultRepository[]): SearchActionTypes {
    return {
        type: REPOSITORIES_FETCH_SUCCESS,
        repositories: fetchedRepos,
    }
}

export function fetchRepositoriesError(errorMessage: string): SearchActionTypes {
    return {
        type: REPOSITORIES_FETCH_ERROR,
        errorMessage: errorMessage,
    }
}
