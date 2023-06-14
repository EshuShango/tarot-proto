import express from "express";
import SearchFind from "./cardRouter/searchRoute.ts";
import CreateUpdateDelete from "./cardRouter/createRoute.ts";
// import users from "./userRoute.ts";
// import authentication from "./authentication.ts"

const router = express.Router();
//main route
export default (): express.Router => {
  console.log("Hello");
  // Create/Update/Delete_card handler
  CreateUpdateDelete(router);
  // Search/Find_card handler
  SearchFind(router);


  return router;
};
