import { TarotCard, ITarotCardDoc, getCards } from "../../api/models/Tarotcard";
import { tarotCardSymbols } from "./cardDescriptions";

export interface CardWithSymbols extends ITarotCardDoc {
  symbols: string[];
  description: string;
}
export const fetchCardsWithSymbols = async (): Promise<CardWithSymbols[]> => {
  const tarotCards = await getCards();
  const cardsWithSymbols: CardWithSymbols[] = tarotCards.map((card: ITarotCardDoc) => {
    const cardSymbol = tarotCardSymbols.find(symbol => symbol.name === card.name);

    if (!cardSymbol) {
      throw new Error(`No symbol found for card: ${card.name}`);
    }

    return {
      ...card,
      symbols: cardSymbol.symbols,
      description: cardSymbol.description,
    } as CardWithSymbols;
  });

  return cardsWithSymbols;
};