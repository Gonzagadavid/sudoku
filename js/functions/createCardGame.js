import cards from '../cards/cards.js';
import createHtmlElement from './createHtmlElement.js';

export default function createCardGame(level) {
  const cardMatrix = cards[level];
  const cardContainer = createHtmlElement('div', { className: 'card-container' });
  cardMatrix.forEach((axleX, x) => {
    const rowCard = createHtmlElement('div', { className: 'row-card' });
    axleX.forEach((axleY, y) => {
      const colAttributes = {
        title: `x=${x} y=${y}`,
        className: 'number',
        innerHTML: axleY || '',
      };
      const col = createHtmlElement('div', colAttributes);
      rowCard.appendChild(col);
    });
    cardContainer.appendChild(rowCard);
  });
  return cardContainer;
}
