// seedCards.js
import { cards } from "./seedData";
import { TarotCard } from "../../api/models/Tarotcard";

export const seedCards = async () => {
  try {
    const count = await TarotCard.countDocuments({});
    if (count > 0) {
      console.log("Database already seeded");
      return;
    }
    await TarotCard.insertMany(cards);
    console.log("Cards added successfully");
  } catch (error) {
    console.error("Could not add cards", error);
  }
};

// export const seedCards = async () => {
//   try {
//     await TarotCard.insertMany(cards);
//     console.log("Cards added successfully");
//   } catch (error) {
//     console.error("Could not add cards", error);
//   }
// };
