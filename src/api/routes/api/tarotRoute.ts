import express, { Request, Response } from "express";
// import { TarotCard } from "../../models/Tarotcard";
import {
  getTarotCards,
  getSingleCard,
  createTarotCard,
  updateTarotCard,
  deleteTarotCard,
} from "../../controllers/tarotController";

// const router = express.Router();
//! Need to create the functions in the controller

// Define routes
//* router.get("/api/tarot/", getTarotCards);
//get all cards
//* router.get("/api/tarot/:id", getSingleCard);
//get single card
// router.post("/api/tarot/", createTarotCard);
//create a card
//* router.put("/:id", updateTarotCard);
//update a card
//* router.delete("/:id", deleteTarotCard);
//delete a card
// export default router;

// router.get("/tarot", (req: Request, res: Response) => {
//   res.send("Wrong Route !");
// });
export default (router: express.Router) => {
  // Define routes
  router.get("/", getTarotCards);
  //get all cards
  router.get("/:id", getSingleCard);
  //get single card
  router.post("/", createTarotCard);
  //create a card
  //* router.put("/:id", updateTarotCard);
  //update a card
  //* router.delete("/:id", deleteTarotCard);
  //delete a card
};
