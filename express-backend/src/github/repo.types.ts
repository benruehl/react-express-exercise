export interface Repository {
    id: number;
    name: string;
}

export interface RepositoryModel {
    getRepos(searchTerm: string): Promise<Repository[]>;
    addBookmark(repoId: number): void;
    getBookmarkedRepos(): Promise<Repository[]>;
}

export interface RemoteGithubRepository {
    id: number;
    full_name: string;
    html_url: string;
}
