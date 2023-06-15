import express, { Request, Response, Router } from "express";
import { getTarotCards, getSingleCard } from "../../controllers/cardCtlr/controlTarotController";

export default (router: express.Router) => {
  
  router.get("/cards", getTarotCards);
  router.get("/cards/:id", getSingleCard);
};

// const router = express.Router();

// // Define routes
//  router.get("/api/tarot/", getTarotCards);
// //get all cards
//  router.get("/api/tarot/:id", getSingleCard);
// //get single card
// router.post("/api/tarot/", createTarotCard);
// //create a card
//  router.put("/:id", updateTarotCard);
// //update a card
//  router.delete("/:id", deleteTarotCard);
// //delete a card
// export default router;

// router.get("/tarot", (req: Request, res: Response) => {
//   res.send("Wrong Route !");
// });
