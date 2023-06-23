// components/CardList.tsx
import React from 'react';
import CardItem from './CardItem';

const CardList: React.FC = () => {
  const cards = [
    // Array of tarot cards obtained from API or local state
    // Each card should have properties like name, description, etc.
  ];

  return (
    <div className="card-list">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
