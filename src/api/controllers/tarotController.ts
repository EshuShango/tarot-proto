import express, { Request, Response, Router } from "express";
import {User} from "../models/User"
import {TarotCard} from "../models/Tarotcard"


  export const getTarotCards = async (req: Request, res: Response) => {
    try {
     
      
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
      
    }
  }

  export const getSingleCard = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ message: "Cant find by Id" });
    }
    
  }
  export const updateTarotCard = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ message: "Cant update by Id" });
    }
  }
  export const deleteTarotCard = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ message: "Cant delete by Id" });
    }
  }
  export const createTarotCard = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      res.status(500).json({ message: "Cant create a card" });
    }
  }
