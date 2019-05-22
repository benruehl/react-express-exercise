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
            timeout: 5000,
        });
    }

    public async getRepos(searchTerm: string): Promise<Repository[]> {
        try {
            if (!searchTerm || searchTerm === "") {
                searchTerm = "stars:>=10000";
            }

            const response = await this.client.get(
                `/search/repositories?q=${searchTerm}&sort=stars`,
            );

            return response.data.items.map(
                (item: RemoteGithubRepository): Repository => ({
                    id: item.id,
                    name: item.full_name,
                    description: item.description,
                    githubUrl: item.html_url,
                    starsCount: item.watchers_count,
                    forksCount: item.forks_count,
                }),
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

    public removeBookmark(repoId: number): void {
        const index = this.bookmarks.indexOf(repoId);
        if (index >= 0) {
            this.bookmarks.splice(index, 1);
        }
    }

    public async getBookmarkedRepos(): Promise<Repository[]> {
        const bookmarkedRepos = await Promise.all(
            this.bookmarks.map(
                async (bookmark): Promise<Repository> => {
                    try {
                        const response = await this.client.get(
                            `/repositories/${bookmark}`,
                        );

                        return {
                            id: response.data.id,
                            name: response.data.full_name,
                            description: response.data.description,
                            githubUrl: response.data.html_url,
                            starsCount: response.data.watchers_count,
                            forksCount: response.data.forks_count,
                        };
                    } catch (e) {
                        console.error(e);
                        return {
                            id: NaN,
                            name: "",
                            description: "",
                            githubUrl: "",
                            starsCount: 0,
                            forksCount: 0,
                        };
                    }
                },
            ),
        );

        return bookmarkedRepos.filter(
            (bookmarkedRepo): boolean => !isNaN(bookmarkedRepo.id),
        );
    }
}

export default GithubRepoModel;
