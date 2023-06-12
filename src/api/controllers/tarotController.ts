import express, { Request, Response, Router } from "express";
import {User} from "../models/User"
import {TarotCard} from "../models/Tarotcard"


  export const getTarotCards = async (req: Request, res: Response) => {
    try {
      const tarotCards = await TarotCard.find();
      res.json(tarotCards);
      
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
      
    }
  }

  export const getSingleCard = async (req: Request, res: Response) => {
    try {
      const tarotCard = await TarotCard.findById(req.params.id);
      res.json(tarotCard);
    } catch (error) {
      res.status(500).json({ message: "Cant find by Id" });
    }
    
  }
