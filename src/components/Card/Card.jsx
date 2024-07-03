import { useState } from 'react';
import './Card.css';

export default function Card({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(question.length);
  const cardContainer = () => {
    return (
      <>
        <div className="card__conteiner">
          <p className="card__question">{question}</p>
          <botton
            className={`card__switch ${
              isOpen ? 'card__switch_cross' : 'card__switch_plus'
            }`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></botton>
        </div>
        {isOpen && <p className="card__answer">{answer}</p>}
      </>
    );
  };

  return (
    <div className={`card ${question.length === 0 && 'card_empty'}`}>
      {question.length > 0 && cardContainer()}
    </div>
  );
}
