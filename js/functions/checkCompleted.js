import gameState from '../index.js';
import cards from '../cards/cards.js';

export default function checkCompleted() {
  const cardMatrix = cards[`level${gameState.level}`];
  let bool = true;
  cardMatrix.forEach((row) =>
    row.forEach((number) => {
      if (number === 0) bool = false;
    })
  );
  return bool;
}
