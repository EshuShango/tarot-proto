import mongoose, { Document, Schema } from "mongoose";

interface ITarotCardDocument extends Document {
  name: string;
  cardNumber: number;
  arcana: string;
  suit?: string;
}
//! How to add a new field for chatGpt

const TarotCardSchema: Schema = new Schema({
  name: { type: String, required: true },
  cardNumber: { type: Number, required: true },
  arcana: { type: String, required: true },
  suit: { type: String },
});

const TarotCard = mongoose.model<ITarotCardDocument>(
  "TarotCard",
  TarotCardSchema
);

export { TarotCard, ITarotCardDocument };

// methods of the TarotCard model
//^ Create/Sustain/Destroy methods
export const createCard = (values: Record<string, any>) =>
  new TarotCard(values).save().then((card) => card.toObject());
export const deleteCardById = (id: string) =>
  TarotCard.findByIdAndDelete({ _id: id });
export const updateCardById = (id: string, values: Record<string, any>) =>
  TarotCard.findByIdAndUpdate(id, values);
//^ Search/Find methods
export const getCards = async () => TarotCard.find();
export const getCardByArcana = (arcana: string) =>
  TarotCard.findOne({ arcana });
export const getCardByCrdNbmr = (cardNumber: number) =>
  TarotCard.findOne({ cardNumber });
export const getCardBySuit = (suit: string) => TarotCard.findOne({ suit });
export const getCardById = (id: string) => TarotCard.findById(id);



