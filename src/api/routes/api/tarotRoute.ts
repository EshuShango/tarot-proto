import express from "express";
import { TarotCard } from "../../models/Tarotcard";
import {
  getTarotCards,
  getSingleCard,
} from "../../controllers/tarotController";

export default (router: express.Router) => {
  // Define routes
  router.get("/tarot", );
  //get the TarotCards from the database
  router.get("/tarot/:id", );
  //get a single card from the database
};


