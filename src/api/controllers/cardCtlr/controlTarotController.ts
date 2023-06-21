import express, { Request, Response, Router } from "express";
import {
  TarotCard,
  ITarotCardDoc,
  getCardById,
  getCardByArcana,
  getCardByCrdNbmr,
  getCardBySuit,
  getCards,
} from "../../models/Tarotcard";
// import {
//   TarotCard,
//   ITarotCardDocument,
//   getCardById,
//   getCardByArcana,
//   getCardByCrdNbmr,
//   getCardBySuit,
//   getCards,
// } from "../../models";

// module.exports = {
//   async getTarotCards(req: Request, res: Response) {
//     try {
//       const cards = await getCards();
//       res.status(200).json(cards);
//     } catch (error) {
//       res.status(500).json({ message: "Server Error" });
//     }
//   },
//   async getSingleCard(req: Request, res: Response) {
//     try {
//       // const card = await TarotCard.findById(req.params.id);
//       const card = await getCardById(req.params.id);
//       res.status(200).json(card);
//     } catch (error) {
//       res.status(500).json({ message: "Cant find by Id" });
//     }
//   },
// };
export const getTarotCards = async (req: Request, res: Response) => {
  try {
    const cards = await getCards();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
export const getSingleCard = async (req: Request, res: Response) => {
  try {
    const card = await getCardById(req.params.id);
    console.log(card);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: "Cant find by Id" });
  }
};
