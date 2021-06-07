import checkCompleted from '../functions/checkCompleted.js';
import nextLevel from '../functions/nextLevel.js';

export default function renderNumber(event, element, cardMatrix) {
  const x = +element.title.replace(/(x=)|y=\d/g, '');
  const y = +element.title.replace(/(y=)|x=\d/g, '');
  const value = +event.target.innerHTML;
  cardMatrix[x][y] = value;
  element.innerHTML = value;
  if (checkCompleted(cardMatrix)) nextLevel();
}
