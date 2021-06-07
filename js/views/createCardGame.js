import cards from '../cards/cards.js';
import createHtmlElement from '../functions/createHtmlElement.js';
import renderOptions from '../functions/renderOptions.js';
import gameState from '../index.js';

export default function createCardGame() {
  const cardMatrix = cards[`level${gameState.level}`];
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
      if (axleY === 0) col.addEventListener('click', (event) => renderOptions(event));
      rowCard.appendChild(col);
    });
    cardContainer.appendChild(rowCard);
  });
  return cardContainer;
}
