import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

import RootRouter from "@routes/RootRouter";

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        dotenv.config();
    }

    private middleware(): void {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.use("/", RootRouter);
    }
}

export default new App().express;
