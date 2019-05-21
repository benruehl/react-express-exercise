import { Action } from "redux";

export interface SearchResultRepository {
    id: number;
    name: string;
    isBookmarked: boolean;
}

export interface SearchState {
    repositories: SearchResultRepository[];
    bookmarkedRepositories: SearchResultRepository[];
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
    repositories: SearchResultRepository[];
}

interface FetchRepositoriesErrorAction extends Action {
    type: typeof REPOSITORIES_FETCH_ERROR;
    errorMessage: string;
}

export type SearchActionTypes =
    FetchRepositoriesAction |
    FetchRepositoriesSuccessAction |
    FetchRepositoriesErrorAction;
