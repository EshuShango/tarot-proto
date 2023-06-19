import { ITarotCardDoc } from "../../api/models/Tarotcard";

interface cards extends ITarotCardDoc {
  name: string;
  cardNumber: number;
  arcana: string;
  suit?: string;
}

export const cards = [
  //^ MAJOR arcana:
  {
    name: "The Fool",
    cardNumber: 0,
    arcana: "Major",
  },
  {
    name: "The Magician",
    cardNumber: 1,
    arcana: "Major",
  },
  {
    name: "The High Priestess",
    cardNumber: 2,
    arcana: "Major",
  },
  {
    name: "The Empress",
    cardNumber: 3,
    arcana: "Major",
  },
  {
    name: "The Emperor",
    cardNumber: 4,
    arcana: "Major",
  },
  {
    name: "The Hierophant",
    cardNumber: 5,
    arcana: "Major",
  },
  {
    name: "The Lovers",
    cardNumber: 6,
    arcana: "Major",
  },
  {
    name: "The Chariot",
    cardNumber: 7,
    arcana: "Major",
  },
  {
    name: "Justice",
    cardNumber: 8,
    arcana: "Major",
  },
  {
    name: "The Hermit",
    cardNumber: 9,
    arcana: "Major",
  },
  {
    name: "Wheel of Fortune",
    cardNumber: 10,
    arcana: "Major",
  },
  {
    name: "Strength",
    cardNumber: 11,
    arcana: "Major",
  },
  {
    name: "The Hanged Man",
    cardNumber: 12,
    arcana: "Major",
  },
  {
    name: "Death",
    cardNumber: 13,
    arcana: "Major",
  },
  {
    name: "Temperance",
    cardNumber: 14,
    arcana: "Major",
  },
  {
    name: "The Devil",
    cardNumber: 15,
    arcana: "Major",
  },
  {
    name: "The Tower",
    cardNumber: 16,
    arcana: "Major",
  },
  {
    name: "The Star",
    cardNumber: 17,
    arcana: "Major",
  },
  {
    name: "The Moon",
    cardNumber: 18,
    arcana: "Major",
  },
  {
    name: "The Sun",
    cardNumber: 19,
    arcana: "Major",
  },
  {
    name: "Judgement",
    cardNumber: 20,
    arcana: "Major",
  },
  {
    name: "The World",
    cardNumber: 21,
    arcana: "Major",
  },

  //^ MINOR arcana:
  // Minor Arcana cards - Cups
  {
    name: "Ace of Cups",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Two of Cups",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Three of Cups",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Four of Cups",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Five of Cups",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Six of Cups",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Seven of Cups",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Eight of Cups",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Nine of Cups",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Ten of Cups",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Cups",
  },

  {
    name: "Page of Cups",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Knight of Cups",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "Queen of Cups",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Cups",
  },
  {
    name: "King of Cups",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Cups",
  },
  // Minor Arcana cards - Pentacles
  {
    name: "Ace of Pentacles",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Two of Pentacles",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Three of Pentacles",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Four of Pentacles",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Five of Pentacles",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Six of Pentacles",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Seven of Pentacles",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Eight of Pentacles",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Nine of Pentacles",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Ten of Pentacles",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Pentacles",
  },

  {
    name: "Page of Pentacles",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Knight of Pentacles",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "Queen of Pentacles",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Pentacles",
  },
  {
    name: "King of Pentacles",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Pentacles",
  },
  // Minor Arcana cards - Swords
  {
    name: "Ace of Swords",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Two of Swords",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Three of Swords",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Four of Swords",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Five of Swords",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Six of Swords",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Seven of Swords",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Eight of Swords",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Nine of Swords",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Ten of Swords",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Page of Swords",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Knight of Swords",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "Queen of Swords",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Swords",
  },
  {
    name: "King of Swords",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Swords",
  },
  // Minor Arcana cards - Wands
  {
    name: "Ace of Wands",
    cardNumber: 1,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Two of Wands",
    cardNumber: 2,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Three of Wands",
    cardNumber: 3,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Four of Wands",
    cardNumber: 4,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Five of Wands",
    cardNumber: 5,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Six of Wands",
    cardNumber: 6,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Seven of Wands",
    cardNumber: 7,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Eight of Wands",
    cardNumber: 8,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Nine of Wands",
    cardNumber: 9,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Ten of Wands",
    cardNumber: 10,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Page of Wands",
    cardNumber: 11,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Knight of Wands",
    cardNumber: 12,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "Queen of Wands",
    cardNumber: 13,
    arcana: "Minor",
    suit: "Wands",
  },
  {
    name: "King of Wands",
    cardNumber: 14,
    arcana: "Minor",
    suit: "Wands",
  },
];
