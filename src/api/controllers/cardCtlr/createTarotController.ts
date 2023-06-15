import express, { Request, Response, Router } from "express";

import {
  TarotCard,
  ITarotCardDocument,
  createCard,
  getCardById,
  getCardByArcana,
  getCardByCrdNbmr,
  getCardBySuit,
} from "../../models/Tarotcard";

// won't need this for a while after the initial creation of the cards
// a later version will have a user create a card or deck of cards
export const createTarotCard = async (req: Request, res: Response) => {
  try {
    // console.log("Wtf");
    const { name, cardNumber, arcana } = req.body;
    console.log(req.body);
    if (!name || !cardNumber || !arcana) {
      return res.status(400).json({ message: "input field req" });
    }
    // const existingCard = getCardById(id);
    // if (existingCard) {
    //   return res.status(400).json({ message: "Card already exist!" });;
    // }
    const existingCard = await getCardByCrdNbmr(cardNumber);
    if (existingCard) {
      return res.status(400).json({ message: "Card already exist!" });
    }

    const newCard = await createCard({
      name: String,
      cardNumber: Number,
      arcana: String,
    });

    return res.status(200).json(newCard);
  } catch (err) {
    console.error(err instanceof Error );
    res.status(500).json({ message: "Cant create a card!" });
  }
};
// only admin can update a card.
export const updateTarotCard = async (req: Request, res: Response) => {
  try {
    const updatedCard = await TarotCard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: "Cant update by Id" });
  }
};
// only admin can delete a card.
export const deleteTarotCard = async (req: Request, res: Response) => {
  try {
    await TarotCard.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Card deleted" });
  } catch (error) {
    res.status(500).json({ message: "Cant delete the card" });
  }
};
