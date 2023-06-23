// components/CardItem.tsx
import React from 'react';

interface CardItemProps {
  card: {
    id: string;
    name: string;
    description: string;
    // Add other properties specific to your tarot card
  };
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <div className="card-item">
      <h2>{card.name}</h2>
      <p>{card.description}</p>
      {/* Render other card details as needed */}
    </div>
  );
};

export default CardItem;
