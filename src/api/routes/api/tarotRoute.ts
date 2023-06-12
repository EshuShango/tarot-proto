import express from "express";
import { TarotCard } from "../../models/Tarotcard";
import {
  getTarotCards,
  getSingleCard,
  updateTarotCard,
  deleteTarotCard
} from "../../controllers/tarotController";

//! Need to create the functions in the controller
export default (router: express.Router) => {
  // Define routes
  router.get("/", getTarotCards);
  //get all cards
  router.get("/:id", getSingleCard);
  //get single card
  // router.post("/", createTarotCard);
  //create a card
  router.put("/:id", updateTarotCard);
  //update a card
  router.delete("/:id", deleteTarotCard);
  //delete a card
};
