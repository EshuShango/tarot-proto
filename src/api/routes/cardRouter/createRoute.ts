import express, { Request, Response, Router } from "express";
import {
  createTarotCard,
  updateTarotCard,
  deleteTarotCard,
} from "../../controllers/cardCtlr/createTarotController";

export default (router: Router) => {
  console.log("Hello Again");
  router.post("/admin/cards", createTarotCard);
  router.put("/admin/cards/:id", updateTarotCard);
  router.delete("/admin/cards/:id", deleteTarotCard);
};
        