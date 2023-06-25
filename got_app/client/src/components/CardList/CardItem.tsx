// components/CardItem.tsx
import React from "react";

interface CardItemProps {
  card: {
    id: string;
    name: string;
    description: string;
    arcana: number;
    cardNumber: number;
    // Add other properties specific to your tarot card
  };
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <div className="card-item">
      <h2>{card.name}</h2> 
      <h3>{card.arcana}</h3>
      <h4>{card.cardNumber}</h4>
      <p>{card.description}</p>
      {/* Render other card details as needed */}
    </div>
  );
};

export default CardItem;
