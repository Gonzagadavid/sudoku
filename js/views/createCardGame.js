import createHtmlElement from '../functions/createHtmlElement.js';
import renderOptions from '../functions/renderOptions.js';

function fillLine(axleY, y, x, board) {
  const colAttributes = { title: `x=${x} y=${y}`, className: 'number', innerHTML: axleY || '' };
  const number = createHtmlElement('div', colAttributes);
  if (axleY === 0) {
    number.addEventListener('click', (event) => renderOptions(event, board));
    number.classList.add('try');
  }
  return number;
}

function createLine(axleX, x, board) {
  const rowCard = createHtmlElement('div', { className: 'row-card' });
  axleX.forEach((axleY, y) => rowCard.appendChild(fillLine(axleY, y, x, board)));
  return rowCard;
}

export default function createCardGame(board) {
  const cardContainer = createHtmlElement('div', { className: 'card-container' });
  board.forEach((axleX, x) => cardContainer.appendChild(createLine(axleX, x, board)));
  return cardContainer;
}
