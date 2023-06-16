import express from "express";
import CreateUpdateDelete from "./cardRouter/createRoute.ts";
import SearchFind from "./cardRouter/searchRoute.ts";
// import users from "./userRoute.ts";
// import authentication from "./authentication.ts"

//main route
export default (): express.Router => {
  const router = express.Router();
  // Create/Update/Delete_card handler
  CreateUpdateDelete(router);
  // Search/Find_card handler
  SearchFind(router);

  return router;
};

// const router = express.Router();
// router.use(CreateUpdateDelete,SearchFind)
// export default router
