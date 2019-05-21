import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "..";
import { 
    GithubActionTypes,
    Repository,
    REPOSITORIES_FETCH,
    REPOSITORIES_FETCH_SUCCESS,
    REPOSITORIES_FETCH_ERROR,
    REPOSITORIES_BOOKMARK,
    REPOSITORIES_BOOKMARK_ERROR,
    REPOSITORIES_BOOKMARK_SUCCESS,
    REPOSITORIES_BOOKMARKED_FETCH,
    REPOSITORIES_BOOKMARKED_FETCH_SUCCESS,
    REPOSITORIES_BOOKMARKED_FETCH_ERROR
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

export function bookmarkRepository(repository: Repository): any {
    return function(dispatch: ThunkDispatch<AppState, void, GithubActionTypes>) {
        dispatch(requestRepositoryBookmark(repository))
    
        return axios.put(`http://localhost:4000/repos/${repository.id}/bookmark`)
            .then(
                response => dispatch(bookmarkRepositorySuccess()),
                error => dispatch(bookmarkRepositoryError(error.message))
            );
      }
}

function requestRepositoryBookmark(repository: Repository): GithubActionTypes {
    return {
        type: REPOSITORIES_BOOKMARK,
        repository: repository,
    }
}

export function bookmarkRepositorySuccess(): GithubActionTypes {
    return {
        type: REPOSITORIES_BOOKMARK_SUCCESS,
    }
}

export function bookmarkRepositoryError(errorMessage: string): GithubActionTypes {
    return {
        type: REPOSITORIES_BOOKMARK_ERROR,
        errorMessage: errorMessage,
    }
}

export function fetchBookmarkedRepositories(): any {
    return function(dispatch: ThunkDispatch<AppState, void, GithubActionTypes>) {
        dispatch(requestBookmarkedRepositories())
    
        return axios.get(`http://localhost:4000/repos/bookmarks`)
            .then(
                response => dispatch(fetchBookmarkedRepositoriesSuccess(response.data)),
                error => dispatch(fetchBookmarkedRepositoriesError(error.message))
            );
      }
}

function requestBookmarkedRepositories(): GithubActionTypes {
    return {
        type: REPOSITORIES_BOOKMARKED_FETCH,
    }
}

export function fetchBookmarkedRepositoriesSuccess(fetchedRepos: Repository[]): GithubActionTypes {
    return {
        type: REPOSITORIES_BOOKMARKED_FETCH_SUCCESS,
        repositories: fetchedRepos,
    }
}

export function fetchBookmarkedRepositoriesError(errorMessage: string): GithubActionTypes {
    return {
        type: REPOSITORIES_BOOKMARKED_FETCH_ERROR,
        errorMessage: errorMessage,
    }
}
