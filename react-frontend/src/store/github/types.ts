import { Action } from "redux";

export interface Repository {
    id: number;
    name: string;
    isBookmarked: boolean;
}

export interface GithubState {
    repositories: Repository[];
    bookmarkedRepositories: Repository[];
    isFetching: boolean;
    lastUpdated: Date;
    errorMessage: string | null;
}

export const REPOSITORIES_FETCH = 'REPOSITORIES_FETCH';
export const REPOSITORIES_FETCH_SUCCESS = 'REPOSITORIES_FETCH_SUCCESS';
export const REPOSITORIES_FETCH_ERROR = 'REPOSITORIES_FETCH_ERROR';

interface FetchRepositoriesAction extends Action {
    type: typeof REPOSITORIES_FETCH;
}

interface FetchRepositoriesSuccessAction extends Action {
    type: typeof REPOSITORIES_FETCH_SUCCESS;
    repositories: Repository[];
}

interface FetchRepositoriesErrorAction extends Action {
    type: typeof REPOSITORIES_FETCH_ERROR;
    errorMessage: string;
}

export const REPOSITORIES_BOOKMARK = 'REPOSITORIES_BOOKMARK';
export const REPOSITORIES_BOOKMARK_SUCCESS = 'REPOSITORIES_BOOKMARK_SUCCESS';
export const REPOSITORIES_BOOKMARK_ERROR = 'REPOSITORIES_BOOKMARK_ERROR';

interface BookmarkRepositoryAction extends Action {
    type: typeof REPOSITORIES_BOOKMARK;
    repository: Repository;
}

interface BookmarkRepositorySuccessAction extends Action {
    type: typeof REPOSITORIES_BOOKMARK_SUCCESS;
}

interface BookmarkRepositoryErrorAction extends Action {
    type: typeof REPOSITORIES_BOOKMARK_ERROR;
    errorMessage: string;
}

export type GithubActionTypes =
    FetchRepositoriesAction |
    FetchRepositoriesSuccessAction |
    FetchRepositoriesErrorAction |
    BookmarkRepositoryAction |
    BookmarkRepositorySuccessAction |
    BookmarkRepositoryErrorAction;
