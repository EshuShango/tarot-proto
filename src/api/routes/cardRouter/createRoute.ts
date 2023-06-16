import express from "express";
import {
  createTarotCard,
  updateTarotCard,
  deleteTarotCard,
} from "../../controllers/cardCtlr/createTarotController";


export default (router: express.Router) => {
  router.post("/admin/cards", createTarotCard);
  router.put("/admin/cards/:id", updateTarotCard);
  router.delete("/admin/cards/:id", deleteTarotCard);
  // console.log("Create/Update/Delete Route triggered");
  return router;
};

// const router = express.Router();

// router.post("/admin/cards", createTarotCard);
// router.put("/admin/cards/:id", updateTarotCard);
// router.delete("/admin/cards/:id", deleteTarotCard);

// export default router;