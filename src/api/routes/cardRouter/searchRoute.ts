import express, { Request, Response, Router } from "express";
import {
  getTarotCards,
  getSingleCard,
} from "../../controllers/cardCtlr/controlTarotController";

// export default (router: express.Router) => {

//   router.get("/cards", getTarotCards);
//   router.get("/cards/:id", getSingleCard);
// };

const router = express.Router();
// // Define routes
router.get("/cards", getTarotCards);
//get all cards
router.get("/cards/:id", getSingleCard);
//get single card
export default router;

