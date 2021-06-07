import gameState from '../index.js';

export default function clearNumber(event, element) {
  const cardMatrix = cards[`level${gameState.level}`];
  const x = +element.title.replace(/(x=)|y=\d/g, '');
  const y = +element.title.replace(/(y=)|x=\d/g, '');
  cardMatrix[x][y] = 0;
  element.innerHTML = '';
}
