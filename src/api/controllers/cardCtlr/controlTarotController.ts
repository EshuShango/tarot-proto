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
// export default (router: express.Router) => {
//   // getTarotCards;
//   // getSingleCard;
//   // return router;
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
    // const card = await TarotCard.findById(req.params.id);
    const card = await getCardById(req.params.id);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: "Cant find by Id" });
  }
};
