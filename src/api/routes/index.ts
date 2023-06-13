import express, { Request, Response } from "express";
import apiRoutes from "./api/index";
// import router from "./api/userRoute";

const router = express.Router();

// Define routes
router.use("/api", apiRoutes);
// router.use("/user", router);

export default router;

// export default (router: express.Router) => {
//   apiRoutes(router);
//   return router;
//   // router.get("/", (req: Request, res: Response) => {
//   //   res.send("Wrong Route !");
//   // });
// };

