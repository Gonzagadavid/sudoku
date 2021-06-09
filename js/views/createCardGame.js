import createHtmlElement from '../functions/createHtmlElement.js';
import renderOptions from '../functions/renderOptions.js';

export default function createCardGame(card) {
  const { board } = card;
  const cardContainer = createHtmlElement('div', { className: 'card-container' });
  board.forEach((axleX, x) => {
    const rowCard = createHtmlElement('div', { className: 'row-card' });
    axleX.forEach((axleY, y) => {
      const colAttributes = {
        title: `x=${x} y=${y}`,
        className: 'number',
        innerHTML: axleY || '',
      };
      const col = createHtmlElement('div', colAttributes);
      if (axleY === 0) col.addEventListener('click', (event) => renderOptions(event, board));
      rowCard.appendChild(col);
    });
    cardContainer.appendChild(rowCard);
  });
  return cardContainer;
}
