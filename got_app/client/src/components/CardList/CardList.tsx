// components/CardList.tsx
import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';

const CardList: React.FC = () => {
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:3000/cards'); // Replace with your server URL and API endpoint
      const data = await response.json();
      setCards(data);
      setShowCards(true);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="card-list">
      <button onClick={fetchCards}>Fetch Cards</button>
      {showCards && (
        <div className="card-scroll">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardList;
