import express from "express";
import { Controller } from "../core/controller.types";
import GithubRepoModel from "./repo.model";
import { RepositoryModel } from "./repo.types";

class GithubRepoController implements Controller {
    private router = express.Router();
    private routePrefix: string = "/repos";
    private model: RepositoryModel = new GithubRepoModel();

    public constructor() {
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router.get(this.routePrefix, this.searchRepos.bind(this));
    }

    private async searchRepos(
        req: express.Request,
        res: express.Response,
    ): Promise<void> {
        const searchTerm: string = req.query.q;
        res.send(await this.model.getRepos(searchTerm).then());
    }

    public getRouter(): express.Router {
        return this.router;
    }
}

export default GithubRepoController;
