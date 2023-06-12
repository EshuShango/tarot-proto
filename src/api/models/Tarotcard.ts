import mongoose, { Document, Schema } from "mongoose";

interface ITarotCardDocument extends Document {
  name: string;
  number: number;
  arcana: string;
  suit?: string;
}
//! How to add a new field for chatGpt


const TarotCardSchema: Schema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  arcana: { type: String, required: true },
  suit: { type: String },
});

const TarotCard = mongoose.model<ITarotCardDocument>(
  "TarotCard",
  TarotCardSchema 
);

export { TarotCard, ITarotCardDocument };
