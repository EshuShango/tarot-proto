import express, { Request, Response, Router } from "express";
import {User} from "../models/User"
import {TarotCard} from "../models/Tarotcard"




/* 
When user clicks the "pull"-btn, 
    then sends a request to the server connecting to the Database(MongoDB)
    the Server Gets the cards based from the Schema-Model
    then the server sends the data back to the client
    
    */