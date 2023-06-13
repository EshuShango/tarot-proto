import express, { Request, Response, Router } from "express";
import tarotRoute from "./tarotRoute.ts";

// import userRoute from "./userRoute.ts";

const router: Router = express.Router();

// Define routes
router.get("./tarot", tarotRoute);
// router.use("/user", userRoute);


// export default (router: express.Router) => {
//   tarotRoute(router);

//   // userRoute(router);
//   // router.use('/user', userRoute);
//   return router;
// };
