import express, { Router, Request, Response, NextFunction } from "express";
import {
  createTarotCard,
  updateTarotCard,
  deleteTarotCard,
} from "../../controllers/cardCtlr/createTarotController";

const router = Router();
router.post("/admin/cards", createTarotCard);
router.put("/admin/cards/:id", updateTarotCard);
router.delete("/admin/cards/:id", deleteTarotCard);

export default router;

// export default (router: express.Router) => {
//   router.post("/admin/cards", createTarotCard);
//   console.log("Hello Again !!!");
//   console.log("Route triggered");
//   // console.log("POST /admin/cards route triggered");
//   // router.put("/admin/cards/:id", updateTarotCard);
//   // router.delete("/admin/cards/:id", deleteTarotCard);
// };
