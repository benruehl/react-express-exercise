export interface Repository {
    id: number;
    name: string;
    description: string;
    githubUrl: string;
    starsCount: number;
    forksCount: number;
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
    description: string;
    watchers_count: number;
    forks_count: number;
}
