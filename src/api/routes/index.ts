import express, { Request, Response } from "express";
import apiRoutes from "./api/index";
// import router from "./api/userRoute";

const router = express.Router();

export default (router: express.Router) => {
  apiRoutes(router);
  return router;
  // router.get("/", (req: Request, res: Response) => {
  //   res.send("Wrong Route !");
  // });
};

