import express, { Request, Response, Router } from "express";
import { User } from "../models/User";
import { TarotCard, ITarotCardDocument } from "../models/Tarotcard";

export const getTarotCards = async (req: Request, res: Response) => {
  try {
    const cards = await TarotCard.find();
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
// user won't be able to delete a card.
export const deleteTarotCard = async (req: Request, res: Response) => {
  try {
    await TarotCard.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Card deleted" });
  } catch (error) {
    res.status(500).json({ message: "Cant delete the card" });
  }
};
// won't need this for a while after the initial creation of the cards
// a later version will have a user create a card or deck of cards
export const createTarotCard = async (req: Request, res: Response) => {
  try {
    const newCard: ITarotCardDocument = new TarotCard(req.body);
    const savedCard = await newCard.save();
    res.status(200).json(savedCard);
  } catch (error) {
    res.status(500).json({ message: "Cant create a card" });
  }
};