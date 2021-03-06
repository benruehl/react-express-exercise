import App from "./app";
import GithubRepoController from "./github/repo.controller";

const app = new App([new GithubRepoController()]);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(port);
