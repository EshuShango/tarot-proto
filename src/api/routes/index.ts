import express, {Request, Response } from "express";
import apiRoutes from "./api/index.ts"

const router = express.Router();

router.use("/api", apiRoutes);

router.get("/", (req: Request, res: Response) => {
    res.send("Wrong Route !");
});

export default router;