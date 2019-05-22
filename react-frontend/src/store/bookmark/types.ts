import { Action } from "redux";

export interface BookmarkedRepository {
    id: number;
    name: string;
    description: string;
    githubUrl: string;
    starsCount: number;
    forksCount: number;
}

export interface BookmarkState {
    repositories: BookmarkedRepository[];
    isFetching: boolean;
    lastUpdated: Date;
    errorMessage: string | null;
}

export const REPOSITORIES_BOOKMARK = 'REPOSITORIES_BOOKMARK';
export const REPOSITORIES_BOOKMARK_SUCCESS = 'REPOSITORIES_BOOKMARK_SUCCESS';
export const REPOSITORIES_BOOKMARK_ERROR = 'REPOSITORIES_BOOKMARK_ERROR';

interface BookmarkRepositoryAction extends Action {
    type: typeof REPOSITORIES_BOOKMARK;
    repository: BookmarkedRepository;
}

interface BookmarkRepositorySuccessAction extends Action {
    type: typeof REPOSITORIES_BOOKMARK_SUCCESS;
}

interface BookmarkRepositoryErrorAction extends Action {
    type: typeof REPOSITORIES_BOOKMARK_ERROR;
    errorMessage: string;
}

export const REPOSITORIES_BOOKMARKED_FETCH = 'REPOSITORIES_BOOKMARKED_FETCH';
export const REPOSITORIES_BOOKMARKED_FETCH_SUCCESS = 'REPOSITORIES_BOOKMARKED_FETCH_SUCCESS';
export const REPOSITORIES_BOOKMARKED_FETCH_ERROR = 'REPOSITORIES_BOOKMARKED_FETCH_ERROR';

interface FetchBookmarkedRepositoriesAction extends Action {
    type: typeof REPOSITORIES_BOOKMARKED_FETCH;
}

interface FetchBookmarkedRepositoriesSuccessAction extends Action {
    type: typeof REPOSITORIES_BOOKMARKED_FETCH_SUCCESS;
    repositories: BookmarkedRepository[];
}

interface FetchBookmarkedRepositoriesErrorAction extends Action {
    type: typeof REPOSITORIES_BOOKMARKED_FETCH_ERROR;
    errorMessage: string;
}

export type BookmarkActionTypes =
    BookmarkRepositoryAction |
    BookmarkRepositorySuccessAction |
    BookmarkRepositoryErrorAction |
    FetchBookmarkedRepositoriesAction |
    FetchBookmarkedRepositoriesSuccessAction |
    FetchBookmarkedRepositoriesErrorAction;
