import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "..";
import { 
    GithubActionTypes,
    Repository,
    REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_ERROR,
} from "./types";

export function fetchRepositories(searchTerm: string): any {
    return function(dispatch: ThunkDispatch<AppState, void, GithubActionTypes>) {
        dispatch(requestRepositories())
    
        return axios.get(`http://localhost:4000/repos?q=${searchTerm}`)
            .then(
                response => dispatch(fetchRepositoriesSuccess(response.data)),
                error => dispatch(fetchRepositoriesError(error.message))
            );
      }
}

function requestRepositories(): GithubActionTypes {
    return {
        type: REPOSITORIES_FETCH,
    }
}

export function fetchRepositoriesSuccess(fetchedRepos: Repository[]): GithubActionTypes {
    return {
        type: REPOSITORIES_FETCH_SUCCESS,
        repositories: fetchedRepos,
    }
}

export function fetchRepositoriesError(errorMessage: string): GithubActionTypes {
    return {
        type: REPOSITORIES_FETCH_ERROR,
        errorMessage: errorMessage,
    }
}
