import express from "express";
import CreateUpdateDelete from "./cardRouter/createRoute.ts";
// import router from "./cardRouter/createRoute.ts";
import SearchFind from "./cardRouter/searchRoute.ts";
// import users from "./userRoute.ts";
// import authentication from "./authentication.ts"

//main route
const router = express.Router();
router.use(CreateUpdateDelete,SearchFind)
// router.use(SearchFind);
export default router

// export default (): express.Router => {
// //   console.log("Hello");
//   // Create/Update/Delete_card handler
//   CreateUpdateDelete(router);
// //   // Search/Find_card handler
// //   // SearchFind(router);

//   return router;
// };
