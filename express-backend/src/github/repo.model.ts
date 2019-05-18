import { RepositoryModel, Repository } from "./repo.types";

class GithubRepoModel implements RepositoryModel {
    public getRepos(searchTerm: string): Repository[] {
        return [{ name: "Lorem" }, { name: "Ipsum" }].filter(
            (repo): boolean => repo.name.startsWith(searchTerm),
        );
    }
}

export default GithubRepoModel;
