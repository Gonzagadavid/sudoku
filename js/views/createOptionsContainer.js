import createHtmlElement from '../functions/createHtmlElement.js';
import renderNumber from './renderNumber.js';
import clearNumber from './clearNumber.js';

export default function createOptionsContainer(element, options, cardMatrix) {
  const optionsContainer = createHtmlElement('div', { className: 'options-container' });
  options.forEach((number) => {
    const spanAttributes = {
      className: 'number-option',
      innerHTML: number,
    };
    const span = createHtmlElement('span', spanAttributes);
    span.addEventListener('click', (event) => renderNumber(event, element, cardMatrix));
    optionsContainer.appendChild(span);
  });
  const clearAttributes = {
    className: 'number-option',
    innerHTML: 'Limpar',
  };
  const cleanNumber = createHtmlElement('span', clearAttributes);
  cleanNumber.addEventListener('click', (event) => clearNumber(event, element, cardMatrix));
  optionsContainer.appendChild(cleanNumber);
  element.appendChild(optionsContainer);
}
