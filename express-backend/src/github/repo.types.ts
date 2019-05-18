export interface Repository {
    name: string;
}

export interface RepositoryModel {
    getRepos(searchTerm: string): Repository[];
}
