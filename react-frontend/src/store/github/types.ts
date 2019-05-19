import { Action } from "redux";

export interface Repository {
    id: number;
    name: string;
}

export interface GithubState {
    repositories: Repository[];
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

export type GithubActionTypes = FetchRepositoriesAction | FetchRepositoriesSuccessAction | FetchRepositoriesErrorAction;
