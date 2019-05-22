import express from "express";
import bodyParser from "body-parser";
import { Controller } from "./core/controller.types";
import cors from "cors";

class App {
    private app: express.Application;

    public constructor(controllers: Controller[]) {
        this.app = express();

        this.initMiddlewares();
        this.initControllers(controllers);
    }

    public listen(port: number): void {
        this.app.listen(
            port,
            (): void => {
                console.log(`App listening on port ${port}`);
            },
        );
    }

    private initMiddlewares(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }

    private initControllers(controllers: Controller[]): void {
        for (const controller of controllers) {
            this.app.use("/api/v1", controller.getRouter());
        }
    }
}

export default App;
