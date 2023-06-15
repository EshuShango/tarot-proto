import express, { Request, Response, Router } from "express";
import {
  TarotCard,
  ITarotCardDocument,
  getCardById,
  getCardByArcana,
  getCardByCrdNbmr,
  getCardBySuit,
  getCards,
} from "../../models/Tarotcard";

export const getTarotCards = async (req: Request, res: Response) => {
  try {
    // const cards = await TarotCard.find();
    const cards = await getCards()
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getSingleCard = async (req: Request, res: Response) => {
  try {
    const card = await TarotCard.findById(req.params.id);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: "Cant find by Id" });
  }
};
// // only admin can update a card.
// export const updateTarotCard = async (req: Request, res: Response) => {
//   try {
//     const updatedCard = await TarotCard.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(200).json(updatedCard);
//   } catch (error) {
//     res.status(500).json({ message: "Cant update by Id" });
//   }
// };
// // user won't be able to delete a card.
// export const deleteTarotCard = async (req: Request, res: Response) => {
//   try {
//     await TarotCard.findByIdAndRemove(req.params.id);
//     res.status(200).json({ message: "Card deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Cant delete the card" });
//   }
// };


