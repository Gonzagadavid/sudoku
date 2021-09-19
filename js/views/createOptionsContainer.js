import createHtmlElement from '../functions/createHtmlElement.js';
import renderNumber from './renderNumber.js';
import clearNumber from './clearNumber.js';

function createSpan(number, optionsContainer, element, board) {
  const spanAttributes = { className: 'number-option', innerHTML: number };
  const span = createHtmlElement('span', spanAttributes);
  span.addEventListener('click', (event) => renderNumber(event, element, board));
  optionsContainer.appendChild(span);
}

function createContainer(options, element, board) {
  const optionsContainer = createHtmlElement('div', { className: 'options-container' });
  options.forEach((number) => createSpan(number, optionsContainer, element, board));
  return optionsContainer;
}

export default function createOptionsContainer(element, options, board, y) {
  const optionsContainer = createContainer(options, element, board);
  if (y < 3) optionsContainer.classList.add('left');
  const clearAttributes = { className: 'number-option', innerHTML: 'Limpar' };
  const cleanNumber = createHtmlElement('span', clearAttributes);
  cleanNumber.addEventListener('click', (event) => clearNumber(event, element, board));
  optionsContainer.appendChild(cleanNumber);
  element.appendChild(optionsContainer);
}
