import { GithubActionTypes, Repository, REPOSITORIES_FETCH, REPOSITORIES_FETCH_SUCCESS, REPOSITORIES_FETCH_ERROR } from "./types";

export function fetchRepositories(): GithubActionTypes {
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
