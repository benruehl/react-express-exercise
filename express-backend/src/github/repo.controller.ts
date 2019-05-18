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

    private searchRepos(req: express.Request, res: express.Response): void {
        const searchTerm: string = req.query.q;
        res.send(this.model.getRepos(searchTerm));
    }

    public getRouter(): express.Router {
        return this.router;
    }
}

export default GithubRepoController;
