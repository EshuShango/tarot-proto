import { ITarotCardDocument } from "../../api/models/Tarotcard";

interface cards extends ITarotCardDocument {
  name: string;
  cardNumber: number;
  arcana: string;
  suit?: string ;
}

export const cards = [
  // Majors
  {
      "name": "The Fool",
      "cardNumber": 0,
      "arcana": "Major"
  },
  {
      "name": "The Magician",
      "cardNumber": 1,
      "arcana": "Major"
  },
  {
      "name": "The High Priestess",
      "cardNumber": 2,
      "arcana": "Major"
  },
  {
      "name": "The Empress",
      "cardNumber": 3,
      "arcana": "Major"
  },
  {
      "name": "The Emperor",
      "cardNumber": 4,
      "arcana": "Major"
  },
  {
      "name": "The Hierophant",
      "cardNumber": 5,
      "arcana": "Major"
  },
  {
      "name": "The Lovers",
      "cardNumber": 6,
      "arcana": "Major"
  },
  {
      "name": "The Chariot",
      "cardNumber": 7,
      "arcana": "Major"
  },
  {
      "name": "Justice",
      "cardNumber": 8,
      "arcana": "Major"
  },
  {
      "name": "The Hermit",
      "cardNumber": 9,
      "arcana": "Major"
  },
  {
      "name": "Wheel of Fortune",
      "cardNumber": 10,
      "arcana": "Major"
  },
  {
      "name": "Strength",
      "cardNumber": 11,
      "arcana": "Major"
  },
  {
      "name": "The Hanged Man",
      "cardNumber": 12,
      "arcana": "Major"
  },
  {
      "name": "Death",
      "cardNumber": 13,
      "arcana": "Major"
  },
  {
      "name": "Temperance",
      "cardNumber": 14,
      "arcana": "Major"
  },
  {
      "name": "The Devil",
      "cardNumber": 15,
      "arcana": "Major"
  },
  {
      "name": "The Tower",
      "cardNumber": 16,
      "arcana": "Major"
  },
  {
      "name": "The Star",
      "cardNumber": 17,
      "arcana": "Major"
  },
  {
      "name": "The Moon",
      "cardNumber": 18,
      "arcana": "Major"
  },
  {
      "name": "The Sun",
      "cardNumber": 19,
      "arcana": "Major"
  },
  {
      "name": "Judgement",
      "cardNumber": 20,
      "arcana": "Major"
  },
  {
      "name": "The World",
      "cardNumber": 21,
      "arcana": "Major"
  },
  // Minor Arcana cards - Cups
{
  "name": "Ace of Cups",
  "cardNumber": 1,
  "arcana": "Minor",
  "suit": "Cups"
},
{
  "name": "Two of Cups",
  "cardNumber": 2,
  "arcana": "Minor",
  "suit": "Cups"
},
// ... continue with Three of Cups, Four of Cups, etc. until Ten of Cups
{
  "name": "Page of Cups",
  "cardNumber": 11,
  "arcana": "Minor",
  "suit": "Cups"
},
{
  "name": "Knight of Cups",
  "cardNumber": 12,
  "arcana": "Minor",
  "suit": "Cups"
},
{
  "name": "Queen of Cups",
  "cardNumber": 13,
  "arcana": "Minor",
  "suit": "Cups"
},
{
  "name": "King of Cups",
  "cardNumber": 14,
  "arcana": "Minor",
  "suit": "Cups"
},
// Minor Arcana cards - Pentacles
{
  "name": "Ace of Pentacles",
  "cardNumber": 1,
  "arcana": "Minor",
  "suit": "Pentacles"
},
{
  "name": "Two of Pentacles",
  "cardNumber": 2,
  "arcana": "Minor",
  "suit": "Pentacles"
},
// ... continue with Three of Pentacles, Four of Pentacles, etc. until Ten of Pentacles
{
  "name": "Page of Pentacles",
  "cardNumber": 11,
  "arcana": "Minor",
  "suit": "Pentacles"
},
{
  "name": "Knight of Pentacles",
  "cardNumber": 12,
  "arcana": "Minor",
  "suit": "Pentacles"
},
{
  "name": "Queen of Pentacles",
  "cardNumber": 13,
  "arcana": "Minor",
  "suit": "Pentacles"
},
{
  "name": "King of Pentacles",
  "cardNumber": 14,
  "arcana": "Minor",
  "suit": "Pentacles"
},
// Minor Arcana cards - Swords
{
  "name": "Ace of Swords",
  "cardNumber": 1,
  "arcana": "Minor",
  "suit": "Swords"
},
{
  "name": "Two of Swords",
  "cardNumber": 2,
  "arcana": "Minor",
  "suit": "Swords"
},
// ... continue with Three of Swords, Four of Swords, etc. until Ten of Swords
{
  "name": "Page of Swords",
  "cardNumber": 11,
  "arcana": "Minor",
  "suit": "Swords"
},
{
  "name": "Knight of Swords",
  "cardNumber": 12,
  "arcana": "Minor",
  "suit": "Swords"
},
{
  "name": "Queen of Swords",
  "cardNumber": 13,
  "arcana": "Minor",
  "suit": "Swords"
},
{
  "name": "King of Swords",
  "cardNumber": 14,
  "arcana": "Minor",
  "suit": "Swords"
},
// Minor Arcana cards - Wands


]
