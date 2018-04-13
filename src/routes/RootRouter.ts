import { NextFunction, Request, Response, Router } from "express";

export class RootRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public async welcome(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({ message: "Welcome" });
    }

    public init() {
        this.router.get("/", this.welcome);
    }
}

export default new RootRouter().router;
