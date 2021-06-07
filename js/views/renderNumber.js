import gameState from '../index.js';
import cards from '../cards/cards.js';

export default function renderNumber(event, element) {
  const cardMatrix = cards[`level${gameState.level}`];
  const x = +element.title.replace(/(x=)|y=\d/g, '');
  const y = +element.title.replace(/(y=)|x=\d/g, '');
  const value = +event.target.innerHTML;
  cardMatrix[x][y] = value;
  element.innerHTML = value;
}
