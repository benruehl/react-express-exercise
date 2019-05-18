import axios, { AxiosInstance } from "axios";
import { RepositoryModel, Repository, RemoteGithubRepository } from "./repo.types";

class GithubRepoModel implements RepositoryModel {
    private client: AxiosInstance;

    public constructor() {
        this.client = axios.create({
            baseURL: "https://api.github.com",
            timeout: 10000,
        });
    }

    public async getRepos(searchTerm: string): Promise<Repository[]> {
        try {
            const response = await this.client.get(`/search/repositories?q=${searchTerm}`);

            return response.data.items.map(
                (item: RemoteGithubRepository): Repository => {
                    return { name: item.full_name };
                },
            );
        } catch (e) {
            console.error(e);
            return [];
        }
    }
}

export default GithubRepoModel;
