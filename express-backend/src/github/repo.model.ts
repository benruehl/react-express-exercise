import axios, { AxiosInstance } from "axios";
import {
    RepositoryModel,
    Repository,
    RemoteGithubRepository,
} from "./repo.types";

class GithubRepoModel implements RepositoryModel {
    private client: AxiosInstance;
    private bookmarks: number[] = [];

    public constructor() {
        this.client = axios.create({
            baseURL: "https://api.github.com",
            timeout: 1000,
        });
    }

    public async getRepos(searchTerm: string): Promise<Repository[]> {
        try {
            const response = await this.client.get(
                `/search/repositories?q=${searchTerm}`,
            );

            return response.data.items.map(
                (item: RemoteGithubRepository): Repository => {
                    return { id: item.id, name: item.full_name };
                },
            );
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    public addBookmark(repoId: number): void {
        if (!this.bookmarks.includes(repoId)) {
            this.bookmarks.push(repoId);
        }
    }
}

export default GithubRepoModel;
