export interface Repository {
    name: string;
}

export interface RepositoryModel {
    getRepos(searchTerm: string): Promise<Repository[]>;
}

export interface RemoteGithubRepository {
    full_name: string;
    html_url: string;
}
