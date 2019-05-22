import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "..";
import { SearchResultRepository } from "../search/types";
import { 
    BookmarkActionTypes,
    BookmarkedRepository,
    REPOSITORIES_BOOKMARK,
    REPOSITORIES_BOOKMARK_ERROR,
    REPOSITORIES_BOOKMARK_SUCCESS,
    REPOSITORIES_BOOKMARKED_FETCH,
    REPOSITORIES_BOOKMARKED_FETCH_SUCCESS,
    REPOSITORIES_BOOKMARKED_FETCH_ERROR
} from "./types";

export function bookmarkRepository(repository: SearchResultRepository): any {
    return function(dispatch: ThunkDispatch<AppState, void, BookmarkActionTypes>) {
        dispatch(requestRepositoryBookmark(repository))
    
        return axios.put(`${process.env.REACT_APP_BACKEND_URL}/repos/${repository.id}/bookmark`)
            .then(
                response => dispatch(bookmarkRepositorySuccess()),
                error => dispatch(bookmarkRepositoryError(error.message))
            );
      }
}

function requestRepositoryBookmark(repository: SearchResultRepository): BookmarkActionTypes {
    return {
        type: REPOSITORIES_BOOKMARK,
        repository: repository,
    }
}

export function bookmarkRepositorySuccess(): BookmarkActionTypes {
    return {
        type: REPOSITORIES_BOOKMARK_SUCCESS,
    }
}

export function bookmarkRepositoryError(errorMessage: string): BookmarkActionTypes {
    return {
        type: REPOSITORIES_BOOKMARK_ERROR,
        errorMessage: errorMessage,
    }
}

export function fetchBookmarkedRepositories(): any {
    return function(dispatch: ThunkDispatch<AppState, void, BookmarkActionTypes>) {
        dispatch(requestBookmarkedRepositories())
    
        return axios.get(`${process.env.REACT_APP_BACKEND_URL}/repos/bookmarks`)
            .then(
                response => dispatch(fetchBookmarkedRepositoriesSuccess(response.data)),
                error => dispatch(fetchBookmarkedRepositoriesError(error.message))
            );
      }
}

function requestBookmarkedRepositories(): BookmarkActionTypes {
    return {
        type: REPOSITORIES_BOOKMARKED_FETCH,
    }
}

export function fetchBookmarkedRepositoriesSuccess(fetchedRepos: BookmarkedRepository[]): BookmarkActionTypes {
    return {
        type: REPOSITORIES_BOOKMARKED_FETCH_SUCCESS,
        repositories: fetchedRepos,
    }
}

export function fetchBookmarkedRepositoriesError(errorMessage: string): BookmarkActionTypes {
    return {
        type: REPOSITORIES_BOOKMARKED_FETCH_ERROR,
        errorMessage: errorMessage,
    }
}